import { UploadClient } from "@uploadcare/upload-client";

const client = new UploadClient({ publicKey: import.meta.env.VITE_UPLOADCARE_PUBLIC_KEY })

export function uploadFile(file: string) {
  try {
    const result = client
      .uploadFile(file)
      .then(file => file.uuid)
  
    return result
  } catch(err) {
    throw new Error("Ocurrió un error en subir la imagen.")
  }
}