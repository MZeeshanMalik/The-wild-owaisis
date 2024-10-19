import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabin").select("*");
  if (error) {
    console.log(error);
    throw new Error("cabins could not be loaded");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // create / Edit cabin
  let query = supabase.from("cabin");
  // create cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // Edit cabin

  if (id)
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();

  const { data, error } = await query.select();

  if (error) {
    console.log(error);
    throw new Error("cabins could not be Created");
  }
  //2 uploading image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  //3 delete cabin if there was an error on uploading the image
  if (storageError) {
    await supabase.from("cabin").delete().eq("id", data[0].id);
    console.log(storageError);
    throw new Error(
      "cabins imgae could not be uploaded and cabin could not be created"
    );
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabin").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("cabins could not be Deleted");
  }
  return data;
}
