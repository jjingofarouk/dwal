const fs = require('fs').promises;
const path = require('path');

const structure = {
  'hospital-management-system': {
    frontend: {
      app: {
        api: {
          auth: ['login.js', 'logout.js', 'refresh-token.js', 'register.js'],
          appointment: {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          patient: {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          clinical: {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          'clinical-settings': {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          billing: {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          laboratory: {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          reports: {
            files: ['generate.js', 'list.js'],
            get: ['[id].js'],
          },
          radiology: {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          dispensary: {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          adt: {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          vaccination: {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          'queue-mngmt': {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          pharmacy: {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          inventory: {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          procurement: {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          emergency: {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          nhif: {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          maternity: {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          helpdesk: {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          accounting: {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          nursing: {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          'medical-records': {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          settings: {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          'system-admin': {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          'social-service': {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          'operation-theatre': {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          'dynamic-report': {
            files: ['generate.js', 'list.js'],
            get: ['[id].js'],
          },
          dashboard: {
            files: ['get.js'],
          },
          doctor: {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          'claim-mgmt': {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          utilities: {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          'mkt-referral': {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          substore: {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          cssd: {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          incentive: {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          verification: {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
          'fixed-assets': {
            files: ['create.js', 'list.js'],
            delete: ['[id].js'],
            get: ['[id].js'],
            update: ['[id].js'],
          },
        },
        appointment: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'AppointmentForm.jsx',
            'AppointmentList.jsx',
            'AppointmentCard.jsx',
            'AppointmentForm.module.css',
            'AppointmentList.module.css',
            'AppointmentCard.module.css',
          ],
          services: ['appointmentService.js'],
        },
        patient: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'PatientForm.jsx',
            'PatientList.jsx',
            'PatientCard.jsx',
            'PatientForm.module.css',
            'PatientList.module.css',
            'PatientCard.module.css',
          ],
          services: ['patientService.js'],
        },
        clinical: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'ClinicalForm.jsx',
            'ClinicalList.jsx',
            'ClinicalCard.jsx',
            'ClinicalForm.module.css',
            'ClinicalList.module.css',
            'ClinicalCard.module.css',
          ],
          services: ['clinicalService.js'],
        },
        'clinical-settings': {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'ClinicalSettingsForm.jsx',
            'ClinicalSettingsList.jsx',
            'ClinicalSettingsCard.jsx',
            'ClinicalSettingsForm.module.css',
            'ClinicalSettingsList.module.css',
            'ClinicalSettingsCard.module.css',
          ],
          services: ['clinicalSettingsService.js'],
        },
        billing: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'BillingForm.jsx',
            'BillingList.jsx',
            'BillingCard.jsx',
            'BillingForm.module.css',
            'BillingList.module.css',
            'BillingCard.module.css',
          ],
          services: ['billingService.js'],
        },
        laboratory: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'LaboratoryForm.jsx',
            'LaboratoryList.jsx',
            'LaboratoryCard.jsx',
            'LaboratoryForm.module.css',
            'LaboratoryList.module.css',
            'LaboratoryCard.module.css',
          ],
          services: ['laboratoryService.js'],
        },
        reports: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'ReportGenerator.jsx',
            'ReportList.jsx',
            'ReportCard.jsx',
            'ReportGenerator.module.css',
            'ReportList.module.css',
            'ReportCard.module.css',
          ],
          services: ['reportService.js'],
        },
        radiology: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'RadiologyForm.jsx',
            'RadiologyList.jsx',
            'RadiologyCard.jsx',
            'RadiologyForm.module.css',
            'RadiologyList.module.css',
            'RadiologyCard.module.css',
          ],
          services: ['radiologyService.js'],
        },
        dispensary: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'DispensaryForm.jsx',
            'DispensaryList.jsx',
            'DispensaryCard.jsx',
            'DispensaryForm.module.css',
            'DispensaryList.module.css',
            'DispensaryCard.module.css',
          ],
          services: ['dispensaryService.js'],
        },
        adt: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'AdtForm.jsx',
            'AdtList.jsx',
            'AdtCard.jsx',
            'AdtForm.module.css',
            'AdtList.module.css',
            'AdtCard.module.css',
          ],
          services: ['adtService.js'],
        },
        vaccination: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'VaccinationForm.jsx',
            'VaccinationList.jsx',
            'VaccinationCard.jsx',
            'VaccinationForm.module.css',
            'VaccinationList.module.css',
            'VaccinationCard.module.css',
          ],
          services: ['vaccinationService.js'],
        },
        'queue-mngmt': {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'QueueForm.jsx',
            'QueueList.jsx',
            'QueueCard.jsx',
            'QueueForm.module.css',
            'QueueList.module.css',
            'QueueCard.module.css',
          ],
          services: ['queueService.js'],
        },
        pharmacy: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'PharmacyForm.jsx',
            'PharmacyList.jsx',
            'PharmacyCard.jsx',
            'PharmacyForm.module.css',
            'PharmacyList.module.css',
            'PharmacyCard.module.css',
          ],
          services: ['pharmacyService.js'],
        },
        inventory: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'InventoryForm.jsx',
            'InventoryList.jsx',
            'InventoryCard.jsx',
            'InventoryForm.module.css',
            'InventoryList.module.css',
            'InventoryCard.module.css',
          ],
          services: ['inventoryService.js'],
        },
        procurement: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'ProcurementForm.jsx',
            'ProcurementList.jsx',
            'ProcurementCard.jsx',
            'ProcurementForm.module.css',
            'ProcurementList.module.css',
            'ProcurementCard.module.css',
          ],
          services: ['procurementService.js'],
        },
        emergency: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'EmergencyForm.jsx',
            'EmergencyList.jsx',
            'EmergencyCard.jsx',
            'EmergencyForm.module.css',
            'EmergencyList.module.css',
            'EmergencyCard.module.css',
          ],
          services: ['emergencyService.js'],
        },
        nhif: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'NhifForm.jsx',
            'NhifList.jsx',
            'NhifCard.jsx',
            'NhifForm.module.css',
            'NhifList.module.css',
            'NhifCard.module.css',
          ],
          services: ['nhifService.js'],
        },
        maternity: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'MaternityForm.jsx',
            'MaternityList.jsx',
            'MaternityCard.jsx',
            'MaternityForm.module.css',
            'MaternityList.module.css',
            'MaternityCard.module.css',
          ],
          services: ['maternityService.js'],
        },
        helpdesk: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'HelpdeskForm.jsx',
            'HelpdeskList.jsx',
            'HelpdeskCard.jsx',
            'HelpdeskForm.module.css',
            'HelpdeskList.module.css',
            'HelpdeskCard.module.css',
          ],
          services: ['helpdeskService.js'],
        },
        accounting: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'AccountingForm.jsx',
            'AccountingList.jsx',
            'AccountingCard.jsx',
            'AccountingForm.module.css',
            'AccountingList.module.css',
            'AccountingCard.module.css',
          ],
          services: ['accountingService.js'],
        },
        nursing: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'NursingForm.jsx',
            'NursingList.jsx',
            'NursingCard.jsx',
            'NursingForm.module.css',
            'NursingList.module.css',
            'NursingCard.module.css',
          ],
          services: ['nursingService.js'],
        },
        'medical-records': {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'MedicalRecordsForm.jsx',
            'MedicalRecordsList.jsx',
            'MedicalRecordsCard.jsx',
            'MedicalRecordsForm.module.css',
            'MedicalRecordsList.module.css',
            'MedicalRecordsCard.module.css',
          ],
          services: ['medicalRecordsService.js'],
        },
        settings: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'SettingsForm.jsx',
            'SettingsList.jsx',
            'SettingsCard.jsx',
            'SettingsForm.module.css',
            'SettingsList.module.css',
            'SettingsCard.module.css',
          ],
          services: ['settingsService.js'],
        },
        'system-admin': {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'SystemAdminForm.jsx',
            'SystemAdminList.jsx',
            'SystemAdminCard.jsx',
            'SystemAdminForm.module.css',
            'SystemAdminList.module.css',
            'SystemAdminCard.module.css',
          ],
          services: ['systemAdminService.js'],
        },
        'social-service': {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'SocialServiceForm.jsx',
            'SocialServiceList.jsx',
            'SocialServiceCard.jsx',
            'SocialServiceForm.module.css',
            'SocialServiceList.module.css',
            'SocialServiceCard.module.css',
          ],
          services: ['socialServiceService.js'],
        },
        'operation-theatre': {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'OperationTheatreForm.jsx',
            'OperationTheatreList.jsx',
            'OperationTheatreCard.jsx',
            'OperationTheatreForm.module.css',
            'OperationTheatreList.module.css',
            'OperationTheatreCard.module.css',
          ],
          services: ['operationTheatreService.js'],
        },
        'dynamic-report': {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'DynamicReportGenerator.jsx',
            'DynamicReportList.jsx',
            'DynamicReportCard.jsx',
            'DynamicReportGenerator.module.css',
            'DynamicReportList.module.css',
            'DynamicReportCard.module.css',
          ],
          services: ['dynamicReportService.js'],
        },
        dashboard: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'DashboardOverview.jsx',
            'DashboardChart.jsx',
            'DashboardWidget.jsx',
            'DashboardOverview.module.css',
            'DashboardChart.module.css',
            'DashboardWidget.module.css',
          ],
          services: ['dashboardService.js'],
        },
        doctor: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'DoctorForm.jsx',
            'DoctorList.jsx',
            'DoctorCard.jsx',
            'DoctorForm.module.css',
            'DoctorList.module.css',
            'DoctorCard.module.css',
          ],
          services: ['doctorService.js'],
        },
        'claim-mgmt': {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'ClaimForm.jsx',
            'ClaimList.jsx',
            'ClaimCard.jsx',
            'ClaimForm.module.css',
            'ClaimList.module.css',
            'ClaimCard.module.css',
          ],
          services: ['claimService.js'],
        },
        utilities: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'UtilitiesForm.jsx',
            'UtilitiesList.jsx',
            'UtilitiesCard.jsx',
            'UtilitiesForm.module.css',
            'UtilitiesList.module.css',
            'UtilitiesCard.module.css',
          ],
          services: ['utilitiesService.js'],
        },
        'mkt-referral': {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'MktReferralForm.jsx',
            'MktReferralList.jsx',
            'MktReferralCard.jsx',
            'MktReferralForm.module.css',
            'MktReferralList.module.css',
            'MktReferralCard.module.css',
          ],
          services: ['mktReferralService.js'],
        },
        substore: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'SubstoreForm.jsx',
            'SubstoreList.jsx',
            'SubstoreCard.jsx',
            'SubstoreForm.module.css',
            'SubstoreList.module.css',
            'SubstoreCard.module.css',
          ],
          services: ['substoreService.js'],
        },
        cssd: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'CssdForm.jsx',
            'CssdList.jsx',
            'CssdCard.jsx',
            'CssdForm.module.css',
            'CssdList.module.css',
            'CssdCard.module.css',
          ],
          services: ['cssdService.js'],
        },
        incentive: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'IncentiveForm.jsx',
            'IncentiveList.jsx',
            'IncentiveCard.jsx',
            'IncentiveForm.module.css',
            'IncentiveList.module.css',
            'IncentiveCard.module.css',
          ],
          services: ['incentiveService.js'],
        },
        verification: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'VerificationForm.jsx',
            'VerificationList.jsx',
            'VerificationCard.jsx',
            'VerificationForm.module.css',
            'VerificationList.module.css',
            'VerificationCard.module.css',
          ],
          services: ['verificationService.js'],
        },
        'fixed-assets': {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'FixedAssetsForm.jsx',
            'FixedAssetsList.jsx',
            'FixedAssetsCard.jsx',
            'FixedAssetsForm.module.css',
            'FixedAssetsList.module.css',
            'FixedAssetsCard.module.css',
          ],
          services: ['fixedAssetsService.js'],
        },
        auth: {
          files: ['page.jsx', 'layout.jsx'],
          components: [
            'LoginForm.jsx',
            'RegisterForm.jsx',
            'LoginForm.module.css',
            'RegisterForm.module.css',
          ],
          services: ['authService.js'],
        },
        components: [
          'Header.jsx',
          'Footer.jsx',
          'Sidebar.jsx',
          'Navbar.jsx',
          'Header.module.css',
          'Footer.module.css',
          'Sidebar.module.css',
          'Navbar.module.css',
        ],
        lib: ['api.js', 'auth.js', 'constants.js', 'utils.js'],
        styles: ['globals.css', 'tailwind.css'],
        files: ['layout.jsx', 'page.jsx', 'globals.js'],
      },
      public: {
        files: ['favicon.ico', 'logo.png'],
        images: {
          files: ['placeholder.jpg'],
          icons: [
            'appointment.svg',
            'patient.svg',
            'clinical.svg',
            'billing.svg',
            'laboratory.svg',
            'radiology.svg',
            'dispensary.svg',
            'adt.svg',
            'vaccination.svg',
            'queue.svg',
            'pharmacy.svg',
            'inventory.svg',
            'procurement.svg',
            'emergency.svg',
            'nhif.svg',
            'maternity.svg',
            'helpdesk.svg',
            'accounting.svg',
            'nursing.svg',
            'medical-records.svg',
            'settings.svg',
            'system-admin.svg',
            'social-service.svg',
            'operation-theatre.svg',
            'dynamic-report.svg',
            'dashboard.svg',
            'doctor.svg',
            'claim-mgmt.svg',
            'utilities.svg',
            'mkt-referral.svg',
            'substore.svg',
            'cssd.svg',
            'incentive.svg',
            'verification.svg',
            'fixed-assets.svg',
          ],
        },
      },
    },
    functions: {
      api: {
        auth: ['login.js', 'logout.js', 'refresh-token.js', 'register.js'],
        appointment: ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        patient: ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        clinical: ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        'clinical-settings': ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        billing: ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        laboratory: ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        reports: ['generate.js', 'get.js', 'list.js'],
        radiology: ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        dispensary: ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        adt: ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        vaccination: ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        'queue-mngmt': ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        pharmacy: ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        inventory: ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        procurement: ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        emergency: ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        nhif: ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        maternity: ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        helpdesk: ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        accounting: ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        nursing: ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        'medical-records': ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        settings: ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        'system-admin': ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        'social-service': ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        'operation-theatre': ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        'dynamic-report': ['generate.js', 'get.js', 'list.js'],
        dashboard: ['get.js'],
        doctor: ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        'claim-mgmt': ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        utilities: ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        'mkt-referral': ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        substore: ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        cssd: ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        incentive: ['create.js', 'get.js', 'list.js'],
        verification: ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
        'fixed-assets': ['create.js', 'delete.js', 'get.js', 'list.js', 'update.js'],
      },
      config: ['firebase.js'],
      middleware: [
        'authMiddleware.js',
        'errorMiddleware.js',
        'validationMiddleware.js',
        'roleMiddleware.js',
        'middleware.js'
      ],
      utils: [
        'logger.js',
        'errorHandler.js',
        'jwt.js',
        'validators.js',
        'utils.js',
        'constants.js',
      ],
      files: ['index.js'],
    },
    docs: ['api.md', 'setup.md', 'deployment.md'],
    files: [
      'firebase.json',
      '.firebaserc',
      'vercel.json',
      'package.json',
      '.env',
      '.env.example',
      '.gitignore',
      '.eslintrc.json',
      '.prettierrc',
      'jest.config.js',
      'README.md',
      'docker-compose.yml',
      'Dockerfile',
    ],
  }
};

