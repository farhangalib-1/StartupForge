"use client";

import React, { useState } from "react";
import { Form, TextField, Label, Input, TextArea, Select, ListBox, Button } from "@heroui/react";
import { uploadImageToImgBB } from "@/lib/actions/imageUpload";
import { createStartup } from "@/lib/actions/StartupPost";
import { authClient } from "@/lib/auth-client";


export default function CreateStartupForm() {

   const { data: session } = authClient.useSession();
   const email = session?.user?.email
  const [startupName, setStartupName] = useState("");
  const [industry, setIndustry] = useState("");
  const [fundingStage, setFundingStage] = useState("");
  const [description, setDescription] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const handleLogoChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const displayUrl = await uploadImageToImgBB(file);
      if (displayUrl) {
        setLogoUrl(displayUrl);
      } else {
        alert("Failed to extract display URL from ImgBB response.");
      }
    } catch (error) {
      console.error("Error with external ImgBB upload:", error);
      alert("An error occurred during file upload.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const submissionPayload = {
      startupName,
      industry,
      fundingStage,
      description,
      logoUrl,
      email 
    };
    const result  = await createStartup(submissionPayload) 
    console.log("Final payload submitted:", result);
    alert("Startup created successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-50/60 p-6 font-sans">
      <div className="w-full max-w-[600px] bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
        
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-8">
          <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800 tracking-tight">Create Startup</h2>
            <p className="text-xs text-slate-400 mt-0.5">Bring your vision to the ecosystem.</p>
          </div>
        </div>

        <Form onSubmit={handleSubmit} className="space-y-6">
          
          <TextField isRequired>
            <Label className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 block">
              Startup Name <span className="text-indigo-500">*</span>
            </Label>
            <Input
              type="text"
              placeholder="e.g. TechNova"
              value={startupName}
              onChange={(e) => setStartupName(e.target.value)}
              className="w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200"
            />
          </TextField>

          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 block">Logo Image</span>
            <div className="flex gap-3 items-center">

              <div className="flex items-center justify-center w-12 h-12 rounded-xl border border-slate-200 bg-slate-50 text-slate-400 shrink-0 overflow-hidden relative">
                {logoUrl ? (
                  <img src={logoUrl} alt="Startup Logo" className="w-full h-full object-cover" />
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Z" />
                  </svg>
                )}
              </div>
              
    
              <label className="flex-1 flex items-center justify-center px-4 py-3 border border-dashed border-indigo-200 bg-indigo-50/20 hover:bg-indigo-50/50 text-indigo-600 font-medium text-sm rounded-xl cursor-pointer transition-colors duration-200 text-center disabled:opacity-50">
                <span>{isUploading ? "Uploading to Cloud..." : logoUrl ? "Change Logo" : "Upload Logo"}</span>
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleLogoChange} 
                  disabled={isUploading}
                />
              </label>
            </div>
          </div>

        
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Industry */}
          <Select
  placeholder="Select Industry"
  value={industry}
  onChange={setIndustry}
>
  <Label>Industry</Label>

  <Select.Trigger>
    <Select.Value />
    <Select.Indicator />
  </Select.Trigger>

  <Select.Popover>
    <ListBox>
      <ListBox.Item id="Technology">
        Technology
      </ListBox.Item>

      <ListBox.Item id="Healthcare">
        Healthcare
      </ListBox.Item>

      <ListBox.Item id="Finance">
        Finance
      </ListBox.Item>

      <ListBox.Item id="Education">
        Education
      </ListBox.Item>
    </ListBox>
  </Select.Popover>
</Select>

           
         <Select
  placeholder="Select Funding Stage"
  value={fundingStage}
  onChange={setFundingStage}
>
  <Label>Funding Stage</Label>

  <Select.Trigger>
    <Select.Value />
    <Select.Indicator />
  </Select.Trigger>

  <Select.Popover>
    <ListBox>
      <ListBox.Item id="Seed">
        Seed
      </ListBox.Item>

      <ListBox.Item id="Series A">
        Series A
      </ListBox.Item>

      <ListBox.Item id="Series B">
        Series B
      </ListBox.Item>

      <ListBox.Item id="Series C">
        Series C
      </ListBox.Item>
    </ListBox>
  </Select.Popover>
</Select>
          </div>

    
          <TextField isRequired>
            <Label className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 block">
              Description <span className="text-indigo-500">*</span>
            </Label>
            <TextArea
              placeholder="Describe your startup, mission, and what you're building..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200 min-h-[110px]"
            />
          </TextField>

          <Button
            type="submit"
            className="w-full !mt-8 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 px-4 rounded-xl shadow-[0_4px_12px_rgba(99,102,241,0.2)] hover:shadow-[0_4px_20px_rgba(99,102,241,0.35)] transition-all duration-200 active:scale-[0.98]"
          >
            Create Startup
          </Button>

        </Form>
      </div>
    </div>
  );
}