"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { updateProfile } from "@/lib/actions/GetData";
import { authClient } from "@/lib/auth-client";

import {
  Form,
  TextField,
  Label,
  Input,
  TextArea,
  Button,
} from "@heroui/react";

import {
  User,
  Mail,
  ImageIcon,
  Tag,
  FileText,
  Save,
} from "lucide-react";

export default function CollaboratorProfileForm() {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [skills, setSkills] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    if (session?.user) {
      setName(session?.user?.name || "");
      setEmail(session?.user?.email || "");
      setImage(session?.user?.image || "");

      // If these fields don't exist yet, they'll remain empty.
      setSkills(session?.user?.skills?.join(", ") || "");
      setBio(session?.user?.bio || "");
    }
  }, [session]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      image,
      skills: skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),
      bio,
    };

    const result = await updateProfile(session?.user?.id, data);

    if (result.modifiedCount > 0) {
      alert("Profile updated successfully!");
      router.push("/dashboard/Collaborator")
    }
  };

  if (isPending) {
    return (
      <div className="py-20 text-center text-default-500">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="flex justify-center py-10 px-4">
      <Form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl"
      >
        <h1 className="text-center text-4xl font-bold mb-6">
          Edit Your Profile
        </h1>

        <div className="w-full rounded-3xl border border-primary-200 bg-default-50 p-8 shadow-sm space-y-6">

          {/* Name */}
          <TextField>
            <Label className="flex items-center gap-2 font-semibold">
              <User size={18} />
              Full Name
            </Label>

            <Input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="bordered"
              radius="xl"
              size="lg"
            />
          </TextField>

          {/* Email */}
          <TextField>
            <Label className="flex items-center gap-2 font-semibold">
              <Mail size={18} />
              Email
            </Label>

            <Input
              value={email}
              readOnly
              variant="bordered"
              radius="xl"
              size="lg"
            />
          </TextField>

          {/* Image */}
          <TextField>
            <Label className="flex items-center gap-2 font-semibold">
              <ImageIcon size={18} />
              Profile Image URL
            </Label>

            <Input
              name="image"
              value={image}
             onChange={(e) => setImage(e.target.value)}
              variant="bordered"
              radius="xl"
              size="lg"
            />
          </TextField>

          {/* Skills */}
          <TextField>
            <Label className="flex items-center gap-2 font-semibold">
              <Tag size={18} />
              Skills
              <span className="text-default-500 text-sm">
                (comma-separated)
              </span>
            </Label>

            <Input
              name="skills"
              value={skills}
             onChange={(e) => setSkills(e.target.value)}
              placeholder="React, Node.js, MongoDB"
              variant="bordered"
              radius="xl"
              size="lg"
            />
          </TextField>

          {/* Bio */}
          <TextField>
            <Label className="flex items-center gap-2 font-semibold">
              <FileText size={18} />
              Bio
            </Label>

            <TextArea
              name="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Tell us about yourself..."
              rows={6}
              variant="bordered"
              radius="xl"
            />
          </TextField>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full h-14 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white text-lg font-semibold"
          >
            <Save size={20} />
            Save Profile
          </Button>

        </div>
      </Form>
    </div>
  );
}