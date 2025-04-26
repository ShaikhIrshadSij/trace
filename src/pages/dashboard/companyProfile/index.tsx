import { useState } from 'react';
import '../../../styles/dashboard/company-profile.css';

const CompanyProfile = () => {
  const [isEditing, setIsEditing] = useState(false)

  const toggleEditing = () => {
    setIsEditing(!isEditing)
  }

  return (
    <div className="profile-content">
      <div className="company-card d-flex-column">
        <div className="company-logo">
          <img src="/images/company-profile.svg" alt="Company Logo" className='company-logo-img' />
          <div className="edit-icon-container">
            <img src="/images/edit.svg" alt="Edit" className='edit-icon' />
          </div>
        </div>
        <h2 className="company-name text-black fw-500">Silicon Drain Pvt. Ltd</h2>

        {isEditing ? (
          <div className="company-form">
            <div className="form-group">
              <input type="text" className="form-input" defaultValue="Contact Person : Capt. Joe Perera" />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                defaultValue="PIC Email ID: support@karcoservices.com / support1@karcoservices.com / support2@karcoservices.com"
              />
            </div>
            <div className="form-group">
              <input type="text" className="form-input" defaultValue="Contact No: 1234567899" />
            </div>
            <div className="form-group">
              <input type="text" className="form-input" defaultValue="Assign User: Mario Punto" />
            </div>
            <div className="form-group">
              <input type="text" className="form-input" defaultValue="Assign Password: XXXXXXXXXX" />
            </div>
            <div className="detail-item">
              <div className="detail-text">Country: India</div>
            </div>
            <div className="detail-item">
              <div className="detail-text">City: Delhi</div>
            </div>
            <div className="detail-item">
              <div className="detail-text">
                Address: Road Number 45, West Punjabi Bagh, Punjabi Bagh, Delhi 110026
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-text">KARCO Email ID : Support@karco.co.in</div>
            </div>

            <div className="form-actions d-flex-center">
              <button className="btn-cancel" onClick={toggleEditing}>
                Cancel
              </button>
              <button className="btn-save" onClick={toggleEditing}>
                Save
              </button>
            </div>
          </div>
        ) : (
          <div className="company-details">
            <div className="detail-item d-flex-space-between">
              <div className="detail-text">Contact Person : Capt. Joe Perera</div>
              <button className="edit-button" onClick={toggleEditing}>
                <img src="/images/edit.svg" alt="Edit" />
              </button>
            </div>
            <div className="detail-item d-flex-space-between">
              <div className="detail-text">PIC Email ID: support@karcoservices.com</div>
              <button className="edit-button" onClick={toggleEditing}>
                <img src="/images/edit.svg" alt="Edit" />
              </button>
            </div>
            <div className="detail-item d-flex-space-between">
              <div className="detail-text">Contact No: 1234567899</div>
              <button className="edit-button" onClick={toggleEditing}>
                <img src="/images/edit.svg" alt="Edit" />
              </button>
            </div>
            <div className="detail-item d-flex-space-between">
              <div className="detail-text">Assign User: Mario Punto</div>
              <button className="edit-button" onClick={toggleEditing}>
                <img src="/images/edit.svg" alt="Edit" />
              </button>
            </div>
            <div className="detail-item d-flex-space-between">
              <div className="detail-text">Assign Password: XXXXXXXXXX</div>
              <button className="edit-button" onClick={toggleEditing}>
                <img src="/images/edit.svg" alt="Edit" />
              </button>
            </div>
            <div className="detail-item d-flex-space-between">
              <div className="detail-text">Country: India</div>
            </div>
            <div className="detail-item d-flex-space-between">
              <div className="detail-text">City: Delhi</div>
            </div>
            <div className="detail-item d-flex-space-between">
              <div className="detail-text">
                Address: Road Number 45, West Punjabi Bagh, Punjabi Bagh, Delhi 110026
              </div>
            </div>
            <div className="detail-item d-flex-space-between">
              <div className="detail-text">KARCO Email ID : Support@karco.co.in</div>
            </div>

            <div className="contact-note d-flex-column">
              <p>For any Non-editable changes please contact</p> <span>support@karcoservices.com</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CompanyProfile
