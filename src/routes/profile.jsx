import React, { useRef, useState } from "react";
import { Camera, User, Trash2 } from "lucide-react";

const Profile = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const userEmail = currentUser?.email || "user@gmail.com";
    const [profileImage, setProfileImage] = useState(
        localStorage.getItem("profileImage") || ""
    );
    const fileInputRef = useRef(null);

    const firstLetter = userEmail.charAt(0).toUpperCase();
    const username = userEmail.split("@")[0];

    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onloadend = () => {
            localStorage.setItem("profileImage", reader.result);
            setProfileImage(reader.result);

            window.dispatchEvent(new Event("profileImageUpdated"));

            // Important: input reset
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        };

        reader.readAsDataURL(file);
    };

    const handleDeleteImage = (e) => {
        e.stopPropagation();

        localStorage.removeItem("profileImage");
        setProfileImage("");

        window.dispatchEvent(new Event("profileImageUpdated"));

        // Important: input reset
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className="min-h-screen bg-[#121212] text-white -m-3">
            <div className="bg-gradient-to-b from-[#535353] to-[#2b2b2b] px-6 py-10">
                <div className="flex flex-col md:flex-row md:items-end gap-6">
                    <div className="relative w-44 h-44 md:w-56 md:h-56 group">
                        {/* Main profile circle */}
                        <div className="w-full h-full rounded-full bg-[#1f1f1f] shadow-2xl flex items-center justify-center overflow-hidden">
                            {profileImage ? (
                                <img
                                    src={profileImage}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <User size={95} className="text-[#8f8f8f]" />
                            )}

                            {/* Upload overlay */}
                            <label className="absolute inset-0 rounded-full bg-black/60 hidden group-hover:flex flex-col items-center justify-center cursor-pointer">
                                <Camera size={32} />
                                <span className="text-sm font-bold mt-2">
                                    {profileImage ? "Change photo" : "Choose photo"}
                                </span>

                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                />
                            </label>
                        </div>

                        {/* Delete icon outside circle */}
                        {profileImage && (
                            <button
                                onClick={handleDeleteImage}
                                className="absolute -bottom-3 right-0 hidden group-hover:flex w-11 h-11 rounded-full bg-black/90 hover:bg-[#e91429] items-center justify-center z-30 shadow-xl border border-white/10"
                                title="Remove photo"
                            >
                                <Trash2 size={20} className="text-white" />
                            </button>
                        )}
                    </div>

                    <div className="pb-4">
                        <p className="text-sm font-bold mb-3">Profile</p>

                        <h1 className="text-5xl md:text-8xl font-black tracking-tight">
                            {firstLetter}_{username}
                        </h1>

                        <p className="text-sm text-[#d5d5d5] mt-5">{userEmail}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;