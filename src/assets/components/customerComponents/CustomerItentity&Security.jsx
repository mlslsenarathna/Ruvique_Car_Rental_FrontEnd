
function CustomerItentitySecurity() {
  return (
    <>
      <div className="tab-content fade-in">
                                <section className="info-section">
                                    <h3 className="gold-text">Verification Center</h3>
                                    <p className="text-muted">Upload high-resolution documents to unlock premium luxury vehicles.</p>
                                    
                                    <div className="document-slots">
                                        <div className="slot verified">
                                            <div className="slot-icon">🆔</div>
                                            <div className="slot-info">
                                                <label>National ID / NIC</label>
                                                <span>Verified on 12 Dec 2024</span>
                                            </div>
                                            <button className="slot-action">View</button>
                                        </div>

                                        <div className="slot pending">
                                            <div className="slot-icon">🚗</div>
                                            <div className="slot-info">
                                                <label>Driving License</label>
                                                <span>Under Review (ETA 2h)</span>
                                            </div>
                                            <button className="slot-action">Check Status</button>
                                        </div>

                                        <div className="slot empty">
                                            <div className="slot-icon">📄</div>
                                            <div className="slot-info">
                                                <label>Bank Statement</label>
                                                <span>Required for high-value rentals</span>
                                            </div>
                                            <button className="slot-action upload">Upload PDF</button>
                                        </div>
                                    </div>
                                </section>
                            </div>
    </>
  )
}   
export default CustomerItentitySecurity;