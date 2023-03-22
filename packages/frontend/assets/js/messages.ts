import merge from 'lodash/merge'
import overrides from './messageOverrides'
const validationEn: any = require('vee-validate/dist/locale/en')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const vuetifyEn: any = require('vuetify/lib/locale/en')

export default merge(
  {
    en: {
      // label appearing in tabular content (list of users, list of shared collections etc)
      // as well as side bar on document view
      dateAdded: 'Date Added',

      application: {
        title: 'My File NYC',
      },

      toast: {
        acceptedDelegateInvite: 'Delegate Access Accepted',
        delegateRemoved: 'Client Removed',
        downloadLoadingState: 'Preparing Download',
        sharingComplete: 'Sharing Complete',
        uploading: 'Adding Document...', // displayed while a file is uploading
        uploadComplete: 'Upload Complete',
        fileDeletedConfirmation: 'Document Deleted',
        fileTooLarge: 'Document too large (must be < 10MB)',
      },

      login: {
        loginButton: 'Log in and get started',
        getStarted: {
          client: 'Get Started',
          cityEmployee: 'City Employee Login',
          cboWorker: 'CBO Worker Login',
        },
        welcomeTitle: 'Welcome',
        footerLogoAlt: 'Footer logo',
      },

      navigation: {
        about: 'About',
        account: 'My Account Managers',
        settings: 'My Profile',
        settingsFirstRun:
          'Welcome to #My File NYC&! Please answer a few questions about yourself to get started.',
        welcomeFirstRun: 'Welcome to My File NYC!',
        activity: 'Activity Log',
        back: 'Back',
        clients: 'Clients', // navigate back to agent view desktop
        close: 'Close',
        dashboard: 'Dashboard',
        faq: 'FAQ',
        loading: 'Loading',
        loggingIn: 'Logging in...',
        manageAccounts: 'Manage Accounts',
        signIn: 'Sign in',
        signOut: 'Sign out',
        switchAccount: 'Switch Clients',
        termsOfUse: 'Terms of Use',
        nycId: 'Having trouble logging in?',
      },

      document: {
        // This is the title of the confirmation dialog for deleting a document
        deleteConfirmationTitle: 'Delete this document?',
        // This is the body content of the confirmation dialog for deleting a document
        deleteConfirmationBody:
          'Anyone with shared access will no longer be able to view this document. This cannot be undone.',
        documentMenu: 'Document menu',
        documentOptions: 'Options',
        downloadZip: 'Download All',
        downloadPdf: 'Download PDF',
        description: 'Document Description', // displayed beneath the document and expands to show description (if any)
        editDetailsTitle: 'Edit Details', // page title on edit details screen
        enterNamePlaceholder: 'Give this document a name',
        enterDescriptionPlaceholder: 'Describe this document (optional)',
        documentName: 'What kind of document did you upload?', // shown as a label on edit details screen

        noDocuments: 'There are no documents saved to your account yet.', // shown on dashboard when there are no documents
        previewOf: 'Preview of',
        uploadFirst: 'Add your first document', // label on the empty state upload button
        thumbnailOf: 'Thumbnail of',
        fileName: 'Document Name',
        signleOrMultyple: 'Doese your document has one or multiple files?',
      },

      controls: {
        accept: 'Accept', // eg. accept terms of use
        add: 'Add', // eg. add a delegate
        allFiles: 'Your Documents', // shown as tab label on the dashboard
        cancel: 'Cancel', // cancel button
        confirm: 'Confirm',
        confirmDelete: 'Yes, Delete',
        declineAndLogOut: 'Decline & Log Out', // decline TOS button
        delete: 'Delete', // delete document kebab item
        done: 'Done',
        download: 'Download', // edit document kebab item and button text
        editDetails: 'Edit Details', // edit document kebab item
        edit: 'Edit', // edit account details
        continue: 'Continue',
        share: 'Share with DHS', // share button
        shared: 'Shared Documents', // label of shared tab on dashboard
        upload: 'Upload a Document',
        uploadDocument: 'Upload Document',
        uploadFile: 'Upload File',
        uploadFiles: 'Upload Files',
        view: 'View',
        save: 'Save',
      },

      // account settings page
      account: {
        language: 'Language', // open language selector
        firstName: 'First Name',
        whatIsYourFirstName: 'What is your first name?',
        lastName: 'Last Name',
        whatIsYourLastName: 'What is your last or family name?',
        dob: 'Date of Birth',
        whatIsYourDob: 'When were you born?',
        caseNumber: 'Case Number',
        whatIsYourDshCaseNumber: 'What is your DHS Case Number?',
        dhsShow:
          'Add your DHS case number if you’re a returning family. If you’re new to PATH, add the ticket number you received when you came to PATH (example: CL ####).',
        locale: 'Select language',
      },

      // All copy related to the create shared folder flow
      sharing: {
        defaultName: 'Documents you shared with DHS on {date}',
        confirmSharedFiles:
          'Documents to be shared DHS | Documents to be shared DHS',
        plusNMore: '+ {count} more',
        recipients: 'Recipients',

        // placeholder text for the add recipient email field
        addRecipientPlaceholder: 'Enter email address',

        // step titles in the share flow
        confirmTitle: 'Are you sure you want to share these Documents?',
        addRecipientsTitle: 'Who are you sharing these document(s) with?',
        selectFilesTitle: 'Select Documents',

        disclaimerTitle: 'Reminder',
        shareDocumentDisclaimer: [
          'My File NYC facilitates document sharing with {emails} email accounts',
          'Once documents are shared DHS employees may download and save your documents to submit as proof for your application. DHS may still have copies to support your case even if you unshare or delete them from My File.',
        ],

        // on the confirmation step, could be "recipient" or "recipients" depending on number of items
        confirmRecipientsLabel: 'You are sharing documents to | Recipients',
        tooManyRecipients: 'You can share with up to {count} people', // error text when trying to add more than 10 recipients
      },

      tabTitles: {
        about: 'About',
        authorizing: 'Authorizing', // not important - used while logging in
        dashboard: 'Dashboard',
        document: 'Document', // used for document preview while page is loading, then changes to document title
        faq: 'FAQ',
        shared: 'Shared', // used in share flow
        sharedBy: 'Shared by', // used in share flow
        termsOfUse: 'Terms of Use', // used while viewing TOU
        welcome: 'Welcome', // displayed on the initial landing page
      },

      delegateAccess: {
        disabledNotice: 'The delegation feature is currently disabled.',
        pageTitle: 'Account Access', // title in account menu and page title of delegation flow
        menuTitle: 'Who Can Manage My Documents', // title in account menu and page title of delegation flow
        emailPlaceholder: 'Add people via email',
        addConfirmationTitle:
          'Let this person manage documents on your account?',
        addConfirmationBody:
          'They will be able to upload and share documents for you. They cannot delete documents. You can always remove their access to your account.',
        addConfirmationAction: 'Yes, Give Access',
        removeConfirmationTitle:
          'Remove this person from accessing your account?',
        removeConfirmationBody:
          'They will no longer be able to manage or share documents for you. You can always give them access to your documents again in the Account menu settings.',
        removeConfirmationAction: 'Yes, Remove',
        uninviteConfirmationTitle: 'Cancel this invitation?',
        uninviteConfirmationBody:
          'You can invite someone to manage your account from the Account menu settings.',
        uninviteConfirmationAction: 'Yes, Cancel',
        tooManyDelegates: 'Up to {count} people can access your account',
        invitePending: 'Invitation pending',
        inviteExpired: 'Invitation expired.',
        resendInvite: 'Resend?',
      },

      // Account Activity
      activity: {
        accessed: 'accessed',
        added: 'added',
        delegateInvitedClient: 'to manage and share documents on your behalf',
        delegateInvitedCbo: 'to manage and share documents on their behalf',
        delegateAcceptedClient:
          'can now manage and share documents on your behalf',
        delegateAcceptedCbo:
          'can now manage and share documents on this account',
        delegateDeletedClient: 'has been removed from your account',
        delegateDeletedCbo: 'has been removed from this account ',
        deleted: 'deleted',
        edited: 'edited details of',
        file: 'file',
        files: 'documents',
        invited: 'invited',
        pageTitle: 'Account Activity',
        shared: 'shared',
        today: 'TODAY',
        you: 'You',
      },

      // Copy where you are viewing shared folders
      sharedFolder: {
        // empty state for list of shared folders
        noCollections: "You haven't shared any documents yet.", // message
        shareFirstDocument: 'Share your first document', // call to action

        // empty state for an individual shared folder
        emptyCollection: 'All documents have been removed from this folder.', // message
        returnDashboard: 'Return to dashboard', // call to action

        // empty state for list of clients who have shared collections with user
        noSharedDocuments: "You haven't received any shared documents yet.",

        // title for collection table name column
        collectionTableTitle: "Documents you've shared, organized by date",
      },

      cbo: {
        selectClient: 'Select a client to access their account',
        clickToRemove: 'Click {close} to remove a client',
        noClientsTitle:
          'You have not been added to any client My File NYC accounts',
        noClientsBody:
          "Once a client adds you to their My File NYC account, you'll be able to manage and share documents on their behalf from this screen.\n\nA client can provide access to their documents in the Account menu settings in My File NYC.",
        noClientActionLabel: 'Not a case manager?',
        noClientActionText:
          'If you are seeking permanent supportive housing, click here.',
        removeConfirmationTitle: 'Remove this client from your My File NYC?',
        removeConfirmationBody:
          'You will no longer be able to view, manage, or share documents on their behalf. This cannot be undone.',
        removeConfirmationAction: 'Yes, Remove',
        errorAcceptingInvite:
          'Invite could not be accepted. Please ensure you are logged in with the email address that received the invite.',
      },

      agent: {
        clientFirstNameLabel: 'First Name', // label of client first name column in agent view
        clientLastNameLabel: 'Last Name', // label of client last name column in agent view
        clientDob: 'Date of Birth', // label of client date of birth column in agent view
        clientCaseNum: 'Case Number', // label of client case number column in agent view
        clientEmail: 'Email', // label of client case number column in agent view
        dateShared: 'Date Shared', // label in side bar
        noClientActionLabel: 'Not a government employee?',
        noClientActionText:
          'If you are seeking permanent supportive housing, click here.',
        reorderFiles: 'Reorder Documents', // shown in agent view when downloading as PDF
        selectClient: 'Select client to access shared documents',
        sharedBy: 'Shared By', // label in side bar
        sharedFolderNameLabel: 'Name', // label of shared folder name column in agent view
        sharedWith: 'Shared With: ', // promt for agency email
      },

      landing: {
        community: 'COMMUNITY SERVICES',
        agency: 'AGENCY SERVICES',
      },

      $vuetify: {
        ...vuetifyEn,
        dataTable: {
          sortBy: 'Sort by',
          ariaLabel: {
            sortNone: 'Do not sort',
            activateAscending: 'Sort ascending',
          },
        },
        noDataText: 'No data',
      },
      validations: {
        ...validationEn.messages,
        whitelist: 'Must be an approved agency email',
        notSameAsUserEmail: 'You cannot enter your own email address',
      },
    },
    ar: {
      // label appearing in tabular content (list of users, list of shared collections etc)
      // as well as side bar on document view
      dateAdded: `تاريخ الإضافة`,

      application: {
        title: 'My File NYC',
      },

      toast: {
        acceptedDelegateInvite: 'Delegate Access Accepted', // not found
        delegateRemoved: 'Client Removed', // not found
        downloadLoadingState: 'إعداد التنزيل',
        sharingComplete: 'اكتملت المشاركة',
        uploading: 'إضافة مستند...', // displayed while a file is uploading
        uploadComplete: 'اكتمل التحميل',
        fileDeletedConfirmation: 'تم حذف المستند',
        fileTooLarge: 'المستند كبير جدًا (يجب أن يكون أقل من 10 ميغا بايت)',
      },

      login: {
        loginButton: 'سَجِّل الدخول وابدأ',
        getStarted: {
          client: 'البدء',
          cityEmployee: 'City Employee Login', // not found
          cboWorker: 'CBO Worker Login', // not found
        },
        welcomeTitle: 'مرحباً',
        footerLogoAlt: 'Footer logo', // not found
      },

      navigation: {
        about: 'عن',
        account: 'My Account Managers', // not found
        settings: 'ملفي الشخصي',
        settingsFirstRun:
          'مرحبًا بك فيMy File NYC ! يرجى الإجابة على بعض الأسئلة عن نفسك للبدء',
        welcomeFirstRun: 'مرحبًا بك فيMy File NYC !',
        activity: 'سجل الأنشطة',
        back: 'خلف',
        clients: 'العملاء', // navigate back to agent view desktop not found
        close: 'إغلاق',
        dashboard: 'لوحة المعلومات',
        faq: 'الأسئلة الشائعة',
        loading: 'جارٍ التحميل',
        loggingIn: 'جارٍ تسجيل الدخول...',
        manageAccounts: 'Manage Accounts', // not found
        signIn: 'تسجيل الدخول',
        signOut: 'تسجيل الخروج',
        switchAccount: 'تبديل العملاء',
        termsOfUse: 'شروط الاستخدام',
        nycId: 'هل تواجه مشكلة في تسجيل الدخول؟',
      },

      document: {
        // This is the title of the confirmation dialog for deleting a document
        deleteConfirmationTitle: 'هل تريد حذف هذا المستند؟',
        // This is the body content of the confirmation dialog for deleting a document
        deleteConfirmationBody: `لن يتمكن أي شخص لديه حق الوصول المشترك من عرض هذا المستند بعد الآن. لا يمكن التراجع عن هذه الخطوة`,
        documentMenu: 'قائمة المستندات',
        documentOptions: 'الخيارات',
        downloadZip: 'تنزيل الكل',
        downloadPdf: 'تنزيل ملف بصيغة PDF',
        description: 'وصف المستند', // displayed beneath the document and expands to show description (if any)
        editDetailsTitle: 'تعديل التفاصيل', // page title on edit details screen
        enterNamePlaceholder: 'قم بتسمية هذا المستند»',
        enterDescriptionPlaceholder: 'قدم وصفًا لهذا المستند (اختياري)',
        documentName: 'ما نوع المستند الذي حملته؟', // shown as a label on edit details screen

        noDocuments: 'لا توجد مستندات محفوظة في حسابك حتى الآن.', // shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'أضف مستندك الأول', // label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: 'اسم المستند',
      },

      controls: {
        accept: 'قبول', //  eg. accept terms of use
        add: 'إضافة', //  eg. add a delegate
        allFiles: 'المستندات الخاصة بك', // shown as tab label on the dashboard
        cancel: 'إلغاء', // cancel button
        confirm: 'تأكيد',
        confirmDelete: 'ہاں، حذف کریں',
        declineAndLogOut: 'الرفض وتسجيل الخروج', // decline TOS button
        delete: 'حذف کریں', // delete document kebab item
        done: 'تم',
        download: 'تنزيل', // edit document kebab item and button text
        editDetails: 'تعديل التفاصيل', // edit document kebab item
        edit: 'تعديل', // edit account details
        continue: 'متابعة',
        share: 'مشاركة مع إدارة DHS', // share button
        shared: 'المستندات المشتركة', // label of shared tab on dashboard
        upload: 'تحميل أحد المستندات',
        uploadDocument: 'تحميل مستند', // not found
        view: 'دیکھیں',
        save: 'محفوظ کریں',
      },

      // account settings page
      account: {
        language: 'لغة', // not found open language selector
        firstName: 'الاسم الأول',
        whatIsYourFirstName: 'ما هو اسمك الأول؟',
        lastName: 'اسم العائلة',
        whatIsYourLastName: 'ما هو اسم عائلتك؟',
        dob: 'تاريخ الميلاد',
        whatIsYourDob: 'متى وُلدت؟',
        caseNumber: 'رقم الحالة',
        whatIsYourDshCaseNumber: 'ما هو رقم حالتك لدى إدارة DHS؟',
        dhsShow:
          'أضف رقم حالتك لدى إدارة DHS إذا كنت فردًا بأسرة عائدة. أما إذا كنت جديدًا ببرنامج PATH، فأضف رقم التذكرة التي استلمتها عند مجيئك لبرنامج PATH (مثال: CL ####).',
        locale: 'اختر اللغة',
      },

      // All copy related to the create shared folder flow
      sharing: {
        defaultName: 'Documents you shared with DHS on {date}', // not found
        confirmSharedFiles:
          'Documents to be shared DHS | Documents to be shared DHS', // not found
        plusNMore: '+ {count} more', // not found
        recipients: 'Recipients', // not found

        // placeholder text for the add recipient email field
        addRecipientPlaceholder: 'Enter email address', // not found

        // step titles in the share flow
        confirmTitle: 'Are you sure you want to share these Documents?', // not found
        addRecipientsTitle: 'Who are you sharing these document(s) with?', // not found
        selectFilesTitle: 'Select Documents', // not found

        disclaimerTitle: 'Reminder', // not found
        shareDocumentDisclaimer: [
          'My File NYC facilitates document sharing with {emails} email accounts',
          'Once documents are shared DHS employees may download and save your documents to submit as proof for your application. DHS may still have copies to support your case even if you unshare or delete them from My File.', // not found
        ],

        // on the confirmation step, could be "recipient" or "recipients" depending on number of items
        confirmRecipientsLabel:
          'Usted está compartiendo documentos con | Recipients', // not found
        tooManyRecipients: 'You can share with up to {count} people', // (not found) error text when trying to add more than 10 recipients
      },

      tabTitles: {
        about: 'عن',
        authorizing: 'Authorizing', // not important - used while logging in
        dashboard: 'لوحة المعلومات',
        document: 'وثائق', // used for document preview while page is loading, then changes to document title
        faq: 'الأسئلة الشائعة',
        shared: 'مشترك', // used in share flow
        sharedBy: 'مت مشاركتها بواسطة', // not found used in share flow
        termsOfUse: 'شروط الاستخدام', // not found used while viewing TOU
        welcome: 'مرحباً', // not found displayed on the initial landing page
      },

      delegateAccess: {
        disabledNotice: 'The delegation feature is currently disabled.', // not found
        pageTitle: 'Account Access', // not found title in account menu and page title of delegation flow
        menuTitle: 'Who Can Manage My Documents', // (not found) title in account menu and page title of delegation flow
        emailPlaceholder: 'Add people via email', // not found
        addConfirmationTitle:
          'Let this person manage documents on your account?', // not found
        addConfirmationBody:
          'They will be able to upload and share documents for you. They cannot delete documents. You can always remove their access to your account.', // not found
        addConfirmationAction: 'Yes, Give Access', // not found
        removeConfirmationTitle:
          'Remove this person from accessing your account?', // not found
        removeConfirmationBody:
          'They will no longer be able to manage or share documents for you. You can always give them access to your documents again in the Account menu settings.', // not found
        removeConfirmationAction: 'Yes, Remove', // not found
        uninviteConfirmationTitle: 'Cancel this invitation?', // not found
        uninviteConfirmationBody:
          'You can invite someone to manage your account from the Account menu settings.', // not found
        uninviteConfirmationAction: 'Yes, Cancel', // not found
        tooManyDelegates: 'Up to {count} people can access your account', // not found
        invitePending: 'Invitation pending', // not found
        inviteExpired: 'Invitation expired.', // not found
        resendInvite: 'Resend?', // not found
      },

      // Account Activity
      activity: {
        accessed: 'تم الوصول إليه',
        added: ' تمت إضافة',
        delegateInvitedClient: 'to manage and share documents on your behalf', // not found
        delegateInvitedCbo: 'to manage and share documents on their behalf', // not found
        delegateAcceptedClient:
          'can now manage and share documents on your behalf', // not found
        delegateAcceptedCbo:
          'can now manage and share documents on this account', // not found
        delegateDeletedClient: 'has been removed from your account', // not found
        delegateDeletedCbo: 'has been removed from this account ', // not found
        deleted: 'تم الحذف',
        edited: 'التفاصيل المحررة لـ',
        file: 'الملف',
        files: 'الوثائق',
        invited: 'مدعو',
        pageTitle: 'نشاط الحساب',
        shared: 'مشترك',
        today: 'TODAY', // not found
        you: 'You', // not found
      },

      // Copy where you are viewing shared folders
      sharedFolder: {
        // empty state for list of shared folders
        noCollections: `لم تُشارك أي مستندات بعد`, // message
        shareFirstDocument: 'شارك مستندك الأول', // call to action

        // empty state for an individual shared folder
        emptyCollection: 'تمت إزالة جميع المستندات من هذا المجلد', // message
        returnDashboard: 'العودة إلى لوحة التحكم', // call to action

        // empty state for list of clients who have shared collections with user
        noSharedDocuments: 'لم تستلم أي مستندات مشتركة حتى الآن',

        // title for collection table name column
        collectionTableTitle:
          'المستندات التي قمت بمشاركتها وتنظيمها حسب التاريخ',

        cbo: {
          selectClient: 'Select a client to access their account', // not found
          clickToRemove: 'Click {close} to remove a client', // not found
          noClientsTitle:
            'You have not been added to any client My File NYC accounts', // not found
          noClientsBody:
            "Once a client adds you to their My File NYC account, you'll be able to manage and share documents on their behalf from this screen.\n\nA client can provide access to their documents in the Account menu settings in My File NYC.", // not found
          noClientActionLabel: 'Not a case manager?', // not found
          noClientActionText:
            'If you are seeking permanent supportive housing, click here.', // not found
          removeConfirmationTitle: 'Remove this client from your My File NYC?', // not found
          removeConfirmationBody:
            'You will no longer be able to view, manage, or share documents on their behalf. This cannot be undone.', // not found
          removeConfirmationAction: 'Yes, Remove', // not found
          errorAcceptingInvite:
            'Invite could not be accepted. Please ensure you are logged in with the email address that received the invite.', // not found
        },

        agent: {
          clientFirstNameLabel: 'الاسم الأول', // label of client first name column in agent view
          clientLastNameLabel: 'اسم العائلة', // label of client last name column in agent view
          clientDob: 'تاريخ الميلاد', // label of client date of birth column in agent view
          clientCaseNum: 'رقم الحالة', // label of client case number column in agent view
          clientEmail: 'البريد الإلكتروني', // label of client case number column in agent view
          dateShared: 'اشتراک کی تاریخ', // label in side bar
          noClientActionLabel: 'Not a government employee?', // not found
          noClientActionText:
            'If you are seeking permanent supportive housing, click here.', // not found
          reorderFiles: 'إعادة ترتيب المستندات', // shown in agent view when downloading as PDF
          selectClient:
            'اختر العميل الذي يمكنه الوصول إلى المستندات التي تمت مشاركتها',
          sharedBy: 'تمت مشاركتها بواسطة', // (not found) label in side bar
          sharedFolderNameLabel: 'Name', // (not found) label of shared folder name column in agent view
          sharedWith: 'تمت المشاركة مع', // promt for agency email
        },

        landing: {
          community: 'COMMUNITY SERVICES', // not found
          agency: 'AGENCY SERVICES', // not found
        },

        $vuetify: {
          ...vuetifyEn,
          dataTable: {
            sortBy: 'Sort by', // not found
            ariaLabel: {
              sortNone: 'Do not sort', // not found
              activateAscending: 'Sort ascending', // not found
            },
          },
          noDataText: 'No data', // no found
        },
        validations: {
          ...validationEn.messages,
          whitelist: 'Must be an approved agency email', // not found
          notSameAsUserEmail: 'You cannot enter your own email address', // not found
        },
      },
    },
    ru: {
      // label appearing in tabular content (list of users, list of shared collections etc)
      // as well as side bar on document view
      dateAdded: `Дата добавления`,

      application: {
        title: 'My File NYC',
      },

      toast: {
        acceptedDelegateInvite: 'Delegate Access Accepted', // not found
        delegateRemoved: 'Client Removed', // not found
        downloadLoadingState: 'Подготовка скачивания',
        sharingComplete: 'Предоставление закончено',
        uploading: 'Добавление документа…', // displayed while a file is uploading
        uploadComplete: 'Отправка завершена',
        fileDeletedConfirmation: 'Документ удален',
        fileTooLarge: 'Слишком большой документ (должен быть < 10 МБ)', // not found
      },

      login: {
        loginButton: 'Войдите в систему и приступайте',
        getStarted: {
          client: 'Начать',
          cityEmployee: 'City Employee Login', // not found
          cboWorker: 'CBO Worker Login', // not found
        },
        welcomeTitle: 'Добро пожаловать',
        footerLogoAlt: 'Footer logo', // not found
      },

      navigation: {
        about: 'О сервисе',
        account: 'My Account Managers', // not found
        settings: 'Мой профиль',
        settingsFirstRun:
          'Мы приветствуем вас в сервисе My File NYC! Для начала ответьте на несколько вопросов о себе.', // not found
        welcomeFirstRun: 'Мы приветствуем вас в сервисе My File NYC!', // not found
        activity: 'Журнал действий',
        back: 'Назад',
        clients: 'Клиенты', // navigate back to agent view desktop not found
        close: 'Закрыть',
        dashboard: 'Панель',
        faq: 'Часто задаваемые вопросы',
        loading: 'Загрузка',
        loggingIn: 'Выполняется вход…',
        manageAccounts: 'Manage Accounts', // not found
        signIn: 'Войти',
        signOut: 'Выйти',
        switchAccount: 'Переключение клиентов',
        termsOfUse: 'Условия использования',
        nycId: 'Возникли проблемы с входом в систему? ',
      },

      document: {
        // This is the title of the confirmation dialog for deleting a document
        deleteConfirmationTitle: 'Удалить этот документ?',
        // This is the body content of the confirmation dialog for deleting a document
        deleteConfirmationBody: `Лица с общим доступом больше не смогут просматривать этот документ. Отмена этого действия невозможна.`,
        documentMenu: 'Меню документа',
        documentOptions: 'Варианты',
        downloadZip: 'Загрузить все',
        downloadPdf: 'Загрузить PDF', // not found
        description: 'Описание документа', // displayed beneath the document and expands to show description (if any)
        editDetailsTitle: 'Редактировать данные', // page title on edit details screen
        enterNamePlaceholder: 'Присвойте этому документу имя',
        enterDescriptionPlaceholder: 'Опишите этот документ (необязательно)',
        documentName: 'Какой документ вы загрузили？', // shown as a label on edit details screen

        noDocuments: 'В вашей учетной записи еще нет сохраненных документов.', // not found shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'Добавьте свой первый документ', // label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: 'Название документа',
      },

      controls: {
        accept: 'Принять', // eg. accept terms of use
        add: 'Добавить', // eg. add a delegate
        allFiles: 'Ваши документы', // shown as tab label on the dashboard
        cancel: 'Отменить', // cancel button
        confirm: 'Подтвердить',
        confirmDelete: 'Да, удалить',
        declineAndLogOut: 'Отклонить и выйти', // (not found) decline TOS button
        delete: 'Удалить', // delete document kebab item
        done: 'Готово',
        download: 'Загрузить', // edit document kebab item and button text
        editDetails: 'Редактировать данные', // edit document kebab item
        edit: 'Редактировать', // edit account details
        continue: 'Продолжить',
        share: 'Предоставить доступ DHS', // share button
        shared: 'Общие документы', // label of shared tab on dashboard
        upload: 'Загрузите документ',
        uploadDocument: 'Загрузить документ',
        view: 'Просмотреть',
        save: 'Сохранить',
      },

      // account settings page
      account: {
        language: 'Язык', // not found open language selector
        firstName: 'Имя',
        whatIsYourFirstName: 'Как вас зовут?',
        lastName: 'Фамилия',
        whatIsYourLastName: 'Какая ваша фамилия?',
        dob: 'Дата рождения',
        whatIsYourDob: 'Когда вы родились?',
        caseNumber: 'Номер дела',
        whatIsYourDshCaseNumber: 'Какой номер вашего дела в DHS?',
        dhsShow:
          'Введите номер вашего дела DHS, если вы семья, которая снова возвращается в приют. Если вы новый участник PATH, введите номер билета, который вы получили, когда пришли в PATH (пример: CL ####).',
        locale: 'Выбрать язык',
      },

      // All copy related to the create shared folder flow
      sharing: {
        defaultName: 'Documents you shared with DHS on {date}', // not found
        confirmSharedFiles:
          'Documents to be shared DHS | Documents to be shared DHS', // not found
        plusNMore: '+ {count} more', // not found
        recipients: 'Recipients', // not found

        // placeholder text for the add recipient email field
        addRecipientPlaceholder: 'Введите адрес электронной почты', // not found

        // step titles in the share flow
        confirmTitle: 'Предоставить доступ к этим документам?',
        addRecipientsTitle: 'Кому предоставить доступ к этим документам?',
        selectFilesTitle: 'Выбрать документы',

        disclaimerTitle: 'Reminder', // not found
        shareDocumentDisclaimer: [
          'My File NYC facilitates document sharing with {emails} email accounts',
          'Once documents are shared DHS employees may download and save your documents to submit as proof for your application. DHS may still have copies to support your case even if you unshare or delete them from My File.', // not found
        ],

        // on the confirmation step, could be "recipient" or "recipients" depending on number of items
        confirmRecipientsLabel:
          'Usted está compartiendo documentos con | Recipients', // not found
        tooManyRecipients: 'You can share with up to {count} people', // (not found) error text when trying to add more than 10 recipients
      },

      tabTitles: {
        about: 'О портале', // not found
        authorizing: 'Authorizing', // not found not important - used while logging in
        dashboard: 'Панель',
        document: 'Документ', // used for document preview while page is loading, then changes to document title
        faq: 'Часто задаваемые вопросы',
        shared: 'Доступ предоставлено:', // not found used in share flow
        sharedBy: 'Доступ предоставил пользователь:', // not found used in share flow
        termsOfUse: 'Условия использования', // not found used while viewing TOU
        welcome: 'Добро пожаловать', // not found displayed on the initial landing page
      },

      delegateAccess: {
        disabledNotice: 'The delegation feature is currently disabled.', // not found
        pageTitle: 'Account Access', // not found title in account menu and page title of delegation flow
        menuTitle: 'Who Can Manage My Documents', // (not found) title in account menu and page title of delegation flow
        emailPlaceholder: 'Add people via email', // not found
        addConfirmationTitle:
          'Let this person manage documents on your account?', // not found
        addConfirmationBody:
          'They will be able to upload and share documents for you. They cannot delete documents. You can always remove their access to your account.', // not found
        addConfirmationAction: 'Yes, Give Access', // not found
        removeConfirmationTitle:
          'Remove this person from accessing your account?', // not found
        removeConfirmationBody:
          'They will no longer be able to manage or share documents for you. You can always give them access to your documents again in the Account menu settings.', // not found
        removeConfirmationAction: 'Yes, Remove', // not found
        uninviteConfirmationTitle: 'Cancel this invitation?', // not found
        uninviteConfirmationBody:
          'You can invite someone to manage your account from the Account menu settings.', // not found
        uninviteConfirmationAction: 'Yes, Cancel', // not found
        tooManyDelegates: 'Up to {count} people can access your account', // not found
        invitePending: 'Invitation pending', // not found
        inviteExpired: 'Invitation expired.', // not found
        resendInvite: 'Resend?', // not found
      },

      // Account Activity
      activity: {
        accessed: 'Доступ получен', // not found
        added: 'Добавлено', // not afound
        delegateInvitedClient: 'to manage and share documents on your behalf', // not found
        delegateInvitedCbo: 'to manage and share documents on their behalf', // not found
        delegateAcceptedClient:
          'can now manage and share documents on your behalf', // not found
        delegateAcceptedCbo:
          'can now manage and share documents on this account', // not found
        delegateDeletedClient: 'has been removed from your account', // not found
        delegateDeletedCbo: 'has been removed from this account ', // not found
        deleted: 'Удалено', // not found
        edited: 'Отредактированные данные касательно', // not found
        file: 'Файл', // not found
        files: 'Документы', // not found
        invited: 'Приглашение отправлено', // not found
        pageTitle: 'Действия в учетной записи', // not found
        shared: 'Доступ предоставлено:', // not found
        today: 'TODAY', // not found
        you: 'You', // not found
      },

      // Copy where you are viewing shared folders
      sharedFolder: {
        // empty state for list of shared folders
        noCollections: `Вы еще никому не предоставили доступ к своим документам`, // message
        shareFirstDocument: 'Предоставьте доступ к документу', // (not found) call to action

        // empty state for an individual shared folder
        emptyCollection: 'В этой папке удалены все файлы.', // (not found) message
        returnDashboard: 'Вернуться на панель', // (not found) call to action

        // empty state for list of clients who have shared collections with user
        noSharedDocuments: 'Вам еще никто не предоставил доступ к документам.', // not found

        // title for collection table name column
        collectionTableTitle:
          'Документы, к которым вы предоставили доступ, упорядоченные по дате', // not found
      },

      cbo: {
        selectClient: 'Select a client to access their account', // not found
        clickToRemove: 'Click {close} to remove a client', // not found
        noClientsTitle:
          'You have not been added to any client My File NYC accounts', // not found
        noClientsBody:
          "Once a client adds you to their My File NYC account, you'll be able to manage and share documents on their behalf from this screen.\n\nA client can provide access to their documents in the Account menu settings in My File NYC.", // not found
        noClientActionLabel: 'Not a case manager?', // not found
        noClientActionText:
          'If you are seeking permanent supportive housing, click here.', // not found
        removeConfirmationTitle: 'Remove this client from your My File NYC?', // not found
        removeConfirmationBody:
          'You will no longer be able to view, manage, or share documents on their behalf. This cannot be undone.', // not found
        removeConfirmationAction: 'Yes, Remove', // not found
        errorAcceptingInvite:
          'Invite could not be accepted. Please ensure you are logged in with the email address that received the invite.', // not found
      },

      agent: {
        clientFirstNameLabel: 'Имя', // label of client first name column in agent view
        clientLastNameLabel: 'Фамилия', // label of client last name column in agent view
        clientDob: 'Дата рождения', // label of client date of birth column in agent view
        clientCaseNum: 'Номер дела', // label of client case number column in agent view
        clientEmail: 'Адрес электронной почты', // label of client case number column in agent view
        dateShared: 'Дата предоставления', // label in side bar
        noClientActionLabel: 'Not a government employee?', // not found
        noClientActionText:
          'If you are seeking permanent supportive housing, click here.', // not found
        reorderFiles: 'Изменить порядок документов', // (not found) shown in agent view when downloading as PDF
        selectClient:
          'Выберите клиента для предоставления доступа к общим документам',
        sharedBy: 'Доступ предоставил пользователь:', // (not found) label in side bar
        sharedFolderNameLabel: 'Name', // (not found) label of shared folder name column in agent view
        sharedWith: 'Предоставить доступ (кому):', // promt for agency email
      },

      landing: {
        community: 'COMMUNITY SERVICES', // not found
        agency: 'AGENCY SERVICES', // not found
      },

      $vuetify: {
        ...vuetifyEn,
        dataTable: {
          sortBy: 'Sort by', // not found
          ariaLabel: {
            sortNone: 'Do not sort', // not found
            activateAscending: 'Sort ascending', // not found
          },
        },
        noDataText: 'No data', // no found
      },
      validations: {
        ...validationEn.messages,
        whitelist: 'Must be an approved agency email', // not found
        notSameAsUserEmail: 'You cannot enter your own email address', // not found
      },
    },
    urd: {
      // label appearing in tabular content (list of users, list of shared collections etc)
      // as well as side bar on document view
      // label appearing in tabular content (list of users, list of shared collections etc)
      // as well as side bar on document view
      dateAdded: `شامل کرنے کی تاریخ`,

      application: {
        title: 'My File NYC',
      },

      toast: {
        acceptedDelegateInvite: 'Delegate Access Accepted', // not found
        delegateRemoved: 'Client Removed', // not found
        downloadLoadingState: 'ڈاؤن لوڈ کی تیاری ہو رہی ہے',
        sharingComplete: 'اشتراک مکمل ہو گیا',
        uploading: 'دستاویز شامل کی جا رہی ہے…', // displayed while a file is uploading
        uploadComplete: 'اپ لوڈ مکمل ہو گیا',
        fileDeletedConfirmation: 'دستاویز حذف ہو گئی',
        fileTooLarge: 'دستاویز بہت بڑی ہے (<10MB ہونا چاہیے)',
      },

      login: {
        loginButton: 'لاگ ان کریں اور شروع کریں',
        getStarted: {
          client: 'شروع کرنے کے',
          cityEmployee: 'City Employee Login', // not found
          cboWorker: 'CBO Worker Login', // not found
        },
        welcomeTitle: 'خوش آمدید',
        footerLogoAlt: 'Footer logo', // not found
      },

      navigation: {
        about: 'کے بارے میں',
        account: 'My Account Managers', // not found
        settings: 'میری پروفائل',
        settingsFirstRun:
          'My File NYC (مائی فائل NYC) میں خوش آمدید! براہ کرم شروع کرنے کے لیے اپنے بارے میں چند سوالوں کا جواب دیں۔',
        welcomeFirstRun: 'My File NYC (مائی فائل NYC) میں خوش آمدید!',
        activity: 'سرگرمی کی لاگ',
        back: 'پیچھے',
        clients: 'کلائنٹس', // navigate back to agent view desktop
        close: 'بند کریں',
        dashboard: 'ڈیش بورڈ ',
        faq: 'FAQ', // not found
        loading: 'لوڈ ہو رہا ہے',
        loggingIn: 'لاگ ان ہو رہا ہے…',
        manageAccounts: 'Manage Accounts', // not found
        signIn: 'سائن ان کریں',
        signOut: 'سائن آؤٹ',
        switchAccount: 'Switch Clients', // not found
        termsOfUse: 'استعمال کی شرائط',
        nycId: 'لاگ ان کرنے میں دشواری ہو رہی ہے؟',
      },

      document: {
        // This is the title of the confirmation dialog for deleting a document
        deleteConfirmationTitle: 'یہ دستاویز حذف کریں؟',
        // This is the body content of the confirmation dialog for deleting a document
        deleteConfirmationBody: `اشتراک کردہ رسائی والا کوئی بھی شخص اس دستاویز کو مزید نہیں دیکھ سکے گا۔ اسے کالعدم نہیں کیا جا سکتا`,
        documentMenu: 'دستاویز مینو',
        documentOptions: 'اختیارات',
        downloadZip: 'سبھی ڈاؤن لوڈ کریں',
        downloadPdf: 'PDF ڈاؤن لوڈ کریں',
        description: 'دستاویز کی وضاحت', // displayed beneath the document and expands to show description (if any)
        editDetailsTitle: 'تفصیلات میں ترمیم کریں', // page title on edit details screen
        enterNamePlaceholder: 'اس دستاویز کو ایک نام دیں',
        enterDescriptionPlaceholder: 'اس دستاویز کی وضاحت کریں (اختیاری)',
        documentName: 'آپ نے کس قسم کی دستاویز اپ لوڈ کی؟', // shown as a label on edit details screen

        noDocuments:
          'آپ کے اکاؤنٹ میں ابھی تک کوئی دستاویز محفوظ نہیں کی گئی ہے۔', // shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'اپنی پہلی دستاویز شامل کریں', // label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: 'دستاویز کا نام',
      },

      controls: {
        accept: 'قبول کریں', // eg. accept terms of use
        add: 'شامل کریں', // eg. add a delegate
        allFiles: 'آپ کی دستاویزات', // shown as tab label on the dashboard
        cancel: 'منسوخ کریں', // cancel button
        confirm: 'تصدیق کریں',
        confirmDelete: 'ہاں، حذف کریں',
        declineAndLogOut: 'مسترد کریں اور لاگ آؤٹ کریں', // decline TOS button
        delete: 'حذف کریں', // delete document kebab item
        done: 'ہو گیا',
        download: 'ڈاؤن لوڈ کریں', // edit document kebab item and button text
        editDetails: 'تفصیلات میں ترمیم کریں', // edit document kebab item
        edit: 'ترمیم کریں', // edit account details
        continue: 'جاری رکھیں',
        share: 'DHS کے ساتھ اشتراک کریں', // share button
        shared: 'شیئر کردہ دستاویزات', // label of shared tab on dashboard
        upload: 'ایک دستاویز اپ لوڈ کریں',
        uploadDocument: 'دستاویز اپ لوڈ کریں',
        view: 'دیکھیں',
        save: 'محفوظ کریں',
      },

      // account settings page
      account: {
        language: 'Language', // not found open language selector
        firstName: 'پہلا نام',
        whatIsYourFirstName: 'آپ کا پہلا نام کیا ہے؟',
        lastName: 'پہلا نام',
        whatIsYourLastName: 'آپ کا آخری نام کیا ہے؟',
        dob: 'تاریخ پیدائش',
        whatIsYourDob: 'آپ کب پیدا ہوئے؟',
        caseNumber: 'کیس نمبر',
        whatIsYourDshCaseNumber: 'آپ کا DHS کیس نمبر کیا ہے؟',
        dhsShow:
          'اگر آپ واپس آنے والے خاندان ہیں تو اپنا DHS کیس نمبر شامل کریں۔ اگر آپ PATH میں نئے ہیں، تو وہ ٹکٹ نمبر شامل کریں جو آپ کو PATH پر آنے پر موصول ہوا تھا (مثال: CL ####)',
        locale: 'زبان منتخب کریں',
      },

      // All copy related to the create shared folder flow
      sharing: {
        defaultName: 'Documents you shared with DHS on {date}', // not found
        confirmSharedFiles:
          'Documents to be shared DHS | Documents to be shared DHS', // not found
        plusNMore: '+ {count} more', // not found
        recipients: 'Recipients', // not found

        // placeholder text for the add recipient email field
        addRecipientPlaceholder: 'Enter email address', // not found

        // step titles in the share flow
        confirmTitle: 'Are you sure you want to share these Documents?', // not found
        addRecipientsTitle: 'Who are you sharing these document(s) with?', // not found
        selectFilesTitle: 'Select Documents', // not found

        disclaimerTitle: 'Reminder', // not found
        shareDocumentDisclaimer: [
          'My File NYC facilitates document sharing with {emails} email accounts',
          'Once documents are shared DHS employees may download and save your documents to submit as proof for your application. DHS may still have copies to support your case even if you unshare or delete them from My File.', // not found
        ],

        // on the confirmation step, could be "recipient" or "recipients" depending on number of items
        confirmRecipientsLabel:
          'Usted está compartiendo documentos con | Recipients', // not found
        tooManyRecipients: 'You can share with up to {count} people', // (not found) error text when trying to add more than 10 recipients
      },

      tabTitles: {
        about: 'کے بارے میں',
        authorizing: 'Authorizing', // not found not important - used while logging in
        dashboard: 'ڈیش بورڈ',
        document: 'دستاویزات', // used for document preview while page is loading, then changes to document title
        faq: 'FAQ',
        shared: 'شیئر کردہ', // used in share flow
        sharedBy: 'شیئر کردہ بذریعہ', // used in share flow
        termsOfUse: 'استعمال کی شرائط', // used while viewing TOU
        welcome: 'خوش آمدید', // displayed on the initial landing page
      },

      delegateAccess: {
        disabledNotice: 'The delegation feature is currently disabled.', // not found
        pageTitle: 'Account Access', // not found title in account menu and page title of delegation flow
        menuTitle: 'Who Can Manage My Documents', // (not found) title in account menu and page title of delegation flow
        emailPlaceholder: 'Add people via email', // not found
        addConfirmationTitle:
          'Let this person manage documents on your account?', // not found
        addConfirmationBody:
          'They will be able to upload and share documents for you. They cannot delete documents. You can always remove their access to your account.', // not found
        addConfirmationAction: 'Yes, Give Access', // not found
        removeConfirmationTitle:
          'Remove this person from accessing your account?', // not found
        removeConfirmationBody:
          'They will no longer be able to manage or share documents for you. You can always give them access to your documents again in the Account menu settings.', // not found
        removeConfirmationAction: 'Yes, Remove', // not found
        uninviteConfirmationTitle: 'Cancel this invitation?', // not found
        uninviteConfirmationBody:
          'You can invite someone to manage your account from the Account menu settings.', // not found
        uninviteConfirmationAction: 'Yes, Cancel', // not found
        tooManyDelegates: 'Up to {count} people can access your account', // not found
        invitePending: 'Invitation pending', // not found
        inviteExpired: 'Invitation expired.', // not found
        resendInvite: 'Resend?', // not found
      },

      // Account Activity
      activity: {
        accessed: 'رسائی حاصل کردہ',
        added: 'شامل کردہ',
        delegateInvitedClient: 'to manage and share documents on your behalf', // not found
        delegateInvitedCbo: 'to manage and share documents on their behalf', // not found
        delegateAcceptedClient:
          'can now manage and share documents on your behalf', // not found
        delegateAcceptedCbo:
          'can now manage and share documents on this account', // not found
        delegateDeletedClient: 'has been removed from your account', // not found
        delegateDeletedCbo: 'has been removed from this account ', // not found
        deleted: 'حذف کردہ',
        edited: 'تفصیلات میں ترمیم کی گئی بابت',
        file: 'فائل',
        files: 'دستاویزات',
        invited: 'مدعو کیا گیا',
        pageTitle: 'اکاؤنٹ کی سرگرمی',
        shared: 'شیئر کردہ', // not found
        today: 'TODAY', // not found
        you: 'You', // not found
      },

      // Copy where you are viewing shared folders
      sharedFolder: {
        // empty state for list of shared folders
        noCollections: `آپ نے ابھی تک کسی دستاویز کا اشتراک نہیں کیا ہے`, // message
        shareFirstDocument: 'اپنی پہلی دستاویز شیئر کریں', // call to action

        // empty state for an individual shared folder
        emptyCollection: 'تمام دستاویزات کو اس فولڈر سے ہٹا دیا گیا ہے', // message
        returnDashboard: 'ڈیش بورڈ پر لوٹیں', // call to action

        // empty state for list of clients who have shared collections with user
        noSharedDocuments:
          'آپ کو ابھی تک کوئی شیئر کردہ دستاویز موصول نہںي ہوئی ہے۔',

        // title for collection table name column
        collectionTableTitle:
          'دستاویزات جو آپ نے شیئر کی ہیں، مرتب کردہ بہ لحاظ تاریخ',
      },

      cbo: {
        selectClient: 'Select a client to access their account', // not found
        clickToRemove: 'Click {close} to remove a client', // not found
        noClientsTitle:
          'You have not been added to any client My File NYC accounts', // not found
        noClientsBody:
          "Once a client adds you to their My File NYC account, you'll be able to manage and share documents on their behalf from this screen.\n\nA client can provide access to their documents in the Account menu settings in My File NYC.", // not found
        noClientActionLabel: 'Not a case manager?', // not found
        noClientActionText:
          'If you are seeking permanent supportive housing, click here.', // not found
        removeConfirmationTitle: 'Remove this client from your My File NYC?', // not found
        removeConfirmationBody:
          'You will no longer be able to view, manage, or share documents on their behalf. This cannot be undone.', // not found
        removeConfirmationAction: 'Yes, Remove', // not found
        errorAcceptingInvite:
          'Invite could not be accepted. Please ensure you are logged in with the email address that received the invite.', // not found
      },

      agent: {
        clientFirstNameLabel: 'پہلا نام', // label of client first name column in agent view
        clientLastNameLabel: 'آخری نام', // label of client last name column in agent view
        clientDob: 'تاریخ پیدائش', // label of client date of birth column in agent view
        clientCaseNum: 'کیس نمبر', // label of client case number column in agent view
        clientEmail: 'ای میل', // label of client case number column in agent view
        dateShared: 'اشتراک کی تاریخ', // label in side bar
        noClientActionLabel: 'Not a government employee?', // not found
        noClientActionText:
          'If you are seeking permanent supportive housing, click here.', // not found
        reorderFiles: 'ریکاردر دستاویزات', // shown in agent view when downloading as PDF
        selectClient:
          'اشتراک کردہ دستاویزات تک رسائی کے لیے کلائنٹ کو منتخب کریں',
        sharedBy: 'شیئر کردہ بذریعہ', // label in side bar
        sharedFolderNameLabel: 'Name', // (not found) label of shared folder name column in agent view
        sharedWith: 'اس کے ساتھ اشتراک کردہ`:', // promt for agency email
      },

      landing: {
        community: 'COMMUNITY SERVICES', // not found
        agency: 'AGENCY SERVICES', // not found
      },

      $vuetify: {
        ...vuetifyEn,
        dataTable: {
          sortBy: 'Sort by', // not found
          ariaLabel: {
            sortNone: 'Do not sort', // not found
            activateAscending: 'Sort ascending', // not found
          },
        },
        noDataText: 'No data', // no found
      },
      validations: {
        ...validationEn.messages,
        whitelist: 'Must be an approved agency email', // not found
        notSameAsUserEmail: 'You cannot enter your own email address', // not found
      },
    },
    ko: {
      // label appearing in tabular content (list of users, list of shared collections etc)
      // as well as side bar on document view
      dateAdded: `추가된 날짜`,

      application: {
        title: 'My File NYC',
      },

      toast: {
        acceptedDelegateInvite: 'Delegate Access Accepted', // not found
        delegateRemoved: 'Client Removed', // not found
        downloadLoadingState: 'Preparing Download', // not found
        sharingComplete: '공유 완료',
        uploading: 'Adding Document...', // not found displayed while a file is uploading
        uploadComplete: 'Upload Complete', // not found
        fileDeletedConfirmation: 'Document Deleted', // not found
        fileTooLarge: 'Document too large (must be < 10MB)', // not found
      },

      login: {
        loginButton: '로그인하고 시작하십시오.',
        getStarted: {
          client: 'Get Started', // not found
          cityEmployee: 'City Employee Login', // not found
          cboWorker: 'CBO Worker Login', // not found
        },
        welcomeTitle: 'Welcome', // not found
        footerLogoAlt: 'Footer logo', // not found
      },

      navigation: {
        about: 'About', // not found
        account: 'My Account Managers', // not found
        settings: '내 프로필',
        settingsFirstRun:
          'Welcome to #My File NYC&! Please answer a few questions about yourself to get started.', // not found
        welcomeFirstRun: 'Welcome to My File NYC!', // not found
        activity: 'Activity Log', // not found
        back: 'Back', // not found
        clients: 'Clients', // navigate back to agent view desktop not found
        close: 'Close', // not found
        dashboard: 'Dashboard', // not found
        faq: 'FAQ', // not found
        loading: 'Loading', // not found
        loggingIn: 'Logging in...', // not found
        manageAccounts: 'Manage Accounts', // not found
        signIn: 'Sign in', // not found
        signOut: '로그아웃',
        switchAccount: 'Switch Clients', // not found
        termsOfUse: 'Terms of Use', // not found
        nycId: '로그인하는 데 문제가 있습니까? ',
      },

      document: {
        // This is the title of the confirmation dialog for deleting a document
        deleteConfirmationTitle: 'Delete this document?', // not found
        // This is the body content of the confirmation dialog for deleting a document
        deleteConfirmationBody: `공유 액세스 권한이 있는 사람은 더 이상 이 서류를 볼 수 없습니다. 취소할 수 없습니다.`,
        documentMenu: 'Document menu', // not found
        documentOptions: '옵션',
        downloadZip: 'Download All', // not found
        downloadPdf: 'Download PDF', // not found
        description: '서류 설명', // displayed beneath the document and expands to show description (if any)
        editDetailsTitle: '세부 정보 편집', // page title on edit details screen
        enterNamePlaceholder: 'Give this document a name', // not found
        enterDescriptionPlaceholder: '이 서류에 대해 설명해주십시오(선택사항)',
        documentName: '어떤 종류의 서류를 업로드했습니까?', // shown as a label on edit details screen

        noDocuments: 'There are no documents saved to your account yet.', // not found shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'Add your first document', // not found label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: '서류 이름',
      },

      controls: {
        accept: 'Accept', // (not found) eg. accept terms of use
        add: 'Add', // (not found) eg. add a delegate
        allFiles: 'Your Documents', // (not found) shown as tab label on the dashboard
        cancel: '취소', // cancel button
        confirm: 'Confirm', // not found
        confirmDelete: '네, 삭제합니다',
        declineAndLogOut: 'Decline & Log Out', // (not found) decline TOS button
        delete: '삭제', // delete document kebab item
        done: 'Done', // not found
        download: '다운로드', // edit document kebab item and button text
        editDetails: '세부 정보 편집', // edit document kebab item
        edit: '편집', // edit account details
        continue: '계속',
        share: 'DHS와 공유', // share button
        shared: 'Shared Documents', // (not found) label of shared tab on dashboard
        upload: 'Upload a Document', // (not found)
        uploadDocument: 'Upload Document', // not found
        view: '보기',
        save: '저장',
      },

      // account settings page
      account: {
        language: 'Language', // not found open language selector
        firstName: '이름',
        whatIsYourFirstName: '귀하의 이름은 무엇입니까?',
        lastName: '성',
        whatIsYourLastName: '귀하의 성은 무엇입니까?',
        dob: '생년월일',
        whatIsYourDob: '귀하는 언제 태어났습니까?',
        caseNumber: '케이스 번호',
        whatIsYourDshCaseNumber: '귀하의 DHS 케이스 번호는 무엇입니까?',
        dhsShow:
          '귀국 가족인 경우 DHS 케이스 번호를 추가하십시오. PATH를 처음 사용하는 경우 PATH에 왔을 때 받은 티켓 번호(예: CL ####)를 추가하십시오.',
        locale: '언어 선택',
      },

      // All copy related to the create shared folder flow
      sharing: {
        defaultName: 'Documents you shared with DHS on {date}', // not found
        confirmSharedFiles:
          'Documents to be shared DHS | Documents to be shared DHS', // not found
        plusNMore: '+ {count} more', // not found
        recipients: 'Recipients', // not found

        // placeholder text for the add recipient email field
        addRecipientPlaceholder: 'Enter email address', // not found

        // step titles in the share flow
        confirmTitle: 'Are you sure you want to share these Documents?', // not found
        addRecipientsTitle: 'Who are you sharing these document(s) with?', // not found
        selectFilesTitle: 'Select Documents', // not found

        disclaimerTitle: 'Reminder', // not found
        shareDocumentDisclaimer: [
          'My File NYC facilitates document sharing with {emails} email accounts',
          'Once documents are shared DHS employees may download and save your documents to submit as proof for your application. DHS may still have copies to support your case even if you unshare or delete them from My File.', // not found
        ],

        // on the confirmation step, could be "recipient" or "recipients" depending on number of items
        confirmRecipientsLabel:
          'Usted está compartiendo documentos con | Recipients', // not found
        tooManyRecipients: 'You can share with up to {count} people', // (not found) error text when trying to add more than 10 recipients
      },

      tabTitles: {
        about: 'About', // not found
        authorizing: 'Authorizing', // not found not important - used while logging in
        dashboard: 'Dashboard', // not found
        document: 'Dokument', // used for document preview while page is loading, then changes to document title
        faq: 'FAQ', // not found
        shared: 'Shared', // not found used in share flow
        sharedBy: 'Shared by', // not found used in share flow
        termsOfUse: 'Terms of Use', // not found used while viewing TOU
        welcome: 'Welcome', // not found displayed on the initial landing page
      },

      delegateAccess: {
        disabledNotice: 'The delegation feature is currently disabled.', // not found
        pageTitle: 'Account Access', // not found title in account menu and page title of delegation flow
        menuTitle: 'Who Can Manage My Documents', // (not found) title in account menu and page title of delegation flow
        emailPlaceholder: 'Add people via email', // not found
        addConfirmationTitle:
          'Let this person manage documents on your account?', // not found
        addConfirmationBody:
          'They will be able to upload and share documents for you. They cannot delete documents. You can always remove their access to your account.', // not found
        addConfirmationAction: 'Yes, Give Access', // not found
        removeConfirmationTitle:
          'Remove this person from accessing your account?', // not found
        removeConfirmationBody:
          'They will no longer be able to manage or share documents for you. You can always give them access to your documents again in the Account menu settings.', // not found
        removeConfirmationAction: 'Yes, Remove', // not found
        uninviteConfirmationTitle: 'Cancel this invitation?', // not found
        uninviteConfirmationBody:
          'You can invite someone to manage your account from the Account menu settings.', // not found
        uninviteConfirmationAction: 'Yes, Cancel', // not found
        tooManyDelegates: 'Up to {count} people can access your account', // not found
        invitePending: 'Invitation pending', // not found
        inviteExpired: 'Invitation expired.', // not found
        resendInvite: 'Resend?', // not found
      },

      // Account Activity
      activity: {
        accessed: 'accessed', // not found
        added: 'added', // not afound
        delegateInvitedClient: 'to manage and share documents on your behalf', // not found
        delegateInvitedCbo: 'to manage and share documents on their behalf', // not found
        delegateAcceptedClient:
          'can now manage and share documents on your behalf', // not found
        delegateAcceptedCbo:
          'can now manage and share documents on this account', // not found
        delegateDeletedClient: 'has been removed from your account', // not found
        delegateDeletedCbo: 'has been removed from this account ', // not found
        deleted: 'deleted', // not found
        edited: 'edited details of', // not found
        file: 'file', // not found
        files: 'documents', // not found
        invited: 'invited', // not found
        pageTitle: 'Account Activity', // not found
        shared: 'shared', // not found
        today: 'TODAY', // not found
        you: 'You', // not found
      },

      // Copy where you are viewing shared folders
      sharedFolder: {
        // empty state for list of shared folders
        noCollections: `아직 공유한 서류가 없습니다`, // message
        shareFirstDocument: 'Share your first document', // (not found) call to action

        // empty state for an individual shared folder
        emptyCollection: 'All documents have been removed from this folder.', // (not found) message
        returnDashboard: 'Return to dashboard', // (not found) call to action

        // empty state for list of clients who have shared collections with user
        noSharedDocuments: "You haven't received any shared documents yet.", // not found

        // title for collection table name column
        collectionTableTitle: "Documents you've shared, organized by date", // not found
      },

      cbo: {
        selectClient: 'Select a client to access their account', // not found
        clickToRemove: 'Click {close} to remove a client', // not found
        noClientsTitle:
          'You have not been added to any client My File NYC accounts', // not found
        noClientsBody:
          "Once a client adds you to their My File NYC account, you'll be able to manage and share documents on their behalf from this screen.\n\nA client can provide access to their documents in the Account menu settings in My File NYC.", // not found
        noClientActionLabel: 'Not a case manager?', // not found
        noClientActionText:
          'If you are seeking permanent supportive housing, click here.', // not found
        removeConfirmationTitle: 'Remove this client from your My File NYC?', // not found
        removeConfirmationBody:
          'You will no longer be able to view, manage, or share documents on their behalf. This cannot be undone.', // not found
        removeConfirmationAction: 'Yes, Remove', // not found
        errorAcceptingInvite:
          'Invite could not be accepted. Please ensure you are logged in with the email address that received the invite.', // not found
      },

      agent: {
        clientFirstNameLabel: '이름', // label of client first name column in agent view
        clientLastNameLabel: '성', // label of client last name column in agent view
        clientDob: '생년월일', // label of client date of birth column in agent view
        clientCaseNum: '케이스 번호', // label of client case number column in agent view
        clientEmail: '이메일', // label of client case number column in agent view
        dateShared: '공유 날짜 ', // label in side bar
        noClientActionLabel: 'Not a government employee?', // not found
        noClientActionText:
          'If you are seeking permanent supportive housing, click here.', // not found
        reorderFiles: 'Reorder Documents', // (not found) shown in agent view when downloading as PDF
        selectClient: '공유 문서에 액세스할 고객 선택',
        sharedBy: 'Shared By', // (not found) label in side bar
        sharedFolderNameLabel: 'Name', // (not found) label of shared folder name column in agent view
        sharedWith: '공유 대상:', // promt for agency email
      },

      landing: {
        community: 'COMMUNITY SERVICES', // not found
        agency: 'AGENCY SERVICES', // not found
      },

      $vuetify: {
        ...vuetifyEn,
        dataTable: {
          sortBy: 'Sort by', // not found
          ariaLabel: {
            sortNone: 'Do not sort', // not found
            activateAscending: 'Sort ascending', // not found
          },
        },
        noDataText: 'No data', // no found
      },
      validations: {
        ...validationEn.messages,
        whitelist: 'Must be an approved agency email', // not found
        notSameAsUserEmail: 'You cannot enter your own email address', // not found
      },
    },
    es: {
      // label appearing in tabular content (list of users, list of shared collections etc)
      // as well as side bar on document view
      dateAdded: 'Fecha de adición',

      application: {
        title: 'My File NYC',
      },

      toast: {
        acceptedDelegateInvite: 'Delegate Access Accepted', // not found
        delegateRemoved: 'Client Removed', // not found
        downloadLoadingState: 'Preparing Download', // not found
        sharingComplete: 'Intercambio completo',
        uploading: 'Adding Document...', // not found displayed while a file is uploading
        uploadComplete: 'Upload Complete', // not found
        fileDeletedConfirmation: 'Document Deleted', // not found
        fileTooLarge: 'Document too large (must be < 10MB)', // not found
      },

      login: {
        loginButton: 'Acceda y empiece',
        getStarted: {
          client: 'Empezar',
          cityEmployee: 'City Employee Login', // not found
          cboWorker: 'CBO Worker Login', // not found
        },
        welcomeTitle: 'Bienvenido',
        footerLogoAlt: 'Footer logo', // not found
      },

      navigation: {
        about: 'À propos',
        account: 'My Account Managers', // not found
        settings: 'Mi perfil',
        settingsFirstRun:
          '¡Le damos la bienvenida a Mi archivo NYC! Para comenzar, responda unas preguntas sobre usted.',
        welcomeFirstRun: '¡Le damos la bienvenida a Mi archivo NYC!',
        activity: 'Journal des activités',
        back: 'Atrás',
        clients: 'Clientes', // navigate back to agent view desktop
        close: 'Cerrar',
        dashboard: 'Panel',
        faq: 'PREGUNTAS FRECUENTES',
        loading: 'Cargando',
        loggingIn: 'Registrándose...',
        manageAccounts: 'Manage Accounts', // not found
        signIn: 'Iniciar sesión',
        signOut: 'Cerrar sesión',
        switchAccount: 'Cambiar de cliente',
        termsOfUse: 'Condiciones de uso',
        nycId: '¿Tiene problemas para acceder?',
      },

      document: {
        // This is the title of the confirmation dialog for deleting a document
        deleteConfirmationTitle: '¿Quiere eliminar este documento?',
        // This is the body content of the confirmation dialog for deleting a document
        deleteConfirmationBody:
          'Cualquier persona con acceso compartido ya no podrá ver este documento. Esto no se puede deshacer.',
        documentMenu: 'Document menu',
        documentOptions: 'Opciones',
        downloadZip: 'Descargar todo',
        downloadPdf: 'Descargar PDF',
        description: 'Descripción del documento', // displayed beneath the document and expands to show description (if any)
        editDetailsTitle: 'Editar información', // page title on edit details screen
        enterNamePlaceholder: 'Nombrar este documento',
        enterDescriptionPlaceholder: 'Describa este documento (opcional)',
        documentName: '¿Qué tipo de documento ha subido?', // shown as a label on edit details screen

        noDocuments: 'Aún no hay ningún documento guardado en su cuenta.', // not found shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'Agregue su primer documento', // label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: 'Nombre del documento',
      },

      controls: {
        accept: 'Aceptar', // eg. accept terms of use
        add: 'Agregar', // eg. add a delegate
        allFiles: 'Sus documentos', // shown as tab label on the dashboard
        cancel: 'Cancelar', // cancel button
        confirm: 'Confirmar',
        confirmDelete: 'Sí, eliminar',
        declineAndLogOut: 'Rechazar y cerrar sesión', // decline TOS button
        delete: 'Eliminar', // delete document kebab item
        done: 'Listo',
        download: 'Descargar', // edit document kebab item and button text
        editDetails: 'Editar información', // edit document kebab item
        edit: 'Editar', // edit account details
        continue: 'Continuar',
        share: 'Compartir con DHS', // share button
        shared: 'Documentos compartidos', // label of shared tab on dashboard
        upload: 'Cargar un documento',
        uploadDocument: 'Cargar documento',
        view: 'Vista',
        save: 'Guardar',
      },

      // account settings page
      account: {
        language: 'Idioma', // open language selector
        firstName: 'Primer nombre',
        whatIsYourFirstName: '¿Cuál es su primer nombre?',
        lastName: 'Apellido',
        whatIsYourLastName: '¿Cuál es su apellido?',
        dob: 'Fecha de nacimiento',
        whatIsYourDob: '¿Dónde nació?',
        caseNumber: 'Número de caso',
        whatIsYourDshCaseNumber: '¿Cuál es su número de caso de DHS?',
        dhsShow:
          'Agregue su número de caso de DHS si es una familia que regresa. Si es nuevo en PATH, agregue el número de ticket que recibió cuando llegó a PATH (ejemplo: CL ####).',
        locale: 'Seleccionar idioma',
      },

      // All copy related to the create shared folder flow
      sharing: {
        defaultName: 'Documents you shared with DHS on {date}', // not found
        confirmSharedFiles:
          'Documents to be shared DHS | Documents to be shared DHS', // not found
        plusNMore: '+ {count} more', // not found
        recipients: 'Recipients', // not found

        // placeholder text for the add recipient email field
        addRecipientPlaceholder: 'Escribir una dirección de correo electrónico',

        // step titles in the share flow
        confirmTitle: '¿Confirma que quiere compartir estos documentos?',
        addRecipientsTitle: '¿A quién le compartirá estos documentos?',
        selectFilesTitle: 'Seleccionar documentos',

        disclaimerTitle: 'Reminder', // not found
        shareDocumentDisclaimer: [
          'My File NYC facilitates document sharing with {emails} email accounts',
          'Once documents are shared DHS employees may download and save your documents to submit as proof for your application. DHS may still have copies to support your case even if you unshare or delete them from My File.', // not found
        ],

        // on the confirmation step, could be "recipient" or "recipients" depending on number of items
        confirmRecipientsLabel:
          'Usted está compartiendo documentos con | Recipients', // not found
        tooManyRecipients: 'You can share with up to {count} people', // (not found) error text when trying to add more than 10 recipients
      },

      tabTitles: {
        about: 'Acerca de',
        authorizing: 'Authorizing', // not found not important - used while logging in
        dashboard: 'Panel',
        document: 'Documento', // used for document preview while page is loading, then changes to document title
        faq: 'PREGUNTAS FRECUENTES',
        shared: 'Compartido', // used in share flow
        sharedBy: 'Compartido por', // used in share flow
        termsOfUse: 'Condiciones de uso', // used while viewing TOU
        welcome: 'Bienvenido', // displayed on the initial landing page
      },

      delegateAccess: {
        disabledNotice: 'The delegation feature is currently disabled.', // not found
        pageTitle: 'Account Access', // not found title in account menu and page title of delegation flow
        menuTitle: 'Who Can Manage My Documents', // (not found) title in account menu and page title of delegation flow
        emailPlaceholder: 'Add people via email', // not found
        addConfirmationTitle:
          'Let this person manage documents on your account?', // not found
        addConfirmationBody:
          'They will be able to upload and share documents for you. They cannot delete documents. You can always remove their access to your account.', // not found
        addConfirmationAction: 'Yes, Give Access', // not found
        removeConfirmationTitle:
          'Remove this person from accessing your account?', // not found
        removeConfirmationBody:
          'They will no longer be able to manage or share documents for you. You can always give them access to your documents again in the Account menu settings.', // not found
        removeConfirmationAction: 'Yes, Remove', // not found
        uninviteConfirmationTitle: 'Cancel this invitation?', // not found
        uninviteConfirmationBody:
          'You can invite someone to manage your account from the Account menu settings.', // not found
        uninviteConfirmationAction: 'Yes, Cancel', // not found
        tooManyDelegates: 'Up to {count} people can access your account', // not found
        invitePending: 'Invitation pending', // not found
        inviteExpired: 'Invitation expired.', // not found
        resendInvite: 'Resend?', // not found
      },

      // Account Activity
      activity: {
        accessed: 'Se accedió',
        added: 'Se agregó',
        delegateInvitedClient: 'to manage and share documents on your behalf', // not found
        delegateInvitedCbo: 'to manage and share documents on their behalf', // not found
        delegateAcceptedClient:
          'can now manage and share documents on your behalf', // not found
        delegateAcceptedCbo:
          'can now manage and share documents on this account', // not found
        delegateDeletedClient: 'has been removed from your account', // not found
        delegateDeletedCbo: 'has been removed from this account ', // not found
        deleted: 'se eliminó',
        edited: 'detalles editados de',
        file: 'archivo',
        files: 'documentos',
        invited: 'invitado',
        pageTitle: 'Actividad de la cuenta', // not found
        shared: 'compartido', // not found
        today: 'TODAY', // not found
        you: 'You', // not found
      },

      // Copy where you are viewing shared folders
      sharedFolder: {
        // empty state for list of shared folders
        noCollections: 'Aún no ha compartido ningún documento.', // message
        shareFirstDocument: 'Comparta su primer documento', // call to action

        // empty state for an individual shared folder
        emptyCollection: 'Se quitaron todos los documentos de esta carpeta.', // message
        returnDashboard: 'Volver al panel', // call to action

        // empty state for list of clients who have shared collections with user
        noSharedDocuments: 'Aún no ha recibido ningún documento compartido.', // not found

        // title for collection table name column
        collectionTableTitle:
          'Los documentos que ha compartido, organizados por fecha', // not found
      },

      cbo: {
        selectClient: 'Select a client to access their account', // not found
        clickToRemove: 'Click {close} to remove a client', // not found
        noClientsTitle:
          'You have not been added to any client My File NYC accounts', // not found
        noClientsBody:
          "Once a client adds you to their My File NYC account, you'll be able to manage and share documents on their behalf from this screen.\n\nA client can provide access to their documents in the Account menu settings in My File NYC.", // not found
        noClientActionLabel: 'Not a case manager?', // not found
        noClientActionText:
          'If you are seeking permanent supportive housing, click here.', // not found
        removeConfirmationTitle: 'Remove this client from your My File NYC?', // not found
        removeConfirmationBody:
          'You will no longer be able to view, manage, or share documents on their behalf. This cannot be undone.', // not found
        removeConfirmationAction: 'Yes, Remove', // not found
        errorAcceptingInvite:
          'Invite could not be accepted. Please ensure you are logged in with the email address that received the invite.', // not found
      },

      agent: {
        clientFirstNameLabel: 'Primer nombre', // label of client first name column in agent view
        clientLastNameLabel: 'Apellido', // label of client last name column in agent view
        clientDob: 'Fecha de nacimiento', // label of client date of birth column in agent view
        clientCaseNum: 'Número de caso', // label of client case number column in agent view
        clientEmail: 'Correo electrónico', // label of client case number column in agent view
        dateShared: 'Fecha compartida', // label in side bar
        noClientActionLabel: 'Not a government employee?', // not found
        noClientActionText:
          'If you are seeking permanent supportive housing, click here.', // not found
        reorderFiles: 'Reordenar documentos', // shown in agent view when downloading as PDF
        selectClient:
          'Seleccione el cliente para acceder a documentos compartidos',
        sharedBy: 'Compartido por', // label in side bar
        sharedFolderNameLabel: 'Name', // (not found) label of shared folder name column in agent view
        sharedWith: 'Compartido con: ', // promt for agency email
      },

      landing: {
        community: 'COMMUNITY SERVICES', // not found
        agency: 'AGENCY SERVICES', // not found
      },

      $vuetify: {
        ...vuetifyEn,
        dataTable: {
          sortBy: 'Sort by', // not found
          ariaLabel: {
            sortNone: 'Do not sort', // not found
            activateAscending: 'Sort ascending', // not found
          },
        },
        noDataText: 'No data', // no found
      },
      validations: {
        ...validationEn.messages,
        whitelist: 'Must be an approved agency email', // not found
        notSameAsUserEmail: 'You cannot enter your own email address', // not found
      },
    },
    fr: {
      // label appearing in tabular content (list of users, list of shared collections etc)
      // as well as side bar on document view
      dateAdded: `Date de l'ajout`,

      application: {
        title: 'My File NYC',
      },

      toast: {
        acceptedDelegateInvite: 'Delegate Access Accepted', // not found
        delegateRemoved: 'Client Removed', // not found
        downloadLoadingState: 'Préparation du téléchargement en cours',
        sharingComplete: 'Partage terminé',
        uploading: 'Ajout de document en cours...', // displayed while a file is uploading
        uploadComplete: 'Téléchargement terminé',
        fileDeletedConfirmation: 'Document supprimé',
        fileTooLarge: 'Document trop volumineux (doit être < 10 Mo)', // not found
      },

      login: {
        loginButton: 'Pour commencer, connectez-vous',
        getStarted: {
          client: 'Commencer',
          cityEmployee: 'City Employee Login', // not found
          cboWorker: 'CBO Worker Login', // not found
        },
        welcomeTitle: 'Accueillir',
        footerLogoAlt: 'Footer logo', // not found
      },

      navigation: {
        about: 'À propos',
        account: 'My Account Managers', // not found
        settings: 'Mon profil',
        settingsFirstRun:
          'Bienvenue dans My File NYC ! Pour commencer, veuillez répondre à quelques questions vous concernant.',
        welcomeFirstRun: 'Bienvenue dans My File NYC !',
        activity: 'Journal des activités',
        back: 'Dos',
        clients: 'Clients', // navigate back to agent view desktop not found
        close: 'Fermer',
        dashboard: 'Tableau de bord',
        faq: 'FAQ',
        loading: 'Chargement en cours',
        loggingIn: 'Connexion en cours...',
        manageAccounts: 'Manage Accounts', // not found
        signIn: 'Connexion',
        signOut: 'Déconnexion',
        switchAccount: 'Changer de client',
        termsOfUse: 'Conditions d’utilisation',
        nycId: 'Des problèmes pour vous connecter?',
      },

      document: {
        // This is the title of the confirmation dialog for deleting a document
        deleteConfirmationTitle: 'Supprimer ce document?',
        // This is the body content of the confirmation dialog for deleting a document
        deleteConfirmationBody: `Toutes les personnes bénéficiant d'un accès partagé ne pourront plus consulter ce document. Impossible d'annuler.`,
        documentMenu: 'Menu Document',
        documentOptions: 'Options',
        downloadZip: 'Tout télécharger',
        downloadPdf: 'Télécharger le PDF',
        description: 'Description du document', // displayed beneath the document and expands to show description (if any)
        editDetailsTitle: 'Modifier les détails', // page title on edit details screen
        enterNamePlaceholder: 'Donner un nom à ce document',
        enterDescriptionPlaceholder: 'Décrivez ce document (facultatif)',
        documentName: 'Quel type de document avez-vous téléchargé?', // shown as a label on edit details screen

        noDocuments:
          'Aucun document n’a encore été enregistré sur votre compte.', // shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'Ajouter votre premier document', // label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: 'Nom du document',
      },

      controls: {
        accept: 'Accepter', // eg. accept terms of use
        add: 'Ajouter', // eg. add a delegate
        allFiles: 'Vos documents', // shown as tab label on the dashboard
        cancel: 'Annuler', // cancel button
        confirm: 'Confirmer',
        confirmDelete: 'Oui, supprimer',
        declineAndLogOut: 'Refuser et se déconnecter', // decline TOS button
        delete: 'Supprimer', // delete document kebab item
        done: 'Terminé', //
        download: 'Charger', // edit document kebab item and button text
        editDetails: 'Modifier les détails', // edit document kebab item
        edit: 'Modifier', // edit account details
        continue: 'Continuer',
        share: 'Partager avec le DHS', // share button
        shared: 'Documents partagés', // label of shared tab on dashboard
        upload: 'Télécharger un document',
        uploadDocument: 'Télécharger un document',
        view: 'Consulter',
        save: 'Enregistrer',
      },

      // account settings page
      account: {
        language: 'Langue', // open language selector
        firstName: 'Prénom',
        whatIsYourFirstName: 'Quel est votre prénom?',
        lastName: 'Nom',
        whatIsYourLastName: 'Quel est votre nom?',
        dob: 'Date de naissance',
        whatIsYourDob: 'Quelle est votre date de naissance?',
        caseNumber: 'Numéro de dossier',
        whatIsYourDshCaseNumber:
          'Quel est votre numéro de dossier du Département des services pour les sans-abri (Department of Homeless Services, DHS)?',
        dhsShow:
          'Indiquez votre numéro de dossier du DHS si votre famille est déjà enregistrée. Si vous êtes nouveau (nouvelle) client(e) de PATH, indiquez le numéro de ticket que vous avez reçu quand vous vous êtes rendu(e) dans le centre PATH (exemple: CL ####).',
        locale: 'Sélectionner la langue',
      },

      // All copy related to the create shared folder flow
      sharing: {
        defaultName: 'Documents you shared with DHS on {date}', // not found
        confirmSharedFiles:
          'Documents to be shared DHS | Documents to be shared DHS', // not found
        plusNMore: '+ {count} more', // not found
        recipients: 'Recipients', // not found

        // placeholder text for the add recipient email field
        addRecipientPlaceholder: 'Saisir une adresse électronique',

        // step titles in the share flow
        confirmTitle: 'Voulez-vous vraiment partager ces documents ?',
        addRecipientsTitle: 'Avec qui partagez-vous ces documents?',
        selectFilesTitle: 'Sélectionner des documents',

        disclaimerTitle: 'Reminder', // not found
        shareDocumentDisclaimer: [
          'My File NYC facilitates document sharing with {emails} email accounts',
          'Once documents are shared DHS employees may download and save your documents to submit as proof for your application. DHS may still have copies to support your case even if you unshare or delete them from My File.', // not found
        ],

        // on the confirmation step, could be "recipient" or "recipients" depending on number of items
        confirmRecipientsLabel:
          'Usted está compartiendo documentos con | Recipients', // not found
        tooManyRecipients: 'You can share with up to {count} people', // (not found) error text when trying to add more than 10 recipients
      },

      tabTitles: {
        about: 'À propos',
        authorizing: 'Authorizing', // not found not important - used while logging in
        dashboard: 'Tableau de bord',
        document: 'Document', // used for document preview while page is loading, then changes to document title
        faq: 'FAQ',
        shared: 'Compartido',
        sharedBy: 'Compartido por',
        termsOfUse: 'Conditions d’utilisation', // not found used while viewing TOU
        welcome: 'Accueillir', // not found displayed on the initial landing page
      },

      delegateAccess: {
        disabledNotice: 'The delegation feature is currently disabled.', // not found
        pageTitle: 'Account Access', // not found title in account menu and page title of delegation flow
        menuTitle: 'Who Can Manage My Documents', // (not found) title in account menu and page title of delegation flow
        emailPlaceholder: 'Add people via email', // not found
        addConfirmationTitle:
          'Let this person manage documents on your account?', // not found
        addConfirmationBody:
          'They will be able to upload and share documents for you. They cannot delete documents. You can always remove their access to your account.', // not found
        addConfirmationAction: 'Yes, Give Access', // not found
        removeConfirmationTitle:
          'Remove this person from accessing your account?', // not found
        removeConfirmationBody:
          'They will no longer be able to manage or share documents for you. You can always give them access to your documents again in the Account menu settings.', // not found
        removeConfirmationAction: 'Yes, Remove', // not found
        uninviteConfirmationTitle: 'Cancel this invitation?', // not found
        uninviteConfirmationBody:
          'You can invite someone to manage your account from the Account menu settings.', // not found
        uninviteConfirmationAction: 'Yes, Cancel', // not found
        tooManyDelegates: 'Up to {count} people can access your account', // not found
        invitePending: 'Invitation pending', // not found
        inviteExpired: 'Invitation expired.', // not found
        resendInvite: 'Resend?', // not found
      },

      // Account Activity
      activity: {
        accessed: 'consulté',
        added: 'ajouté',
        delegateInvitedClient: 'to manage and share documents on your behalf', // not found
        delegateInvitedCbo: 'to manage and share documents on their behalf', // not found
        delegateAcceptedClient:
          'can now manage and share documents on your behalf', // not found
        delegateAcceptedCbo:
          'can now manage and share documents on this account', // not found
        delegateDeletedClient: 'has been removed from your account', // not found
        delegateDeletedCbo: 'has been removed from this account ', // not found
        deleted: 'supprimé',
        edited: 'détails modifiés de',
        file: 'fichier',
        files: 'documents',
        invited: 'Invité',
        pageTitle: 'Activité du compte',
        shared: 'partagé',
        today: 'TODAY', // not found
        you: 'You', // not found
      },

      // Copy where you are viewing shared folders
      sharedFolder: {
        // empty state for list of shared folders
        noCollections: `Vous n'avez pas encore partagé vos documents`, // message
        shareFirstDocument: 'Partager votre premier document', // call to action

        // empty state for an individual shared folder
        emptyCollection: 'Tous les documents de ce dossier ont été supprimés.', // message
        returnDashboard: 'Retour au tableau de bord', // call to action

        // empty state for list of clients who have shared collections with user
        noSharedDocuments: 'Vous n’avez pas encore reçu de documents partagés.',

        // title for collection table name column
        collectionTableTitle:
          'Documents que vous avez partagés, organisés par date',
      },

      cbo: {
        selectClient: 'Select a client to access their account', // not found
        clickToRemove: 'Click {close} to remove a client', // not found
        noClientsTitle:
          'You have not been added to any client My File NYC accounts', // not found
        noClientsBody:
          "Once a client adds you to their My File NYC account, you'll be able to manage and share documents on their behalf from this screen.\n\nA client can provide access to their documents in the Account menu settings in My File NYC.", // not found
        noClientActionLabel: 'Not a case manager?', // not found
        noClientActionText:
          'If you are seeking permanent supportive housing, click here.', // not found
        removeConfirmationTitle: 'Remove this client from your My File NYC?', // not found
        removeConfirmationBody:
          'You will no longer be able to view, manage, or share documents on their behalf. This cannot be undone.', // not found
        removeConfirmationAction: 'Yes, Remove', // not found
        errorAcceptingInvite:
          'Invite could not be accepted. Please ensure you are logged in with the email address that received the invite.', // not found
      },

      agent: {
        clientFirstNameLabel: 'Prénom', // label of client first name column in agent view
        clientLastNameLabel: 'Nom', // label of client last name column in agent view
        clientDob: 'Date de naissance', // label of client date of birth column in agent view
        clientCaseNum: 'Numéro de dossier', // label of client case number column in agent view
        clientEmail: 'Adresse électronique', // label of client case number column in agent view
        dateShared: 'Date du partage', // label in side bar
        noClientActionLabel: 'Not a government employee?', // not found
        noClientActionText:
          'If you are seeking permanent supportive housing, click here.', // not found
        reorderFiles: 'Réorganiser les documents', // shown in agent view when downloading as PDF
        selectClient:
          'Sélectionnez le (la) client(e) pour accéder aux documents partagés',
        sharedBy: 'Partagé par', // label in side bar
        sharedFolderNameLabel: 'Name', // (not found) label of shared folder name column in agent view
        sharedWith: 'Partagé avec: ', // promt for agency email
      },

      landing: {
        community: 'COMMUNITY SERVICES', // not found
        agency: 'AGENCY SERVICES', // not found
      },

      $vuetify: {
        ...vuetifyEn,
        dataTable: {
          sortBy: 'Sort by', // not found
          ariaLabel: {
            sortNone: 'Do not sort', // not found
            activateAscending: 'Sort ascending', // not found
          },
        },
        noDataText: 'No data', // no found
      },
      validations: {
        ...validationEn.messages,
        whitelist: 'Must be an approved agency email', // not found
        notSameAsUserEmail: 'You cannot enter your own email address', // not found
      },
    },
    bn: {
      // label appearing in tabular content (list of users, list of shared collections etc)
      // as well as side bar on document view
      dateAdded: `যোগ করার তারিখ`,

      application: {
        title: 'My File NYC',
      },

      toast: {
        acceptedDelegateInvite: 'Delegate Access Accepted', // not found
        delegateRemoved: 'Client Removed', // not found
        downloadLoadingState: 'Preparing Download', // not found
        sharingComplete: 'শেয়ার করা সম্পূর্ণ হয়েছে',
        uploading: 'Adding Document...', // not found displayed while a file is uploading
        uploadComplete: 'Upload Complete', // not found
        fileDeletedConfirmation: 'Document Deleted', // not found
        fileTooLarge: 'Document too large (must be < 10MB)', // not found
      },

      login: {
        loginButton: 'শুরু করার জন্য লগইন করুন৷',
        getStarted: {
          client: 'Get Started', // not found
          cityEmployee: 'City Employee Login', // not found
          cboWorker: 'CBO Worker Login', // not found
        },
        welcomeTitle: 'Welcome', // not found
        footerLogoAlt: 'Footer logo', // not found
      },

      navigation: {
        about: 'About', // not found
        account: 'My Account Managers', // not found
        settings: 'আমার প্রোফাইল',
        settingsFirstRun:
          'Welcome to #My File NYC&! Please answer a few questions about yourself to get started.', // not found
        welcomeFirstRun: 'Welcome to My File NYC!', // not found
        activity: 'Activity Log', // not found
        back: 'Back', // not found
        clients: 'Clients', // navigate back to agent view desktop not found
        close: 'Close', // not found
        dashboard: 'Dashboard', // not found
        faq: 'FAQ', // not found
        loading: 'Loading', // not found
        loggingIn: 'Logging in...', // not found
        manageAccounts: 'Manage Accounts', // not found
        signIn: 'Sign in', // not found
        signOut: 'সাইন আউট',
        switchAccount: 'Switch Clients', // not found
        termsOfUse: 'Terms of Use', // not found
        nycId: 'লগইন করতে সমস্যা হচ্ছে?',
      },

      document: {
        // This is the title of the confirmation dialog for deleting a document
        deleteConfirmationTitle: 'Delete this document?', // not found
        // This is the body content of the confirmation dialog for deleting a document
        deleteConfirmationBody: `অ্যাক্সেস শেয়ার করা হয়েছে এমন কেউ আর এই নথিটি দেখতে পারবে না৷ এটি আর অসম্পাদিত করা যাবে না৷`,
        documentMenu: 'Document menu', // not found
        documentOptions: 'বিকল্প',
        downloadZip: 'Download All', // not found
        downloadPdf: 'Download PDF', // not found
        description: 'নথির বিবরণ', // displayed beneath the document and expands to show description (if any)
        editDetailsTitle: 'বিবরণ সম্পাদনা করুন', // page title on edit details screen
        enterNamePlaceholder: 'Give this document a name', // not found
        enterDescriptionPlaceholder: 'এই নথিটিকে বর্ণনা করুন (ঐচ্ছিক)',
        documentName: 'কোন ধরনের নথি আপনি আপলোড করেছেন?', // shown as a label on edit details screen

        noDocuments: 'There are no documents saved to your account yet.', // not found shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'Add your first document', // not found label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: 'নথির নাম',
      },

      controls: {
        accept: 'Accept', // (not found) eg. accept terms of use
        add: 'Add', // (not found) eg. add a delegate
        allFiles: 'Your Documents', // (not found) shown as tab label on the dashboard
        cancel: 'বাতিল করুন', // cancel button
        confirm: 'Confirm', // not found
        confirmDelete: 'হ্যাঁ, ডিলিট করুন',
        declineAndLogOut: 'Decline & Log Out', // (not found) decline TOS button
        delete: 'ডিলিট করুন', // delete document kebab item
        done: 'Done', // not found
        download: 'ডাউনলোড করুন', // edit document kebab item and button text
        editDetails: 'বিবরণ সম্পাদনা করুন', // edit document kebab item
        edit: 'সম্পাদনা করুন', // edit account details
        continue: 'চালিয়ে যান',
        share: 'DHS এর সাথে শেয়ার করুন', // share button
        shared: 'Shared Documents', // (not found) label of shared tab on dashboard
        upload: 'Upload a Document', // (not found)
        uploadDocument: 'Upload Document', // not found
        view: 'দেখুন',
        save: 'সেভ করুন',
      },

      // account settings page
      account: {
        language: 'Language', // not found open language selector
        firstName: 'নাম',
        whatIsYourFirstName: 'আপনার নাম কি?',
        lastName: 'পদবি',
        whatIsYourLastName: 'আপনার পদবি কি?',
        dob: 'জন্ম তারিখ',
        whatIsYourDob: 'আপনি কবে জন্ম গ্রহণ করেছেন?',
        caseNumber: 'কেস নম্বর',
        whatIsYourDshCaseNumber: 'আপনার DHS কেস নম্বরটি কী?',
        dhsShow:
          'আপনি যদি পুনরায় ফিরে আসা পরিবার হন তবে আপনার DHS কেস নম্বর যোগ করুন। আপনি যদি PATH-এ নতুন হয়ে থাকেন, সেক্ষেত্রে আপনি PATH-এ আসার সময় যে টিকিট নম্বর লাভ করেছিলেন সেটা যোগ করুন (উদাহরণ: CL ####)',
        locale: 'সেভ করুন',
      },

      // All copy related to the create shared folder flow
      sharing: {
        defaultName: 'Documents you shared with DHS on {date}', // not found
        confirmSharedFiles:
          'Documents to be shared DHS | Documents to be shared DHS', // not found
        plusNMore: '+ {count} more', // not found
        recipients: 'Recipients', // not found

        // placeholder text for the add recipient email field
        addRecipientPlaceholder: 'Enter email address', // not found

        // step titles in the share flow
        confirmTitle: 'Are you sure you want to share these Documents?', // not found
        addRecipientsTitle: 'Who are you sharing these document(s) with?', // not found
        selectFilesTitle: 'Select Documents', // not found

        disclaimerTitle: 'Reminder', // not found
        shareDocumentDisclaimer: [
          'My File NYC facilitates document sharing with {emails} email accounts',
          'Once documents are shared DHS employees may download and save your documents to submit as proof for your application. DHS may still have copies to support your case even if you unshare or delete them from My File.', // not found
        ],

        // on the confirmation step, could be "recipient" or "recipients" depending on number of items
        confirmRecipientsLabel:
          'Usted está compartiendo documentos con | Recipients', // not found
        tooManyRecipients: 'You can share with up to {count} people', // (not found) error text when trying to add more than 10 recipients
      },

      tabTitles: {
        about: 'About', // not found
        authorizing: 'Authorizing', // not found not important - used while logging in
        dashboard: 'Dashboard', // not found
        document: 'দলিল', // used for document preview while page is loading, then changes to document title
        faq: 'FAQ', // not found
        shared: 'Shared', // not found used in share flow
        sharedBy: 'Shared by', // not found used in share flow
        termsOfUse: 'Terms of Use', // not found used while viewing TOU
        welcome: 'Welcome', // not found displayed on the initial landing page
      },

      delegateAccess: {
        disabledNotice: 'The delegation feature is currently disabled.', // not found
        pageTitle: 'Account Access', // not found title in account menu and page title of delegation flow
        menuTitle: 'Who Can Manage My Documents', // (not found) title in account menu and page title of delegation flow
        emailPlaceholder: 'Add people via email', // not found
        addConfirmationTitle:
          'Let this person manage documents on your account?', // not found
        addConfirmationBody:
          'They will be able to upload and share documents for you. They cannot delete documents. You can always remove their access to your account.', // not found
        addConfirmationAction: 'Yes, Give Access', // not found
        removeConfirmationTitle:
          'Remove this person from accessing your account?', // not found
        removeConfirmationBody:
          'They will no longer be able to manage or share documents for you. You can always give them access to your documents again in the Account menu settings.', // not found
        removeConfirmationAction: 'Yes, Remove', // not found
        uninviteConfirmationTitle: 'Cancel this invitation?', // not found
        uninviteConfirmationBody:
          'You can invite someone to manage your account from the Account menu settings.', // not found
        uninviteConfirmationAction: 'Yes, Cancel', // not found
        tooManyDelegates: 'Up to {count} people can access your account', // not found
        invitePending: 'Invitation pending', // not found
        inviteExpired: 'Invitation expired.', // not found
        resendInvite: 'Resend?', // not found
      },

      // Account Activity
      activity: {
        accessed: 'accessed', // not found
        added: 'added', // not afound
        delegateInvitedClient: 'to manage and share documents on your behalf', // not found
        delegateInvitedCbo: 'to manage and share documents on their behalf', // not found
        delegateAcceptedClient:
          'can now manage and share documents on your behalf', // not found
        delegateAcceptedCbo:
          'can now manage and share documents on this account', // not found
        delegateDeletedClient: 'has been removed from your account', // not found
        delegateDeletedCbo: 'has been removed from this account ', // not found
        deleted: 'deleted', // not found
        edited: 'edited details of', // not found
        file: 'file', // not found
        files: 'documents', // not found
        invited: 'invited', // not found
        pageTitle: 'Account Activity', // not found
        shared: 'shared', // not found
        today: 'TODAY', // not found
        you: 'You', // not found
      },

      // Copy where you are viewing shared folders
      sharedFolder: {
        // empty state for list of shared folders
        noCollections: `আপনি এখনও পর্যন্ত কোনো নথি শেয়ার করেননি`, // message
        shareFirstDocument: 'Share your first document', // (not found) call to action

        // empty state for an individual shared folder
        emptyCollection: 'All documents have been removed from this folder.', // (not found) message
        returnDashboard: 'Return to dashboard', // (not found) call to action

        // empty state for list of clients who have shared collections with user
        noSharedDocuments: "You haven't received any shared documents yet.", // not found

        // title for collection table name column
        collectionTableTitle: "Documents you've shared, organized by date", // not found
      },

      cbo: {
        selectClient: 'Select a client to access their account', // not found
        clickToRemove: 'Click {close} to remove a client', // not found
        noClientsTitle:
          'You have not been added to any client My File NYC accounts', // not found
        noClientsBody:
          "Once a client adds you to their My File NYC account, you'll be able to manage and share documents on their behalf from this screen.\n\nA client can provide access to their documents in the Account menu settings in My File NYC.", // not found
        noClientActionLabel: 'Not a case manager?', // not found
        noClientActionText:
          'If you are seeking permanent supportive housing, click here.', // not found
        removeConfirmationTitle: 'Remove this client from your My File NYC?', // not found
        removeConfirmationBody:
          'You will no longer be able to view, manage, or share documents on their behalf. This cannot be undone.', // not found
        removeConfirmationAction: 'Yes, Remove', // not found
        errorAcceptingInvite:
          'Invite could not be accepted. Please ensure you are logged in with the email address that received the invite.', // not found
      },

      agent: {
        clientFirstNameLabel: 'নাম', // label of client first name column in agent view
        clientLastNameLabel: 'পদবি', // label of client last name column in agent view
        clientDob: 'জন্ম তারিখ', // label of client date of birth column in agent view
        clientCaseNum: 'কেস নম্বর', // label of client case number column in agent view
        clientEmail: 'ইমেল', // label of client case number column in agent view
        dateShared: 'শেয়ার করার তারিখ', // label in side bar
        noClientActionLabel: 'Not a government employee?', // not found
        noClientActionText:
          'If you are seeking permanent supportive housing, click here.', // not found
        reorderFiles: 'Reorder Documents', // (not found) shown in agent view when downloading as PDF
        selectClient:
          'শেয়ার করা নথিপত্র অ্যাক্সেস করতে ক্লায়েন্ট নির্বাচন করুন',
        sharedBy: 'Shared By', // (not found) label in side bar
        sharedFolderNameLabel: 'Name', // (not found) label of shared folder name column in agent view
        sharedWith: 'যার সাথে শেয়ার করা হয়েছে:', // promt for agency email
      },

      landing: {
        community: 'COMMUNITY SERVICES', // not found
        agency: 'AGENCY SERVICES', // not found
      },

      $vuetify: {
        ...vuetifyEn,
        dataTable: {
          sortBy: 'Sort by', // not found
          ariaLabel: {
            sortNone: 'Do not sort', // not found
            activateAscending: 'Sort ascending', // not found
          },
        },
        noDataText: 'No data', // no found
      },
      validations: {
        ...validationEn.messages,
        whitelist: 'Must be an approved agency email', // not found
        notSameAsUserEmail: 'You cannot enter your own email address', // not found
      },
    },
    pl: {
      // label appearing in tabular content (list of users, list of shared collections etc)
      // as well as side bar on document view
      // label appearing in tabular content (list of users, list of shared collections etc)
      // as well as side bar on document view
      dateAdded: `Data dodania`,

      application: {
        title: 'My File NYC',
      },

      toast: {
        acceptedDelegateInvite: 'Delegate Access Accepted', // not found
        delegateRemoved: 'Client Removed', // not found
        downloadLoadingState: 'Preparing Download', // not found
        sharingComplete: 'Pomyślnie udostępniono',
        uploading: 'Adding Document...', // not found displayed while a file is uploading
        uploadComplete: 'Upload Complete', // not found
        fileDeletedConfirmation: 'Document Deleted', // not found
        fileTooLarge: 'Document too large (must be < 10MB)', // not found
      },

      login: {
        loginButton: 'Zaloguj się i rozpocznij',
        getStarted: {
          client: 'Get Started', // not found
          cityEmployee: 'City Employee Login', // not found
          cboWorker: 'CBO Worker Login', // not found
        },
        welcomeTitle: 'Welcome', // not found
        footerLogoAlt: 'Footer logo', // not found
      },

      navigation: {
        about: 'About', // not found
        account: 'My Account Managers', // not found
        settings: 'Mój profil',
        settingsFirstRun:
          'Welcome to #My File NYC&! Please answer a few questions about yourself to get started.', // not found
        welcomeFirstRun: 'Welcome to My File NYC!', // not found
        activity: 'Activity Log', // not found
        back: 'Back', // not found
        clients: 'Clients', // navigate back to agent view desktop not found
        close: 'Close', // not found
        dashboard: 'Dashboard', // not found
        faq: 'FAQ', // not found
        loading: 'Loading', // not found
        loggingIn: 'Logging in...', // not found
        manageAccounts: 'Manage Accounts', // not found
        signIn: 'Sign in', // not found
        signOut: 'Wyloguj się',
        switchAccount: 'Switch Clients', // not found
        termsOfUse: 'Terms of Use', // not found
        nycId: 'Masz problemy z zalogowaniem się?',
      },

      document: {
        // This is the title of the confirmation dialog for deleting a document
        deleteConfirmationTitle: 'Delete this document?', // not found
        // This is the body content of the confirmation dialog for deleting a document
        deleteConfirmationBody: `Żadna osoba ze współdzielonym dostępem nie będzie mogła dłużej przeglądać tego dokumentu. Tej zmiany nie da się cofnąć.`,
        documentMenu: 'Document menu', // not found
        documentOptions: 'Dostępne opcje',
        downloadZip: 'Download All', // not found
        downloadPdf: 'Download PDF', // not found
        description: 'Opis dokumentu', // displayed beneath the document and expands to show description (if any)
        editDetailsTitle: 'Edytuj szczegóły', // page title on edit details screen
        enterNamePlaceholder: 'Give this document a name', // not found
        enterDescriptionPlaceholder: 'Opisz ten dokument (opcjonalnie)',
        documentName: 'Jaki dokument został przesłany?', // shown as a label on edit details screen

        noDocuments: 'There are no documents saved to your account yet.', // not found shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'Add your first document', // not found label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: 'Nazwa dokumentu',
      },

      controls: {
        accept: 'Accept', // (not found) eg. accept terms of use
        add: 'Add', // (not found) eg. add a delegate
        allFiles: 'Your Documents', // (not found) shown as tab label on the dashboard
        cancel: 'Anuluj', // cancel button
        confirm: 'Confirm', // not found
        confirmDelete: 'Tak, usuń',
        declineAndLogOut: 'Decline & Log Out', // (not found) decline TOS button
        delete: 'Usuń', // delete document kebab item
        done: 'Done', // not found
        download: 'Pobierz', // edit document kebab item and button text
        editDetails: 'Edytuj szczegóły', // edit document kebab item
        edit: 'Edytuj', // edit account details
        continue: 'Kontynuuj',
        share: 'Udostępnij DHS', // share button
        shared: 'Shared Documents', // (not found) label of shared tab on dashboard
        upload: 'Upload a Document', // (not found)
        uploadDocument: 'Upload Document', // not found
        view: 'Wyświetl',
        save: 'Zapisz',
      },

      // account settings page
      account: {
        language: 'Language', // not found open language selector
        firstName: 'Imię',
        whatIsYourFirstName: 'Podaj swoje imię.',
        lastName: 'Nazwisko',
        whatIsYourLastName: 'Podaj swoje nazwisko.',
        dob: 'Data urodzenia',
        whatIsYourDob: 'Podaj swoją datę urodzenia.',
        caseNumber: 'Numer sprawy',
        whatIsYourDshCaseNumber: 'Jaki jest Twój numer sprawy DHS?',
        dhsShow:
          'Rodziny składające wniosek po raz kolejny są proszone o podanie numeru sprawy DHS. Nowi klienci PATH są proszeni o dołączenie numeru biletu otrzymanego podczas pierwszej wizyty w biurze PATH (na przykład: CL ####).',
        locale: 'Wybierz język',
      },

      // All copy related to the create shared folder flow
      sharing: {
        defaultName: 'Documents you shared with DHS on {date}', // not found
        confirmSharedFiles:
          'Documents to be shared DHS | Documents to be shared DHS', // not found
        plusNMore: '+ {count} more', // not found
        recipients: 'Recipients', // not found

        // placeholder text for the add recipient email field
        addRecipientPlaceholder: 'Enter email address', // not found

        // step titles in the share flow
        confirmTitle: 'Are you sure you want to share these Documents?', // not found
        addRecipientsTitle: 'Who are you sharing these document(s) with?', // not found
        selectFilesTitle: 'Select Documents', // not found

        disclaimerTitle: 'Reminder', // not found
        shareDocumentDisclaimer: [
          'My File NYC facilitates document sharing with {emails} email accounts',
          'Once documents are shared DHS employees may download and save your documents to submit as proof for your application. DHS may still have copies to support your case even if you unshare or delete them from My File.', // not found
        ],

        // on the confirmation step, could be "recipient" or "recipients" depending on number of items
        confirmRecipientsLabel:
          'Usted está compartiendo documentos con | Recipients', // not found
        tooManyRecipients: 'You can share with up to {count} people', // (not found) error text when trying to add more than 10 recipients
      },

      tabTitles: {
        about: 'About', // not found
        authorizing: 'Authorizing', // not found not important - used while logging in
        dashboard: 'Dashboard', // not found
        document: 'Dokument', // used for document preview while page is loading, then changes to document title
        faq: 'FAQ', // not found
        shared: 'Shared', // not found used in share flow
        sharedBy: 'Shared by', // not found used in share flow
        termsOfUse: 'Terms of Use', // not found used while viewing TOU
        welcome: 'Welcome', // not found displayed on the initial landing page
      },

      delegateAccess: {
        disabledNotice: 'The delegation feature is currently disabled.', // not found
        pageTitle: 'Account Access', // not found title in account menu and page title of delegation flow
        menuTitle: 'Who Can Manage My Documents', // (not found) title in account menu and page title of delegation flow
        emailPlaceholder: 'Add people via email', // not found
        addConfirmationTitle:
          'Let this person manage documents on your account?', // not found
        addConfirmationBody:
          'They will be able to upload and share documents for you. They cannot delete documents. You can always remove their access to your account.', // not found
        addConfirmationAction: 'Yes, Give Access', // not found
        removeConfirmationTitle:
          'Remove this person from accessing your account?', // not found
        removeConfirmationBody:
          'They will no longer be able to manage or share documents for you. You can always give them access to your documents again in the Account menu settings.', // not found
        removeConfirmationAction: 'Yes, Remove', // not found
        uninviteConfirmationTitle: 'Cancel this invitation?', // not found
        uninviteConfirmationBody:
          'You can invite someone to manage your account from the Account menu settings.', // not found
        uninviteConfirmationAction: 'Yes, Cancel', // not found
        tooManyDelegates: 'Up to {count} people can access your account', // not found
        invitePending: 'Invitation pending', // not found
        inviteExpired: 'Invitation expired.', // not found
        resendInvite: 'Resend?', // not found
      },

      // Account Activity
      activity: {
        accessed: 'accessed', // not found
        added: 'added', // not afound
        delegateInvitedClient: 'to manage and share documents on your behalf', // not found
        delegateInvitedCbo: 'to manage and share documents on their behalf', // not found
        delegateAcceptedClient:
          'can now manage and share documents on your behalf', // not found
        delegateAcceptedCbo:
          'can now manage and share documents on this account', // not found
        delegateDeletedClient: 'has been removed from your account', // not found
        delegateDeletedCbo: 'has been removed from this account ', // not found
        deleted: 'deleted', // not found
        edited: 'edited details of', // not found
        file: 'file', // not found
        files: 'documents', // not found
        invited: 'invited', // not found
        pageTitle: 'Account Activity', // not found
        shared: 'shared', // not found
        today: 'TODAY', // not found
        you: 'You', // not found
      },

      // Copy where you are viewing shared folders
      sharedFolder: {
        // empty state for list of shared folders
        noCollections: `Żadne dokumenty nie zostały jeszcze udostępnione`, // message
        shareFirstDocument: 'Share your first document', // (not found) call to action

        // empty state for an individual shared folder
        emptyCollection: 'All documents have been removed from this folder.', // (not found) message
        returnDashboard: 'Return to dashboard', // (not found) call to action

        // empty state for list of clients who have shared collections with user
        noSharedDocuments: "You haven't received any shared documents yet.", // not found

        // title for collection table name column
        collectionTableTitle: "Documents you've shared, organized by date", // not found
      },

      cbo: {
        selectClient: 'Select a client to access their account', // not found
        clickToRemove: 'Click {close} to remove a client', // not found
        noClientsTitle:
          'You have not been added to any client My File NYC accounts', // not found
        noClientsBody:
          "Once a client adds you to their My File NYC account, you'll be able to manage and share documents on their behalf from this screen.\n\nA client can provide access to their documents in the Account menu settings in My File NYC.", // not found
        noClientActionLabel: 'Not a case manager?', // not found
        noClientActionText:
          'If you are seeking permanent supportive housing, click here.', // not found
        removeConfirmationTitle: 'Remove this client from your My File NYC?', // not found
        removeConfirmationBody:
          'You will no longer be able to view, manage, or share documents on their behalf. This cannot be undone.', // not found
        removeConfirmationAction: 'Yes, Remove', // not found
        errorAcceptingInvite:
          'Invite could not be accepted. Please ensure you are logged in with the email address that received the invite.', // not found
      },

      agent: {
        clientFirstNameLabel: 'Imię', // label of client first name column in agent view
        clientLastNameLabel: 'Nazwisko', // label of client last name column in agent view
        clientDob: 'Data urodzenia', // label of client date of birth column in agent view
        clientCaseNum: 'Numer sprawy', // label of client case number column in agent view
        clientEmail: 'E-mail', // label of client case number column in agent view
        dateShared: 'Data udostępnienia', // label in side bar
        noClientActionLabel: 'Not a government employee?', // not found
        noClientActionText:
          'If you are seeking permanent supportive housing, click here.', // not found
        reorderFiles: 'Reorder Documents', // (not found) shown in agent view when downloading as PDF
        selectClient: 'Wybierz klienta dostępu do udostępnionych dokumentów',
        sharedBy: 'Shared By', // (not found) label in side bar
        sharedFolderNameLabel: 'Name', // (not found) label of shared folder name column in agent view
        sharedWith: 'Udostępniono:', // promt for agency email
      },

      landing: {
        community: 'COMMUNITY SERVICES', // not found
        agency: 'AGENCY SERVICES', // not found
      },

      $vuetify: {
        ...vuetifyEn,
        dataTable: {
          sortBy: 'Sort by', // not found
          ariaLabel: {
            sortNone: 'Do not sort', // not found
            activateAscending: 'Sort ascending', // not found
          },
        },
        noDataText: 'No data', // no found
      },
      validations: {
        ...validationEn.messages,
        whitelist: 'Must be an approved agency email', // not found
        notSameAsUserEmail: 'You cannot enter your own email address', // not found
      },
    },
    ht: {
      // label appearing in tabular content (list of users, list of shared collections etc)
      // as well as side bar on document view
      dateAdded: `Dat ou te ajoute li a`,

      application: {
        title: 'My File NYC',
      },

      toast: {
        acceptedDelegateInvite: 'Delegate Access Accepted', // not found
        delegateRemoved: 'Client Removed', // not found
        downloadLoadingState: 'Telechajman ankou',
        sharingComplete: 'Pataj konplete',
        uploading: 'Ajoute Dokiman...', // displayed while a file is uploading
        uploadComplete: 'Telechaje Dokiman',
        fileDeletedConfirmation: 'Efase Dokiman an',
        fileTooLarge: 'Dokiman twò gwo (dwe <10MB)',
      },

      login: {
        loginButton: 'Konekte epi kòmanse',
        getStarted: {
          client: 'Kòmanse', // not found
          cityEmployee: 'City Employee Login', // not found
          cboWorker: 'CBO Worker Login', // not found
        },
        welcomeTitle: 'Byenvini',
        footerLogoAlt: 'Footer logo', // not found
      },

      navigation: {
        about: 'Konsènan',
        account: 'My Account Managers', // not found
        settings: 'Pwofil mwen',
        settingsFirstRun:
          'Byenvini nanDosye m NYC (My File NYC)! Tanpri reponn kèk kesyon sou tèt ou pou w ka kòmanse.',
        welcomeFirstRun: 'Byenvini nanDosye m NYC (My File NYC)!',
        activity: 'Jounal Aktivite',
        back: 'Retounen',
        clients: 'Kliyan', // navigate back to agent view desktop
        close: 'Fèmen',
        dashboard: 'Tablodbò',
        faq: 'Kesyon Moun Poze Souvan',
        loading: 'L ap telechaje',
        loggingIn: 'Koneksyon...',
        manageAccounts: 'Manage Accounts', // not found
        signIn: 'Konekte',
        signOut: 'Dekonekte',
        switchAccount: 'Chanje Kliyan',
        termsOfUse: 'Kondisyon pou Itilizasyon',
        nycId: 'Ou gen difikilte pou w konekte?',
      },

      document: {
        // This is the title of the confirmation dialog for deleting a document
        deleteConfirmationTitle: 'Efase dokiman sa?',
        // This is the body content of the confirmation dialog for deleting a document
        deleteConfirmationBody: `Tout moun ki ka pataje dokiman sa pa p ka wè l ankò. Sa pa p ka defèt.`,
        documentMenu: 'Meni dokiman',
        documentOptions: 'Opsyon yo',
        downloadZip: 'Telechaje Tout',
        downloadPdf: 'Telechaje PDF',
        description: 'Deskripsyon dokiman', // displayed beneath the document and expands to show description (if any)
        editDetailsTitle: 'Modifye detay yo', // page title on edit details screen
        enterNamePlaceholder: 'Bay dokiman sa yon non',
        enterDescriptionPlaceholder: 'Dekri dokiman (se si w vle)',
        documentName: 'Ki tip dokiman ou te atache?', // shown as a label on edit details screen

        noDocuments: 'Poko gen okenn dokiman ki anrejistre sou kont ou an.', // shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'Atache premye dokiman ou a', // label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: 'Non dokiman an',
      },

      controls: {
        accept: 'Aksepte', // eg. accept terms of use
        add: 'Ajoute', // eg. add a delegate
        allFiles: 'Dokiman ou yo', // (not found) shown as tab label on the dashboard
        cancel: 'Anile', // cancel button
        confirm: 'Konfime',
        confirmDelete: 'Wi, efase',
        declineAndLogOut: 'Refize Ak Dekonekte', // decline TOS button
        delete: 'Efase', // delete document kebab item
        done: 'Fini',
        download: 'Telechaje', // edit document kebab item and button text
        editDetails: 'Modifye detay yo', // edit document kebab item
        edit: 'Modifye', // edit account details
        continue: 'Kontinye',
        share: 'Pataje ak DHS', // share button
        shared: 'Pataje Dokiman', // label of shared tab on dashboard
        upload: 'Telechaje yon Dokiman',
        uploadDocument: 'Telechaje Dokiman',
        view: 'Afichaj',
        save: 'Anrejistre',
      },

      // account settings page
      account: {
        language: 'Lang', // open language selector
        firstName: 'Non',
        whatIsYourFirstName: 'Ki non w?',
        lastName: 'Siyati',
        whatIsYourLastName: 'Ki siyati w?',
        dob: 'Dat nesans',
        whatIsYourDob: 'Ki kote ou te fèt?',
        caseNumber: 'Nimewo Dosye',
        whatIsYourDshCaseNumber: 'Nimewo dosye DHS ou a??',
        dhsShow:
          'Mete nimewo dosye DHS ou, si ou se yon fanmi ki ap retounen. Si ou nouvo nan PATH, mete nimewo tikè ou te resevwa lè ou t ap vin nan PATH la (egzanp: CL ####).',
        locale: 'Chwazi lang lan',
      },

      // All copy related to the create shared folder flow
      sharing: {
        defaultName: 'Documents you shared with DHS on {date}', // not found
        confirmSharedFiles:
          'Documents to be shared DHS | Documents to be shared DHS', // not found
        plusNMore: '+ {count} more', // not found
        recipients: 'Recipients', // not found

        // placeholder text for the add recipient email field
        addRecipientPlaceholder: 'Antre adrès imèl la',

        // step titles in the share flow
        confirmTitle: 'Èske ou sèten ou vle pataje Dokiman sa yo?',
        addRecipientsTitle: 'Ak kiyès ou pataje dokiman sa yo?',
        selectFilesTitle: 'Dokiman ou Chwazi a',

        disclaimerTitle: 'Reminder', // not found
        shareDocumentDisclaimer: [
          'My File NYC facilitates document sharing with {emails} email accounts',
          'Once documents are shared DHS employees may download and save your documents to submit as proof for your application. DHS may still have copies to support your case even if you unshare or delete them from My File.', // not found
        ],

        // on the confirmation step, could be "recipient" or "recipients" depending on number of items
        confirmRecipientsLabel:
          'Usted está compartiendo documentos con | Recipients', // not found
        tooManyRecipients: 'You can share with up to {count} people', // (not found) error text when trying to add more than 10 recipients
      },

      tabTitles: {
        about: 'Konsènan',
        authorizing: 'Authorizing', // not found not important - used while logging in
        dashboard: 'Tablodbò',
        document: 'Dokiman', // used for document preview while page is loading, then changes to document title
        faq: 'Kesyon Moun Poze Souvan',
        shared: 'Pataj', // used in share flow
        sharedBy: 'Pataje yo pa', // used in share flow
        termsOfUse: 'Kondisyon pou Itilizasyon', // not found used while viewing TOU
        welcome: 'Byenvini', // not found displayed on the initial landing page
      },

      delegateAccess: {
        disabledNotice: 'The delegation feature is currently disabled.', // not found
        pageTitle: 'Account Access', // not found title in account menu and page title of delegation flow
        menuTitle: 'Who Can Manage My Documents', // (not found) title in account menu and page title of delegation flow
        emailPlaceholder: 'Add people via email', // not found
        addConfirmationTitle:
          'Let this person manage documents on your account?', // not found
        addConfirmationBody:
          'They will be able to upload and share documents for you. They cannot delete documents. You can always remove their access to your account.', // not found
        addConfirmationAction: 'Yes, Give Access', // not found
        removeConfirmationTitle:
          'Remove this person from accessing your account?', // not found
        removeConfirmationBody:
          'They will no longer be able to manage or share documents for you. You can always give them access to your documents again in the Account menu settings.', // not found
        removeConfirmationAction: 'Yes, Remove', // not found
        uninviteConfirmationTitle: 'Cancel this invitation?', // not found
        uninviteConfirmationBody:
          'You can invite someone to manage your account from the Account menu settings.', // not found
        uninviteConfirmationAction: 'Yes, Cancel', // not found
        tooManyDelegates: 'Up to {count} people can access your account', // not found
        invitePending: 'Invitation pending', // not found
        inviteExpired: 'Invitation expired.', // not found
        resendInvite: 'Resend?', // not found
      },

      // Account Activity
      activity: {
        accessed: 'aksè',
        added: 'ajoute',
        delegateInvitedClient: 'to manage and share documents on your behalf', // not found
        delegateInvitedCbo: 'to manage and share documents on their behalf', // not found
        delegateAcceptedClient:
          'can now manage and share documents on your behalf', // not found
        delegateAcceptedCbo:
          'can now manage and share documents on this account', // not found
        delegateDeletedClient: 'has been removed from your account', // not found
        delegateDeletedCbo: 'has been removed from this account ', // not found
        deleted: 'efase',
        edited: 'modifye detay nan',
        file: 'fichye',
        files: 'dokiman yo',
        invited: 'envitasyon',
        pageTitle: 'Aktivite Kont lan',
        shared: 'pataj',
        today: 'TODAY', // not found
        you: 'You', // not found
      },

      // Copy where you are viewing shared folders
      sharedFolder: {
        // empty state for list of shared folders
        noCollections: `Ou poko pataje okenn dokiman`, // message
        shareFirstDocument: 'Pataje premye dokiman ou an', // call to action

        // empty state for an individual shared folder
        emptyCollection: 'Tout dokiman yo te retire nan fichye sa a.', // (not found) message
        returnDashboard: 'Retounen nan tablodbò a', // call to action

        // empty state for list of clients who have shared collections with user
        noSharedDocuments: 'Ou poko resevwa okenn dokiman ki pataje ak ou.',

        // title for collection table name column
        collectionTableTitle: 'Dokiman ou pataje yo, klase pa dat',
      },

      cbo: {
        selectClient: 'Select a client to access their account', // not found
        clickToRemove: 'Click {close} to remove a client', // not found
        noClientsTitle:
          'You have not been added to any client My File NYC accounts', // not found
        noClientsBody:
          "Once a client adds you to their My File NYC account, you'll be able to manage and share documents on their behalf from this screen.\n\nA client can provide access to their documents in the Account menu settings in My File NYC.", // not found
        noClientActionLabel: 'Not a case manager?', // not found
        noClientActionText:
          'If you are seeking permanent supportive housing, click here.', // not found
        removeConfirmationTitle: 'Remove this client from your My File NYC?', // not found
        removeConfirmationBody:
          'You will no longer be able to view, manage, or share documents on their behalf. This cannot be undone.', // not found
        removeConfirmationAction: 'Yes, Remove', // not found
        errorAcceptingInvite:
          'Invite could not be accepted. Please ensure you are logged in with the email address that received the invite.', // not found
      },

      agent: {
        clientFirstNameLabel: 'Non', // label of client first name column in agent view
        clientLastNameLabel: 'Siyati', // label of client last name column in agent view
        clientDob: 'Dat Nesans', // label of client date of birth column in agent view
        clientCaseNum: 'Nimewo Dosye', // label of client case number column in agent view
        clientEmail: 'Imèl', // label of client case number column in agent view
        dateShared: 'Dat li te pataje a', // label in side bar
        noClientActionLabel: 'Not a government employee?', // not found
        noClientActionText:
          'If you are seeking permanent supportive housing, click here.', // not found
        reorderFiles: 'Re-klase dokiman yo', // shown in agent view when downloading as PDF
        selectClient: 'Seleksyone kliyan pou jwenn aksè pou w pataje dokiman.',
        sharedBy: 'Pataje yo pa', //  label in side bar
        sharedFolderNameLabel: 'Name', // (not found) label of shared folder name column in agent view
        sharedWith: 'Pataje li ak:', // promt for agency email
      },

      landing: {
        community: 'COMMUNITY SERVICES', // not found
        agency: 'AGENCY SERVICES', // not found
      },

      $vuetify: {
        ...vuetifyEn,
        dataTable: {
          sortBy: 'Sort by', // not found
          ariaLabel: {
            sortNone: 'Do not sort', // not found
            activateAscending: 'Sort ascending', // not found
          },
        },
        noDataText: 'No data', // no found
      },
      validations: {
        ...validationEn.messages,
        whitelist: 'Must be an approved agency email', // not found
        notSameAsUserEmail: 'You cannot enter your own email address', // not found
      },
    },
    ch: {
      // label appearing in tabular content (list of users, list of shared collections etc)
      // as well as side bar on document view
      dateAdded: `添加日期`,

      application: {
        title: 'My File NYC',
      },

      toast: {
        acceptedDelegateInvite: 'Delegate Access Accepted', // not found
        delegateRemoved: 'Client Removed', // not found
        downloadLoadingState: 'Preparing Download', // not found
        sharingComplete: '分享完成',
        uploading: 'Adding Document...', // not found displayed while a file is uploading
        uploadComplete: 'Upload Complete', // not found
        fileDeletedConfirmation: 'Document Deleted', // not found
        fileTooLarge: 'Document too large (must be < 10MB)', // not found
      },

      login: {
        loginButton: '登錄並開始使用',
        getStarted: {
          client: 'Get Started', // not found
          cityEmployee: 'City Employee Login', // not found
          cboWorker: 'CBO Worker Login', // not found
        },
        welcomeTitle: 'Welcome', // not found
        footerLogoAlt: 'Footer logo', // not found
      },

      navigation: {
        about: 'About', // not found
        account: 'My Account Managers', // not found
        settings: '我的個人資料',
        settingsFirstRun:
          'Welcome to #My File NYC&! Please answer a few questions about yourself to get started.', // not found
        welcomeFirstRun: 'Welcome to My File NYC!', // not found
        activity: 'Activity Log', // not found
        back: 'Back', // not found
        clients: 'Clients', // navigate back to agent view desktop not found
        close: 'Close', // not found
        dashboard: 'Dashboard', // not found
        faq: 'FAQ', // not found
        loading: 'Loading', // not found
        loggingIn: 'Logging in...', // not found
        manageAccounts: 'Manage Accounts', // not found
        signIn: 'Sign in', // not found
        signOut: '登出',
        switchAccount: 'Switch Clients', // not found
        termsOfUse: 'Terms of Use', // not found
        nycId: '登錄遇到困難?',
      },

      document: {
        // This is the title of the confirmation dialog for deleting a document
        deleteConfirmationTitle: 'Delete this document?', // not found
        // This is the body content of the confirmation dialog for deleting a document
        deleteConfirmationBody: `任何擁有共享權限的人將不再能夠查看這份文件。無法撤銷。`,
        documentMenu: 'Document menu', // not found
        documentOptions: '選項',
        downloadZip: 'Download All', // not found
        downloadPdf: 'Download PDF', // not found
        description: '文件描述', // displayed beneath the document and expands to show description (if any)
        editDetailsTitle: '編輯詳細資訊', // page title on edit details screen
        enterNamePlaceholder: 'Give this document a name', // not found
        enterDescriptionPlaceholder: '說明該文件（選填)',
        documentName: '您上傳了那種類型的文件？', // shown as a label on edit details screen

        noDocuments: 'There are no documents saved to your account yet.', // not found shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'Add your first document', // not found label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: '文件名稱',
      },

      controls: {
        accept: 'Accept', // (not found) eg. accept terms of use
        add: 'Add', // (not found) eg. add a delegate
        allFiles: 'Your Documents', // (not found) shown as tab label on the dashboard
        cancel: '取消', // cancel button
        confirm: 'Confirm', // not found
        confirmDelete: '是的，刪除',
        declineAndLogOut: 'Decline & Log Out', // (not found) decline TOS button
        delete: '刪除', // delete document kebab item
        done: 'Done', // not found
        download: '下載', // edit document kebab item and button text
        editDetails: '編輯詳細資訊', // edit document kebab item
        edit: '編輯', // edit account details
        continue: '繼續',
        share: '分享至 DHS', // share button
        shared: 'Shared Documents', // (not found) label of shared tab on dashboard
        upload: 'Upload a Document', // (not found)
        uploadDocument: 'Upload Document', // not found
        view: '查看',
        save: '儲存',
      },

      // account settings page
      account: {
        language: 'Language', // not found open language selector
        firstName: '名字',
        whatIsYourFirstName: '您的名字是什麼？',
        lastName: '姓氏',
        whatIsYourLastName: '您的姓氏是什麼？',
        dob: '出生日期',
        whatIsYourDob: '您的出生日期是多少？',
        caseNumber: '個案號碼',
        whatIsYourDshCaseNumber: '您的 DHS 個案號碼是多少？',
        dhsShow:
          '如果您是返鄉人士，您的 DHS 個案號碼是多少？如果您還不瞭解 PATH，在您前往 PATH 時請添加您收到的票號（例如：CL ####）。',
        locale: '選擇語言',
      },

      // All copy related to the create shared folder flow
      sharing: {
        defaultName: 'Documents you shared with DHS on {date}', // not found
        confirmSharedFiles:
          'Documents to be shared DHS | Documents to be shared DHS', // not found
        plusNMore: '+ {count} more', // not found
        recipients: 'Recipients', // not found

        // placeholder text for the add recipient email field
        addRecipientPlaceholder: 'Enter email address', // not found

        // step titles in the share flow
        confirmTitle: 'Are you sure you want to share these Documents?', // not found
        addRecipientsTitle: 'Who are you sharing these document(s) with?', // not found
        selectFilesTitle: 'Select Documents', // not found

        disclaimerTitle: 'Reminder', // not found
        shareDocumentDisclaimer: [
          'My File NYC facilitates document sharing with {emails} email accounts',
          'Once documents are shared DHS employees may download and save your documents to submit as proof for your application. DHS may still have copies to support your case even if you unshare or delete them from My File.', // not found
        ],

        // on the confirmation step, could be "recipient" or "recipients" depending on number of items
        confirmRecipientsLabel:
          'Usted está compartiendo documentos con | Recipients', // not found
        tooManyRecipients: 'You can share with up to {count} people', // (not found) error text when trying to add more than 10 recipients
      },

      tabTitles: {
        about: 'About', // not found
        authorizing: 'Authorizing', // not found not important - used while logging in
        dashboard: 'Dashboard', // not found
        document: '文件', // used for document preview while page is loading, then changes to document title
        faq: 'FAQ', // not found
        shared: 'Shared', // not found used in share flow
        sharedBy: 'Shared by', // not found used in share flow
        termsOfUse: 'Terms of Use', // not found used while viewing TOU
        welcome: 'Welcome', // not found displayed on the initial landing page
      },

      delegateAccess: {
        disabledNotice: 'The delegation feature is currently disabled.', // not found
        pageTitle: 'Account Access', // not found title in account menu and page title of delegation flow
        menuTitle: 'Who Can Manage My Documents', // (not found) title in account menu and page title of delegation flow
        emailPlaceholder: 'Add people via email', // not found
        addConfirmationTitle:
          'Let this person manage documents on your account?', // not found
        addConfirmationBody:
          'They will be able to upload and share documents for you. They cannot delete documents. You can always remove their access to your account.', // not found
        addConfirmationAction: 'Yes, Give Access', // not found
        removeConfirmationTitle:
          'Remove this person from accessing your account?', // not found
        removeConfirmationBody:
          'They will no longer be able to manage or share documents for you. You can always give them access to your documents again in the Account menu settings.', // not found
        removeConfirmationAction: 'Yes, Remove', // not found
        uninviteConfirmationTitle: 'Cancel this invitation?', // not found
        uninviteConfirmationBody:
          'You can invite someone to manage your account from the Account menu settings.', // not found
        uninviteConfirmationAction: 'Yes, Cancel', // not found
        tooManyDelegates: 'Up to {count} people can access your account', // not found
        invitePending: 'Invitation pending', // not found
        inviteExpired: 'Invitation expired.', // not found
        resendInvite: 'Resend?', // not found
      },

      // Account Activity
      activity: {
        accessed: 'accessed', // not found
        added: 'added', // not afound
        delegateInvitedClient: 'to manage and share documents on your behalf', // not found
        delegateInvitedCbo: 'to manage and share documents on their behalf', // not found
        delegateAcceptedClient:
          'can now manage and share documents on your behalf', // not found
        delegateAcceptedCbo:
          'can now manage and share documents on this account', // not found
        delegateDeletedClient: 'has been removed from your account', // not found
        delegateDeletedCbo: 'has been removed from this account ', // not found
        deleted: 'deleted', // not found
        edited: 'edited details of', // not found
        file: 'file', // not found
        files: 'documents', // not found
        invited: 'invited', // not found
        pageTitle: 'Account Activity', // not found
        shared: 'shared', // not found
        today: 'TODAY', // not found
        you: 'You', // not found
      },

      // Copy where you are viewing shared folders
      sharedFolder: {
        // empty state for list of shared folders
        noCollections: `您還未分享任何文件`, // message
        shareFirstDocument: 'Share your first document', // (not found) call to action

        // empty state for an individual shared folder
        emptyCollection: 'All documents have been removed from this folder.', // (not found) message
        returnDashboard: 'Return to dashboard', // (not found) call to action

        // empty state for list of clients who have shared collections with user
        noSharedDocuments: "You haven't received any shared documents yet.", // not found

        // title for collection table name column
        collectionTableTitle: "Documents you've shared, organized by date", // not found
      },

      cbo: {
        selectClient: 'Select a client to access their account', // not found
        clickToRemove: 'Click {close} to remove a client', // not found
        noClientsTitle:
          'You have not been added to any client My File NYC accounts', // not found
        noClientsBody:
          "Once a client adds you to their My File NYC account, you'll be able to manage and share documents on their behalf from this screen.\n\nA client can provide access to their documents in the Account menu settings in My File NYC.", // not found
        noClientActionLabel: 'Not a case manager?', // not found
        noClientActionText:
          'If you are seeking permanent supportive housing, click here.', // not found
        removeConfirmationTitle: 'Remove this client from your My File NYC?', // not found
        removeConfirmationBody:
          'You will no longer be able to view, manage, or share documents on their behalf. This cannot be undone.', // not found
        removeConfirmationAction: 'Yes, Remove', // not found
        errorAcceptingInvite:
          'Invite could not be accepted. Please ensure you are logged in with the email address that received the invite.', // not found
      },

      agent: {
        clientFirstNameLabel: '名字', // label of client first name column in agent view
        clientLastNameLabel: '姓氏', // label of client last name column in agent view
        clientDob: '出生日期', // label of client date of birth column in agent view
        clientCaseNum: '個案號碼', // label of client case number column in agent view
        clientEmail: '電子郵件', // label of client case number column in agent view
        dateShared: '分享日期', // label in side bar
        noClientActionLabel: 'Not a government employee?', // not found
        noClientActionText:
          'If you are seeking permanent supportive housing, click here.', // not found
        reorderFiles: 'Reorder Documents', // (not found) shown in agent view when downloading as PDF
        selectClient: '選擇客戶以存取分享文件',
        sharedBy: 'Shared By', // (not found) label in side bar
        sharedFolderNameLabel: 'Name', // (not found) label of shared folder name column in agent view
        sharedWith: '分享文件至:', // promt for agency email
      },

      landing: {
        community: 'COMMUNITY SERVICES', // not found
        agency: 'AGENCY SERVICES', // not found
      },

      $vuetify: {
        ...vuetifyEn,
        dataTable: {
          sortBy: 'Sort by', // not found
          ariaLabel: {
            sortNone: 'Do not sort', // not found
            activateAscending: 'Sort ascending', // not found
          },
        },
        noDataText: 'No data', // no found
      },
      validations: {
        ...validationEn.messages,
        whitelist: 'Must be an approved agency email', // not found
        notSameAsUserEmail: 'You cannot enter your own email address', // not found
      },
    },
  },
  overrides,
)
