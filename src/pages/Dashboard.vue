<template>
  <section id="dashboard">
    <div>
      <b-navbar toggleable="lg" variant="light" text="dark">
        <b-navbar-brand href="#"
          ><img
            src="https://img.icons8.com/color/48/000000/ruby-gem.png"
            alt="logo"
        /></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Inicio</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-button
                size="sm"
                class="my-2 my-sm-0"
                type="submit"
                @click="logout"
                >salir</b-button
              >
            </b-nav-form>
            <b-nav-form>
              <mdb-btn color="secondary" rounded>
                <router-link to="/home" class="sala"
                  >Crear sala</router-link
                ></mdb-btn
              >
            </b-nav-form>

            <!-- <b-nav-item href="#">Inicio</b-nav-item>
            <b-nav-item href="#">Inicio</b-nav-item> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <!-- <section class="mt-lg-5">
      <mdb-row>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <mdb-icon icon="money-bill-alt" far class="primary-color" />
              <div class="data">
                <p>Ahorrado</p>
                <h4>
                  <strong>$2000</strong>
                </h4>
              </div>
            </div>
            <mdb-card-body>
              <div class="progress">
                <div
                  aria-valuemax="100"
                  aria-valuemin="0"
                  aria-valuenow="25"
                  class="progress-bar bg-primary"
                  role="progressbar"
                  style="width: 25%;"
                ></div>
              </div>
              <mdb-card-text>Better than last week (25%)</mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <mdb-icon icon="chart-line" class="warning-color" />
              <div class="data">
                <p></p>
                <h4>
                  <strong>200</strong>
                </h4>
              </div>
            </div>
            <mdb-card-body>
              <div class="progress">
                <div
                  aria-valuemax="100"
                  aria-valuemin="0"
                  aria-valuenow="25"
                  class="progress-bar bg grey darken-2"
                  role="progressbar"
                  style="width: 25%;"
                ></div>
              </div>
              <mdb-card-text>Worse than last week (25%)</mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <mdb-icon icon="chart-pie" class="light-blue lighten-1" />
              <div class="data">
                <p>Trafico</p>
                <h4>
                  <strong>20000</strong>
                </h4>
              </div>
            </div>
            <mdb-card-body>
              <div class="progress">
                <div
                  aria-valuemax="100"
                  aria-valuemin="0"
                  aria-valuenow="75"
                  class="progress-bar grey darken-2"
                  role="progressbar"
                  style="width: 75%;"
                ></div>
              </div>
              <mdb-card-text>Worse than last week (75%)</mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <mdb-icon icon="chart-bar" class="red accent-2" />
              <div class="data">
                <p>ORGANIC TRAFFIC</p>
                <h4>
                  <strong>2000</strong>
                </h4>
              </div>
            </div>
            <mdb-card-body>
              <div class="progress">
                <div
                  aria-valuemax="100"
                  aria-valuemin="0"
                  aria-valuenow="25"
                  class="progress-bar bg-primary"
                  role="progressbar"
                  style="width: 25%;"
                ></div>
              </div>
              <mdb-card-text>Better than last week (25%)</mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section> -->

    <section></section>

    <!-- <mdb-row>
      <mdb-col xl="3" md="6" class="mb-3">
        <mdb-card class="classic-admin-card primary-color">
          <mdb-card-body>
            <div class="pull-right">
              <mdb-icon icon="money" />
            </div>
            <p class="white-text">SALES</p>
            <h4><strong>$2000</strong></h4>
          </mdb-card-body>
          <div class="progress">
            <div
              aria-valuemax="100"
              aria-valuemin="0"
              aria-valuenow="25"
              class="progress-bar bg grey darken-3"
              role="progressbar"
              style="width: 25%;"
            ></div>
          </div>
          <mdb-card-body>
            <p>Better than last week (25%)</p>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
      <mdb-col xl="3" md="6" class="mb-3">
        <mdb-card class="classic-admin-card warning-color">
          <mdb-card-body>
            <div class="pull-right">
              <mdb-icon icon="line-chart" />
            </div>
            <p class="white-text">SALES</p>
            <h4><strong>200</strong></h4>
          </mdb-card-body>
          <div class="progress">
            <div
              aria-valuemax="100"
              aria-valuemin="0"
              aria-valuenow="25"
              class="progress-bar bg grey darken-3"
              role="progressbar"
              style="width: 25%;"
            ></div>
          </div>
          <mdb-card-body>
            <p>Worse than last week (25%)</p>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
      <mdb-col xl="3" md="6" class="mb-3">
        <mdb-card class="classic-admin-card primary-color">
          <mdb-card-body>
            <div class="pull-right">
              <mdb-icon icon="pie-chart" />
            </div>
            <p class="white-text">TRAFFIC</p>
            <h4><strong>20000</strong></h4>
          </mdb-card-body>
          <div class="progress">
            <div
              aria-valuemax="100"
              aria-valuemin="0"
              aria-valuenow="75"
              class="progress-bar bg grey darken-3"
              role="progressbar"
              style="width: 100%;"
            ></div>
          </div>
          <mdb-card-body>
            <p>Better than last week (75%)</p>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
      <mdb-col xl="3" md="6" class="mb-3">
        <mdb-card class="classic-admin-card red accent-2">
          <mdb-card-body>
            <div class="pull-right">
              <mdb-icon icon="bar-chart" />
            </div>
            <p class="white-text">ORGANIC TRAFFIC</p>
            <h4><strong>20000</strong></h4>
          </mdb-card-body>
          <div class="progress">
            <div
              aria-valuemax="100"
              aria-valuemin="0"
              aria-valuenow="25"
              class="progress-bar bg grey darken-3"
              role="progressbar"
              style="width: 25%;"
            ></div>
          </div>
          <mdb-card-body>
            <p>Better than last week (75%)</p>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row> -->

    <section>
      <mdb-row>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card">
            <schedule-video-call/>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
  </section>
