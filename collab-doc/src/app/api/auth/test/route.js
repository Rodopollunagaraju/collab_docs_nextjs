import dbConnect from "@/lib/dbConnect";

export default async function handler(req, res) {
  try {
    await dbConnect();
    res.status(200).json({ message: "DB connected successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
