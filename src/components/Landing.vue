<template>
  <div>
    <body>
      <!-- ***** Preloader Start ***** -->
      <!-- <div id="preloader">
        <div class="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>  -->
      <!-- ***** Preloader End ***** -->

      <!-- ***** Header Area Start ***** -->
      <header class="header-area header-sticky">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <b-navbar toggleable="lg" type="dark" class="main-nav">
                <b-navbar-brand href="#"
                  ><img
                    src="https://img.icons8.com/color/48/000000/ruby-gem.png"
                    alt="logo"
                /></b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                  <b-navbar-nav>
                    <b-nav-item a href="#welcome">Inicio</b-nav-item>
                    <b-nav-item a href="#work-process">Tu oficina</b-nav-item>
                    <b-nav-item a href="#features">Sobre nosotros</b-nav-item>
                    <b-nav-item a href="#testimonials">Testimonios</b-nav-item>
                    <b-nav-item a href="#pricing-plans"
                      >Planes y precios</b-nav-item
                    >
                    <b-nav-item a href="#blog">Actualizaciones</b-nav-item>
                    <b-nav-item a href="#contact-us">Contactanos</b-nav-item>

                    <!-- sign-in -->

                    <div class="sigIn" style="margin: 0;">
                      <mdb-btn
                        size="sm"
                        color="purple"
                        @click.native="elegant = true"
                        >Sig In
                      </mdb-btn>

                      <mdb-modal
                        :show="elegant"
                        @close="elegant = false"
                        elegant
                        style="margin: 0;"
                      >
                        <mdb-modal-header class="text-center">
                          <mdb-modal-title tag="h3" bold class="w-100 my-3"
                            >Sign in</mdb-modal-title
                          >
                        </mdb-modal-header>
                        <mdb-modal-body class="mx-3">
                          <mdb-input
                            v-model="email"
                            label="Your email"
                            type="email"
                            class="mb-5 grey-text"
                          />
                          <mdb-input
                            v-model="password"
                            label="Enter password"
                            type="password"
                            class="pb-3"
                          ></mdb-input>
                          <p
                            class="font-small blue-text d-flex justify-content-end mb-5"
                          >
                            Forgot <a class="ml-1"> Password?</a>
                          </p>
                          <div class="text-center mb-3">
                            <mdb-btn
                              gradient="purple"
                              type="submit"
                              @click="action"
                              class="fadeIn fourth"
                              value="Ingresar"
                              >Ingresar</mdb-btn
                            >
                          </div>
                          <p
                            class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"
                          >
                            or Sign in with:
                          </p>
                          <mdb-row center class="my-3">
                            <mdb-btn
                              color="white"
                              rounded
                              class="mr-md-3 z-depth-1a"
                              ><mdb-icon fab color="info" icon="facebook-f"
                            /></mdb-btn>
                            <mdb-btn
                              color="white"
                              rounded
                              class="mr-md-3 z-depth-1a"
                              ><mdb-icon fab color="info" icon="twitter"
                            /></mdb-btn>
                            <mdb-btn
                              color="white"
                              rounded
                              class="mr-md-3 z-depth-1a"
                              ><mdb-icon fab color="info" icon="google-plus-g"
                            /></mdb-btn>
                          </mdb-row>
                        </mdb-modal-body>
                        <mdb-modal-footer class="mx-5 pt-3 mb-1" end>
                          <p class="font-small grey-text">
                            Not a member?
                            <a class="blue-text ml-1">Sign Up</a>
                          </p>
                        </mdb-modal-footer>
                      </mdb-modal>
                    </div>
                    <!-- end sign-in -->
                    <!-- sign-up  -->
                    <div class="sigIn">
                      <mdb-btn
                        size="sm"
                        color="purple"
                        @click.native="accept = true"
                        >Sign Up
                      </mdb-btn>
                      <mdb-modal :show="accept" @close="accept = false" accept>
                        <mdb-modal-header class="text-center">
                          <mdb-modal-title tag="h3" bold class="w-100 my-3"
                            >Sign up</mdb-modal-title
                          >
                        </mdb-modal-header>
                        <mdb-modal-body class="mx-3">
                          <mdb-input
                            v-model="email"
                            label="Your email"
                            type="email"
                            class="mb-5 grey-text"
                          />
                          <mdb-input
                            v-model="password"
                            label="Enter password"
                            type="password"
                            class="pb-3"
                          ></mdb-input>
                          <mdb-input
                            v-model="passwordConfirmation"
                            label="Enter password"
                            type="password"
                            class="pb-3"
                          ></mdb-input>
                          <p
                            class="font-small blue-text d-flex justify-content-end mb-5"
                          >
                            Forgot <a class="ml-1"> Password?</a>
                          </p>
                          <div class="text-center mb-3">
                            <mdb-btn
                              gradient="purple"
                              type="submit"
                              @click="action2"
                              class="fadeIn fourth"
                              value="Ingresar"
                              >Ingresar</mdb-btn
                            >
                          </div>
                          <p
                            class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"
                          >
                            or Sign in with:
                          </p>
                          <mdb-row center class="my-3">
                            <mdb-btn
                              color="white"
                              rounded
                              class="mr-md-3 z-depth-1a"
                              ><mdb-icon fab color="info" icon="facebook-f"
                            /></mdb-btn>
                            <mdb-btn
                              color="white"
                              rounded
                              class="mr-md-3 z-depth-1a"
                              ><mdb-icon fab color="info" icon="twitter"
                            /></mdb-btn>
                            <mdb-btn
                              color="white"
                              rounded
                              class="mr-md-3 z-depth-1a"
                              ><mdb-icon fab color="info" icon="google-plus-g"
                            /></mdb-btn>
                          </mdb-row>
                        </mdb-modal-body>
                        <mdb-modal-footer class="mx-5 pt-3 mb-1" end>
                          <p class="font-small grey-text">
                            Not a member? <a class="blue-text ml-1">SignIn</a>
                          </p>
                        </mdb-modal-footer>
                      </mdb-modal>
                    </div>
                    <!-- end-sign-up -->
                  </b-navbar-nav>
                </b-collapse>
              </b-navbar>
            </div>
          </div>
        </div>
      </header>
      <!-- ***** Header Area End ***** -->

      <!-- ***** Welcome Area Start ***** -->
      <div class="welcome-area" id="welcome">
        <!-- ***** Header Text Start ***** -->
        <div class="header-text">
          <div class="container">
            <div class="row">
              <div
                class="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12"
              >
                <h1>
                  Tu comodidad <strong>Nuestra </strong><br />Preocupación Por
                  eso creamos tu <strong>Oficina virtual</strong>
                </h1>
                <p>
                  Por eso creamos esta plataforma para tu comidad
                </p>
                <a href="#features" class="main-button-slider">Conocenos</a>
              </div>
            </div>
          </div>
        </div>
        <!-- ***** Header Text End ***** -->
      </div>
      <!-- ***** Welcome Area End ***** -->

      <!-- ***** Features Small Start ***** -->
      <section class="section home-feature">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="row">
                <!-- ***** Features Small Item Start ***** -->
                <div
                  class="col-lg-4 col-md-6 col-sm-6 col-12"
                  data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
                >
                  <div class="features-small-item">
                    <div class="icon">
                      <i
                        ><img src="@/assets/images/featured-item-01.png" alt=""
                      /></i>
                    </div>
                    <h5 class="features-title">Video conferencia</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Tempore perferendis voluptates quasi obcaecati aperiam
                      unde dignissimos placeat tenetur! Ut consequuntur
                      asperiores autem quasi non ipsam qui blanditiis
                      dignissimos iste officiis.
                    </p>
                  </div>
                </div>
                <!-- ***** Features Small Item End ***** -->

                <!-- ***** Features Small Item Start ***** -->
                <div
                  class="col-lg-4 col-md-6 col-sm-6 col-12"
                  data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s"
                >
                  <div class="features-small-item">
                    <div class="icon">
                      <i
                        ><img src="@/assets/images/featured-item-01.png" alt=""
                      /></i>
                    </div>
                    <h5 class="features-title">Espacio para tu trabajo</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Maiores ducimus vel sunt explicabo exercitationem
                      excepturi in dignissimos beatae dolor at dicta, maxime
                      veniam ab, esse ipsa, eaque nam! Iste, tempora.
                    </p>
                  </div>
                </div>
                <!-- ***** Features Small Item End ***** -->

                <!-- ***** Features Small Item Start ***** -->
                <div
                  class="col-lg-4 col-md-6 col-sm-6 col-12"
                  data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s"
                >
                  <div class="features-small-item">
                    <div class="icon">
                      <i
                        ><img src="@/assets/images/featured-item-01.png" alt=""
                      /></i>
                    </div>
                    <h5 class="features-title">Espacio para tu aprendizaje</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Animi ea omnis, et vero sunt doloribus reiciendis dolorem
                      facilis quis doloremque. Quasi voluptas, laboriosam
                      aliquid laborum ipsum et! Amet, omnis ipsum.
                    </p>
                  </div>
                </div>
                <!-- ***** Features Small Item End ***** -->
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- ***** Features Small End ***** -->

      <!-- ***** Features Big Item Start ***** -->
      <section class="section padding-top-70 padding-bottom-0" id="features">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-5 col-md-12 col-sm-12 align-self-center"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <img
                src="@/assets/images/left-image.png"
                class="rounded img-fluid d-block mx-auto"
                alt="App"
              />
            </div>
            <div class="col-lg-1"></div>
            <div
              class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix"
            >
              <div class="left-heading">
                <h2 class="section-title">Let’s discuss about you project</h2>
              </div>
              <div class="left-text">
                <p>
                  Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue
                  blandit, at finibus leo efficitur. Nam gravida purus non
                  sapien auctor, ut aliquam magna ullamcorper.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="hr"></div>
            </div>
          </div>
        </div>
      </section>
      <!-- ***** Features Big Item End ***** -->

      <!-- ***** Features Big Item Start ***** -->
      <section class="section padding-bottom-100">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix"
            >
              <div class="left-heading">
                <h2 class="section-title">
                  We can help you to grow your business
                </h2>
              </div>
              <div class="left-text">
                <p>
                  Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis
                  nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor
                  luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam
                  quis dolor elit.
                </p>
              </div>
            </div>
            <div class="col-lg-1"></div>
            <div
              class="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big"
              data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
            >
              <img
                src="@/assets/images/right-image.png"
                class="rounded img-fluid d-block mx-auto"
                alt="App"
              />
            </div>
          </div>
        </div>
      </section>
      <!-- ***** Features Big Item End ***** -->

      <!-- ***** Home Parallax Start ***** -->
      <section class="mini" id="work-process">
        <div class="mini-content">
          <div class="container">
            <div class="row">
              <div class="offset-lg-3 col-lg-6">
                <div class="info">
                  <h1>Tu lugar de trabajo</h1>
                  <p>
                    Encontraras todo lo necesario para desempeñarte
                    correctamente de forma remota.
                  </p>
                </div>
              </div>
            </div>

            <!-- ***** Mini Box Start ***** -->
            <div class="row">
              <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" class="mini-box">
                  <i
                    ><img src="@/assets/images/work-process-item-01.png" alt=""
                  /></i>
                  <strong>Get Ideas</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" class="mini-box">
                  <i
                    ><img src="@/assets/images/work-process-item-01.png" alt=""
                  /></i>
                  <strong>Sketch Up</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" class="mini-box">
                  <i
                    ><img src="@/assets/images/work-process-item-01.png" alt=""
                  /></i>
                  <strong>Discuss</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" class="mini-box">
                  <i
                    ><img src="@/assets/images/work-process-item-01.png" alt=""
                  /></i>
                  <strong>Revise</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" class="mini-box">
                  <i
                    ><img src="@/assets/images/work-process-item-01.png" alt=""
                  /></i>
                  <strong>Approve</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" class="mini-box">
                  <i
                    ><img src="assets/images/work-process-item-01.png" alt=""
                  /></i>
                  <strong>Launch</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
            </div>
            <!-- ***** Mini Box End ***** -->
          </div>
        </div>
      </section>
      <!-- ***** Home Parallax End ***** -->

      <!-- ***** Testimonials Start ***** -->
      <section class="section" id="testimonials">
        <div class="container">
          <!-- ***** Section Title Start ***** -->
          <div class="row">
            <div class="col-lg-12">
              <div class="center-heading">
                <h2 class="section-title">What do they say?</h2>
              </div>
            </div>
            <div class="offset-lg-3 col-lg-6">
              <div class="center-text">
                <p>
                  Donec tempus, sem non rutrum imperdiet, lectus orci fringilla
                  nulla, at accumsan elit eros a turpis. Ut sagittis lectus
                  libero.
                </p>
              </div>
            </div>
          </div>
          <!-- ***** Section Title End ***** -->

          <div class="row">
            <!-- ***** Testimonials Item Start ***** -->
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="team-item">
                <div class="team-content">
                  <i
                    ><img src="@/assets/images/testimonial-icon.png" alt=""
                  /></i>
                  <p>
                    Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis,
                    egestas scelerisque orci. Maecenas a finibus odio.
                  </p>
                  <div class="user-image">
                    <img src="http://placehold.it/60x60" alt="" />
                  </div>
                  <div class="team-info">
                    <h3 class="user-name">Catherine Soft</h3>
                    <span>Managing Director</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- ***** Testimonials Item End ***** -->

            <!-- ***** Testimonials Item Start ***** -->
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="team-item">
                <div class="team-content">
                  <i
                    ><img src="@/assets/images/testimonial-icon.png" alt=""
                  /></i>
                  <p>
                    Integer molestie aliquam gravida. Nullam nec arcu finibus,
                    imperdiet nulla vitae, placerat nibh. Cras maximus venenatis
                    molestie.
                  </p>
                  <div class="user-image">
                    <img src="http://placehold.it/60x60" alt="" />
                  </div>
                  <div class="team-info">
                    <h3 class="user-name">Kelvin Wood</h3>
                    <span>Digital Marketer</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- ***** Testimonials Item End ***** -->

            <!-- ***** Testimonials Item Start ***** -->
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="team-item">
                <div class="team-content">
                  <i
                    ><img src="@/assets/images/testimonial-icon.png" alt=""
                  /></i>
                  <p>
                    Quisque diam odio, maximus ac consectetur eu, auctor non
                    lorem. Cras quis est non ante ultrices molestie. Ut vehicula
                    et diam at aliquam.
                  </p>
                  <div class="user-image">
                    <img src="http://placehold.it/60x60" alt="" />
                  </div>
                  <div class="team-info">
                    <h3 class="user-name">David Martin</h3>
                    <span>Website Manager</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- ***** Testimonials Item End ***** -->
          </div>
        </div>
      </section>
      <!-- ***** Testimonials End ***** -->

      <!-- ***** Pricing Plans Start ***** -->
      <section class="section colored" id="pricing-plans">
        <div class="container">
          <!-- ***** Section Title Start ***** -->
          <div class="row">
            <div class="col-lg-12">
              <div class="center-heading">
                <h2 class="section-title">Planes y precios</h2>
              </div>
            </div>
            <div class="offset-lg-3 col-lg-6">
              <div class="center-text">
                <p>
                  Donec vulputate urna sed rutrum venenatis. Cras consequat
                  magna quis arcu elementum, quis congue risus volutpat.
                </p>
              </div>
            </div>
          </div>
          <!-- ***** Section Title End ***** -->

          <div class="row">
            <!-- ***** Pricing Item Start ***** -->
            <div
              class="col-lg-4 col-md-6 col-sm-12"
              data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
            >
              <div class="pricing-item">
                <div class="pricing-header">
                  <h3 class="pricing-title">Free</h3>
                </div>
                <div class="pricing-body">
                  <div class="price-wrapper">
                    <span class="currency">$</span>
                    <span class="price"> 0</span>
                    <span class="period">monthly</span>
                  </div>
                  <ul class="list">
                    <li class="active">acess</li>
                    <li class="active">acess</li>
                    <li class="active">acess</li>
                    <li>15-minute support</li>
                    <li>Unlimited Emails</li>
                    <li>24/7 Security</li>
                  </ul>
                </div>
                <div class="pricing-footer">
                  <a href="#" class="main-button">Purchase Now</a>
                </div>
              </div>
            </div>
            <!-- ***** Pricing Item End ***** -->

            <!-- ***** Pricing Item Start ***** -->
            <div
              class="col-lg-4 col-md-6 col-sm-12"
              data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s"
            >
              <div class="pricing-item active">
                <div class="pricing-header">
                  <h3 class="pricing-title">Premium</h3>
                </div>
                <div class="pricing-body">
                  <div class="price-wrapper">
                    <span class="currency">$</span>
                    <span class="price">21.50</span>
                    <span class="period">monthly</span>
                  </div>
                  <ul class="list">
                    <li class="active">120 GB space</li>
                    <li class="active">1200 GB transfer</li>
                    <li class="active">Pro Design Panel</li>
                    <li class="active">15-minute support</li>
                    <li>Unlimited Emails</li>
                    <li>24/7 Security</li>
                  </ul>
                </div>
                <div class="pricing-footer">
                  <a href="#" class="main-button">Purchase Now</a>
                </div>
              </div>
            </div>
            <!-- ***** Pricing Item End ***** -->

            <!-- ***** Pricing Item Start ***** -->
            <div
              class="col-lg-4 col-md-6 col-sm-12"
              data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s"
            >
              <div class="pricing-item">
                <div class="pricing-header">
                  <h3 class="pricing-title">Advanced</h3>
                </div>
                <div class="pricing-body">
                  <div class="price-wrapper">
                    <span class="currency">$</span>
                    <span class="price">42.00</span>
                    <span class="period">monthly</span>
                  </div>
                  <ul class="list">
                    <li class="active">250 GB space</li>
                    <li class="active">5000 GB transfer</li>
                    <li class="active">Pro Design Panel</li>
                    <li class="active">15-minute support</li>
                    <li class="active">Unlimited Emails</li>
                    <li class="active">24/7 Security</li>
                  </ul>
                </div>
                <div class="pricing-footer">
                  <a href="#" class="main-button">Purchase Now</a>
                </div>
              </div>
            </div>
            <!-- ***** Pricing Item End ***** -->
          </div>
        </div>
      </section>
      <!-- ***** Pricing Plans End ***** -->

      <!-- ***** Counter Parallax Start ***** -->
      <section class="counter">
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="count-item decoration-bottom">
                  <strong>126</strong>
                  <span>Projects</span>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="count-item decoration-top">
                  <strong>63</strong>
                  <span>Happy Clients</span>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="count-item decoration-bottom">
                  <strong>18</strong>
                  <span>Awards Wins</span>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="count-item">
                  <strong>27</strong>
                  <span>Countries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- ***** Counter Parallax End ***** -->

      <!-- ***** Blog Start ***** -->
      <section class="section" id="blog">
        <div class="container">
          <!-- ***** Section Title Start ***** -->
          <div class="row">
            <div class="col-lg-12">
              <div class="center-heading">
                <h2 class="section-title">Blog Entries</h2>
              </div>
            </div>
            <div class="offset-lg-3 col-lg-6">
              <div class="center-text">
                <p>
                  Integer molestie aliquam gravida. Nullam nec arcu finibus,
                  imperdiet nulla vitae, placerat nibh. Cras maximus venenatis
                  molestie.
                </p>
              </div>
            </div>
          </div>
          <!-- ***** Section Title End ***** -->

          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="blog-post-thumb">
                <div class="img">
                  <img src="@/assets/images/blog-item-01.png" alt="" />
                </div>
                <div class="blog-content">
                  <h3>
                    <a href="#">Vivamus ac vehicula dui</a>
                  </h3>
                  <div class="text">
                    Cras aliquet ligula dui, vitae fermentum velit tincidunt id.
                    Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam
                    egestas augue.
                  </div>
                  <a href="#" class="main-button">Read More</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="blog-post-thumb">
                <div class="img">
                  <img src="@/assets/images/blog-item-02.png" alt="" />
                </div>
                <div class="blog-content">
                  <h3>
                    <a href="#">Phasellus convallis augue</a>
                  </h3>
                  <div class="text">
                    Aliquam commodo ornare nisl, et scelerisque nisl dignissim
                    ac. Vestibulum finibus urna ut velit venenatis, vel ultrices
                    sapien mattis.
                  </div>
                  <a href="#" class="main-button">Read More</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="blog-post-thumb">
                <div class="img">
                  <img src="@/assets/images/blog-item-03.png" alt="" />
                </div>
                <div class="blog-content">
                  <h3>
                    <a href="#">Nam gravida purus non</a>
                  </h3>
                  <div class="text">
                    Maecenas eu erat vitae dui convallis consequat vel gravida
                    nulla. Vestibulum finibus euismod odio, ut tempus enim
                    varius eu.
                  </div>
                  <a href="#" class="main-button">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- ***** Blog End ***** -->

      <!-- ***** Contact Us Start ***** -->
      <section class="section colored" id="contact-us">
        <div class="container">
          <!-- ***** Section Title Start ***** -->
          <div class="row">
            <div class="col-lg-12">
              <div class="center-heading">
                <h2 class="section-title">Hablemos</h2>
              </div>
            </div>
            <div class="offset-lg-3 col-lg-6">
              <div class="center-text">
                <p>
                  Cuentanos tu experencia y tus sugerencias.
                </p>
              </div>
            </div>
          </div>
          <!-- ***** Section Title End ***** -->

          <div class="row">
            <!-- ***** Contact Text Start ***** -->
            <div class="col-lg-4 col-md-6 col-sm-12">
              <h5 class="margin-bottom-30">Contactanos</h5>
              <div class="contact-text">
                <p>
                  Dejanos tu opinion
                  <br />sobre tu experiencia
                </p>
                <p>
                  Con nuestra aplicacion
                </p>
              </div>
            </div>
            <!-- ***** Contact Text End ***** -->

            <!-- ***** Contact Form Start ***** -->
            <div class="col-lg-8 col-md-6 col-sm-12">
              <div class="contact-form">
                <form id="contact" action="" method="get">
                  <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder="Nombre"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="E-Mail"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div class="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          class="form-control"
                          id="message"
                          placeholder="Tu mensaje"
                          required=""
                        ></textarea>
                      </fieldset>
                    </div>
                    <div class="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          class="main-button"
                        >
                          Enviar mensaje
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!-- ***** Contact Form End ***** -->
          </div>
        </div>
      </section>
      <!-- ***** Contact Us End ***** -->

      <!-- ***** Footer Start ***** -->
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <ul class="social">
                <li>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-rss"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-dribbble"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <p class="copyright">
                Copyright &copy; 2020 JPDB
              </p>
            </div>
          </div>
        </div>
      </footer>
    </body>
  </div>
