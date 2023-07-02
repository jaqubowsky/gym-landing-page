interface Resource {
  asset_id: string;
  public_id: string;
  folder: string;
  filename: string;
  format: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: string;
  uploaded_at: string;
  bytes: number;
  backup_bytes: number;
  width: number;
  height: number;
  aspect_ratio: number;
  pixels: number;
  url: string;
  secure_url: string;
  status: string;
  access_mode: string;
  access_control: null | any;
  etag: string;
  created_by: { access_key: string };
  uploaded_by: { access_key: string };
}

export async function search(options: { [key: string]: string }) {
  const params = {
    ...options,
  };

  const paramString = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join("&");

  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/search?${paramString}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY +
            ":" +
            process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET
        ).toString("base64")}`,
      },
      next: {
        revalidate: 60, // 1 hour in seconds,
      },
    }
  ).then((res) => res.json());

  return results;
}

export function mapImageResources(resources: Resource[]) {
  return resources.map((resource: Resource) => {
    const { asset_id, public_id, secure_url, width, height } = resource;

    return {
      id: asset_id,
      src: public_id,
      image: secure_url,
      width,
      height,
    };
  });
}
