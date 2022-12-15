import React, { Fragment } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr';
import { BsLaptop } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

function MyWork() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="font-big text-red slide-in-top">Something I've Built</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls1" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/w-01.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/w-02.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/w-03.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                            <h5 className="ff-jose my-1">Plural Sight</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://astounding-frangollo-a008ae.netlify.app/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop/> Watch Live</a>
                                <a href="https://github.com/Akshaypareek01/pluralsight" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a>
                            </div>

                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls2" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/m-01.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/m-02.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/m-03.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div>
                            <h5 className="ff-jose my-1">Cult Fit</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://stupendous-chebakia-31e667.netlify.app/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop/> Watch Live</a>
                                <a href="https://github.com/Rajgupta7080/CultFit-Team" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls3" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/n-01.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/n-02.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/n-03.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/n-04.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                            <h5 className="ff-jose my-1">FirstCry</h5>
                            <div className="row d-flex justify-content-center">
                            <a href="https://voluble-hotteok-93fe8e.netlify.app/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop/> Watch Live</a>
                            <a href="https://github.com/hariprasanthmath/Firstcry-React-clone" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a>

                            </div>
                        
                    </div>
                   
                        
                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls5" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/r-5.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/r-2.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/r-3.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/r-4.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/r-1.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                            <h5 className="ff-jose my-1">Covid-19 Static</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="http://www.worldcovid-19.epizy.com/?i=3" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop/> Watch Live</a>
                                <a href="" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>
                   
                    </div>
                </div>
                
            
    
    </Fragment>
  )
}

export default MyWork