</template>

<script>
import ScheduleVideoCall from './../components/ScheduleVideoCall'
import {
  mdbRow,
  mdbCol,
  mdbBtn,
  mdbCard,
  mdbCardBody,
  mdbCardHeader,
  mdbCardText,
  mdbIcon,
  mdbTbl,
  mdbBarChart,
  mdbPieChart,
  mdbLineChart,
  mdbRadarChart,
  mdbDoughnutChart,
  mdbListGroup,
  mdbListGroupItem,
  mdbBadge,
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbNavbarBrand,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbFooter,
  waves,
  mdbNavbar,
} from "mdbvue";

export default {
  name: "Dashboard",
  components: {
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbCardHeader,
    mdbCardText,
    mdbIcon,
    mdbTbl,
    mdbBarChart,
    mdbPieChart,
    mdbLineChart,
    mdbRadarChart,
    mdbDoughnutChart,
    mdbListGroup,
    mdbListGroupItem,
    mdbBadge,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbFooter,
    waves,
    ftr: mdbFooter,
    'schedule-video-call': ScheduleVideoCall
  },
  data() {
    return {
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              barPercentage: 1,
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)",
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)",
              },
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },

      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)",
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)",
              },
            },
          ],
        },
      },
      radarChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      doughnutChartData: {
        labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
        datasets: [
          {
            data: [300, 50, 100, 40, 120],
            backgroundColor: [
              "#F7464A",
              "#46BFBD",
              "#FDB45C",
              "#949FB1",
              "#4D5360",
            ],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#5AD3D1",
              "#FFC870",
              "#A8B3C5",
              "#616774",
            ],
          },
        ],
      },
      doughnutChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  methods: {
    logout() {
      window.localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.cascading-admin-card {
  margin: 20px 0;
}
.cascading-admin-card .admin-up {
  margin-left: 4%;
  margin-right: 4%;
  margin-top: -20px;
}
.cascading-admin-card .admin-up .fas,
.cascading-admin-card .admin-up .far {
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);
  padding: 1.7rem;
  font-size: 2rem;
  color: #fff;
  text-align: left;
  margin-right: 1rem;
  border-radius: 3px;
}
.cascading-admin-card .admin-up .data {
  float: right;
  margin-top: 2rem;
  text-align: right;
}
.admin-up .data p {
  color: #999999;
  font-size: 12px;
}
.classic-admin-card .card-body {
  color: #fff;
  margin-bottom: 0;
  padding: 0.9rem;
}
.classic-admin-card .card-body p {
  font-size: 13px;
  opacity: 0.7;
  margin-bottom: 0;
}
.classic-admin-card .card-body h4 {
  margin-top: 10px;
}
main {
  background-color: #ededee;
}

.flexible-content {
  transition: padding-left 0.3s;
  padding-left: 270px;
}

.flexible-navbar {
  transition: padding-left 0.5s;
  padding-left: 270px;
}

.sidebar-fixed {
  left: 0;
  top: 0;
  height: 100vh;
  width: 270px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 1050;
  background-color: #fff;
  padding: 1.5rem;
  padding-top: 0;
}

.sidebar-fixed .logo-wrapper img {
  width: 100%;
  padding: 2.5rem;
}

.sidebar-fixed .list-group-item {
  display: block !important;
  transition: background-color 0.3s;
}

.sidebar-fixed .list-group .active {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 5px;
}

@media (max-width: 1199.98px) {
  .sidebar-fixed {
    display: none;
  }
  .flexible-content {
    padding-left: 0;
  }
  .flexible-navbar {
    padding-left: 10px;
  }
}
.sala {
  text-decoration: none;
  color: #fff;
}
</style>