async function createStructure(basePath, structure) {
  try {
    for (const [key, value] of Object.entries(structure)) {
      const currentPath = path.join(basePath, key);

      if (Array.isArray(value)) {
        // Ensure parent directory exists
        await fs.mkdir(basePath, { recursive: true });
        
        // Create all files in the array
        for (const file of value) {
          const filePath = path.join(basePath, file);
          try {
            await fs.writeFile(filePath, '', { flag: 'wx' });
            console.log(`Created file: ${filePath}`);
          } catch (err) {
            if (err.code !== 'EEXIST') {
              console.error(`Error creating file ${filePath}:`, err.message);
            }
          }
        }
      } else if (typeof value === 'object' && value !== null) {
        // Create directory if it's not a 'files' key
        if (key !== 'files') {
          try {
            await fs.mkdir(currentPath, { recursive: true });
            console.log(`Created directory: ${currentPath}`);
          } catch (err) {
            if (err.code !== 'EEXIST') {
              console.error(`Error creating directory ${currentPath}:`, err.message);
            }
          }
        }

        // Handle special 'files' property if it exists
        if (value.files && Array.isArray(value.files)) {
          for (const file of value.files) {
            const filePath = path.join(currentPath, file);
            try {
              await fs.writeFile(filePath, '', { flag: 'wx' });
              console.log(`Created file: ${filePath}`);
            } catch (err) {
              if (err.code !== 'EEXIST') {
                console.error(`Error creating file ${filePath}:`, err.message);
              }
            }
          }
        }

        // Recursively process the nested structure
        await createStructure(currentPath, value);
      }
    }
  } catch (err) {
    console.error(`Error in createStructure at ${basePath}:`, err.message);
    throw err;
  }
}

async function main() {
  try {
    console.log('Starting project structure creation...');
    await createStructure(process.cwd(), structure);
    console.log('Project structure created successfully!');
  } catch (err) {
    console.error('Error creating project structure:', err.message);
    process.exit(1);
  }
}

main();
