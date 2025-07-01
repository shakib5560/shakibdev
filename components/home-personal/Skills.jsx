import React from 'react';

function Skills() {
  return (
    <section className="my-skills section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-80">
              <h3>
              Technical Skills <br />Driven by curiosity
                <span className="opacity-7">I never stop learning new technologies</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row md-marg">
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/resume/icon3.png" alt="" />
                </div>
                <span className="value">95%</span>
              </div>
              <h6 className="fz-18">Backend Dev</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/resume/7578010.webp" alt="" />
                </div>
                <span className="value">85%</span>
              </div>
              <h6 className="fz-18">Frontend Dev</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/resume/fastapi.svg" alt="" />
                </div>
                <span className="value">90%</span>
              </div>
              <h6 className="fz-18">API Dev</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/resume/sql-3d-icon-download-in-png-blend-fbx-gltf-file-formats--data-storage-format-document-extension-database-pack-design-development-icons-10975560.webp" alt="" />
                </div>
                <span className="value">85%</span>
              </div>
              <h6 className="fz-18">Database</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/resume/s4.png" alt="" />
                </div>
                <span className="value">70%</span>
              </div>
              <h6 className="fz-18">WordPress</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/resume/2944960.webp" alt="" />
                </div>
                <span className="value">75%</span>
              </div>
              <h6 className="fz-18">Problem Solving</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
