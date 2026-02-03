import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Submit.css';

const Submit = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    businessAddress: '',
    phoneNumber: '',
    email: '',
    businessCategory: '',
    description: '',
    hours: '',
    website: '',
    terms: false
  });
  const [errors, setErrors] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [logoFiles, setLogoFiles] = useState([]);
  const [photoFiles, setPhotoFiles] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  
  const totalSteps = 4;
  const dropdownRef = useRef(null);
  
  // Business type options
  const businessTypeOptions = [
    { value: 'restaurant', label: 'Restaurant / Cafe', icon: 'fas fa-utensils' },
    { value: 'retail', label: 'Retail Store', icon: 'fas fa-shopping-bag' },
    { value: 'service', label: 'Professional Service', icon: 'fas fa-briefcase' },
    { value: 'entertainment', label: 'Entertainment', icon: 'fas fa-film' },
    { value: 'health', label: 'Health & Wellness', icon: 'fas fa-heartbeat' },
    { value: 'other', label: 'Other', icon: 'fas fa-star' }
  ];
  
  // Category options
  const categoryOptions = [
    { value: 'restaurant', label: 'Restaurant', description: 'Dining, cafes, bars', icon: 'fas fa-utensils' },
    { value: 'retail', label: 'Retail', description: 'Stores, boutiques', icon: 'fas fa-shopping-bag' },
    { value: 'service', label: 'Service', description: 'Professional services', icon: 'fas fa-briefcase' },
    { value: 'entertainment', label: 'Entertainment', description: 'Movies, events, fun', icon: 'fas fa-film' },
    { value: 'health', label: 'Health & Wellness', description: 'Fitness, spas, care', icon: 'fas fa-heartbeat' },
    { value: 'other', label: 'Other', description: 'Other businesses', icon: 'fas fa-star' }
  ];

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Calculate progress
  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Handle business type selection
  const handleBusinessTypeSelect = (type) => {
    setFormData({
      ...formData,
      businessType: type.value
    });
    setDropdownOpen(false);
    
    // Clear error
    if (errors.businessType) {
      setErrors({
        ...errors,
        businessType: ''
      });
    }
  };

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setFormData({
      ...formData,
      businessCategory: category.value
    });
    
    // Clear error
    if (errors.businessCategory) {
      setErrors({
        ...errors,
        businessCategory: ''
      });
    }
  };

  // Handle file uploads
  const handleLogoUpload = (e) => {
    const files = Array.from(e.target.files);
    setLogoFiles(files);
  };

  const handlePhotosUpload = (e) => {
    const files = Array.from(e.target.files);
    setPhotoFiles(files);
  };

  // Remove file
  const removeLogo = () => {
    setLogoFiles([]);
  };

  const removePhoto = (index) => {
    const newPhotos = [...photoFiles];
    newPhotos.splice(index, 1);
    setPhotoFiles(newPhotos);
  };

  // Validation functions
  const validateStep1 = () => {
    const newErrors = {};
    
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Please enter a valid business name';
    }
    
    if (!formData.businessType) {
      newErrors.businessType = 'Please select a business type';
    }
    
    if (!formData.businessAddress.trim()) {
      newErrors.businessAddress = 'Please enter a valid address';
    }
    
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (!formData.phoneNumber.trim() || !phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }
    
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    
    if (!formData.businessCategory) {
      newErrors.businessCategory = 'Please select a business category';
    }
    
    if (!formData.description.trim() || formData.description.trim().length < 50) {
      newErrors.description = 'Please enter a description (at least 50 characters)';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep4 = () => {
    const newErrors = {};
    
    if (!formData.terms) {
      newErrors.terms = 'You must agree to the terms to continue';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Navigation functions
  const nextStep = () => {
    let isValid = false;
    
    switch(currentStep) {
      case 1:
        isValid = validateStep1();
        break;
      case 2:
        isValid = validateStep2();
        break;
      case 3:
        // Step 3 (media) doesn't require validation
        isValid = true;
        break;
      default:
        isValid = true;
    }
    
    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Get selected business type label
  const getSelectedBusinessTypeLabel = () => {
    const option = businessTypeOptions.find(opt => opt.value === formData.businessType);
    return option ? option.label : '';
  };

  // Get selected category label
  const getSelectedCategoryLabel = () => {
    const option = categoryOptions.find(opt => opt.value === formData.businessCategory);
    return option ? option.label : '';
  };

  // Handle form submission
  const handleSubmit = () => {
    if (validateStep4()) {
      // In a real app, you would send the data to your backend here
      console.log('Form submitted:', formData);
      setSubmitted(true);
    }
  };

  // Step rendering functions
  const renderStep1 = () => (
    <div className={`form-step ${currentStep === 1 ? 'active' : ''}`}>
      <h2 className="step-title"><i className="fas fa-info-circle"></i> Basic Business Information</h2>
      <p className="step-description">Tell us the basic details about your business. This information will appear publicly in our directory.</p>
      
      <div className="form-row">
        <div className="form-group required">
          <label htmlFor="businessName">Business Name</label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            className={`form-control ${errors.businessName ? 'error' : ''}`}
            placeholder="Enter your business name"
            value={formData.businessName}
            onChange={handleInputChange}
            required
          />
          {errors.businessName && (
            <div className="error-message show">{errors.businessName}</div>
          )}
        </div>
        
        <div className="form-group required">
          <label>Business Type</label>
          <div className="custom-dropdown" ref={dropdownRef}>
            <div 
              className={`dropdown-trigger ${dropdownOpen ? 'open' : ''}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>
                {formData.businessType 
                  ? businessTypeOptions.find(opt => opt.value === formData.businessType)?.label
                  : 'Select business type'
                }
              </span>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className={`dropdown-options ${dropdownOpen ? 'open' : ''}`}>
              {businessTypeOptions.map((option) => (
                <div 
                  key={option.value}
                  className={`dropdown-option ${formData.businessType === option.value ? 'selected' : ''}`}
                  onClick={() => handleBusinessTypeSelect(option)}
                >
                  <i className={option.icon}></i>
                  <span>{option.label}</span>
                </div>
              ))}
            </div>
            <select 
              id="businessType" 
              name="businessType"
              className="original-select" 
              value={formData.businessType}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select business type</option>
              {businessTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          {errors.businessType && (
            <div className="error-message show">{errors.businessType}</div>
          )}
        </div>
      </div>
      
      <div className="form-group required">
        <label htmlFor="businessAddress">Business Address</label>
        <input
          type="text"
          id="businessAddress"
          name="businessAddress"
          className={`form-control ${errors.businessAddress ? 'error' : ''}`}
          placeholder="Enter your business address"
          value={formData.businessAddress}
          onChange={handleInputChange}
          required
        />
        {errors.businessAddress && (
          <div className="error-message show">{errors.businessAddress}</div>
        )}
      </div>
      
      <div className="form-row">
        <div className="form-group required">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className={`form-control ${errors.phoneNumber ? 'error' : ''}`}
            placeholder="(123) 456-7890"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
          {errors.phoneNumber && (
            <div className="error-message show">{errors.phoneNumber}</div>
          )}
        </div>
        
        <div className="form-group required">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-control ${errors.email ? 'error' : ''}`}
            placeholder="contact@business.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && (
            <div className="error-message show">{errors.email}</div>
          )}
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className={`form-step ${currentStep === 2 ? 'active' : ''}`}>
      <h2 className="step-title"><i className="fas fa-list-alt"></i> Business Details</h2>
      <p className="step-description">Provide more details about what your business offers and who it serves.</p>
      
      <div className="form-group required">
        <label>Business Category</label>
        <p className="step-description">Select the primary category that best describes your business</p>
        <div className="category-options">
          {categoryOptions.map((category) => (
            <div
              key={category.value}
              className={`category-option ${selectedCategory?.value === category.value ? 'selected' : ''}`}
              onClick={() => handleCategorySelect(category)}
            >
              <i className={category.icon}></i>
              <h4>{category.label}</h4>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
        <input
          type="hidden"
          id="businessCategory"
          name="businessCategory"
          value={formData.businessCategory}
          onChange={handleInputChange}
          required
        />
        {errors.businessCategory && (
          <div className="error-message show">{errors.businessCategory}</div>
        )}
      </div>
      
      <div className="form-group required">
        <label htmlFor="description">Business Description</label>
        <textarea
          id="description"
          name="description"
          className={`form-control ${errors.description ? 'error' : ''}`}
          placeholder="Describe what makes your business unique, what you offer, and why customers should visit..."
          value={formData.description}
          onChange={handleInputChange}
          required
        />
        {errors.description && (
          <div className="error-message show">{errors.description}</div>
        )}
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="hours">Operating Hours</label>
          <input
            type="text"
            id="hours"
            name="hours"
            className="form-control"
            placeholder="e.g., Mon-Fri: 9AM-6PM"
            value={formData.hours}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="website">Website (Optional)</label>
          <input
            type="url"
            id="website"
            name="website"
            className="form-control"
            placeholder="https://yourbusiness.com"
            value={formData.website}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className={`form-step ${currentStep === 3 ? 'active' : ''}`}>
      <h2 className="step-title"><i className="fas fa-images"></i> Business Media</h2>
      <p className="step-description">Upload images and logos to showcase your business. High-quality images increase engagement by up to 300%.</p>
      
      <div className="form-group">
        <label>Business Logo</label>
        <div 
          className="file-upload-area" 
          onClick={() => document.getElementById('logoInput').click()}
        >
          <i className="fas fa-cloud-upload-alt"></i>
          <p>Drag & drop your logo here or <span>click to browse</span></p>
          <p>Recommended: 300x300px, PNG or JPG, max 2MB</p>
          <input
            type="file"
            id="logoInput"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleLogoUpload}
          />
        </div>
        <div id="logoList">
          {logoFiles.map((file, index) => (
            <div key={index} className="file-item">
              <i className="fas fa-file-image"></i>
              <div>
                <strong>{file.name}</strong>
                <p>{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
              <button
                type="button"
                className="remove-file"
                onClick={removeLogo}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="form-group">
        <label>Business Photos</label>
        <div 
          className="file-upload-area"
          onClick={() => document.getElementById('photosInput').click()}
        >
          <i className="fas fa-images"></i>
          <p>Drag & drop up to 5 photos here or <span>click to browse</span></p>
          <p>Recommended: 1200x800px, JPG format, max 5MB each</p>
          <input
            type="file"
            id="photosInput"
            accept="image/*"
            multiple
            style={{ display: 'none' }}
            onChange={handlePhotosUpload}
          />
        </div>
        <div id="fileList">
          {photoFiles.map((file, index) => (
            <div key={index} className="file-item">
              <i className="fas fa-file-image"></i>
              <div>
                <strong>{file.name}</strong>
                <p>{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
              <button
                type="button"
                className="remove-file"
                onClick={() => removePhoto(index)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className={`form-step ${currentStep === 4 ? 'active' : ''}`}>
      <h2 className="step-title"><i className="fas fa-check-circle"></i> Review & Submit</h2>
      <p className="step-description">Please review all the information below before submitting your business listing.</p>
      
      <div className="review-summary">
        <div className="review-item">
          <h4>Business Information</h4>
          <p><strong>Name:</strong> <span id="reviewName">{formData.businessName || '-'}</span></p>
          <p><strong>Type:</strong> <span id="reviewType">{getSelectedBusinessTypeLabel() || '-'}</span></p>
          <p><strong>Address:</strong> <span id="reviewAddress">{formData.businessAddress || '-'}</span></p>
        </div>
        
        <div className="review-item">
          <h4>Contact Details</h4>
          <p><strong>Phone:</strong> <span id="reviewPhone">{formData.phoneNumber || '-'}</span></p>
          <p><strong>Email:</strong> <span id="reviewEmail">{formData.email || '-'}</span></p>
          <p><strong>Website:</strong> <span id="reviewWebsite">{formData.website || '-'}</span></p>
        </div>
        
        <div className="review-item">
          <h4>Business Details</h4>
          <p><strong>Category:</strong> <span id="reviewCategory">{getSelectedCategoryLabel() || '-'}</span></p>
          <p><strong>Description:</strong> 
            <span id="reviewDescription">
              {formData.description 
                ? formData.description.substring(0, 100) + (formData.description.length > 100 ? '...' : '')
                : '-'
              }
            </span>
          </p>
          <p><strong>Hours:</strong> <span id="reviewHours">{formData.hours || '-'}</span></p>
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="terms">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formData.terms}
            onChange={handleInputChange}
            required
          />
          I agree to the <a href="#" style={{color: 'var(--cl-primary)'}}>Terms of Service</a> and confirm that the information provided is accurate.
        </label>
        {errors.terms && (
          <div className="error-message show">{errors.terms}</div>
        )}
      </div>
    </div>
  );

  const renderSuccessMessage = () => (
    <div className="success-message" style={{ display: submitted ? 'block' : 'none' }}>
      <i className="fas fa-check-circle"></i>
      <h2>Submission Successful!</h2>
      <p>Thank you for submitting your business to CitySphere. Our team will review your submission within 2-3 business days. You'll receive a confirmation email with next steps shortly.</p>
      <Link to="/" className="btn btn-submit">
        <i className="fas fa-home"></i> Return to Homepage
      </Link>
    </div>
  );

  return (
    <div className="submit-business">
      {/* Header Section */}
      <header className="submit-header">
        <div className="submit-header-content">
          <Link to="/" className="back-home">
            <i className="fas fa-arrow-left"></i> Back to Home
          </Link>
          <h1>Submit Your Business</h1>
          <p>Join CitySphere's directory and connect with thousands of locals and visitors looking for experiences like yours. The process takes just 5-10 minutes.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="submit-container">
        {/* Progress Steps */}
        {!submitted && (
          <>
            <div className="progress-steps">
              <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
              {[1, 2, 3, 4].map((step) => (
                <div 
                  key={step}
                  className={`step ${currentStep > step ? 'completed' : ''} ${currentStep === step ? 'active' : ''}`}
                >
                  <div className="step-circle">{step}</div>
                  <div className="step-label">
                    {step === 1 && 'Basic Info'}
                    {step === 2 && 'Details'}
                    {step === 3 && 'Media'}
                    {step === 4 && 'Review'}
                  </div>
                </div>
              ))}
            </div>

            {/* Form Container */}
            <div className="submit-form-container" style={{ display: submitted ? 'none' : 'block' }}>
              {renderStep1()}
              {renderStep2()}
              {renderStep3()}
              {renderStep4()}

              {/* Form Navigation */}
              <div className="form-navigation">
                <button
                  type="button"
                  className="btn btn-prev"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                >
                  <i className="fas fa-arrow-left"></i> Previous
                </button>
                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    className="btn btn-next"
                    onClick={nextStep}
                  >
                    Next <i className="fas fa-arrow-right"></i>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-submit"
                    onClick={handleSubmit}
                  >
                    <i className="fas fa-paper-plane"></i> Submit Business
                  </button>
                )}
              </div>
            </div>
          </>
        )}

        {/* Success Message */}
        {renderSuccessMessage()}

        {/* Benefits Section */}
        <div className="benefits-section">
          <h3><i className="fas fa-award"></i> Benefits of Listing on CitySphere</h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <i className="fas fa-check-circle"></i>
              <div>
                <h4>Increased Visibility</h4>
                <p>Reach thousands of locals and tourists actively searching for businesses like yours.</p>
              </div>
            </div>
            <div className="benefit-item">
              <i className="fas fa-check-circle"></i>
              <div>
                <h4>Verified Badge</h4>
                <p>Get a verified badge to build trust and stand out from unverified listings.</p>
              </div>
            </div>
            <div className="benefit-item">
              <i className="fas fa-check-circle"></i>
              <div>
                <h4>Customer Reviews</h4>
                <p>Collect and showcase customer reviews to build social proof and credibility.</p>
              </div>
            </div>
            <div className="benefit-item">
              <i className="fas fa-check-circle"></i>
              <div>
                <h4>Free Listing</h4>
                <p>Basic listings are completely free with no hidden fees or commissions.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Submit;