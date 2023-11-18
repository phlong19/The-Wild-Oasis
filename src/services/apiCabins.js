import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function deleteCabin(id) {
  let { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin?.image?.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : supabaseUrl + "/storage/v1/object/public/cabin-images/" + imageName;

  let query = supabase.from("cabins");

  // insert data
  // if no id
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // has id => edit
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Could not created new / edited cabin");
  }

  // early return so no data upload
  if (hasImagePath && id) return data;

  // upload image
  const { error: uploadError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // delete new added data if upload image fail
  if (uploadError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error("Cabin image upload failed and the cabin was not created");
  }

  return data;
}
