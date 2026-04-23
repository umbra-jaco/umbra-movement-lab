// A simple helper to map your R2 taxonomy
export function getAsset(path) {
    const bucketUrl = process.env.NEXT_PUBLIC_R2_BUCKET_URL;
    // Ensure we don't end up with double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    return `${bucketUrl}/${cleanPath}`;
}