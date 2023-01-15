import { app } from "../libs/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadProductPhoto = async (photo) => {
  const storageImage = getStorage(app);
  const imagesRef = ref(storageImage, `products/${photo.name}`);

  try {
    const upload = await uploadBytes(imagesRef, photo);
    const ref = await getDownloadURL(imagesRef);
    if (ref) {
      return ref;
    }
  } catch (err) {
    console.log(err, err.code, err.message);
    alert("error subiendo photo del producto ❌");
  }
};
