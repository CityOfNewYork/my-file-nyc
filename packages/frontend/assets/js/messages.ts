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
        singleOrMultiple: 'Does your document have one or multiple files?',
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

      uploadInputButton: {
        oneFileTitle: 'One-file',
        oneFileDescription:
          "The one-file option gives you the ability to upload a file or an image from your device management system. If you're using a mobile phone or tablet you can take a photo with your camera.",
        multipleFilesTitle: 'Multiple-files',
        multipleFilesDescription:
          "The multiple-files option gives you the ability to upload as many files or images from your device management system. If you're using a mobile phone or tablet you can take photos with your camera.",
        titleInfoButton:
          'You can type either identity, proof of residency,application, etc.',
        descriptionInfoButton:
          'Provide a brief description of the files you uploaded for clarification.',
        yourFileTitle: 'Your file',
        yourFilesTitle: 'Your files',
        uploadNewFile: 'Upload new file',
        dragAndDropDescription:
          'You can change positions of your files in any order by',
        dragAndDropDescriptionBold: 'drag and drop.',
        removeFile: 'Remove',
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
        singleOrMultiple:
          'هل يحتوي المستند الخاص بك على ملف واحد أم ملفات متعددة؟',
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
        uploadFile: 'رفع ملف',
        uploadFiles: 'تحميل الملفات',
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
      },

      uploadInputButton: {
        oneFileTitle: 'ملف واحد',
        oneFileDescription:
          'يمنحك خيار الملف الواحد القدرة على تحميل ملف أو صورة من نظام إدارة جهازك. إذا كنت تستخدم هاتفًا محمولًا أو جهازًا لوحيًا ، فيمكنك التقاط صورة بالكاميرا.',
        multipleFilesTitle: 'ملفات متعددة',
        multipleFilesDescription:
          'يمنحك خيار الملفات المتعددة القدرة على تحميل أكبر عدد ممكن من الملفات أو الصور من نظام إدارة جهازك. إذا كنت تستخدم هاتفًا محمولًا أو جهازًا لوحيًا ، فيمكنك التقاط صور بالكاميرا.',
        titleInfoButton:
          'يمكنك كتابة الهوية ، وإثبات الإقامة ، والتطبيق ، وما إلى ذلك.',
        descriptionInfoButton:
          'قدم وصفًا موجزًا للملفات التي قمت بتحميلها للتوضيح.',
        yourFileTitle: 'ملفك',
        yourFilesTitle: 'ملفاتك',
        uploadNewFile: 'تحميل ملف جديد',
        dragAndDropDescription: 'يمكنك تغيير أوضاع ملفاتك بأي ترتيب من خلال',
        dragAndDropDescriptionBold: 'السحب والإفلات.',
        removeFile: 'يزيل',
      },
      validations: {
        ...validationEn.messages,
        whitelist: 'Must be an approved agency email', // not found
        notSameAsUserEmail: 'You cannot enter your own email address', // not found
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
        singleOrMultiple:
          'Ваш документ содержит один файл или несколько файлов?',
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
        uploadFile: 'Загрузить файл',
        uploadFiles: 'Загрузить файлы',
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

      uploadInputButton: {
        oneFileTitle: 'Один файл',
        oneFileDescription:
          'Вариант с одним файлом дает вам возможность загрузить файл или изображение из системы управления вашим устройством. Если вы используете мобильный телефон или планшет, вы можете сделать снимок с помощью камеры.',
        multipleFilesTitle: 'Несколько файлов',
        multipleFilesDescription:
          'Опция нескольких файлов дает вам возможность загружать столько файлов или изображений из вашей системы управления устройствами. Если вы используете мобильный телефон или планшет, вы можете делать фотографии с помощью камеры.',
        titleInfoButton:
          'Вы можете ввести удостоверение личности, подтверждение места жительства, заявление и т.д.',
        descriptionInfoButton:
          'Предоставьте краткое описание файлов, которые вы загрузили для разъяснения.',
        yourFileTitle: 'Ваш файл',
        yourFilesTitle: 'Ваши файлы',
        uploadNewFile: 'Загрузить новый файл',
        dragAndDropDescription:
          'Вы можете изменить положение ваших файлов в любом порядке ',
        dragAndDropDescriptionBold: 'путем перетаскивания.',
        removeFile: 'Удалить',
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
        singleOrMultiple: 'کیا آپ کی دستاویز میں ایک فائل یا متعدد فائلیں ہیں؟',
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
        uploadFile: 'اپ لوڈ فائل',
        uploadFiles: 'فائلیں اپ لوڈ کرو',
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

      uploadInputButton: {
        oneFileTitle: 'ایک فائل',
        oneFileDescription:
          'ایک فائل کا آپشن آپ کو اپنے ڈیوائس مینجمنٹ سسٹم سے فائل یا تصویر اپ لوڈ کرنے کی صلاحیت فراہم کرتا ہے۔ اگر آپ موبائل فون یا ٹیبلیٹ استعمال کر رہے ہیں تو آپ اپنے کیمرے سے تصویر لے سکتے ہیں۔',
        multipleFilesTitle: 'متعدد فائلیں۔',
        multipleFilesDescription:
          'ایک سے زیادہ فائلوں کا آپشن آپ کو آپ کے ڈیوائس مینجمنٹ سسٹم سے زیادہ سے زیادہ فائلیں یا تصاویر اپ لوڈ کرنے کی صلاحیت فراہم کرتا ہے۔ اگر آپ موبائل فون یا ٹیبلیٹ استعمال کر رہے ہیں تو آپ اپنے کیمرے سے تصاویر لے سکتے ہیں۔',
        titleInfoButton:
          'آپ یا تو شناخت ٹائپ کر سکتے ہیں، رہائش کا ثبوت، درخواست وغیرہ۔',
        descriptionInfoButton:
          'وضاحت کے لیے آپ نے جو فائلیں اپ لوڈ کی ہیں ان کی مختصر تفصیل فراہم کریں۔',
        yourFileTitle: 'آپ کی فائل',
        yourFilesTitle: 'آپ کی فائلیں۔',
        uploadNewFile: 'نئی فائل اپ لوڈ کریں۔',
        dragAndDropDescription:
          'آپ اپنی فائلوں کی پوزیشن کو کسی بھی ترتیب سے تبدیل کر سکتے ہیں۔',
        dragAndDropDescriptionBold: 'ڈریگ اور ڈراپ.',
        removeFile: 'دور',
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
        downloadLoadingState: '다운로드 준비 중',
        sharingComplete: '공유 완료',
        uploading: '서류 추가 중...', // displayed while a file is uploading
        uploadComplete: '업로드 완료',
        fileDeletedConfirmation: '서류 삭제됨',
        fileTooLarge: '문서가 너무 큼(10MB 미만이어야 함)',
      },

      login: {
        loginButton: '로그인하고 시작하십시오.',
        getStarted: {
          client: '시작하다',
          cityEmployee: 'City Employee Login', // not found
          cboWorker: 'CBO Worker Login', // not found
        },
        welcomeTitle: '환영',
        footerLogoAlt: 'Footer logo', // not found
      },

      navigation: {
        about: '에 대한',
        account: 'My Account Managers', // not found
        settings: '내 프로필',
        settingsFirstRun:
          'My File NYC에 오신 것을 환영합니다! 시작하려면 본인에 대한 몇 가지 질문에 답하십시오.', // not found
        welcomeFirstRun: 'My File NYC에 오신 것을 환영합니다!',
        activity: '활동 로그',
        back: '뒤쪽에',
        clients: '클라이언트', // navigate back to agent view desktop not found
        close: '뒤쪽에',
        dashboard: '대시보드',
        faq: 'FAQ', // not found
        loading: '로드 중',
        loggingIn: '로그인 중...',
        manageAccounts: 'Manage Accounts', // not found
        signIn: '로그인',
        signOut: '로그아웃',
        switchAccount: '클라이언트 전환',
        termsOfUse: '이용약관',
        nycId: '로그인하는 데 문제가 있습니까? ',
      },

      document: {
        // This is the title of the confirmation dialog for deleting a document
        deleteConfirmationTitle: '이 서류를 삭제하시겠습니까?',
        // This is the body content of the confirmation dialog for deleting a document
        deleteConfirmationBody: `공유 액세스 권한이 있는 사람은 더 이상 이 서류를 볼 수 없습니다. 취소할 수 없습니다.`,
        documentMenu: '서류 메뉴',
        documentOptions: '옵션',
        downloadZip: '모두 다운로드',
        downloadPdf: 'PDF 다운로드',
        description: '서류 설명', // displayed beneath the document and expands to show description (if any)
        editDetailsTitle: '세부 정보 편집', // page title on edit details screen
        enterNamePlaceholder: '이 서류에 이름을 지정하십시오',
        enterDescriptionPlaceholder: '이 서류에 대해 설명해주십시오(선택사항)',
        documentName: '어떤 종류의 서류를 업로드했습니까?', // shown as a label on edit details screen

        noDocuments: '아직 계정에 저장된 서류가 없습니다.', // shown on dashboard when there are no documents
        previewOf: 'Preview of',
        uploadFirst: '첫 번째 서류 추가', // label on the empty state upload button
        thumbnailOf: 'Thumbnail of',
        fileName: '서류 이름',
        singleOrMultiple: '문서에 하나 또는 여러 개의 파일이 있습니까?',
      },

      controls: {
        accept: '수락', // eg. accept terms of use
        add: '추가', // eg. add a delegate
        allFiles: '내 서류', // shown as tab label on the dashboard
        cancel: '취소', // cancel button
        confirm: '확인',
        confirmDelete: '네, 삭제합니다',
        declineAndLogOut: '거부 및 로그아웃', // decline TOS button
        delete: '삭제', // delete document kebab item
        done: '완료', // not found
        download: '다운로드', // edit document kebab item and button text
        editDetails: '세부 정보 편집', // edit document kebab item
        edit: '편집', // edit account details
        continue: '계속',
        share: 'DHS와 공유', // share button
        shared: '공유 서류', // label of shared tab on dashboard
        upload: '서류 업로드',
        uploadDocument: '서류 업로드',
        uploadFile: '파일 업로드',
        uploadFiles: '파일 업로드하다',
        view: '보기',
        save: '저장',
      },

      // account settings page
      account: {
        language: '언어', // open language selector
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
        addRecipientPlaceholder: '이메일 주소 입력',

        // step titles in the share flow
        confirmTitle: '이 서류를 공유하시겠습니까?',
        addRecipientsTitle: '이 서류를 누구와 공유하고 있습니까?',
        selectFilesTitle: '서류 선택',

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
        about: '소개',
        authorizing: 'Authorizing', // not found not important - used while logging in
        dashboard: '대시보드',
        document: 'Dokument', // used for document preview while page is loading, then changes to document title
        faq: 'FAQ',
        shared: '공유됨', //  used in share flow
        sharedBy: '공유자', //  used in share flow
        termsOfUse: '이용약관', //  used while viewing TOU
        welcome: '환영', //  displayed on the initial landing page
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
        accessed: '액세스됨',
        added: '추가됨',
        delegateInvitedClient: 'to manage and share documents on your behalf', // not found
        delegateInvitedCbo: 'to manage and share documents on their behalf', // not found
        delegateAcceptedClient:
          'can now manage and share documents on your behalf', // not found
        delegateAcceptedCbo:
          'can now manage and share documents on this account', // not found
        delegateDeletedClient: 'has been removed from your account', // not found
        delegateDeletedCbo: 'has been removed from this account ', // not found
        deleted: '삭제됨',
        edited: '편집된 세부정보:',
        file: '파일',
        files: '서류',
        invited: '초대됨',
        pageTitle: '계정 활동',
        shared: '공유됨',
        today: 'TODAY', // not found
        you: 'You', // not found
      },

      // Copy where you are viewing shared folders
      sharedFolder: {
        // empty state for list of shared folders
        noCollections: `아직 공유한 서류가 없습니다`, // message
        shareFirstDocument: '첫 번째 서류 공유', // call to action

        // empty state for an individual shared folder
        emptyCollection: '이 폴더에서 모든 서류가 제거되었습니다.', // message
        returnDashboard: '대시보드로 돌아가기', // call to action

        // empty state for list of clients who have shared collections with user
        noSharedDocuments: '아직 공유 서류를 받지 못하셨습니다.', // not found

        // title for collection table name column
        collectionTableTitle: '공유한 서류를 날짜별로 정리', // not found
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
        reorderFiles: '서류 재정렬', // shown in agent view when downloading as PDF
        selectClient: '공유 문서에 액세스할 고객 선택',
        sharedBy: '공유자', // label in side bar
        sharedFolderNameLabel: 'Name', // (not found) label of shared folder name column in agent view
        sharedWith: '공유 대상:', // promt for agency email
      },

      uploadInputButton: {
        oneFileTitle: '단일 파일',
        oneFileDescription:
          '단일 파일 옵션을 사용하면 장치 관리 시스템에서 파일 또는 이미지를 업로드할 수 있습니다. 휴대폰이나 태블릿을 사용하는 경우 카메라로 사진을 찍을 수 있습니다.',
        multipleFilesTitle: '다중 파일',
        multipleFilesDescription:
          '여러 파일 옵션을 사용하면 장치 관리 시스템에서 많은 파일 또는 이미지를 업로드할 수 있습니다. 휴대폰이나 태블릿을 사용하는 경우 카메라로 사진을 찍을 수 있습니다.',
        titleInfoButton: '신원, 거주 증명, 지원서 등을 입력할 수 있습니다.',
        descriptionInfoButton:
          '명확성을 위해 업로드한 파일에 대한 간략한 설명을 제공합니다.',
        yourFileTitle: '귀하의 파일',
        yourFilesTitle: '내 파일',
        uploadNewFile: '새 파일 업로드',
        dragAndDropDescription:
          '순서에 상관없이 파일의 위치를 변경할 수 있습니다.',
        dragAndDropDescriptionBold: '끌어서 놓기.',
        removeFile: '제거하다',
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
        singleOrMultiple: '¿Su documento tiene uno o varios archivos?',
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
        uploadFile: 'Subir archivo',
        uploadFiles: 'Subir archivos',
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

      uploadInputButton: {
        oneFileTitle: 'Un archivo',
        oneFileDescription:
          'La opción de un archivo le brinda la posibilidad de cargar un archivo o una imagen desde el sistema de administración de su dispositivo. Si estás usando un teléfono móvil o una tableta, puedes tomar una foto con tu cámara.',
        multipleFilesTitle: 'Múltiples archivos',
        multipleFilesDescription:
          'La opción de archivos múltiples le brinda la posibilidad de cargar tantos archivos o imágenes desde el sistema de administración de su dispositivo. Si estás usando un teléfono móvil o una tableta, puedes tomar fotos con tu cámara.',
        titleInfoButton:
          'Puede escribir identidad, comprobante de residencia, solicitud, etc.',
        descriptionInfoButton:
          'Proporcione una breve descripción de los archivos que cargó como aclaración.',
        yourFileTitle: 'Tu archivo',
        yourFilesTitle: 'Tus archivos',
        uploadNewFile: 'Subir archivo nuevo',
        dragAndDropDescription:
          'Puede cambiar las posiciones de sus archivos en cualquier orden',
        dragAndDropDescriptionBold: 'arrastrando y soltando.',
        removeFile: 'Eliminar',
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
        singleOrMultiple:
          'Votre document comporte-t-il un ou plusieurs fichiers ?',
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
        uploadFile: 'Téléverser un fichier',
        uploadFiles: 'Télécharger des fichiers',
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

      uploadInputButton: {
        oneFileTitle: 'Fichier unique',
        oneFileDescription:
          "L'option de fichier unique vous permet de télécharger un fichier ou une image à partir de votre système de gestion d'appareils. Si vous utilisez un téléphone portable ou une tablette, vous pouvez prendre une photo avec votre appareil photo.",
        multipleFilesTitle: 'Fichiers multiples',
        multipleFilesDescription:
          "L'option de fichiers multiples vous donne la possibilité de télécharger autant de fichiers ou d'images à partir de votre système de gestion d'appareils. Si vous utilisez un téléphone portable ou une tablette, vous pouvez prendre des photos avec votre appareil photo.",
        titleInfoButton:
          "Vous pouvez saisir l'identité, la preuve de résidence, la demande, etc.",
        descriptionInfoButton:
          'Fournissez une brève description des fichiers que vous avez téléchargés pour clarification.',
        yourFileTitle: 'Votre dossier',
        yourFilesTitle: 'Vos fichiers',
        uploadNewFile: 'Télécharger un nouveau fichier',
        dragAndDropDescription:
          "Vous pouvez modifier les positions de vos fichiers dans n'importe quel ordre",
        dragAndDropDescriptionBold: 'par glisser-déposer.',
        removeFile: 'Retirer',
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
        downloadLoadingState: 'ডাউনলোডের প্রস্তুতি নিচ্ছে',
        sharingComplete: 'শেয়ার করা সম্পূর্ণ হয়েছে',
        uploading: 'নথি যোগ করা হচ্ছে...', // displayed while a file is uploading
        uploadComplete: 'আপলোড সম্পূর্ণ',
        fileDeletedConfirmation: 'নথি ডিলিট কর হয়েছে৷',
        fileTooLarge: 'নথিটি খুব বড় (অবশ্যই <10MB হতে হবে)',
      },

      login: {
        loginButton: 'শুরু করার জন্য লগইন করুন৷',
        getStarted: {
          client: 'এবার শুরু করা যাক',
          cityEmployee: 'City Employee Login', // not found
          cboWorker: 'CBO Worker Login', // not found
        },
        welcomeTitle: 'স্বাগত',
        footerLogoAlt: 'Footer logo', // not found
      },

      navigation: {
        about: 'সম্পর্কিত',
        account: 'My Account Managers', // not found
        settings: 'আমার প্রোফাইল',
        settingsFirstRun:
          'স্বাগতম মাই ফাইল NYC তে! শুরু করতে দয়া করে নিজের সম্পর্কে কয়েকটি প্রশ্নের উত্তর দিন।.',
        welcomeFirstRun: 'স্বাগতম মাই ফাইল NYC তে!',
        activity: 'অ্যাকটিভিটি লগ',
        back: 'পেছনে',
        clients: 'ক্লায়েন্ট',
        close: 'বন্ধ করুন',
        dashboard: 'ড্যাশবোর্ড',
        faq: 'FAQ', // not found
        loading: 'লোড হচ্ছে',
        loggingIn: 'লগ ইন হচ্ছে…',
        manageAccounts: 'Manage Accounts', // not found
        signIn: 'সাইন ইন করুন',
        signOut: 'সাইন আউট',
        switchAccount: 'ক্লায়েন্ট স্যুইচ করুন',
        termsOfUse: 'ব্যবহারের শর্ত',
        nycId: 'লগইন করতে সমস্যা হচ্ছে?',
      },

      document: {
        // This is the title of the confirmation dialog for deleting a document
        deleteConfirmationTitle: 'এই নথিটি ডিলিট করবো?',
        // This is the body content of the confirmation dialog for deleting a document
        deleteConfirmationBody: `অ্যাক্সেস শেয়ার করা হয়েছে এমন কেউ আর এই নথিটি দেখতে পারবে না৷ এটি আর অসম্পাদিত করা যাবে না৷`,
        documentMenu: 'নথি মেনু',
        documentOptions: 'বিকল্প',
        downloadZip: 'সবগুলো ডাউনলোড করুন',
        downloadPdf: 'PDF ডাউনলোড করুন',
        description: 'নথির বিবরণ', // displayed beneath the document and expands to show description (if any)
        editDetailsTitle: 'বিবরণ সম্পাদনা করুন', // page title on edit details screen
        enterNamePlaceholder: 'এই নথিটির একটি নাম দিন',
        enterDescriptionPlaceholder: 'এই নথিটিকে বর্ণনা করুন (ঐচ্ছিক)',
        documentName: 'কোন ধরনের নথি আপনি আপলোড করেছেন?', // shown as a label on edit details screen

        noDocuments: 'আপনার অ্যাকাউন্টে এখনও কোনো নথি সংরক্ষিত নেই।.', // not found shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'আপনার প্রথম নথি যোগ করুন', // label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: 'নথির নাম',
        singleOrMultiple: 'আপনার নথিতে কি এক বা একাধিক ফাইল আছে?',
      },

      controls: {
        accept: 'গ্রহণ করছেন', // eg. accept terms of use
        add: 'যোগ করুন', //  eg. add a delegate
        allFiles: 'আপনার নথি', // shown as tab label on the dashboard
        cancel: 'বাতিল করুন', // cancel button
        confirm: 'নিশ্চিত করুন',
        confirmDelete: 'হ্যাঁ, ডিলিট করুন',
        declineAndLogOut: 'প্রত্যাখ্যান করুন এবং লগ আউট করুন', // decline TOS button
        delete: 'ডিলিট করুন', // delete document kebab item
        done: 'সম্পন্ন হয়েছে',
        download: 'ডাউনলোড করুন', // edit document kebab item and button text
        editDetails: 'বিবরণ সম্পাদনা করুন', // edit document kebab item
        edit: 'সম্পাদনা করুন', // edit account details
        continue: 'চালিয়ে যান',
        share: 'DHS এর সাথে শেয়ার করুন', // share button
        shared: 'শেয়ার করা নথি', //  label of shared tab on dashboard
        upload: 'একটি নথি আপলোড করুন',
        uploadDocument: 'নথি আপলোড করুন',
        uploadFile: 'ফাইল আপলোড করুন',
        uploadFiles: 'ফাইল আপলোড',
        view: 'দেখুন',
        save: 'সেভ করুন',
      },

      // account settings page
      account: {
        language: 'ভাষা', // not found open language selector
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
        addRecipientPlaceholder: 'ইমেল অ্যাড্রেস দিন',

        // step titles in the share flow
        confirmTitle: 'আপনি কি এই নথিগুলি শেয়ার করার বিষয়ে নিশ্চিত?',
        addRecipientsTitle: 'আপনি কার সাথে এই নথি(গুলি) শেয়ার করছেন?',
        selectFilesTitle: 'নথি নির্বাচন করুন',

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
        about: 'সম্পর্কে',
        authorizing: 'Authorizing', // not found not important - used while logging in
        dashboard: 'ড্যাশবোর্ড',
        document: 'দলিল', // used for document preview while page is loading, then changes to document title
        faq: 'FAQ',
        shared: 'শেয়ার করা হয়েছে', // used in share flow
        sharedBy: 'দ্বারা শেয়ার করা', // used in share flow
        termsOfUse: 'ব্যবহারের শর্ত', // used while viewing TOU
        welcome: 'স্বাগত', // displayed on the initial landing page
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
        accessed: 'অ্যাক্সেস করা হয়েছে',
        added: 'যোগ করা হয়েছে',
        delegateInvitedClient: 'to manage and share documents on your behalf', // not found
        delegateInvitedCbo: 'to manage and share documents on their behalf', // not found
        delegateAcceptedClient:
          'can now manage and share documents on your behalf', // not found
        delegateAcceptedCbo:
          'can now manage and share documents on this account', // not found
        delegateDeletedClient: 'has been removed from your account', // not found
        delegateDeletedCbo: 'has been removed from this account ', // not found
        deleted: 'ডিলিট করুন',
        edited: 'বিবরণ এডিট করুন',
        file: 'ফাইল',
        files: 'নথি',
        invited: 'আমন্ত্রিত',
        pageTitle: 'অ্যাকাউন্ট অ্যাক্টিভিটি',
        shared: 'শেয়ার করা হয়েছে',
        today: 'TODAY', // not found
        you: 'You', // not found
      },

      // Copy where you are viewing shared folders
      sharedFolder: {
        // empty state for list of shared folders
        noCollections: `আপনি এখনও পর্যন্ত কোনো নথি শেয়ার করেননি`, // message
        shareFirstDocument: 'আপনার প্রথম নথি শেয়ার করুন', // call to action

        // empty state for an individual shared folder
        emptyCollection: 'সমস্ত নথি এই ফোল্ডার থেকে সরানো হয়েছে', //  message
        returnDashboard: 'ড্যাশবোর্ডে ফিরে যান', // call to action

        // empty state for list of clients who have shared collections with user
        noSharedDocuments: 'আপনি এখনও কোনো শেয়ার করা নথি পাননি',

        // title for collection table name column
        collectionTableTitle: 'আপনার শেয়ার করা নথিগুলি, তারিখ অনুসারে সংগঠিত',
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
        reorderFiles: 'নথিগুলি পুনরায় সাজান', // shown in agent view when downloading as PDF
        selectClient:
          'শেয়ার করা নথিপত্র অ্যাক্সেস করতে ক্লায়েন্ট নির্বাচন করুন',
        sharedBy: 'দ্বারা শেয়ার করা', //  label in side bar
        sharedFolderNameLabel: 'Name', // (not found) label of shared folder name column in agent view
        sharedWith: 'যার সাথে শেয়ার করা হয়েছে:', // promt for agency email
      },

      uploadInputButton: {
        oneFileTitle: 'এক-ফাইল',
        oneFileDescription:
          'এক-ফাইল বিকল্প আপনাকে আপনার ডিভাইস ম্যানেজমেন্ট সিস্টেম থেকে একটি ফাইল বা একটি ছবি আপলোড করার ক্ষমতা দেয়। আপনি যদি একটি মোবাইল ফোন বা ট্যাবলেট ব্যবহার করেন তবে আপনি আপনার ক্যামেরা দিয়ে একটি ছবি তুলতে পারেন।.',
        multipleFilesTitle: 'একাধিক ফাইল',
        multipleFilesDescription:
          'মাল্টিপল-ফাইল বিকল্প আপনাকে আপনার ডিভাইস ম্যানেজমেন্ট সিস্টেম থেকে যতগুলি ফাইল বা ছবি আপলোড করার ক্ষমতা দেয়। আপনি যদি মোবাইল ফোন বা ট্যাবলেট ব্যবহার করেন তবে আপনি আপনার ক্যামেরা দিয়ে ছবি তুলতে পারেন।.',
        titleInfoButton:
          'আপনি পরিচয় টাইপ করতে পারেন, বসবাসের প্রমাণ, আবেদনপত্র ইত্যাদি।',
        descriptionInfoButton:
          'স্পষ্টীকরণের জন্য আপনি আপলোড করা ফাইলগুলির একটি সংক্ষিপ্ত বিবরণ প্রদান করুন৷.',
        yourFileTitle: 'আপনার ফাইল',
        yourFilesTitle: 'আপনার ফাইল',
        uploadNewFile: 'নতুন ফাইল আপলোড করুন',
        dragAndDropDescription:
          'আপনি ড্র্যাগ এবং ড্রপ করে যেকোনো ক্রমে আপনার ফাইলের অবস্থান',
        dragAndDropDescriptionBold: 'পরিবর্তন করতে পারেন।.',
        removeFile: 'অপসারণ',
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
        downloadLoadingState: 'Przygotowywanie pobierania',
        sharingComplete: 'Pomyślnie udostępniono',
        uploading: 'Dodawanie dokumentu…', // displayed while a file is uploading
        uploadComplete: 'Pobieranie zostało ukończone',
        fileDeletedConfirmation: 'Dokument został usunięty',
        fileTooLarge: 'Dokument za duży (musi być < 10 MB)',
      },

      login: {
        loginButton: 'Zaloguj się i rozpocznij',
        getStarted: {
          client: 'Zaczynaj',
          cityEmployee: 'City Employee Login', // not found
          cboWorker: 'CBO Worker Login', // not found
        },
        welcomeTitle: 'Powitanie',
        footerLogoAlt: 'Footer logo', // not found
      },

      navigation: {
        about: 'O',
        account: 'My Account Managers', // not found
        settings: 'Mój profil',
        settingsFirstRun:
          'Witamy w My File NYC! Prosimy o udzielenie odpowiedzi na kilka pytań wstępnych na swój temat.',
        welcomeFirstRun: 'Witamy w My File NYC!',
        activity: 'Dzienniczek działań',
        back: 'Z powrotem',
        clients: 'Klienci', // navigate back to agent view desktop not found
        close: 'Zamknij',
        dashboard: 'Pulpit nawigacyjny',
        faq: 'Najczęściej zadawane pytania',
        loading: 'Ładowanie',
        loggingIn: 'Trwa logowanie…',
        manageAccounts: 'Manage Accounts', // not found
        signIn: 'Zarejestruj się',
        signOut: 'Wyloguj się',
        switchAccount: 'Zmień klientów',
        termsOfUse: 'Warunki użytkowania',
        nycId: 'Masz problemy z zalogowaniem się?',
      },

      document: {
        // This is the title of the confirmation dialog for deleting a document
        deleteConfirmationTitle: 'Czy chcesz usunąć ten dokument?', // not found
        // This is the body content of the confirmation dialog for deleting a document
        deleteConfirmationBody: `Żadna osoba ze współdzielonym dostępem nie będzie mogła dłużej przeglądać tego dokumentu. Tej zmiany nie da się cofnąć.`,
        documentMenu: 'Menu dokumentu',
        documentOptions: 'Dostępne opcje',
        downloadZip: 'Pobierz wszystko',
        downloadPdf: 'Pobierz plik PDF',
        description: 'Opis dokumentu', // displayed beneath the document and expands to show description (if any)
        editDetailsTitle: 'Edytuj szczegóły', // page title on edit details screen
        enterNamePlaceholder: 'Nadaj temu dokumentowi nazwę',
        enterDescriptionPlaceholder: 'Opisz ten dokument (opcjonalnie)',
        documentName: 'Jaki dokument został przesłany?', // shown as a label on edit details screen

        noDocuments:
          'Na Twoim koncie nie ma jeszcze żadnych zapisanych dokumentów.', // shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'Dodaj pierwszy dokument', // label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: 'Nazwa dokumentu',
        singleOrMultiple: 'Czy twój dokument zawiera jeden lub wiele plików?',
      },

      controls: {
        accept: 'Akceptuj', // eg. accept terms of use
        add: 'Dodaj', // eg. add a delegate
        allFiles: 'Twoje dokumenty', // shown as tab label on the dashboard
        cancel: 'Anuluj', // cancel button
        confirm: 'Zatwierdź',
        confirmDelete: 'Tak, usuń',
        declineAndLogOut: 'Odrzuć i wyloguj się', // decline TOS button
        delete: 'Usuń', // delete document kebab item
        done: 'Gotowe',
        download: 'Pobierz', // edit document kebab item and button text
        editDetails: 'Edytuj szczegóły', // edit document kebab item
        edit: 'Edytuj', // edit account details
        continue: 'Kontynuuj',
        share: 'Udostępnij DHS', // share button
        shared: 'Udostępnione dokumenty', // label of shared tab on dashboard
        upload: 'Prześlij dokument',
        uploadDocument: 'Prześlij dokument',
        uploadFile: 'Przesyłanie pliku',
        uploadFiles: 'Prześlij pliki',
        view: 'Wyświetl',
        save: 'Zapisz',
      },

      // account settings page
      account: {
        language: 'Język', // not found open language selector
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
        addRecipientPlaceholder: 'Wprowadź adres e-mail',

        // step titles in the share flow
        confirmTitle: 'Czy na pewno chcesz udostępnić te dokumenty?',
        addRecipientsTitle: 'Komu udostępniasz te dokumenty?',
        selectFilesTitle: 'Wybierz dokumenty',

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
        about: 'Informacje',
        authorizing: 'Authorizing', // not important - used while logging in
        dashboard: 'Pulpit nawigacyjny',
        document: 'Dokument', // used for document preview while page is loading, then changes to document title
        faq: 'Najczęściej zadawane pytania',
        shared: 'Udostępniono', // used in share flow
        sharedBy: 'Udostępniono przez', // used in share flow
        termsOfUse: 'Warunki użytkowania', // used while viewing TOU
        welcome: 'Powitanie', // displayed on the initial landing page
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
        accessed: 'Uzyskano dostęp',
        added: 'Dodano',
        delegateInvitedClient: 'to manage and share documents on your behalf', // not found
        delegateInvitedCbo: 'to manage and share documents on their behalf', // not found
        delegateAcceptedClient:
          'can now manage and share documents on your behalf', // not found
        delegateAcceptedCbo:
          'can now manage and share documents on this account', // not found
        delegateDeletedClient: 'has been removed from your account', // not found
        delegateDeletedCbo: 'has been removed from this account ', // not found
        deleted: 'Usunięto',
        edited: 'Edytowano szczegóły',
        file: 'Plik',
        files: 'Dokumenty',
        invited: 'Zaproszono',
        pageTitle: 'Aktywność konta',
        shared: 'Udostępniono',
        today: 'TODAY', // not found
        you: 'You', // not found
      },

      // Copy where you are viewing shared folders
      sharedFolder: {
        // empty state for list of shared folders
        noCollections: `Żadne dokumenty nie zostały jeszcze udostępnione`, // message
        shareFirstDocument: 'Udostępnij swój pierwszy dokument', // call to action

        // empty state for an individual shared folder
        emptyCollection: 'Wszystkie dokumenty zostały usunięte z tego folderu.', // (not found) message
        returnDashboard: 'Powrót do pulpitu nawigacyjnego', // call to action

        // empty state for list of clients who have shared collections with user
        noSharedDocuments: 'Nie otrzymano jeszcze żadnych dokumentów.', // not found

        // title for collection table name column
        collectionTableTitle: 'Udostępnione dokumenty według daty',
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
        reorderFiles: 'Przeorganizuj dokumenty', // shown in agent view when downloading as PDF
        selectClient: 'Wybierz klienta dostępu do udostępnionych dokumentów',
        sharedBy: 'Udostępniono przez', //  label in side bar
        sharedFolderNameLabel: 'Name', // (not found) label of shared folder name column in agent view
        sharedWith: 'Udostępniono:', // promt for agency email
      },

      uploadInputButton: {
        oneFileTitle: 'Jeden plik',
        oneFileDescription:
          'Opcja jednego pliku daje możliwość przesłania pliku lub obrazu z systemu zarządzania urządzeniem. Jeśli używasz telefonu komórkowego lub tabletu, możesz zrobić zdjęcie aparatem.',
        multipleFilesTitle: 'Wiele plików',
        multipleFilesDescription:
          'Opcja wielu plików umożliwia przesłanie dowolnej liczby plików lub obrazów z systemu zarządzania urządzeniem. Jeśli używasz telefonu komórkowego lub tabletu, możesz robić zdjęcia aparatem.',
        titleInfoButton:
          'Możesz wpisać tożsamość, dowód zamieszkania, wniosek itp.',
        descriptionInfoButton:
          'W celu wyjaśnienia podaj krótki opis przesłanych plików.',
        yourFileTitle: 'Plik',
        yourFilesTitle: 'Twoje pliki',
        uploadNewFile: 'Prześlij nowy plik',
        dragAndDropDescription:
          'Możesz zmieniać położenie plików w dowolnej kolejności,',
        dragAndDropDescriptionBold: ' przeciągając je i upuszczając.',
        removeFile: 'Usunąć',
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
        singleOrMultiple: 'Èske dokiman ou a gen youn oswa plizyè dosye?',
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
        uploadFile: 'Telechaje File',
        uploadFiles: 'Voye Fichye yo',
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
      uploadInputButton: {
        oneFileTitle: 'Yon dosye',
        oneFileDescription:
          'Opsyon yon sèl fichye a ba ou kapasite pou w telechaje yon fichye oswa yon imaj nan sistèm jesyon aparèy ou an. Si w ap itilize yon telefòn mobil oswa yon tablèt ou ka pran yon foto ak kamera ou.',
        multipleFilesTitle: 'Plizyè-fichye',
        multipleFilesDescription:
          'Opsyon plizyè fichye a ba ou kapasite pou w telechaje anpil fichye oswa imaj nan sistèm jesyon aparèy ou an. Si w ap itilize yon telefòn mobil oswa yon tablèt ou ka pran foto ak kamera w.',
        titleInfoButton:
          'Ou ka tape swa idantite, prèv rezidans, aplikasyon, elatriye.',
        descriptionInfoButton:
          'Bay yon deskripsyon tou kout sou dosye ou telechaje yo pou klarifikasyon.',
        yourFileTitle: 'Dosye w la',
        yourFilesTitle: 'Dosye ou yo',
        uploadNewFile: 'Telechaje nouvo fichye',
        dragAndDropDescription:
          'Ou ka chanje pozisyon nan dosye ou yo nan nenpòt lòd pa ',
        dragAndDropDescriptionBold: 'trennen ak gout.',
        removeFile: 'Retire',
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
        downloadLoadingState: '準備下載',
        sharingComplete: '分享完成',
        uploading: '正在新增文件…', // displayed while a file is uploading
        uploadComplete: '上傳完成',
        fileDeletedConfirmation: '文件已刪除',
        fileTooLarge: '文檔太大（必須 < 10MB）',
      },

      login: {
        loginButton: '登錄並開始使用',
        getStarted: {
          client: '開始',
          cityEmployee: 'City Employee Login', // not found
          cboWorker: 'CBO Worker Login', // not found
        },
        welcomeTitle: '歡迎',
        footerLogoAlt: 'Footer logo', // not found
      },

      navigation: {
        about: '關於',
        account: 'My Account Managers', // not found
        settings: '我的個人資料',
        settingsFirstRun:
          '歡迎使用 My File NYC！開始前，請先回答幾個關於您本人的問題。',
        welcomeFirstRun: '歡迎使用 My File NYC！',
        activity: '活動記錄',
        back: '後退',
        clients: '客戶', // navigate back to agent view desktop not found
        close: '關閉',
        dashboard: '儀表板',
        faq: '常見問題集',
        loading: '載入',
        loggingIn: '正在登入…',
        manageAccounts: 'Manage Accounts', // not found
        signIn: '登入',
        signOut: '登出',
        switchAccount: '切換客戶端',
        termsOfUse: '使用條款',
        nycId: '登錄遇到困難?',
      },

      document: {
        // This is the title of the confirmation dialog for deleting a document
        deleteConfirmationTitle: '刪除此文件？',
        // This is the body content of the confirmation dialog for deleting a document
        deleteConfirmationBody: `任何擁有共享權限的人將不再能夠查看這份文件。無法撤銷。`,
        documentMenu: '文件功能表',
        documentOptions: '選項',
        downloadZip: '全部下載',
        downloadPdf: '下載 PDF',
        description: '文件描述', // displayed beneath the document and expands to show description (if any)
        editDetailsTitle: '編輯詳細資訊', // page title on edit details screen
        enterNamePlaceholder: '為此文件命名',
        enterDescriptionPlaceholder: '說明該文件（選填)',
        documentName: '您上傳了那種類型的文件？', // shown as a label on edit details screen

        noDocuments: '您的帳戶中還沒有儲存任何文件。', // shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: '新增您的第一個文件', // label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: '文件名稱',
        singleOrMultiple: '您的文檔有一個還是多個文件？',
      },

      controls: {
        accept: '接受', //  eg. accept terms of use
        add: '新增', //  eg. add a delegate
        allFiles: '您的文件', // shown as tab label on the dashboard
        cancel: '取消', // cancel button
        confirm: '確認',
        confirmDelete: '是的，刪除',
        declineAndLogOut: '拒絕並登出', // decline TOS button
        delete: '刪除', // delete document kebab item
        done: '完成',
        download: '下載', // edit document kebab item and button text
        editDetails: '編輯詳細資訊', // edit document kebab item
        edit: '編輯', // edit account details
        continue: '繼續',
        share: '分享至 DHS', // share button
        shared: '分享文件', // label of shared tab on dashboard
        upload: '上傳文件',
        uploadDocument: '上傳文件',
        uploadFile: '上傳文件',
        uploadFiles: '上傳文件',
        view: '查看',
        save: '儲存',
      },

      // account settings page
      account: {
        language: '語言', // not found open language selector
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
        addRecipientPlaceholder: '輸入電子郵件地址',

        // step titles in the share flow
        confirmTitle: '確定要分享這些文件嗎？',
        addRecipientsTitle: '您要與誰分享這些文件？',
        selectFilesTitle: '選擇文件',

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
        about: '關於',
        authorizing: 'Authorizing', // not found not important - used while logging in
        dashboard: '儀表板',
        document: '文件', // used for document preview while page is loading, then changes to document title
        faq: '常見問題集',
        shared: '已分享', // used in share flow
        sharedBy: '分享者：', //  used in share flow
        termsOfUse: '使用條款', // not found used while viewing TOU
        welcome: '歡迎', // displayed on the initial landing page
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
        accessed: '已存取',
        added: '已新增',
        delegateInvitedClient: 'to manage and share documents on your behalf', // not found
        delegateInvitedCbo: 'to manage and share documents on their behalf', // not found
        delegateAcceptedClient:
          'can now manage and share documents on your behalf', // not found
        delegateAcceptedCbo:
          'can now manage and share documents on this account', // not found
        delegateDeletedClient: 'has been removed from your account', // not found
        delegateDeletedCbo: 'has been removed from this account ', // not found
        deleted: '已刪除',
        edited: '已編輯詳細資訊：',
        file: '檔案',
        files: '文件',
        invited: '已邀請',
        pageTitle: '帳戶活動',
        shared: '已分享',
        today: 'TODAY', // not found
        you: 'You', // not found
      },

      // Copy where you are viewing shared folders
      sharedFolder: {
        // empty state for list of shared folders
        noCollections: `您還未分享任何文件`, // message
        shareFirstDocument: '分享您的第一個文件', // call to action

        // empty state for an individual shared folder
        emptyCollection: '所有文件已從此資料夾中移除', // message
        returnDashboard: '回到儀表板', // call to action

        // empty state for list of clients who have shared collections with user
        noSharedDocuments: '您尚未收到任何分享的文件',
        // title for collection table name column
        collectionTableTitle: '您已分享的文件，依照日期排序', // not found
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
        reorderFiles: '重新排序文件', // shown in agent view when downloading as PDF
        selectClient: '選擇客戶以存取分享文件',
        sharedBy: '分享者：', // label in side bar
        sharedFolderNameLabel: 'Name', // (not found) label of shared folder name column in agent view
        sharedWith: '分享文件至:', // promt for agency email
      },

      landing: {
        community: 'COMMUNITY SERVICES', // not found
        agency: 'AGENCY SERVICES', // not found
      },

      uploadInputButton: {
        oneFileTitle: '個文件',
        oneFileDescription:
          '單文件選項使您能夠從設備管理系統上傳文件或圖像。 如果您使用的是手機或平板電腦，則可以使用相機拍照。',
        multipleFilesTitle: '多文件',
        multipleFilesDescription:
          '多文件選項使您能夠從設備管理系統上傳盡可能多的文件或圖像。 如果您使用的是手機或平板電腦，則可以使用相機拍照.',
        titleInfoButton: '您可以輸入身份、居住證明、申請等。',
        descriptionInfoButton: '提供您上傳的文件的簡要說明以進行說明。',
        yourFileTitle: '你的檔案',
        yourFilesTitle: '您的文件',
        uploadNewFile: '上傳新文件',
        dragAndDropDescription: '您可以按任何順序更改文件的位置',
        dragAndDropDescriptionBold: '拖放。',
        removeFile: '消除',
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