</template>
<script>
import firebase from "firebase";
require("@/assets/css/style.css");
require("@/assets/css/font-awesome.css");
import {
  mdbContainer,
  mdbBtn,
  mdbModal,
  mdbModalHeader,
  mdbModalBody,
  mdbInput,
  mdbModalFooter,
  mdbModalTitle,
  mdbRow,
  mdbIcon,
} from "mdbvue";
export default {
  data() {
    return {
      elegant: false,
      email: "",
      password: "",
      passwordConfirmation: "",
      accept: false,
    };
  },
  name: "landing",
  components: {
    // HelloWorld
    mdbContainer,
    mdbBtn,
    mdbModal,
    mdbModalHeader,
    mdbModalBody,
    mdbInput,
    mdbModalFooter,
    mdbModalTitle,
    mdbRow,
    mdbIcon,
  },
  methods: {
    action() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            console.log("login" + JSON.stringify(user));
            window.localStorage.setItem("authenticated", true);
            window.localStorage.setItem("user", JSON.stringify(user));
            this.$router.push("Dashboard");
          },
          (err) => {
            console.log("Erro -> " + JSON.stringify(err));
            window.localStorage.setItem("authenticated", false);
            window.localStorage.setItem("user", null);
          }
        );
    },
    action2() {
      if (this.password === this.passwordConfirmation) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(
            (user) => {
              console.log("login" + JSON.stringify(user));
              window.localStorage.setItem("authenticated", true);
              window.localStorage.setItem("user", JSON.stringify(user));
              this.$router.push("Dashboard");
            },
            (err) => {
              console.log("Erro -> " + JSON.stringify(err));
              window.localStorage.setItem("authenticated", false);
              window.localStorage.setItem("user", null);
            }
          );
      }
    },
  },
};
</script>
<style scoped>
.nav {
  background-color: #8261ee;
  margin: 0px;
}
#sigIn {
  margin: 0px;
}
</style>
