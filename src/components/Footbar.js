import React from 'react'

function Footbar() {
  return (
    <>
        <footer class="footer py-4" id='mainFoot'>
            <div class="container">
                <div class="row flex-reverse-row align-items-center">
                    <div class="col-lg-4 text-lg-start">&copy; 2022 Elite Home Solutions</div>
                    <div class="col-lg-4 my-3 my-lg-0">
                        <a class="btn btn-dark btn-social mx-2" href="mailto:service@elitehomesolutions-sa.com" target="_blank" rel='noreferrer'aria-label="Instagram"><i class="fas fa-envelope"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="https://www.facebook.com/soggydoggymobile" target="_blank" rel='noreferrer' aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="https://www.google.com/maps/place/Soggy+Doggy+Mobile/@29.437574,-98.461727,10z/data=!4m5!3m4!1s0x0:0x924dc124d1b987af!8m2!3d29.437574!4d-98.461727" target="_blank" rel='noreferrer' aria-label="Google"><i class="fab fa-google"></i></a>
                    </div>
                    <div class="col-lg-4 text-lg-start">Website design from <a href='http://www.munoz-web.dev' target="_blank" rel='noreferrer'>Munoz WebDev</a></div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footbar