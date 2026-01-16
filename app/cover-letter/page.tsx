/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useState, useEffect } from "react";

type FormData = {
  name: string;
  position: string;
  company: string;
  phone: string;
  email: string;
  skills: string;
  experience: string;
};

const CoverLetterForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    position: "",
    company: "",
    phone: "",
    email: "",
    skills: "",
    experience: "",
  });

  const [coverLetter, setCoverLetter] = useState<string>("");
  const [typedLetter, setTypedLetter] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generateCoverLetter = () => {
    const { name, position, company, phone, email, skills, experience } =
      formData;
    const template = `
${name}
${phone}
${email}
[Today’s Date]

Hiring Manager
${company}

Dear Hiring Manager,

I am writing to express my interest in the ${position} at ${company}, as advertised on LinkedIn. With a strong background in ${skills}, I am confident in my ability to contribute effectively to your team.

I am currently pursuing a Bachelor's degree in Electronics and Communication Engineering, where I have developed a deep interest in software development. My passion for creating visually appealing and functional web applications led me to complete relevant courses and independently build several projects. Although I may not have formal work experience, my problem-solving abilities, effective time management, and eagerness to learn new technologies have been key in overcoming challenges and enhancing my skills.

I am particularly drawn to this role because of the innovative environment at ${company} and the opportunity to work on cutting-edge web technologies. I am eager to contribute my skills, continue learning, and grow within your team.

Thank you for considering my application. Please find my resume attached for your review. I look forward to your response and can be reached at ${phone} (WhatsApp) or via email at ${email}.

Sincerely,

${name}
Aspiring Frontend Developer
    `;

    setCoverLetter(template);
    setIsTyping(true);
    setTypedLetter("");
  };

  useEffect(() => {
    if (isTyping && coverLetter) {
      const timeout = setTimeout(() => {
        setTypedLetter(coverLetter.slice(0, typedLetter.length + 1));
      }, 10);

      if (typedLetter === coverLetter) {
        setIsTyping(false);
      }

      return () => clearTimeout(timeout);
    }
  }, [typedLetter, coverLetter, isTyping]);

  const handleCopy = () => {
    navigator.clipboard.writeText(coverLetter);
    alert("Cover letter copied to clipboard!");
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
    setIsTyping(false);
    setTypedLetter(coverLetter);
  };

  return (
    <div className="flex flex-col lg:flex-row p-5 max-w-7xl mx-auto space-y-6 my-20 lg:space-y-0 lg:space-x-10">
      {/* Left side - Input Fields */}
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-5">Cover Letter Generator</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Your Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mt-1 border  border-gray-300 rounded"
              placeholder="e.g., Tasmim Rahman"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Position Applied For:
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded"
              placeholder="e.g., Junior Frontend Developer"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Company Name:
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded"
              placeholder="e.g., Digital Solutions"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Phone Number:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded"
              placeholder="e.g., +8801701954548"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded"
              placeholder="e.g., tasmimrahman29@gmail.com"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Key Skills:
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded"
              placeholder="e.g., TypeScript, React.js, Next.js, Node.js"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Relevant Experience:
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded"
              rows={4}
              placeholder="Briefly describe your relevant experience"
            />
          </label>
        </div>
        <button
          onClick={generateCoverLetter}
          className=" text-white py-2 px-4 rounded bg-[#f28647]"
        >
          Generate Cover Letter
        </button>
      </div>

      {/* Right side - Generated Cover Letter */}
      <div className="lg:w-1/2">
        {coverLetter && (
          <div
            style={{ backgroundColor: "#f4f6ff" }}
            className="p-5  rounded-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Generated Cover Letter:</h3>
              <div>
                <button
                  onClick={handleCopy}
                  className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 mr-2"
                >
                  Copy
                </button>
                <button
                  onClick={handleEdit}
                  className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600"
                >
                  {isEditing ? "Save" : "Edit"}
                </button>
              </div>
            </div>
            {isEditing ? (
              <textarea
                className="w-full p-2 border rounded"
                rows={10}
                value={typedLetter}
                onChange={(e) => setTypedLetter(e.target.value)}
              />
            ) : (
              <pre className="whitespace-pre-wrap text-sm leading-6">
                {typedLetter}
              </pre>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoverLetterForm;
