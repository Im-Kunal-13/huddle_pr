
export default function Features(){
    return(
        <section className="pt-6 pb-7" id="features">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto text-center">
              <h2 className="heading-black">Callify offers a Wallet to Wallet video chat.</h2>
              <p className="text-muted lead">Dapp that makes it easy to Connect new people online.</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-10 mx-auto">
                    <div className="row feature-boxes">

                        <div className="col-md-6 box">
                            <div className="icon-box box-info">
                                <div className="icon-box-inner">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                </div>
                            </div>
                            <h5>Blockchain Privacy</h5>
                            <p className="text-muted">Providing seamless communication without paying any gas with blockchian security .We take our users' safety seriously and offer tips &amp; trustworth also</p>
                        </div>
                       
                        <div className="col-md-6 box">
                            <div className="icon-box box-danger">
                                <div className="icon-box-inner">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                                </div>
                            </div>
                            <h5>Fast Connection</h5>
                            <p className="text-muted">The speed of connecting with partners is highly optimized. Fast connection means that you can meet more people..,.</p>
                          </div>

                    </div>
                </div>
            </div>
  
          </div>
    </section>
    );
}