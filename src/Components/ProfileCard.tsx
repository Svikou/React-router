import React from "react";

type ProfileCardProps = {
  name: string;
  username: string;
  description: string;
  imageUrl: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  username,
  description,
  imageUrl,
}) => {
  return (
    <div className="max-w-sm mx-auto p-4 bg-white rounded-lg shadow-lg border">
      {/* Image */}
      <div className="flex justify-center mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
        />
      </div>

      {/* User Info */}
      <div className="text-center">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-blue-500">@{username}</p>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Edit
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
