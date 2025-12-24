import React, { useEffect, useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaTimes, FaSave, FaGithub, FaLink, FaSearch, FaImage, FaList, FaUpload } from 'react-icons/fa';
import { addPro, delPro, getAll, updatePro } from '../server/serviceapi';

const AdminDashboard = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [projects, setProjects] = useState([]);

  // New State for File Upload
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  // --- API HELPER FUNCTIONS ---

  const loaddata = async () => {
    try {
      const res = await getAll();
      setProjects(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loaddata();
  }, []);

  // Form State Structure
  const initialFormState = {
    _id: null,
    title: '',
    description: '',
    image: '', // Stores URL for preview/fallback
    github: '',
    demo: '',
    features: '',
    stack: ''
  };

  const [formData, setFormData] = useState(initialFormState);

  // --- HANDLERS ---

  const handleAddNew = () => {
    setFormData(initialFormState);
    setFile(null);
    setPreview("");
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleEdit = (project) => {
    setFormData({
      ...project,
      stack: Array.isArray(project.stack) ? project.stack.join(', ') : project.stack,
      features: Array.isArray(project.features) ? project.features.join(', ') : project.features
    });
    // Set existing image as preview, but file is null (unless they change it)
    setPreview(project.image);
    setFile(null);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile)); // Show local preview
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await delPro(id);
        alert("Project deleted");
        loaddata();
      } catch (err) {
        console.log(err);
        alert("Failed to delete data");
      }
    }
  };

  // --- SAVE HANDLER (FormData Logic) ---
  const handleSave = async (e) => {
    e.preventDefault();

    // 1. Create FormData Object (Required for Multer)
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('github', formData.github);
    data.append('demo', formData.demo);

    // 2. Handle Arrays (Stack & Features)
    // We split string by comma and append each item individually so Backend receives an array
    const stackArray = formData.stack.split(',').map(s => s.trim()).filter(s => s);
    stackArray.forEach(item => data.append('stack', item));

    const featuresArray = formData.features.split(',').map(s => s.trim()).filter(s => s);
    featuresArray.forEach(item => data.append('features', item));

    // 3. Handle Image
    if (file) {
      data.append('image', file); // Send new file
    } else {
      data.append('image', formData.image); // Send old URL if no new file
    }

    try {
      if (isEditing) {
        await updatePro(formData._id, data);
        alert("Project Updated Successfully!");
      } else {
        await addPro(data);
        alert("Project Added Successfully!");
      }
      loaddata();
      setIsModalOpen(false);
    } catch (err) {
      console.log("Failed to save", err);
      alert("Failed to save project. Check console.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans relative overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-96 bg-cyan-900/10 blur-[120px] pointer-events-none"></div>

      {/* --- TOP BAR --- */}
      <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center text-white font-bold">A</div>
          <h1 className="text-xl font-bold text-white tracking-tight">Admin<span className="text-cyan-400">Panel</span></h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-500">Welcome, Admin</span>
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700"></div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 relative z-10">

        {/* --- STATS & ACTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-slate-500 text-sm font-medium mb-1">Total Projects</h3>
            <p className="text-3xl font-bold text-white">{projects.length}</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center justify-between cursor-pointer hover:border-cyan-500/50 transition-colors" onClick={handleAddNew}>
            <div>
              <h3 className="text-slate-500 text-sm font-medium mb-1">Quick Action</h3>
              <p className="text-lg font-bold text-white">Add New Project</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center text-white">
              <FaPlus />
            </div>
          </div>
        </div>

        {/* --- PROJECTS TABLE --- */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-6 border-b border-slate-800 flex flex-col md:flex-row justify-between gap-4">
            <h2 className="text-xl font-bold text-white">Manage Projects</h2>
            <button onClick={handleAddNew} className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-bold rounded-lg transition-colors">
              <FaPlus /> Add Project
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-950/50 text-slate-400 text-sm uppercase tracking-wider border-b border-slate-800">
                  <th className="px-6 py-4 font-medium">Project</th>
                  <th className="px-6 py-4 font-medium">Stack</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {projects.map((project) => (
                  <tr key={project._id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-slate-800 overflow-hidden border border-slate-700 flex-shrink-0">
                          {/* Image Fallback */}
                          <img
                            src={`https://protfoliodb.onrender.com/${project.image}`}
                            alt={project.title} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-bold text-white text-sm">{project.title}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1 max-w-[200px]">
                        {Array.isArray(project.stack) && project.stack.slice(0, 3).map((t, i) => (
                          <span key={i} className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-400 border border-slate-700">{t}</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button onClick={() => handleEdit(project)} className="p-2 rounded bg-slate-800 text-slate-400 hover:text-white hover:bg-cyan-600 transition-all">
                          <FaEdit size={14} />
                        </button>
                        <button onClick={() => handleDelete(project._id)} className="p-2 rounded bg-slate-800 text-slate-400 hover:text-white hover:bg-red-600 transition-all">
                          <FaTrash size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* --- MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl shadow-2xl relative my-8">
            <div className="flex justify-between items-center p-6 border-b border-slate-800 sticky top-0 bg-slate-900 z-10 rounded-t-2xl">
              <h2 className="text-xl font-bold text-white">{isEditing ? 'Edit Project' : 'Add New Project'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white"><FaTimes size={20} /></button>
            </div>

            <form onSubmit={handleSave} className="p-6 space-y-6">

              {/* IMAGE UPLOAD SECTION */}
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-2">Project Image</label>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-slate-800 rounded-lg border border-slate-700 overflow-hidden flex-shrink-0">
                    {preview ? (
                      <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-600">
                        <FaImage size={24} />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      type="file"
                      name="image"
                      onChange={handleFileChange}
                      accept="image/*"
                      className="block w-full text-sm text-slate-400
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-lg file:border-0
                                file:text-sm file:font-semibold
                                file:bg-cyan-600 file:text-white
                                hover:file:bg-cyan-500
                                cursor-pointer"
                    />
                    <p className="text-xs text-slate-500 mt-2">Recommended: 800x600px, JPG/PNG</p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-1">Project Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required className="w-full px-4 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500" />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-1">Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} rows="3" required className="w-full px-4 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 resize-none" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 uppercase mb-1">GitHub Repository</label>
                  <input type="url" name="github" value={formData.github} onChange={handleChange} className="w-full px-4 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 uppercase mb-1">Live Demo URL</label>
                  <input type="url" name="demo" value={formData.demo} onChange={handleChange} className="w-full px-4 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-1">Tech Stack (comma separated)</label>
                <input type="text" name="stack" value={formData.stack} onChange={handleChange} className="w-full px-4 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500" placeholder="React, Node.js..." />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-1">Key Features (comma separated)</label>
                <textarea name="features" value={formData.features} onChange={handleChange} rows="2" className="w-full px-4 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 resize-none" placeholder="Feature 1, Feature 2..." />
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-slate-800">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-sm font-bold text-slate-400 hover:text-white transition-colors">Cancel</button>
                <button type="submit" className="flex items-center gap-2 px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-bold rounded-lg transition-all">
                  <FaSave /> {isEditing ? 'Update' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;