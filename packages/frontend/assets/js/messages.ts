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
        downloadLoadingState: 'Preparing Download', // not found
        sharingComplete: 'اكتملت المشاركة',
        uploading: 'Adding Document...', // not found displayed while a file is uploading
        uploadComplete: 'Upload Complete', // not found
        fileDeletedConfirmation: 'Document Deleted', // not found
        fileTooLarge: 'Document too large (must be < 10MB)', // not found
      },

      login: {
        loginButton: 'سَجِّل الدخول وابدأ',
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
        settings: 'ملفي الشخصي',
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
        signOut: 'تسجيل الخروج',
        switchAccount: 'Switch Clients', // not found
        termsOfUse: 'Terms of Use', // not found
        nycId: 'هل تواجه مشكلة في تسجيل الدخول؟',
      },

      document: {
        // This is the title of the confirmation dialog for deleting a document
        deleteConfirmationTitle: 'Delete this document?', // not found
        // This is the body content of the confirmation dialog for deleting a document
        deleteConfirmationBody: `لن يتمكن أي شخص لديه حق الوصول المشترك من عرض هذا المستند بعد الآن. لا يمكن التراجع عن هذه الخطوة`,
        documentMenu: 'Document menu', // not found
        documentOptions: 'الخيارات',
        downloadZip: 'Download All', // not found
        downloadPdf: 'Download PDF', // not found
        description: 'وصف المستند', // displayed beneath the document and expands to show description (if any)
        editDetailsTitle: 'تعديل التفاصيل', // page title on edit details screen
        enterNamePlaceholder: 'Give this document a name', // not found
        enterDescriptionPlaceholder: 'قدم وصفًا لهذا المستند (اختياري)',
        documentName: 'ما نوع المستند الذي حملته؟', // shown as a label on edit details screen

        noDocuments: 'There are no documents saved to your account yet.', // not found shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'Add your first document', // not found label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: 'اسم المستند',
      },

      controls: {
        accept: 'Accept', // (not found) eg. accept terms of use
        add: 'Add', // (not found) eg. add a delegate
        allFiles: 'Your Documents', // (not found) shown as tab label on the dashboard
        cancel: 'إلغاء', // cancel button
        confirm: 'Confirm', // not found
        confirmDelete: 'ہاں، حذف کریں',
        declineAndLogOut: 'Decline & Log Out', // (not found) decline TOS button
        delete: 'حذف کریں', // delete document kebab item
        done: 'Done', // not found
        download: 'تنزيل', // edit document kebab item and button text
        editDetails: 'تعديل التفاصيل', // edit document kebab item
        edit: 'تعديل', // edit account details
        continue: 'متابعة',
        share: 'مشاركة مع إدارة DHS', // share button
        shared: 'Shared Documents', // (not found) label of shared tab on dashboard
        upload: 'Upload a Document', // (not found)
        uploadDocument: 'Upload Document', // not found
        view: 'دیکھیں',
        save: 'محفوظ کریں',
      },

      // account settings page
      account: {
        language: 'Language', // not found open language selector
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
        about: 'About', // not found
        authorizing: 'Authorizing', // not found not important - used while logging in
        dashboard: 'Dashboard', // not found
        document: 'وثائق', // used for document preview while page is loading, then changes to document title
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
        noCollections: `لم تُشارك أي مستندات بعد`, // message
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
        clientFirstNameLabel: 'الاسم الأول', // label of client first name column in agent view
        clientLastNameLabel: 'اسم العائلة', // label of client last name column in agent view
        clientDob: 'تاريخ الميلاد', // label of client date of birth column in agent view
        clientCaseNum: 'رقم الحالة', // label of client case number column in agent view
        clientEmail: 'البريد الإلكتروني', // label of client case number column in agent view
        dateShared: 'اشتراک کی تاریخ', // label in side bar
        noClientActionLabel: 'Not a government employee?', // not found
        noClientActionText:
          'If you are seeking permanent supportive housing, click here.', // not found
        reorderFiles: 'Reorder Documents', // (not found) shown in agent view when downloading as PDF
        selectClient:
          'اختر العميل الذي يمكنه الوصول إلى المستندات التي تمت مشاركتها',
        sharedBy: 'Shared By', // (not found) label in side bar
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
        downloadLoadingState: 'Preparing Download', // not found
        sharingComplete: 'Предоставление закончено',
        uploading: 'Adding Document...', // not found displayed while a file is uploading
        uploadComplete: 'Upload Complete', // not found
        fileDeletedConfirmation: 'Document Deleted', // not found
        fileTooLarge: 'Document too large (must be < 10MB)', // not found
      },

      login: {
        loginButton: 'Войдите в систему и приступайте',
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
        settings: 'Мой профиль',
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
        signOut: 'Выйти',
        switchAccount: 'Switch Clients', // not found
        termsOfUse: 'Terms of Use', // not found
        nycId: 'Возникли проблемы с входом в систему? ',
      },

      document: {
        // This is the title of the confirmation dialog for deleting a document
        deleteConfirmationTitle: 'Delete this document?', // not found
        // This is the body content of the confirmation dialog for deleting a document
        deleteConfirmationBody: `Лица с общим доступом больше не смогут просматривать этот документ. Отмена этого действия невозможна.`,
        documentMenu: 'Document menu', // not found
        documentOptions: 'Варианты',
        downloadZip: 'Download All', // not found
        downloadPdf: 'Download PDF', // not found
        description: 'Описание документа', // displayed beneath the document and expands to show description (if any)
        editDetailsTitle: 'Редактировать данные', // page title on edit details screen
        enterNamePlaceholder: 'Give this document a name', // not found
        enterDescriptionPlaceholder: 'Опишите этот документ (необязательно)',
        documentName: 'Какой документ вы загрузили？', // shown as a label on edit details screen

        noDocuments: 'There are no documents saved to your account yet.', // not found shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'Add your first document', // not found label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: 'Название документа',
      },

      controls: {
        accept: 'Accept', // (not found) eg. accept terms of use
        add: 'Add', // (not found) eg. add a delegate
        allFiles: 'Your Documents', // (not found) shown as tab label on the dashboard
        cancel: 'Отменить', // cancel button
        confirm: 'Confirm', // not found
        confirmDelete: 'Да, удалить',
        declineAndLogOut: 'Decline & Log Out', // (not found) decline TOS button
        delete: 'Удалить', // delete document kebab item
        done: 'Done', // not found
        download: 'Загрузить', // edit document kebab item and button text
        editDetails: 'Редактировать данные', // edit document kebab item
        edit: 'Редактировать', // edit account details
        continue: 'Продолжить',
        share: 'Предоставить доступ DHS', // share button
        shared: 'Shared Documents', // (not found) label of shared tab on dashboard
        upload: 'Upload a Document', // (not found)
        uploadDocument: 'Upload Document', // not found
        view: 'Просмотреть',
        save: 'Сохранить',
      },

      // account settings page
      account: {
        language: 'Language', // not found open language selector
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
        document: 'Документ', // used for document preview while page is loading, then changes to document title
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
        noCollections: `Вы еще никому не предоставили доступ к своим документам`, // message
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
        clientFirstNameLabel: 'Имя', // label of client first name column in agent view
        clientLastNameLabel: 'Фамилия', // label of client last name column in agent view
        clientDob: 'Дата рождения', // label of client date of birth column in agent view
        clientCaseNum: 'Номер дела', // label of client case number column in agent view
        clientEmail: 'Адрес электронной почты', // label of client case number column in agent view
        dateShared: 'Дата предоставления', // label in side bar
        noClientActionLabel: 'Not a government employee?', // not found
        noClientActionText:
          'If you are seeking permanent supportive housing, click here.', // not found
        reorderFiles: 'Reorder Documents', // (not found) shown in agent view when downloading as PDF
        selectClient:
          'Выберите клиента для предоставления доступа к общим документам',
        sharedBy: 'Shared By', // (not found) label in side bar
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
        downloadLoadingState: 'Preparing Download', // not found
        sharingComplete: 'اشتراک مکمل ہو گیا',
        uploading: 'Adding Document...', // not found displayed while a file is uploading
        uploadComplete: 'Upload Complete', // not found
        fileDeletedConfirmation: 'Document Deleted', // not found
        fileTooLarge: 'Document too large (must be < 10MB)', // not found
      },

      login: {
        loginButton: 'لاگ ان کریں اور شروع کریں',
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
        settings: 'میری پروفائل',
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
        signOut: 'سائن آؤٹ',
        switchAccount: 'Switch Clients', // not found
        termsOfUse: 'Terms of Use', // not found
        nycId: 'لاگ ان کرنے میں دشواری ہو رہی ہے؟',
      },

      document: {
        // This is the title of the confirmation dialog for deleting a document
        deleteConfirmationTitle: 'Delete this document?', // not found
        // This is the body content of the confirmation dialog for deleting a document
        deleteConfirmationBody: `اشتراک کردہ رسائی والا کوئی بھی شخص اس دستاویز کو مزید نہیں دیکھ سکے گا۔ اسے کالعدم نہیں کیا جا سکتا`,
        documentMenu: 'Document menu', // not found
        documentOptions: 'اختیارات',
        downloadZip: 'Download All', // not found
        downloadPdf: 'Download PDF', // not found
        description: 'دستاویز کی وضاحت', // displayed beneath the document and expands to show description (if any)
        editDetailsTitle: 'تفصیلات میں ترمیم کریں', // page title on edit details screen
        enterNamePlaceholder: 'Give this document a name', // not found
        enterDescriptionPlaceholder: 'اس دستاویز کی وضاحت کریں (اختیاری)',
        documentName: 'آپ نے کس قسم کی دستاویز اپ لوڈ کی؟', // shown as a label on edit details screen

        noDocuments: 'There are no documents saved to your account yet.', // not found shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'Add your first document', // not found label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: 'دستاویز کا نام',
      },

      controls: {
        accept: 'Accept', // (not found) eg. accept terms of use
        add: 'Add', // (not found) eg. add a delegate
        allFiles: 'Your Documents', // (not found) shown as tab label on the dashboard
        cancel: 'منسوخ کریں', // cancel button
        confirm: 'Confirm', // not found
        confirmDelete: 'ہاں، حذف کریں',
        declineAndLogOut: 'Decline & Log Out', // (not found) decline TOS button
        delete: 'حذف کریں', // delete document kebab item
        done: 'Done', // not found
        download: 'ڈاؤن لوڈ کریں', // edit document kebab item and button text
        editDetails: 'تفصیلات میں ترمیم کریں', // edit document kebab item
        edit: 'ترمیم کریں', // edit account details
        continue: 'جاری رکھیں',
        share: 'DHS کے ساتھ اشتراک کریں', // share button
        shared: 'Shared Documents', // (not found) label of shared tab on dashboard
        upload: 'Upload a Document', // (not found)
        uploadDocument: 'Upload Document', // not found
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
        about: 'About', // not found
        authorizing: 'Authorizing', // not found not important - used while logging in
        dashboard: 'Dashboard', // not found
        document: 'دستاویزات', // used for document preview while page is loading, then changes to document title
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
        noCollections: `آپ نے ابھی تک کسی دستاویز کا اشتراک نہیں کیا ہے`, // message
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
        clientFirstNameLabel: 'پہلا نام', // label of client first name column in agent view
        clientLastNameLabel: 'آخری نام', // label of client last name column in agent view
        clientDob: 'تاریخ پیدائش', // label of client date of birth column in agent view
        clientCaseNum: 'کیس نمبر', // label of client case number column in agent view
        clientEmail: 'ای میل', // label of client case number column in agent view
        dateShared: 'اشتراک کی تاریخ', // label in side bar
        noClientActionLabel: 'Not a government employee?', // not found
        noClientActionText:
          'If you are seeking permanent supportive housing, click here.', // not found
        reorderFiles: 'Reorder Documents', // (not found) shown in agent view when downloading as PDF
        selectClient:
          'اشتراک کردہ دستاویزات تک رسائی کے لیے کلائنٹ کو منتخب کریں',
        sharedBy: 'Shared By', // (not found) label in side bar
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
        settings: 'Mi perfil',
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
        signOut: 'Cerrar sesión',
        switchAccount: 'Switch Clients', // not found
        termsOfUse: 'Terms of Use', // not found
        nycId: '¿Tiene problemas para acceder?',
      },

      document: {
        // This is the title of the confirmation dialog for deleting a document
        deleteConfirmationTitle: 'Delete this document?', // not found
        // This is the body content of the confirmation dialog for deleting a document
        deleteConfirmationBody:
          'Cualquier persona con acceso compartido ya no podrá ver este documento. Esto no se puede deshacer.',
        documentMenu: 'Document menu', // not found
        documentOptions: 'Opciones',
        downloadZip: 'Download All', // not found
        downloadPdf: 'Download PDF', // not found
        description: 'Descripción del documento', // displayed beneath the document and expands to show description (if any)
        editDetailsTitle: 'Editar información', // page title on edit details screen
        enterNamePlaceholder: 'Give this document a name', // not found
        enterDescriptionPlaceholder: 'Describa este documento (opcional)',
        documentName: '¿Qué tipo de documento ha subido?', // shown as a label on edit details screen

        noDocuments: 'There are no documents saved to your account yet.', // not found shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'Add your first document', // not found label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: 'Nombre del documento',
      },

      controls: {
        accept: 'Accept', // (not found) eg. accept terms of use
        add: 'Add', // (not found) eg. add a delegate
        allFiles: 'Your Documents', // (not found) shown as tab label on the dashboard
        cancel: 'Cancelar', // cancel button
        confirm: 'Confirm', // not found
        confirmDelete: 'Sí, eliminar',
        declineAndLogOut: 'Decline & Log Out', // (not found) decline TOS button
        delete: 'Eliminar', // delete document kebab item
        done: 'Done', // not found
        download: 'Descargar', // edit document kebab item and button text
        editDetails: 'Editar información', // edit document kebab item
        edit: 'Editar', // edit account details
        continue: 'Continuar',
        share: 'Compartir con DHS', // share button
        shared: 'Shared Documents', // (not found) label of shared tab on dashboard
        upload: 'Upload a Document', // (not found)
        uploadDocument: 'Upload Document', // not found
        view: 'Vista',
        save: 'Guardar',
      },

      // account settings page
      account: {
        language: 'Language', // not found open language selector
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
        document: 'Documento', // used for document preview while page is loading, then changes to document title
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
        noCollections: 'Aún no ha compartido ningún documento.', // message
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
        clientFirstNameLabel: 'Primer nombre', // label of client first name column in agent view
        clientLastNameLabel: 'Apellido', // label of client last name column in agent view
        clientDob: 'Fecha de nacimiento', // label of client date of birth column in agent view
        clientCaseNum: 'Número de caso', // label of client case number column in agent view
        clientEmail: 'Correo electrónico', // label of client case number column in agent view
        dateShared: 'Fecha compartida', // label in side bar
        noClientActionLabel: 'Not a government employee?', // not found
        noClientActionText:
          'If you are seeking permanent supportive housing, click here.', // not found
        reorderFiles: 'Reorder Documents', // (not found) shown in agent view when downloading as PDF
        selectClient:
          'Seleccione el cliente para acceder a documentos compartidos',
        sharedBy: 'Shared By', // (not found) label in side bar
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
        downloadLoadingState: 'Preparing Download', // not found
        sharingComplete: 'Partage terminé',
        uploading: 'Adding Document...', // not found displayed while a file is uploading
        uploadComplete: 'Upload Complete', // not found
        fileDeletedConfirmation: 'Document Deleted', // not found
        fileTooLarge: 'Document too large (must be < 10MB)', // not found
      },

      login: {
        loginButton: 'Pour commencer, connectez-vous',
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
        settings: 'Mon profil',
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
        signOut: 'Déconnexion',
        switchAccount: 'Switch Clients', // not found
        termsOfUse: 'Terms of Use', // not found
        nycId: 'Des problèmes pour vous connecter?',
      },

      document: {
        // This is the title of the confirmation dialog for deleting a document
        deleteConfirmationTitle: 'Delete this document?', // not found
        // This is the body content of the confirmation dialog for deleting a document
        deleteConfirmationBody: `Toutes les personnes bénéficiant d'un accès partagé ne pourront plus consulter ce document. Impossible d'annuler.`,
        documentMenu: 'Document menu', // not found
        documentOptions: 'Options',
        downloadZip: 'Download All', // not found
        downloadPdf: 'Download PDF', // not found
        description: 'Description du document', // displayed beneath the document and expands to show description (if any)
        editDetailsTitle: 'Modifier les détails', // page title on edit details screen
        enterNamePlaceholder: 'Give this document a name', // not found
        enterDescriptionPlaceholder: 'Décrivez ce document (facultatif)',
        documentName: 'Quel type de document avez-vous téléchargé?', // shown as a label on edit details screen

        noDocuments: 'There are no documents saved to your account yet.', // not found shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'Add your first document', // not found label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: 'Nom du document',
      },

      controls: {
        accept: 'Accept', // (not found) eg. accept terms of use
        add: 'Add', // (not found) eg. add a delegate
        allFiles: 'Your Documents', // (not found) shown as tab label on the dashboard
        cancel: 'Annuler', // cancel button
        confirm: 'Confirm', // not found
        confirmDelete: 'Oui, supprimer',
        declineAndLogOut: 'Decline & Log Out', // (not found) decline TOS button
        delete: 'Supprimer', // delete document kebab item
        done: 'Done', // not found
        download: 'Charger', // edit document kebab item and button text
        editDetails: 'Modifier les détails', // edit document kebab item
        edit: 'Modifier', // edit account details
        continue: 'Continuer',
        share: 'Partager avec le DHS', // share button
        shared: 'Shared Documents', // (not found) label of shared tab on dashboard
        upload: 'Upload a Document', // (not found)
        uploadDocument: 'Upload Document', // not found
        view: 'Consulter',
        save: 'Enregistrer',
      },

      // account settings page
      account: {
        language: 'Language', // not found open language selector
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
        document: 'Document', // used for document preview while page is loading, then changes to document title
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
        noCollections: `Vous n'avez pas encore partagé vos documents`, // message
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
        clientFirstNameLabel: 'Prénom', // label of client first name column in agent view
        clientLastNameLabel: 'Nom', // label of client last name column in agent view
        clientDob: 'Date de naissance', // label of client date of birth column in agent view
        clientCaseNum: 'Numéro de dossier', // label of client case number column in agent view
        clientEmail: 'Adresse électronique', // label of client case number column in agent view
        dateShared: 'Date du partage', // label in side bar
        noClientActionLabel: 'Not a government employee?', // not found
        noClientActionText:
          'If you are seeking permanent supportive housing, click here.', // not found
        reorderFiles: 'Reorder Documents', // (not found) shown in agent view when downloading as PDF
        selectClient:
          'Sélectionnez le (la) client(e) pour accéder aux documents partagés',
        sharedBy: 'Shared By', // (not found) label in side bar
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
        downloadLoadingState: 'Preparing Download', // not found
        sharingComplete: 'Pataj konplete',
        uploading: 'Adding Document...', // not found displayed while a file is uploading
        uploadComplete: 'Upload Complete', // not found
        fileDeletedConfirmation: 'Document Deleted', // not found
        fileTooLarge: 'Document too large (must be < 10MB)', // not found
      },

      login: {
        loginButton: 'Konekte epi kòmanse',
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
        settings: 'Pwofil mwen',
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
        signOut: 'Dekonekte',
        switchAccount: 'Switch Clients', // not found
        termsOfUse: 'Terms of Use', // not found
        nycId: 'Ou gen difikilte pou w konekte?',
      },

      document: {
        // This is the title of the confirmation dialog for deleting a document
        deleteConfirmationTitle: 'Delete this document?', // not found
        // This is the body content of the confirmation dialog for deleting a document
        deleteConfirmationBody: `Tout moun ki ka pataje dokiman sa pa p ka wè l ankò. Sa pa p ka defèt.`,
        documentMenu: 'Document menu', // not found
        documentOptions: 'Opsyon yo',
        downloadZip: 'Download All', // not found
        downloadPdf: 'Download PDF', // not found
        description: 'Deskripsyon dokiman', // displayed beneath the document and expands to show description (if any)
        editDetailsTitle: 'Modifye detay yo', // page title on edit details screen
        enterNamePlaceholder: 'Give this document a name', // not found
        enterDescriptionPlaceholder: 'Dekri dokiman (se si w vle)',
        documentName: 'Ki tip dokiman ou te atache?', // shown as a label on edit details screen

        noDocuments: 'There are no documents saved to your account yet.', // not found shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'Add your first document', // not found label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: 'Non dokiman an',
      },

      controls: {
        accept: 'Accept', // (not found) eg. accept terms of use
        add: 'Add', // (not found) eg. add a delegate
        allFiles: 'Your Documents', // (not found) shown as tab label on the dashboard
        cancel: 'Anile', // cancel button
        confirm: 'Confirm', // not found
        confirmDelete: 'Wi, efase',
        declineAndLogOut: 'Decline & Log Out', // (not found) decline TOS button
        delete: 'Efase', // delete document kebab item
        done: 'Done', // not found
        download: 'Telechaje', // edit document kebab item and button text
        editDetails: 'Modifye detay yo', // edit document kebab item
        edit: 'Modifye', // edit account details
        continue: 'Kontinye',
        share: 'Pataje ak DHS', // share button
        shared: 'Shared Documents', // (not found) label of shared tab on dashboard
        upload: 'Upload a Document', // (not found)
        uploadDocument: 'Upload Document', // not found
        view: 'Afichaj',
        save: 'Anrejistre',
      },

      // account settings page
      account: {
        language: 'Language', // not found open language selector
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
        document: 'Dokiman', // used for document preview while page is loading, then changes to document title
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
        noCollections: `Ou poko pataje okenn dokiman`, // message
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
        clientFirstNameLabel: 'Non', // label of client first name column in agent view
        clientLastNameLabel: 'Siyati', // label of client last name column in agent view
        clientDob: 'Dat Nesans', // label of client date of birth column in agent view
        clientCaseNum: 'Nimewo Dosye', // label of client case number column in agent view
        clientEmail: 'Imèl', // label of client case number column in agent view
        dateShared: 'Dat li te pataje a', // label in side bar
        noClientActionLabel: 'Not a government employee?', // not found
        noClientActionText:
          'If you are seeking permanent supportive housing, click here.', // not found
        reorderFiles: 'Reorder Documents', // (not found) shown in agent view when downloading as PDF
        selectClient: 'Seleksyone kliyan pou jwenn aksè pou w pataje dokiman.',
        sharedBy: 'Shared By', // (not found) label in side bar
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
  },
  overrides,
)
