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

      errorMessages: {
        cannotDisplayDocumentHeader: 'Cannot display document',
        cannotDisplayDocumentText:
          'Unable to show the document at this time. Please download the document instead.',
        unsupportedBrowserHeader: 'Unsupported Browser',
        unsupportedBrowserTextDesktop:
          'PDF Viewer does not support Firefox or Internet Explorer. Please use a different web browser such as',
        or: 'or',
        unsupportedBrowserTextMobile:
          'PDF Viewer does not support Microsoft Edge, Firefox, Samsung Internet, or Internet Explorer. Please use a different web browser such as',
      },

      validationMsg: {
        firstNameRequired: 'The First Name field is required.',
        firstNameNotValid: 'First Name is not valid.',
        firstNameMaxLength:
          'The First Name field may not be greater than 50 characters.',
        firstNameMinLength:
          'The First Name field must be at least 2 characters long.',
        firstNameAlpha: 'The First Name field may only contain letters.',

        // Last Name
        lastNameRequired: 'The Last Name field is required.',
        lastNameNotValid: 'Last Name is not valid.',
        lastNameMaxLength:
          'The Last Name field may not be greater than 50 characters.',
        lastNameMinLength:
          'The Last Name field must be at least 2 characters long.',
        lastNameAlpha: 'The Last Name field may only contain letters.',

        // Month
        monthNotValid: 'Month is not valid.',
        monthRequired: 'Month is required.',

        // Day
        dayNotValid: 'Day is not valid.',
        dayRequired: 'The Day field is required.',

        // Year
        yearRequired: 'The Year field is required.',
        yearNotValid: 'Year is not valid.',

        // Case Number
        caseNumberRequired: 'The Case Number field is required.',
        caseNumberMaxLength:
          'The Case Number field may not be greater than 20 characters.',
        caseNumberMinLength:
          'The Case Number field must be at least 4 characters long.',
      },

      statusIndicator: {
        clientInReview: 'In review',
        clientReviewed: 'Reviewed',
      },

      forceLogout: {
        firstTimeoutWarningMessage:
          'You will be forced to login again in less than {warningMsg} minutes',
        secondTimeoutWarningMessage:
          'You will be forced to login again in less than {warningMsg} minutes',
        loginAgain:
          'You are required to login again if using MyFile more than 1 hour.',
        btnLoginAgain: 'Login again',
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
        loginButton: 'Log in',
        createAccountButton: 'Create account',
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
        enterNamePlaceholder: 'Give this document a name...',
        enterDescriptionPlaceholder: 'Write a message here...',
        titleDescription: 'Describe this document (optional)', // displayed beneath the document and expands to show description (if any)
        documentName: 'What kind of document did you upload?', // shown as a label on edit details screen

        noDocuments: 'There are no documents saved to your account yet.', // shown on dashboard when there are no documents
        previewOf: 'Preview of',
        uploadFirst: 'Add your first document', // label on the empty state upload button
        thumbnailOf: 'Thumbnail of',
        fileName: 'Document Name',
        singleOrMultiple: 'Pick an option',
        addedDocument: 'Document Added',
        confirmUploadMsg:
          'Now that you uploaded your document, you can share it with DHS PATH.',
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
        share: 'Share', // share button
        shared: 'Shared Documents', // label of shared tab on dashboard
        upload: 'Upload',
        uploadDocument: 'Upload Document',
        uploadFile: 'Upload File',
        uploadFiles: 'Upload Files',
        view: 'View',
        save: 'Save',
        shareWithDHS: 'Share With DHS', // label
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
        month: 'Month',
        day: 'Day',
        year: 'Year',
        preferredLanguage: 'What is your preferred language?',
      },

      // All copy related to the create shared folder flow
      sharing: {
        defaultName: 'Documents you shared with DHS on {date}',
        confirmSharedFiles: 'Documents to be shared DHS',
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
        confirmRecipientsLabel: 'You are sharing documents to',
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
        today: 'Today',
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
        folderName: '{num} documents shared on {date} at {time}',
        folderNameWithOneDocument: '1 document shared on {date} at {time}',
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
        oneFileTitle: 'One-page document',
        oneFileDescription: 'Upload one page or photo from your device.',
        multipleFilesTitle: 'Multiple-page document',
        multipleFilesDescription:
          'Upload multiple pages or photos from your device.',
        multipageCaution:
          'Upload one document at a time. Do not combine documents while uploading.',
        titleInfoButton:
          'You can type either identity, proof of residency,application, etc.',
        descriptionInfoButton:
          'Provide a brief description of the files you uploaded for clarification.',
        yourFileTitle: 'Your file',
        yourDocumentTitle: 'Your document',
        uploadNewFile: 'Choose new file',
        dragAndDropDescription: 'Drag to re-order the pages.',
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

      errorMessages: {
        cannotDisplayDocumentHeader: 'لا يمكن عرض المستند',
        cannotDisplayDocumentText:
          'غير قادر على إظهار المستند في هذا الوقت. يرجى تحميل الوثيقة بدلا من ذلك.',
        unsupportedBrowserHeader: 'متصفح غير مدعوم',
        unsupportedBrowserTextDesktop:
          'لا يدعم عارض PDF متصفح Firefox أو Internet Explorer. الرجاء استخدام متصفح ويب مختلف مثل',
        or: 'أو',
        unsupportedBrowserTextMobile:
          'لا يدعم عارض PDF Microsoft Edge أو Firefox أو Samsung Internet أو Internet Explorer. الرجاء استخدام متصفح ويب مختلف مثل',
      },

      validationMsg: {
        firstNameRequired: 'حقل الاسم الأول مطلوب.',
        firstNameNotValid: 'الاسم الأول غير صالح.',
        firstNameMaxLength: 'يجب ألا يزيد حقل الاسم الأول عن 50 حرفًا',
        firstNameMinLength: 'يجب أن يتكون حقل الاسم الأول من حرفين على الأقل.',
        firstNameAlpha: 'يمكن أن يحتوي حقل الاسم الأول على أحرف فقط.',

        // Last Name
        lastNameRequired: 'حقل الاسم الأخير مطلوب',
        lastNameNotValid: 'الاسم الأخير غير صالح.',
        lastNameMaxLength: 'يجب ألا يزيد حقل الاسم الأخير عن 50 حرفًا',
        lastNameMinLength:
          'يجب أن يتكون حقل "الاسم الأخير" من حرفين على الأقل.',
        lastNameAlpha: 'قد يحتوي حقل الاسم الأخير على أحرف فقط.',

        // Month
        monthNotValid: 'الشهر غير صالح',
        monthRequired: 'الشهر مطلوب.',

        // Day
        dayNotValid: 'اليوم غير صالح',
        dayRequired: 'حقل اليوم مطلوب',

        // Year
        yearRequired: 'حقل السنة مطلوب.',
        yearNotValid: 'حقل السنة مطلوب',

        // Case Number
        caseNumberRequired: 'حقل رقم الحالة مطلوب',
        caseNumberMaxLength: 'يجب ألا يزيد حقل رقم الحالة عن 20 حرفًا',
        caseNumberMinLength: 'يجب أن يتكون حقل رقم الحالة من حرفين على الأقل',
      },

      statusIndicator: {
        clientInReview: 'قيد المراجعة',
        clientReviewed: 'تمت المراجعة',
      },

      forceLogout: {
        firstTimeoutWarningMessage:
          'ستضطر إلى تسجيل الدخول مرة أخرى في أقل من {warningMsg} دقائق',
        secondTimeoutWarningMessage:
          'ستضطر إلى تسجيل الدخول مرة أخرى في أقل من {warningMsg} دقائق',
        loginAgain:
          'يتعين عليك تسجيل الدخول مرة أخرى إذا كنت تستخدم تطبيق MyFile لأكثر من ساعة.',
        btnLoginAgain: 'تسجيل الدخول مرة أخرى',
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
        loginButton: 'تسجيل الدخول',
        createAccountButton: 'إنشاء حساب',
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
        enterNamePlaceholder: '...قم بتسمية هذا المستند»',
        enterDescriptionPlaceholder: '...اكتب رسالة هنا',
        titleDescription: 'صِف هذا المستند (اختياري)',
        documentName: 'ما نوع المستند الذي حملته؟', // shown as a label on edit details screen

        noDocuments: 'لا توجد مستندات محفوظة في حسابك حتى الآن.', // shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'أضف مستندك الأول', // label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: 'اسم المستند',
        singleOrMultiple: 'حدد خيارًا',
        addedDocument: 'أُضيف المستند',
        confirmUploadMsg:
          'الآن وقد رفعت مستندك، يمكنك مشاركته مع مركز PATH التابع لإدارة DHS.',
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
        share: 'مشاركة', // share button
        shared: 'المستندات المشتركة', // label of shared tab on dashboard
        upload: 'تحميل',
        uploadDocument: 'تحميل مستند', // not found
        uploadFile: 'رفع ملف',
        uploadFiles: 'تحميل الملفات',
        view: 'دیکھیں',
        save: 'محفوظ کریں',
        shareWithDHS: 'المشاركة مع إدارة DHS', // label
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
        month: 'الشهر',
        day: 'اليوم',
        year: 'العام',
        preferredLanguage: 'ما لغتك المفضلة؟',
      },

      // All copy related to the create shared folder flow
      sharing: {
        defaultName: 'تمت مشاركة المستندات مع إدارة DHS في {date}',
        confirmSharedFiles: 'المستندات التي ستتم مشاركتها مع إدارة DHS',
        plusNMore: 'أكثر من {count} ',
        recipients: 'Recipients', // not found

        // placeholder text for the add recipient email field
        addRecipientPlaceholder: 'Enter email address', // not found

        // step titles in the share flow
        confirmTitle: 'Are you sure you want to share these Documents?', // not found
        addRecipientsTitle: 'Who are you sharing these document(s) with?', // not found
        selectFilesTitle: 'حدد المستندات',

        disclaimerTitle: 'تذكير',
        shareDocumentDisclaimer: [
          'My File NYC facilitates document sharing with {emails} email accounts',
          'تذكير: بمجرد مشاركة المستندات مع إدارة DHS، يمكن للموظفين تنزيل مستنداتك وحفظها لتقديمها دليلًا علي طلبك. وقد تظل لدى إدارة DHS نسخ لدعم حالتك حتى إذا ألغيت مشاركة المستندات أو حذفتها من تطبيق My File.', // not found
        ],

        // on the confirmation step, could be "recipient" or "recipients" depending on number of items
        confirmRecipientsLabel: 'أنت تشارك مستندات مع',
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
        today: 'اليوم',
        you: 'أنت',
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
        folderName:
          'تمت مشاركة {num} من المستندات في {date} في تمام الساعة {time}',

        folderNameWithOneDocument:
          'تمت مشاركة مستند واحد بتاريخ {date} الساعة{time}ءً',
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

      uploadInputButton: {
        oneFileTitle: 'مستند من صفحة واحدة',
        oneFileDescription: 'حمِّل صفحة واحدة أو صورة واحدة من جهازك',
        multipleFilesTitle: 'مستند من عدة صفحات',
        multipleFilesDescription: 'حمِّل عدة صفحات أو عدة صور من جهازك',
        multipageCaution:
          'حمِّل مستندًا واحدًا في كل مرة. لا تجمع بين المستندات في أثناء التحميل.',
        titleInfoButton:
          'يمكنك كتابة الهوية ، وإثبات الإقامة ، والتطبيق ، وما إلى ذلك.',
        descriptionInfoButton:
          'قدم وصفًا موجزًا للملفات التي قمت بتحميلها للتوضيح.',
        yourFileTitle: 'ملفك',
        yourDocumentTitle: 'مستندك',
        uploadNewFile: 'اسحب لإعادة ترتيب الصفحات.',
        dragAndDropDescription: 'يمكنك تغيير أوضاع ملفاتك بأي ترتيب من خلال',
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

      errorMessages: {
        cannotDisplayDocumentHeader: 'Невозможно отобразить документ',
        cannotDisplayDocumentText:
          'В настоящее время невозможно показать документ. Вместо этого загрузите документ.',
        unsupportedBrowserHeader: 'Неподдерживаемый браузер',
        unsupportedBrowserTextDesktop:
          'PDF Viewer не поддерживает Firefox или Internet Explorer. Пожалуйста, используйте другой веб-браузер, например',
        or: 'или',
        unsupportedBrowserTextMobile:
          'PDF Viewer не поддерживает Microsoft Edge, Firefox, Samsung Internet или Internet Explorer. Пожалуйста, используйте другой веб-браузер, например',
      },

      validationMsg: {
        firstNameRequired: 'Поле «Имя» обязательно для заполнения',
        firstNameNotValid: 'Имя не соответствует действительности',
        firstNameMaxLength: 'Поле «Имя» не может содержать более 50 символов',
        firstNameMinLength: 'Поле «Имя» должно содержать не менее 2 символов',
        firstNameAlpha: 'Поле «Имя» может содержать только буквы',

        // Last Name
        lastNameRequired: 'Поле «Фамилия» обязательно для заполнения',
        lastNameNotValid: 'Фамилия не соответствует действительности',
        lastNameMaxLength:
          'Поле «Фамилия» не может содержать более 50 символов',
        lastNameMinLength:
          'Поле «Фамилия» должно содержать не менее 2 символов',
        lastNameAlpha: 'Поле «Фамилия» может содержать только буквы',

        // Month
        monthNotValid: 'Месяц не соответствует действительности',
        monthRequired: 'Поле «Месяц» обязательно для заполнения',

        // Day
        dayNotValid: 'День не соответствует действительности',
        dayRequired: 'Поле «День» обязательно для заполнения',

        // Year
        yearRequired: 'Поле «Год» обязательно для заполнения',
        yearNotValid: 'Год не соответствует рамкам между 1920 и 2022 года',

        // Case Number
        caseNumberRequired: 'Поле «Номер дела» обязательно для заполнения',
        caseNumberMaxLength:
          'Поле «Номер дела» не может содержать более 20 символов',
        caseNumberMinLength:
          'Поле «Номер обращения» должно содержать не менее 4 символов.',
      },

      statusIndicator: {
        clientInReview: 'На рассмотрении',
        clientReviewed: 'Рассмотрено',
      },

      forceLogout: {
        firstTimeoutWarningMessage:
          'Вы будете вынуждены повторно войти в систему менее чем через {warningMsg} минут.',
        secondTimeoutWarningMessage:
          'Вы будете вынуждены повторно войти в систему менее чем через {warningMsg} минут.',
        loginAgain:
          'При использовании MyFile более 1 часа требуется повторный вход в систему.',
        btnLoginAgain: 'Повторно войдите в систему',
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
        loginButton: 'Войти в систему',
        createAccountButton: 'Создать учетную запись',
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
        enterNamePlaceholder: 'Присвойте этому документу имя...',
        enterDescriptionPlaceholder: 'Введите текст сообщения здесь...',
        titleDescription: 'Опишите этот документ (необязательно)',
        documentName: 'Какой документ вы загрузили？', // shown as a label on edit details screen

        noDocuments: 'В вашей учетной записи еще нет сохраненных документов.', // not found shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'Добавьте свой первый документ', // label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: 'Название документа',
        singleOrMultiple: 'Выберите опцию',
        addedDocument: 'Документ добавлен ',
        confirmUploadMsg:
          'Теперь, когда вы загрузили документ, вы можете отправить его в DHS PATH.',
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
        share: 'Поделиться', // share button
        shared: 'Общие документы', // label of shared tab on dashboard
        upload: 'Загрузить',
        uploadDocument: 'Загрузить документ',
        uploadFile: 'Загрузить файл',
        uploadFiles: 'Загрузить файлы',
        view: 'Просмотреть',
        save: 'Сохранить',
        shareWithDHS: 'Предоставить доступ DHS', // label
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
        month: 'Месяц',
        day: 'День',
        year: 'Год',
        preferredLanguage: 'Укажите предпочтительный язык',
      },

      // All copy related to the create shared folder flow
      sharing: {
        defaultName: 'Документы, к которым вы предоставили доступ DHS {date}', // not found
        confirmSharedFiles: 'Документы, к которым DHS получит доступ',
        plusNMore: 'Более {count}',
        recipients: 'Recipients', // not found

        // placeholder text for the add recipient email field
        addRecipientPlaceholder: 'Введите адрес электронной почты', // not found

        // step titles in the share flow
        confirmTitle: 'Предоставить доступ к этим документам?',
        addRecipientsTitle: 'Кому предоставить доступ к этим документам?',
        selectFilesTitle: 'Выбрать документы',

        disclaimerTitle: 'Напоминание',
        shareDocumentDisclaimer: [
          'My File NYC facilitates document sharing with {emails} email accounts',
          'Напоминание. После предоставления DHS доступа к документам сотрудники могут загружать и сохранять ваши документы, чтобы предоставлять их в качестве доказательств в поддержку вашего заявления. У DHS могут остаться копии для обоснования вашего дела, даже если вы не предоставите доступ к документам или удалите их из сервиса My File.', // not found
        ],

        // on the confirmation step, could be "recipient" or "recipients" depending on number of items
        confirmRecipientsLabel:
          'Вы предоставляете доступ к документам следующим лицам:',
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
        added: 'добавели', // not afound
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
        file: 'файл', // not found
        files: 'документа', // not found
        invited: 'Приглашение отправлено', // not found
        pageTitle: 'Действия в учетной записи', // not found
        shared: 'дали доступ к',
        today: 'Сегодня',
        you: 'Вы',
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
        folderName:
          'На момент {date} {time} к следующему количеству документов предоставлено доступ: {num}.',
        folderNameWithOneDocument: '1 документ отправлен {date} в {time}',
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
        oneFileTitle: 'Одностраничный документ',
        oneFileDescription:
          'Загрузите одну страницу или фотографию с устройства',
        multipleFilesTitle: 'Многостраничный документ',
        multipleFilesDescription:
          'Загрузите несколько страниц или фотографий с устройства',
        multipageCaution:
          'Загружайте один документ за раз. Не объединяйте документы при загрузке.',
        titleInfoButton:
          'Вы можете ввести удостоверение личности, подтверждение места жительства, заявление и т.д.',
        descriptionInfoButton:
          'Предоставьте краткое описание файлов, которые вы загрузили для разъяснения.',
        yourFileTitle: 'Ваш файл',
        yourDocumentTitle: 'Ваш документ',
        uploadNewFile: 'Выбрать новый файл',
        dragAndDropDescription: 'Перетащите, чтобы изменить порядок файлов.',

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

      errorMessages: {
        cannotDisplayDocumentHeader: 'دستاویز ڈسپلے نہیں کر سکتا',
        cannotDisplayDocumentText:
          'اس وقت دستاویز دکھانے سے قاصر ہے۔ اس کے بجائے براہ کرم دستاویز ڈاؤن لوڈ کریں۔',
        unsupportedBrowserHeader: 'معاون براؤزر',
        unsupportedBrowserTextDesktop:
          'پی ڈی ایف ویور فائر فاکس یا انٹرنیٹ ایکسپلورر کو سپورٹ نہیں کرتا ہے۔ براہ کرم ایک مختلف ویب براؤزر استعمال کریں جیسے',
        or: 'یا',
        unsupportedBrowserTextMobile:
          'PDF Viewer Microsoft Edge، Firefox، Samsung Internet، یا Internet Explorer کو سپورٹ نہیں کرتا ہے۔ براہ کرم ایک مختلف ویب براؤزر استعمال کریں جیسے',
      },

      validationMsg: {
        firstNameRequired: 'آپ کے پہلے نام کی فیلڈ درکار ہے',
        firstNameNotValid: 'پہلا نام قابلِ استعمال نہیں ہے۔',
        firstNameMaxLength:
          'پہلے نام کی فیلڈ 50 حروف سے زائد پر مشتمل نہیں ہو سکتی',
        firstNameMinLength: 'پہلا نام کا فیلڈ کم از کم 2 حروف کا ہونا چاہیے۔.',
        firstNameAlpha: 'پہلا نام والا فیلڈ صرف حروف پر مشتمل ہو سکتا ہے۔',

        // Last Name
        lastNameRequired: 'آخری نام کی فیلڈ درکار ہے',
        lastNameNotValid: 'آخری نام قابلِ استعمال نہیں ہے۔',
        lastNameMaxLength:
          'آخری نام کی فیلڈ 50 حروف سے زائد پر مشتمل نہیں ہو سکتی',
        lastNameMinLength: 'آخری نام کا فیلڈ کم از کم 2 حروف کا ہونا چاہیے۔',
        lastNameAlpha: 'آخری نام کے خانے میں صرف حروف ہوسکتے ہیں۔',

        // Month
        monthNotValid: 'مہینہ کارآمد نہیں ہے۔',
        monthRequired: 'مہینہ درکار ہے۔',

        // Day
        dayNotValid: 'دن درست نہیں ہے۔',
        dayRequired: 'دن کی فیلڈ درکار ہے',

        // Year
        yearRequired: 'سال کی فیلڈ درکار ہے',
        yearNotValid: 'سال درست نہیں ہے۔',

        // Case Number
        caseNumberRequired: 'کیس نمبر کی فیلڈ درکار ہے',
        caseNumberMaxLength:
          'کیس نمبر کی فیلڈ 20 حروف سے زائد پر مشتمل نہیں ہو سکتی',
        caseNumberMinLength: 'کیس نمبر کا فیلڈ کم از کم 4 حروف کا ہونا چاہیے۔',
      },

      statusIndicator: {
        clientInReview: 'نظرِ ثانی کی جا رہی ہے',
        clientReviewed: 'نظرِ ثانی شدہ',
      },

      forceLogout: {
        firstTimeoutWarningMessage:
          'آپ کو مجبوراً {warningMsg}منٹوں کے اندر دوبارہ لاگ ان کرنا ہو گا',
        secondTimeoutWarningMessage:
          'آپ کو مجبوراً {warningMsg} منٹوں کے اندر دوبارہ لاگ ان کرنا ہو گا',
        loginAgain:
          'اگر آپ 1 گھنٹے سے زیادہ وقت کے لیے MyFile استعمال کر رہے ہوں تو آپ کو دوبارہ لاگ ان کرنے کی ضرورت ہو گی۔',
        btnLoginAgain: 'دوبارہ لاگ ان کریں',
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
        loginButton: 'لاگ ان ہوں',
        createAccountButton: 'اکاؤنٹ بنائیں',
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
        enterNamePlaceholder: '...اس دستاویز کو ایک نام دیں',
        enterDescriptionPlaceholder: '...یہاں ایک پیغام لکھیں',
        titleDescription: 'اس دستاویز کی وضاحت کریں (اختیاری)',
        documentName: 'آپ نے کس قسم کی دستاویز اپ لوڈ کی؟', // shown as a label on edit details screen

        noDocuments:
          'آپ کے اکاؤنٹ میں ابھی تک کوئی دستاویز محفوظ نہیں کی گئی ہے۔', // shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'اپنی پہلی دستاویز شامل کریں', // label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: 'دستاویز کا نام',
        singleOrMultiple: 'کسی اختیار کا انتخاب کریں',
        addedDocument: 'دستاویز شامل کر دی گئی۔ ',
        confirmUploadMsg:
          'اب جب کہ آپ نے اپنی دستاویز اپ لوڈ کیا ہے، آپ اسے DHS PATH کے ساتھ اشتراک کر سکتے ہیں۔',
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
        share: 'شیئر کریں', // share button
        shared: 'شیئر کردہ دستاویزات', // label of shared tab on dashboard
        upload: 'اپ لوڈ کریں',
        uploadDocument: 'دستاویز اپ لوڈ کریں',
        uploadFile: 'اپ لوڈ فائل',
        uploadFiles: 'فائلیں اپ لوڈ کرو',
        view: 'دیکھیں',
        save: 'محفوظ کریں',
        shareWithDHS: 'DHS کے ساتھ اشتراک کریں', // label
      },

      // account settings page
      account: {
        language: 'زبان',
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
        month: 'مہینہ',
        day: 'دن',
        year: 'سال',
        preferredLanguage: 'آپ کی ترجیحی زبان کونسی ہے؟',
      },

      // All copy related to the create shared folder flow
      sharing: {
        defaultName:
          'ایسی دستاویزات جن کا آپ نے DHS کے ساتھ اشتراک کیا ہو {date}',
        confirmSharedFiles:
          'ایسی دستاویزات جو DHS کے ساتھ اشتراک کی جانی چاہیئیں', // not found
        plusNMore: '+ {count} مزید',
        recipients: 'Recipients', // not found

        // placeholder text for the add recipient email field
        addRecipientPlaceholder: 'Enter email address', // not found

        // step titles in the share flow
        confirmTitle: 'Are you sure you want to share these Documents?', // not found
        addRecipientsTitle: 'Who are you sharing these document(s) with?', // not found
        selectFilesTitle: 'دستاویزات منتخب کریں',

        disclaimerTitle: 'یاد دہانی',
        shareDocumentDisclaimer: [
          'My File NYC facilitates document sharing with {emails} email accounts',
          'یاد دہانی: جب DHS کے ساتھ دستاویزات کا اشتراک ہو جائے گا تو ملازمین آپ کی درخواست کے ثبوت کے طور پر جمع کروانے کے لیے آپ کی دستاویزات کو ڈاؤن لوڈ اور محفوظ کر سکتے ہیں۔ DHS کے پاس اب بھی آپ کے کیس کی حمایت کے لیے نقول موجود ہو سکتی ہیں چاہے آپ ان کا اشتراک ختم کر دیں یا My File سے حذف کر دیں۔', // not found
        ],

        // on the confirmation step, could be "recipient" or "recipients" depending on number of items
        confirmRecipientsLabel: 'آپ دستاویزات کا اشتراک کر رہے ہیں',
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
        shared: 'شیئر کردہ',
        today: 'آج',
        you: 'آپ',
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
        folderName: '{num} دستاویزات کا اشتراک کیا گیا {date} بذریعہ {time}',
        folderNameWithOneDocument:
          '1 دستاویز کا اشتراک {date} پر {time}پر کیا گیا۔',
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
        oneFileTitle: 'ایک-صفحے کی دستاویز',
        oneFileDescription: 'اپنی ڈیوائس سے ایک صفحہ یا تصویر اپ لوڈ کریں',
        multipleFilesTitle: 'کثیر صفحات کی دستاویز',
        multipleFilesDescription:
          'اپنی ڈیوائس سے متعدد صفحات یا تصاویر اپ لوڈ کریں',
        multipageCaution:
          'ایک وقت میں ایک ہی دستاویز اپ لوڈ کریں۔ اپ لوڈ کرتے ہوئے دستاویزات کو یکجا نہ کریں۔',
        titleInfoButton:
          'آپ یا تو شناخت ٹائپ کر سکتے ہیں، رہائش کا ثبوت، درخواست وغیرہ۔',
        descriptionInfoButton:
          'وضاحت کے لیے آپ نے جو فائلیں اپ لوڈ کی ہیں ان کی مختصر تفصیل فراہم کریں۔',
        yourFileTitle: 'آپ کی فائل',
        yourDocumentTitle: 'آپ کی دستاویزات',
        uploadNewFile: 'ایک نئی فائل کا انتخاب کریں',
        dragAndDropDescription: 'صفحات کو دوبارہ ترتیب دینے کے لیے ڈریگ کریں۔',
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

      errorMessages: {
        cannotDisplayDocumentHeader: '문서를 표시할 수 없습니다',
        cannotDisplayDocumentText:
          '지금은 문서를 표시할 수 없습니다. 대신 문서를 다운로드하세요.',
        unsupportedBrowserHeader: '지원되지 않는 브라우저',
        unsupportedBrowserTextDesktop:
          'PDF 뷰어는 Firefox 또는 Internet Explorer를 지원하지 않습니다. 다음과 같은 다른 웹 브라우저를 사용하십시오.',
        or: '또는',
        unsupportedBrowserTextMobile:
          'PDF 뷰어는 Microsoft Edge, Firefox, Samsung Internet 또는 Internet Explorer를 지원하지 않습니다. 다음과 같은 다른 웹 브라우저를 사용하십시오.',
      },

      validationMsg: {
        firstNameRequired: '이름 필드는 필수입니다',
        firstNameNotValid: '이름 필드가 유효하지 않습니다',
        firstNameMaxLength: '이름 필드는 50자를 넘을 수 없습니다',
        firstNameMinLength: '케이스 번호 필드는 최소 2자 이상이어야 합니다.',
        firstNameAlpha: '이름 필드에는 문자만 사용할 수 있습니다.',

        // Last Name
        lastNameRequired: '성 필드는 필수입니다',
        lastNameNotValid: '성 필드가 유효하지 않습니다',
        lastNameMaxLength: '성 필드는 50자를 넘을 수 없습니다',
        lastNameMinLength: '성 필드는 2자 이상이어야 합니다',
        lastNameAlpha: '성 필드에는 문자만 포함할 수 있습니다',

        // Month
        monthNotValid: '월이 유효하지 않습니다',
        monthRequired: '월이 필요합니다',

        // Day
        dayNotValid: '날짜가 유효하지 않습니다',
        dayRequired: '일 필드는 필수입니다',

        // Year
        yearRequired: '년도 필드는 필수입니다',
        yearNotValid: '연도가 유효하지 않습니다',

        // Case Number
        caseNumberRequired: '케이스 번호 필드는 필수입니다',
        caseNumberMaxLength: '케이스 번호 필드는 20자를 넘을 수 없습니다',
        caseNumberMinLength: '케이스 번호 필드는 최소 4자 이상이어야 합니다',
      },

      statusIndicator: {
        clientInReview: '검수 중',
        clientReviewed: '검수 완료',
      },

      forceLogout: {
        firstTimeoutWarningMessage:
          '{warningMsg}분 내에 다시 입력을 하셔야 합니다.',
        secondTimeoutWarningMessage:
          '{warningMsg}분 내에 다시 입력을 하셔야 합니다.',
        loginAgain:
          'MyFile을 1시간 넘게 이용 중이라면 로그인을 다시 해 주셔야 합니다.',
        btnLoginAgain: '다시 로그인하기',
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
        loginButton: '로그인',
        createAccountButton: '계정 만들기',
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
        enterNamePlaceholder: '이 서류에 이름을 지정하십시오...',
        enterDescriptionPlaceholder: '여기서 메시지 쓰기...',
        titleDescription: '이 문서에 대해 설명하세요(선택사항)',
        documentName: '어떤 종류의 서류를 업로드했습니까?', // shown as a label on edit details screen

        noDocuments: '아직 계정에 저장된 서류가 없습니다.', // shown on dashboard when there are no documents
        previewOf: 'Preview of',
        uploadFirst: '첫 번째 서류 추가', // label on the empty state upload button
        thumbnailOf: 'Thumbnail of',
        fileName: '서류 이름',
        singleOrMultiple: '옵션 선택',
        addedDocument: '문서 추가됨 ',
        confirmUploadMsg:
          '이제 문서를 업로드했으므로 DHS PATH와 공유할 수 있습니다.',
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
        share: '공유', // share button
        shared: '공유 서류', // label of shared tab on dashboard
        upload: '업로드',
        uploadDocument: '서류 업로드',
        uploadFile: '파일 업로드',
        uploadFiles: '파일 업로드하다',
        view: '보기',
        save: '저장',
        shareWithDHS: 'DHS와 공유', // label
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
        month: '월',
        day: '일',
        year: '연도',
        preferredLanguage: '선호 언어는 무엇입니까?',
      },

      // All copy related to the create shared folder flow
      sharing: {
        defaultName:
          '{date}에 노숙자서비스부(Department of Homeless Services, DHS) 에 제출한 문서',
        confirmSharedFiles: 'DHS 에 제출할 문서',
        plusNMore: '+ {count} 추가',
        recipients: 'Recipients', // not found

        // placeholder text for the add recipient email field
        addRecipientPlaceholder: '이메일 주소 입력',

        // step titles in the share flow
        confirmTitle: '이 서류를 공유하시겠습니까?',
        addRecipientsTitle: '이 서류를 누구와 공유하고 있습니까?',
        selectFilesTitle: '서류 선택',

        disclaimerTitle: '알림',
        shareDocumentDisclaimer: [
          'My File NYC facilitates document sharing with {emails} email accounts',
          '알려 드립니다. 직원은 서류를 DHS 와 공유한 후 서류를 다운로드하고 저장하여 신청에 대한 증빙 자료로 제출할 수 있습니다. DHS 는 귀하가 "My File"(내 파일) 에서 공유를 취소하거나 삭제하더라도 귀하의 사례를 뒷받침하는 사본을 가지고 있을 수 있습니다.', // not found
        ],

        // on the confirmation step, could be "recipient" or "recipients" depending on number of items
        confirmRecipientsLabel: '서류 공유 대상',
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
        today: '오늘',
        you: '본인',
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
        folderName: '{time}에 {date}에서 문서 {num}건 공유',
        folderNameWithOneDocument:
          '1개의 문서가 {date} {time}에 공유되었습니다.',
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
        oneFileTitle: '1페이지 문서',
        oneFileDescription: '기기에서 1페이지 문서 또는 사진 업로드.',
        multipleFilesTitle: '여러 페이지 문서',
        multipleFilesDescription: '기기에서 여러 페이지 문서 또는 사진 업로드.',
        multipageCaution:
          '문서는 한 번에 하나씩 업로드하십시오. 업로딩 중에 문서를 결합하지 마십시오.',
        titleInfoButton: '신원, 거주 증명, 지원서 등을 입력할 수 있습니다.',
        descriptionInfoButton:
          '명확성을 위해 업로드한 파일에 대한 간략한 설명을 제공합니다.',
        yourFileTitle: '귀하의 파일',
        yourDocumentTitle: '문서',
        uploadNewFile: '새 파일 선택',
        dragAndDropDescription: '페이지를 드래그하면 순서가 다시 매겨집니다.',

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
      dateAdded: 'Fecha Agregada',

      application: {
        title: 'My File NYC',
      },

      errorMessages: {
        cannotDisplayDocumentHeader: 'No se puede mostrar el documento',
        cannotDisplayDocumentText:
          'No se puede mostrar el documento en este momento. Descargue el documento en su lugar.',
        unsupportedBrowserHeader: 'Navegador no soportado',
        unsupportedBrowserTextDesktop:
          'PDF Viewer no es compatible con Firefox o Internet Explorer. Utilice un navegador web diferente, como por ejemplo',
        or: 'o',
        unsupportedBrowserTextMobile:
          'PDF Viewer no es compatible con Microsoft Edge, Firefox, Samsung Internet o Internet Explorer. Utilice un navegador web diferente, como por ejemplo',
      },

      validationMsg: {
        firstNameRequired: 'El campo Nombre es obligatorio',
        firstNameNotValid: 'El nombre no es válido',
        firstNameMaxLength: 'El campo Nombre admite 50 caracteres como máximo',
        firstNameMinLength: 'El campo Nombre debe tener al menos 2 caracteres',
        firstNameAlpha: 'El campo Nombre solo puede contener letras.',

        // Last Name
        lastNameRequired: 'El campo Apellido es obligatorio',
        lastNameNotValid: 'El apellido no es válido',
        lastNameMaxLength: 'El campo Apellido admite 50 caracteres como máximo',
        lastNameMinLength: 'El campo Apellido debe tener al menos 2 caracteres',
        lastNameAlpha: 'El campo Apellido solo puede contener letras',

        // Month
        monthNotValid: 'El mes no es válido',
        monthRequired: 'Se requiere el mes',

        // Day
        dayNotValid: 'El dia no es valido',
        dayRequired: 'El campo Día es obligatorio',

        // Year
        yearRequired: 'El campo Año es obligatorio',
        yearNotValid: 'El año no es válido',

        // Case Number
        caseNumberRequired: 'El campo Número de caso es obligatorio',
        caseNumberMaxLength:
          'El campo Número de caso admite 20 caracteres como máximo',
        caseNumberMinLength:
          'El campo Número de caso debe tener al menos 4 caracteres',
      },

      statusIndicator: {
        clientInReview: 'En revisión',
        clientReviewed: 'Revisado',
      },

      forceLogout: {
        firstTimeoutWarningMessage:
          'Deberá volver a iniciar sesión en menos de {warningMsg} minutos.',
        secondTimeoutWarningMessage:
          'Deberá volver a iniciar sesión en menos de {warningMsg} minutos.',
        loginAgain:
          'Deberá volver a iniciar sesión si utiliza MyFile durante más de 1 hora.',
        btnLoginAgain: 'Volver a iniciar sesión',
      },

      toast: {
        acceptedDelegateInvite: 'Delegate Access Accepted', // not found
        delegateRemoved: 'Client Removed', // not found
        downloadLoadingState: 'Preparando la descarga',
        sharingComplete: 'Compartido', // displayed while a file is uploading
        uploadComplete: 'Se completó la carga',
        fileDeletedConfirmation: 'Se eliminó el documento',
        fileTooLarge: 'El documento es demasiado grande (tamaño máximo: 10 MB)',
      },

      login: {
        loginButton: 'Iniciar sesión',
        createAccountButton: 'Crear cuenta',
        getStarted: {
          client: 'Empezar',
          cityEmployee: 'City Employee Login', // not found
          cboWorker: 'CBO Worker Login', // not found
        },
        welcomeTitle: 'Bienvenido',
        footerLogoAlt: 'Footer logo', // not found
      },

      navigation: {
        about: 'Sobre',
        account: 'My Account Managers', // not found
        settings: 'Mi perfil',
        settingsFirstRun:
          '¡Le damos la bienvenida a Mi archivo NYC! Para comenzar, responda unas preguntas sobre usted.',
        welcomeFirstRun: '¡Le damos la bienvenida a Mi archivo NYC!',
        activity: 'Registro de actividades',
        back: 'Atrás',
        clients: 'Clientes', // navigate back to agent view desktop
        close: 'Cerrar',
        dashboard: 'Panel',
        faq: 'Preguntas frecuentes',
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
        enterNamePlaceholder: 'Nombrar este documento...',
        enterDescriptionPlaceholder: 'Escriba aquí su mensaje...',
        titleDescription: 'Describa este documento (opcional)',
        documentName: '¿Qué tipo de documento ha subido?', // shown as a label on edit details screen

        noDocuments: 'Aún no hay ningún documento guardado en su cuenta.', // not found shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'Agregue su primer documento', // label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: 'Nombre del documento',
        singleOrMultiple: 'Elegir una opción',
        addedDocument: 'Documento agregado ',
        confirmUploadMsg:
          'Ahora que subió su documento, puede compartirlo con DHS PATH.',
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
        share: 'Compartir', // share button
        shared: 'Documentos compartidos', // label of shared tab on dashboard
        upload: 'Cargar',
        uploadDocument: 'Cargar documento',
        uploadFile: 'Subir archivo',
        uploadFiles: 'Subir archivos',
        view: 'Ver',
        save: 'Guardar',
        shareWithDHS: 'Compartir con DHS', // label
      },

      // account settings page
      account: {
        language: 'Idioma', // open language selector
        firstName: 'Primer nombre',
        whatIsYourFirstName: '¿Cuál es su primer nombre?',
        lastName: 'Apellido',
        whatIsYourLastName: '¿Cuál es su apellido?',
        dob: 'Fecha de nacimiento',
        whatIsYourDob: '¿Cuando naciste?',
        caseNumber: 'Número de caso',
        whatIsYourDshCaseNumber: '¿Cuál es su número de caso de DHS?',
        dhsShow:
          'Agregue su número de caso de DHS si es una familia que regresa. Si es nuevo en PATH, agregue el número de ticket que recibió cuando llegó a PATH (ejemplo: CL ####).',
        locale: 'Seleccionar idioma',
        month: 'Mes',
        day: 'Día',
        year: 'Año',
        preferredLanguage: '¿Cuál es su idioma preferido?',
      },

      // All copy related to the create shared folder flow
      sharing: {
        defaultName: 'Documentos que compartió con DHS el {date}',
        confirmSharedFiles: 'Documentos para compartir con DHS',
        plusNMore: 'y {count} más',
        recipients: 'Recipients', // not found

        // placeholder text for the add recipient email field
        addRecipientPlaceholder: 'Escribir una dirección de correo electrónico',

        // step titles in the share flow
        confirmTitle: '¿Confirma que quiere compartir estos documentos?',
        addRecipientsTitle: '¿A quién le compartirá estos documentos?',
        selectFilesTitle: 'Seleccionar documentos',

        disclaimerTitle: 'Recordatorio',
        shareDocumentDisclaimer: [
          'My File NYC facilitates document sharing with {emails} email accounts',
          'Una vez compartidos los documentos, los empleados de DHS pueden descargar y guardar sus documentos para presentarlos como prueba de su solicitud. Aunque usted deje de compartir o elimine documentos de MyFile, DHS puede conservar copias para documentar su caso.', // not found
        ],

        // on the confirmation step, could be "recipient" or "recipients" depending on number of items
        confirmRecipientsLabel: 'Usted está compartiendo documentos con',
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
        pageTitle: 'Actividad de la cuenta',
        shared: 'compartido',
        today: 'Hoy',
        you: 'Usted', // not found
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
        folderName: '{num} documentos compartidos el {date} a las {time}',
        folderNameWithOneDocument:
          '1 documento compartido el {date} a las {time}',
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
        oneFileTitle: 'Documento de una página',
        oneFileDescription: 'Subir una página o foto desde su dispositivo.',
        multipleFilesTitle: 'Documento de varias páginas',
        multipleFilesDescription:
          'Subir varias páginas o fotos desde su dispositivo.',
        multipageCaution:
          'Suba un documento cada vez. No combine documentos mientras se están subiendo.',
        titleInfoButton:
          'Puede escribir identidad, comprobante de residencia, solicitud, etc.',
        descriptionInfoButton:
          'Proporcione una breve descripción de los archivos que cargó como aclaración.',
        yourFileTitle: 'Tu archivo',
        yourDocumentTitle: 'Su documento',
        uploadNewFile: 'Elegir nuevo archivo',
        dragAndDropDescription: 'Para reordenar las páginas, arrástrelas.',
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

      errorMessages: {
        cannotDisplayDocumentHeader: "Impossible d'afficher le document",
        cannotDisplayDocumentText:
          "Impossible d'afficher le document pour le moment. Veuillez plutôt télécharger le document.",
        unsupportedBrowserHeader: 'Navigateur non supporté',
        unsupportedBrowserTextDesktop:
          'PDF Viewer ne prend pas en charge Firefox ou Internet Explorer. Veuillez utiliser un autre navigateur Web tel que',
        or: 'ou',
        unsupportedBrowserTextMobile:
          'PDF Viewer ne prend pas en charge Microsoft Edge, Firefox, Samsung Internet ou Internet Explorer. Veuillez utiliser un autre navigateur Web tel que',
      },

      validationMsg: {
        firstNameRequired: 'Le champ « Prénom » est obligatoire',
        firstNameNotValid: 'Le prénom n’est pas valide.',
        firstNameMaxLength:
          'Le champ « Prénom » ne peut pas comporter plus de 50 caractères',
        firstNameMinLength:
          'Le champ « Prénom »  doit comporter au moins 2 caractères',
        firstNameAlpha: 'Le champ « Prénom » ne peut contenir que des lettres',

        // Last Name
        lastNameRequired: 'Le champ « Nom » est obligatoire',
        lastNameNotValid: 'Le nom n’est pas valide',
        lastNameMaxLength:
          'Le champ « Nom » ne peut pas comporter plus de 50 caractères',
        lastNameMinLength:
          'Le champ « Nom » de famille doit comporter au moins 2 caractères.',
        lastNameAlpha: 'Le champ « Nom » ne peut contenir que des lettres.',

        // Month
        monthNotValid: "Le mois n'est pas valide",
        monthRequired: 'Le champ « Mois » est obligatoire.',

        // Day
        dayNotValid: "Le jour n'est pas valide",
        dayRequired: 'Le champ « Jour » est obligatoire',

        // Year
        yearRequired: 'Le champ « Année » est obligatoire',
        yearNotValid: "Le annee n'est pas valid",

        // Case Number
        caseNumberRequired: 'Le champ « Numéro de dossier » est obligatoire',
        caseNumberMaxLength:
          'Le champ « Numéro de dossier » ne peut pas comporter plus de 20 caractères',
        caseNumberMinLength:
          'The Case Number field must be at least 4 characters long.',
      },

      statusIndicator: {
        clientInReview: 'En cours de vérification',
        clientReviewed: 'Vérifié',
      },

      forceLogout: {
        firstTimeoutWarningMessage:
          'Vous devrez vous reconnecter dans moins de {warningMsg} minutes.',
        secondTimeoutWarningMessage:
          'Vous devrez vous reconnecter dans moins de {warningMsg} minutes.',
        loginAgain:
          'Il vous faudra vous connecter à nouveau si vous utilisez MyFile plus d’une heure.',
        btnLoginAgain: 'Se reconnecter',
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
        loginButton: 'Se connecter',
        createAccountButton: 'Créer un compte',
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
        enterNamePlaceholder: 'Donner un nom à ce document...',
        enterDescriptionPlaceholder: 'Écrivez un message ici...',
        titleDescription: 'Décrivez ce document (facultatif)',
        documentName: 'Quel type de document avez-vous téléchargé?', // shown as a label on edit details screen

        noDocuments:
          'Aucun document n’a encore été enregistré sur votre compte.', // shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'Ajouter votre premier document', // label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: 'Nom du document',
        singleOrMultiple: 'Choisissez une option',
        addedDocument: 'Document ajouté ',
        confirmUploadMsg:
          'Maintenant que vous avez téléchargé votre document, vous pouvez le partager avec DHS PATH.',
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
        share: 'Partager', // share button
        shared: 'Documents partagés', // label of shared tab on dashboard
        upload: 'Télécharger',
        uploadDocument: 'Télécharger un document',
        uploadFile: 'Téléverser un fichier',
        uploadFiles: 'Télécharger des fichiers',
        view: 'Consulter',
        save: 'Enregistrer',
        shareWithDHS: 'Partager avec le DHS', // label
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
        month: 'Mois',
        day: 'Jour',
        year: 'Année',
        preferredLanguage: 'Quelle est votre langue préférée ?',
      },

      // All copy related to the create shared folder flow
      sharing: {
        defaultName: 'Documents que vous avez partagés avec le DHS le {date}',
        confirmSharedFiles: 'Documents à partager avec le DHS',
        plusNMore: '+ {count}',
        recipients: 'Recipients', // not found

        // placeholder text for the add recipient email field
        addRecipientPlaceholder: 'Saisir une adresse électronique',

        // step titles in the share flow
        confirmTitle: 'Voulez-vous vraiment partager ces documents ?',
        addRecipientsTitle: 'Avec qui partagez-vous ces documents?',
        selectFilesTitle: 'Sélectionner des documents',

        disclaimerTitle: 'Rappel', // not found
        shareDocumentDisclaimer: [
          'My File NYC facilitates document sharing with {emails} email accounts',
          'Rappel : Une fois les documents partagés, les employés du DHS pourront télécharger et enregistrer vos documents pour les soumettre en tant que justificatifs de votre demande. Il est possible que le DHS conserve en sa possession des copies pour étayer votre dossier même si vous annulez le partage ou si vous supprimez ces documents de MyFile.', // not found
        ],

        // on the confirmation step, could be "recipient" or "recipients" depending on number of items
        confirmRecipientsLabel: 'Vous partagez vos documents avec',
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
        today: 'Aujourd’hui',
        you: 'Vous',
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
        folderName: '{num} documents partagés le {date} à {time}',
        folderNameWithOneDocument: '1 document partagé le {date} à {time}',
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
        oneFileTitle: 'Document d’une page',
        oneFileDescription:
          'Téléchargez une page ou une photo depuis votre appareil.',
        multipleFilesTitle: 'Document de plusieurs pages',
        multipleFilesDescription:
          'Téléchargez plusieurs pages ou photos depuis votre appareil.',
        multipageCaution:
          'Téléchargez un document à la fois. Ne combinez pas les documents lors du téléchargement.',
        titleInfoButton:
          "Vous pouvez saisir l'identité, la preuve de résidence, la demande, etc.",
        descriptionInfoButton:
          'Fournissez une brève description des fichiers que vous avez téléchargés pour clarification.',
        yourFileTitle: 'Votre dossier',
        yourDocumentTitle: 'Votre document',
        uploadNewFile: 'Choisir un nouveau fichier',
        dragAndDropDescription:
          'Faites glisser pour remettre les pages dans l’ordre.',
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

      errorMessages: {
        cannotDisplayDocumentHeader: 'নথি প্রদর্শন করা যাবে না',
        cannotDisplayDocumentText:
          'এই মুহুর্তে নথিটি দেখাতে অক্ষম৷ পরিবর্তে নথি ডাউনলোড করুন.',
        unsupportedBrowserHeader: 'অসমর্থিত ব্রাউজার',
        unsupportedBrowserTextDesktop:
          'পিডিএফ ভিউয়ার ফায়ারফক্স বা ইন্টারনেট এক্সপ্লোরার সমর্থন করে না। যেমন একটি ভিন্ন ওয়েব ব্রাউজার ব্যবহার করুন',
        or: 'বা',
        unsupportedBrowserTextMobile:
          'পিডিএফ ভিউয়ার মাইক্রোসফট এজ, ফায়ারফক্স, স্যামসাং ইন্টারনেট, বা ইন্টারনেট এক্সপ্লোরার সমর্থন করে না। যেমন একটি ভিন্ন ওয়েব ব্রাউজার ব্যবহার করুন',
      },

      validationMsg: {
        firstNameRequired: 'নাম ক্ষেত্রটি প্রয়োজন',
        firstNameNotValid: 'নাম বৈধ নয়।',
        firstNameMaxLength: 'নাম ক্ষেত্রটি 50 অক্ষরের বেশি নাও হতে পারে',
        firstNameMinLength:
          'প্রথম নাম ক্ষেত্রটি অবশ্যই কমপক্ষে 2 অক্ষর দীর্ঘ হতে হবে।',
        firstNameAlpha: 'প্রথম নামের ক্ষেত্রে শুধুমাত্র অক্ষর থাকতে পারে।',

        // Last Name
        lastNameRequired: 'পদবি ক্ষেত্রটি প্রয়োজন',
        lastNameNotValid: 'পদবি বৈধ নয়।',
        lastNameMaxLength: 'পদবি ক্ষেত্রটি 50 অক্ষরের বেশি নাও হতে পারে',
        lastNameMinLength:
          'শেষ নাম ক্ষেত্রটি অবশ্যই কমপক্ষে 2 অক্ষর দীর্ঘ হতে হবে।',
        lastNameAlpha: 'শেষ নামের ক্ষেত্রে শুধুমাত্র অক্ষর থাকতে পারে।',

        // Month
        monthNotValid: 'মাস বৈধ নয়।',
        monthRequired: 'মাস প্রয়োজন',

        // Day
        dayNotValid: 'দিন বৈধ নয়',
        dayRequired: 'দিন ক্ষেত্রটি প্রয়োজন',

        // Year
        yearRequired: 'বছর ক্ষেত্রটি প্রয়োজন',
        yearNotValid: 'বছর বৈধ নয়।',

        // Case Number
        caseNumberRequired: 'কেস নম্বর ক্ষেত্রটি প্রয়োজন',
        caseNumberMaxLength: 'কেস নম্বর ক্ষেত্রটি 20 অক্ষরের বেশি নাও হতে পারে',
        caseNumberMinLength:
          'কেস নম্বর ক্ষেত্রটি অবশ্যই কমপক্ষে 4 অক্ষর দীর্ঘ হতে হবে।',
      },

      statusIndicator: {
        clientInReview: 'পর্যালোচনা করা হচ্ছে',
        clientReviewed: 'পর্যালোচনা করা হয়েছে',
      },

      forceLogout: {
        firstTimeoutWarningMessage:
          'আপনাকে {warningMsg} মিনিটেরও কম সময়ে আবার লগইন করতে বাধ্য করা হবে.',
        secondTimeoutWarningMessage:
          'আপনাকে {warningMsg}মিনিটেরও কম সময়ে আবার লগইন করতে বাধ্য করা হবে.',
        loginAgain:
          'মাই-ফাইল 1 ঘণ্টার বেশি ব্যবহার করলে আপনাকে আবার লগইন করতে হবে।.',
        btnLoginAgain: 'আবার লগইন করুন',
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
        loginButton: 'লগ ইন করুন',
        createAccountButton: 'অ্যাকাউন্ট তৈরি করুন',
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
        enterNamePlaceholder: 'এই নথিটির একটি নাম দিন...',
        enterDescriptionPlaceholder: 'এখানে একটি বার্তা লিখুন...',
        titleDescription: 'এই নথিটি বর্ণনা করুন (ঐচ্ছিক)',
        documentName: 'কোন ধরনের নথি আপনি আপলোড করেছেন?', // shown as a label on edit details screen

        noDocuments: 'আপনার অ্যাকাউন্টে এখনও কোনো নথি সংরক্ষিত নেই।.', // not found shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'আপনার প্রথম নথি যোগ করুন', // label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: 'নথির নাম',
        singleOrMultiple: 'একটি বিকল্প নির্বাচন করুন',
        addedDocument: 'নথিপত্র যুক্ত করা হয়েছে ',
        confirmUploadMsg:
          'এখন যেহেতু আপনি আপনার নথি আপলোড করেছেন, আপনি এটি DHS PATH এর সাথে ভাগ করে নিতে পারেন৷.',
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
        share: 'শেয়ার করুন', // share button
        shared: 'শেয়ার করা নথি', //  label of shared tab on dashboard
        upload: 'আপলোড করুন',
        uploadDocument: 'নথি আপলোড করুন',
        uploadFile: 'ফাইল আপলোড করুন',
        uploadFiles: 'ফাইল আপলোড',
        view: 'দেখুন',
        save: 'সেভ করুন',
        shareWithDHS: 'DHS এর সাথে শেয়ার করুন', // label
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
        month: 'মাস',
        day: 'দিন',
        year: 'বছর',
        preferredLanguage: 'আপনার পছন্দের ভাষা কী?',
      },

      // All copy related to the create shared folder flow
      sharing: {
        defaultName: 'আপনি DHS-এর সাথে যে নথিগুলি শেয়ার করেছেন {date}-এ', // not found
        confirmSharedFiles: 'DHS-এর কাছে যে নথিগুলি শেয়ার করতে হবে', // not found
        plusNMore: '+ আরও {count} টি',
        recipients: 'Recipients', // not found

        // placeholder text for the add recipient email field
        addRecipientPlaceholder: 'ইমেল অ্যাড্রেস দিন',

        // step titles in the share flow
        confirmTitle: 'আপনি কি এই নথিগুলি শেয়ার করার বিষয়ে নিশ্চিত?',
        addRecipientsTitle: 'আপনি কার সাথে এই নথি(গুলি) শেয়ার করছেন?',
        selectFilesTitle: 'নথি নির্বাচন করুন',

        disclaimerTitle: 'অনুস্মারক',
        shareDocumentDisclaimer: [
          'My File NYC facilitates document sharing with {emails} email accounts',
          'Oঅনুস্মারক: একবার নথি শেয়ার করা হলে, DHS কর্মীরা আপনার আবেদনের প্রমাণ হিসাবে জমা দেওয়ার জন্য আপনার নথিগুলি ডাউনলোড এবং সংরক্ষণ করতে পারে। আপনি ‘মাই ফাইল’ থেকে শেয়ার বন্ধ করলে বা মুছে দিলেও DHS-এর কাছে আপনার কেস সমর্থন করার জন্য কপি থাকতে পারে।.', // not found
        ],

        // on the confirmation step, could be "recipient" or "recipients" depending on number of items
        confirmRecipientsLabel: 'আপনি এর সাথে নথি শেয়ার করছেন',
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
        today: 'আজ',
        you: 'আপনি',
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
        folderName: '{num} নথি শেয়ার করা হয়েছে {date} তারিখে {time} -এ',
        folderNameWithOneDocument:
          '1টি নথি {date} {time} ভাগ করে নেওয়া হয়েছে৷',
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
        oneFileTitle: 'এক পৃষ্ঠার নথি',
        oneFileDescription: 'আপনার ডিভাইস থেকে একটি পৃষ্ঠা বা ছবি আপলোড করুন.',
        multipleFilesTitle: 'একাধিক পৃষ্ঠার নথি',
        multipleFilesDescription:
          'আপনার ডিভাইস থেকে একাধিক পৃষ্ঠা বা ফটো আপলোড করুন.',
        multipageCaution:
          'Upload one document at a time. Do not combine documents while uploading.',
        titleInfoButton:
          'আপনি পরিচয় টাইপ করতে পারেন, বসবাসের প্রমাণ, আবেদনপত্র ইত্যাদি।',
        descriptionInfoButton:
          'স্পষ্টীকরণের জন্য আপনি আপলোড করা ফাইলগুলির একটি সংক্ষিপ্ত বিবরণ প্রদান করুন৷.',
        yourFileTitle: 'আপনার ফাইল',
        yourDocumentTitle: 'আপনার নথি',
        uploadNewFile: 'নতুন ফাইল নির্বাচন করুন',
        dragAndDropDescription: 'পৃষ্ঠাগুলি পুনরায় সাজাতে টেনে আনুন।',
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

      errorMessages: {
        cannotDisplayDocumentHeader: 'Nie można wyświetlić dokumentu',
        cannotDisplayDocumentText:
          'W tej chwili nie można pokazać dokumentu. Zamiast tego, prosimy ściągnąć dokument.',
        unsupportedBrowserHeader: 'Nieobsługiwane przeglądarki',
        unsupportedBrowserTextDesktop:
          'Przeglądarka PDF nie obsługuje przeglądarek Firefox ani Internet Explorer. Użyj innej przeglądarki internetowej, np',
        or: 'lub',
        unsupportedBrowserTextMobile:
          'Przeglądarka PDF nie obsługuje przeglądarek Microsoft Edge, Firefox, Samsung Internet ani Internet Explorer. Użyj innej przeglądarki internetowej, np',
      },

      validationMsg: {
        firstNameRequired: 'Pole „Imię” jest obowiązkowe',
        firstNameNotValid: 'Imię jest niepoprawne.',
        firstNameMaxLength: 'Pole „Imię” może zawierać maksymalnie 50 znaków',
        firstNameMinLength: 'Pole „Imię” musi mieć co najmniej 2 znaki.',
        firstNameAlpha: 'Pole „Imię” może zawierać tylko litery.',

        // Last Name
        lastNameRequired: 'Pole „Nazwisko” jest obowiązkowe',
        lastNameNotValid: 'Nazwisko jest niepoprawne.',
        lastNameMaxLength:
          'Pole „Nazwisko” może zawierać maksymalnie 50 znaków',
        lastNameMinLength: 'Pole „Nazwisko” musi mieć co najmniej 2 znaki.',
        lastNameAlpha: 'Pole „Nazwisko” może zawierać tylko litery',

        // Month
        monthNotValid: 'Miesiąc jest niepoprawny',
        monthRequired: 'Pole „Miesiąc” jest obowiązkowe.',

        // Day
        dayNotValid: 'Dzień jest nieprawidłowy',
        dayRequired: 'Pole „Dzień” jest obowiązkowe',

        // Year
        yearRequired: 'Pole „Rok” jest obowiązkowe',
        yearNotValid: 'Rok jest nieprawidłowy',

        // Case Number
        caseNumberRequired: 'Pole „Numer sprawy” jest obowiązkowe',
        caseNumberMaxLength:
          'Pole „Numer sprawy” może zawierać maksymalnie 20 znaków',
        caseNumberMinLength: 'Pole Numer sprawy musi mieć co najmniej 4 znaki.',
      },

      statusIndicator: {
        clientInReview: 'W trakcie weryfikacji',
        clientReviewed: 'Zweryfikowano',
      },

      forceLogout: {
        firstTimeoutWarningMessage:
          'Za mniej niż {warningMsg} min wymagane będzie ponowne zalogowanie.',
        secondTimeoutWarningMessage:
          'Za mniej niż {warningMsg} min wymagane będzie ponowne zalogowanie.',
        loginAgain:
          'Przy korzystaniu z MyFile dłużej niż przez godzinę wymagane jest ponowne zalogowanie.',
        btnLoginAgain: 'Zaloguj się ponownie',
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
        loginButton: 'Zaloguj się',
        createAccountButton: 'Utwórz konto',
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
        enterNamePlaceholder: 'Nadaj temu dokumentowi nazwę...',
        enterDescriptionPlaceholder: 'Napisz wiadomość tutaj...',
        titleDescription: 'Opisz ten dokument (opcjonalnie)',
        documentName: 'Jaki dokument został przesłany?', // shown as a label on edit details screen

        noDocuments:
          'Na Twoim koncie nie ma jeszcze żadnych zapisanych dokumentów.', // shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'Dodaj pierwszy dokument', // label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: 'Nazwa dokumentu',
        singleOrMultiple: 'Wybierz opcję',
        addedDocument: 'Dokument został dodany ',
        confirmUploadMsg:
          'Dokument został przesłany – teraz możesz udostępnić go DHS PATH.',
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
        share: 'Udostępnij', // share button
        shared: 'Udostępnione dokumenty', // label of shared tab on dashboard
        upload: 'Prześlij',
        uploadDocument: 'Prześlij dokument',
        uploadFile: 'Przesyłanie pliku',
        uploadFiles: 'Prześlij pliki',
        view: 'Wyświetl',
        save: 'Zapisz',
        shareWithDHS: 'Udostępnij DHS', // label
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
        month: 'Miesiąc',
        day: 'Dzień',
        year: 'Rok',
        preferredLanguage: 'Jaki jest Twój preferowany język?',
      },

      // All copy related to the create shared folder flow
      sharing: {
        defaultName: 'Dokumenty udostępnione DHS na dzień {date}', // not found
        confirmSharedFiles: 'Dokumenty do udostępnienia DHS',
        plusNMore: '+ jeszcze {count}',
        recipients: 'Recipients', // not found

        // placeholder text for the add recipient email field
        addRecipientPlaceholder: 'Wprowadź adres e-mail',

        // step titles in the share flow
        confirmTitle: 'Czy na pewno chcesz udostępnić te dokumenty?',
        addRecipientsTitle: 'Komu udostępniasz te dokumenty?',
        selectFilesTitle: 'Wybierz dokumenty',

        disclaimerTitle: 'Przypomnienie',
        shareDocumentDisclaimer: [
          'My File NYC facilitates document sharing with {emails} email accounts',
          'Przypomnienie: Po udostępnieniu dokumentów DHS pracownicy będą mogli pobierać je i zapisywać w celu późniejszego przesłania jako formy potwierdzenia Pana/Pani wniosku. DHS może nadal dysponować kopiami dokumentów dotyczących Pana/Pani sprawy, nawet jeżeli wyłączy Pan/Pani opcję ich udostępniania lub usunie je Pan/Pani z My File.', // not found
        ],

        // on the confirmation step, could be "recipient" or "recipients" depending on number of items
        confirmRecipientsLabel: 'Dokumenty są aktualnie udostępniane',
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
        today: 'Dzisiaj', // not found
        you: 'Pan/Pani', // not found
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
        folderName:
          'Liczba dokumentów udostępnionych w dniu {date} o godz. {time}: {num}',
        folderNameWithOneDocument:
          '1 dokument udostępniony {date} o godzinie {time}',
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
        oneFileTitle: 'Dokument jednostronicowy',
        oneFileDescription: 'Załaduj jedną stronę lub zdjęcie z urządzenia',
        multipleFilesTitle: 'Dokument wielostronicowy',
        multipleFilesDescription: 'Załaduj kilka stron lub zdjęć z urządzenia',
        multipageCaution:
          'Załaduj jeden dokument naraz. Nie łącz dokumentów podczas ładowania.',
        titleInfoButton:
          'Możesz wpisać tożsamość, dowód zamieszkania, wniosek itp.',
        descriptionInfoButton:
          'W celu wyjaśnienia podaj krótki opis przesłanych plików.',
        yourFileTitle: 'Plik',
        yourDocumentTitle: 'Twój dokument',
        uploadNewFile: 'Wybierz nowy plik',
        dragAndDropDescription: 'Przeciągnij, aby zmienić kolejność stron.',
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

      errorMessages: {
        cannotDisplayDocumentHeader: 'Pa ka montre dokiman an',
        cannotDisplayDocumentText:
          'Pa kapab montre dokiman an nan moman sa a. Tanpri telechaje dokiman an pito.',
        unsupportedBrowserHeader: 'Navigatè ki pa sipòte',
        unsupportedBrowserTextDesktop:
          'PDF Viewer pa sipòte Firefox oswa Internet Explorer. Tanpri itilize yon navigatè entènèt diferan tankou',
        or: 'oswa',
        unsupportedBrowserTextMobile:
          'PDF Viewer pa sipòte Microsoft Edge, Firefox, Samsung Entènèt, oswa Internet Explorer. Tanpri itilize yon navigatè entènèt diferan tankou',
      },

      validationMsg: {
        firstNameRequired: 'Pati Prenon an obligatwa',
        firstNameNotValid: 'Prenon an pa valid',
        firstNameMaxLength: 'Pati Prenon an pa dwe pi plis pase 50 karaktè',
        firstNameMinLength: 'Field Non an dwe gen omwen 2 karaktè',
        firstNameAlpha: 'Jaden Premye Non an ka genyen sèlman lèt.',

        // Last Name
        lastNameRequired: 'Pati Non an obligatwa',
        lastNameNotValid: 'Non an pa valid',
        lastNameMaxLength: 'Pati Non an pa dwe pi plis pase 50 karaktè.',
        lastNameMinLength: 'Chan non siyati a dwe gen omwen 2 karaktè',
        lastNameAlpha: 'Chan non siyati a ka sèlman genyen lèt.',

        // Month
        monthNotValid: 'Mwa pa valid.',
        monthRequired: 'Mwa obligatwa.',

        // Day
        dayNotValid: 'Jounen pa valab',
        dayRequired: 'Pati Jou a obligatwa',

        // Year
        yearRequired: 'Pati Ane a obligatwa',
        yearNotValid: 'Ane pa valab.',

        // Case Number
        caseNumberRequired: 'Pati Nimewo Dosye a obligatwa',
        caseNumberMaxLength:
          'Pati Nimewo Dosye an pa dwe pi plis pase 20 karaktè',
        caseNumberMinLength: 'Jaden Nimewo Ka a dwe gen omwen 4 karaktè.',
      },

      statusIndicator: {
        clientInReview: 'Nan etap Revizyon',
        clientReviewed: 'Yo egzamine',
      },

      forceLogout: {
        firstTimeoutWarningMessage:
          'Ou ap oblije konekte ankò nan mwens pase {warningMsg} minit.',
        secondTimeoutWarningMessage:
          'Ou ap oblije konekte ankò nan mwens pase {warningMsg} minit.',
        loginAgain:
          'Ou oblije konekte ankò si ou ap sou MyFile pandan plis pase 1èdtan.',
        btnLoginAgain: 'Konekte ankò',
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
        loginButton: 'Konekte',
        createAccountButton: 'Kreye yon Kont',
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
        enterNamePlaceholder: 'Bay dokiman sa yon non...',
        enterDescriptionPlaceholder: 'Ekri yon mesaj la...',
        titleDescription: 'Dekri dokiman sa a (si ou vle)',
        documentName: 'Ki tip dokiman ou te atache?', // shown as a label on edit details screen

        noDocuments: 'Poko gen okenn dokiman ki anrejistre sou kont ou an.', // shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'Atache premye dokiman ou a', // label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: 'Non dokiman an',
        singleOrMultiple: 'Chwazi yon opsyon',
        addedDocument: 'Nou ajoute dokiman an ',
        confirmUploadMsg:
          'Kounye a, ou ka telechaje dokiman w, ou ka pataje l ak  DHS PATH.',
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
        share: 'Pataje', // share button
        shared: 'Pataje Dokiman', // label of shared tab on dashboard
        upload: 'Telechaje',
        uploadDocument: 'Telechaje Dokiman',
        uploadFile: 'Telechaje File',
        uploadFiles: 'Voye Fichye yo',
        view: 'Afichaj',
        save: 'Anrejistre',
        shareWithDHS: 'Pataje ak DHS', // label
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
        month: 'Mwa',
        day: 'Jou',
        year: 'Ane',
        preferredLanguage: 'Ki Lang ou pi Pito?',
      },

      // All copy related to the create shared folder flow
      sharing: {
        defaultName: 'Dokiman ou te pataje ak DHS nan dat{date}',
        confirmSharedFiles: 'Dokiman pou pataje ak DHS',
        plusNMore: '+ {count} pou plis',
        recipients: 'Recipients', // not found

        // placeholder text for the add recipient email field
        addRecipientPlaceholder: 'Antre adrès imèl la',

        // step titles in the share flow
        confirmTitle: 'Èske ou sèten ou vle pataje Dokiman sa yo?',
        addRecipientsTitle: 'Ak kiyès ou pataje dokiman sa yo?',
        selectFilesTitle: 'Dokiman ou Chwazi a',

        disclaimerTitle: 'Rapèl',
        shareDocumentDisclaimer: [
          'My File NYC facilitates document sharing with {emails} email accounts',
          'Pa bliye: Yon fwa dokiman w yo pataje ak DHS, anplwaye yo ka telechaje ak anrejistre yo pou soumèt kòm prèv pou aplikasyon w la. DHS ka toujou gen kopi yo pou kore dosye w la menm si ou retire pataj la oswa efase yo sou My File.', // not found
        ],

        // on the confirmation step, could be "recipient" or "recipients" depending on number of items
        confirmRecipientsLabel: 'Ou ap pataje dokiman yo ak',
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
        today: 'Jodi a',
        you: 'Ou menm',
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
        folderName: '{num} dokiman ki pataje nan dat {date} nan {time}',
        folderNameWithOneDocument:
          'Nou te pataje 1 dokiman jou ki te {date} nan lè {time} nan maten/nan apre midi',
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
        oneFileTitle: 'Dokiman yon paj',
        oneFileDescription: 'Telechaje yon paj oswa yon foto nan aparèy ou a',
        multipleFilesTitle: 'Dokiman plizyè paj',
        multipleFilesDescription:
          'Telechaje plizyè paj oswa plizyè foto nan aparèy ou a',
        multipageCaution:
          'Ou ka telechaje sèlman yon (1) dokiman alafwa. Pa mete dokiman youn nan lòt lè w ap fè telechajman.',
        titleInfoButton:
          'Ou ka tape swa idantite, prèv rezidans, aplikasyon, elatriye.',
        descriptionInfoButton:
          'Bay yon deskripsyon tou kout sou dosye ou telechaje yo pou klarifikasyon.',
        yourFileTitle: 'Dosye w la',
        yourDocumentTitle: 'Dokiman ou yo',
        uploadNewFile: 'Chwazi nouvo fichye',
        dragAndDropDescription: 'Glise paj yo pou w ka mete yo nan lòd.',
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

      errorMessages: {
        cannotDisplayDocumentHeader: '無法顯示文檔',
        cannotDisplayDocumentText: '目前無法顯示該文檔。請下載這份文件來代替。',
        unsupportedBrowserHeader: '不支持的瀏覽器',
        unsupportedBrowserTextDesktop:
          'PDF 查看器不支持 Firefox 或 Internet Explorer。請使用不同的網絡瀏覽器，例如',
        or: '或者',
        unsupportedBrowserTextMobile:
          'PDF 查看器不支持 Microsoft Edge、Firefox、Samsung Internet 或 Internet Explorer。請使用不同的網絡瀏覽器，例如',
      },

      validationMsg: {
        firstNameRequired: '名字欄位必填',
        firstNameNotValid: '名字無效',
        firstNameMaxLength: '名字欄位不能超過 50 個字符',
        firstNameMinLength: '名字字段的長度必須至少為 2 個字符',
        firstNameAlpha: '名字字段只能包含字母',

        // Last Name
        lastNameRequired: '姓氏欄位必填',
        lastNameNotValid: '姓氏無效',
        lastNameMaxLength: '姓氏欄位不能超過 50 個字符',
        lastNameMinLength: '姓氏字段的長度必須至少為 2 個字符',
        lastNameAlpha: '姓氏字段只能包含字母。',

        // Month
        monthNotValid: '月份無效',
        monthRequired: '需要月份',

        // Day
        dayNotValid: '日期無效',
        dayRequired: '日期欄位必填',

        // Year
        yearRequired: '年份欄位必填',
        yearNotValid: '年份無效',

        // Case Number
        caseNumberRequired: '個案編號欄位必填',
        caseNumberMaxLength: '個案編號欄位不能超過 20 個字符',
        caseNumberMinLength: '案例編號字段的長度必須至少為 4 個字符',
      },

      statusIndicator: {
        clientInReview: '審查中',
        clientReviewed: '已審查',
      },

      forceLogout: {
        firstTimeoutWarningMessage: '您將必須在{warningMsg}分鐘內再次登入。',
        secondTimeoutWarningMessage: '您將必須在{warningMsg}分鐘內再次登入。',
        loginAgain: '如果使用 MyFile 超過 1 小時，您必須再次登入。',
        btnLoginAgain: '再次登入',
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
        loginButton: '登入',
        createAccountButton: '建立帳戶',
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
        enterNamePlaceholder: '為此文件命名...',
        enterDescriptionPlaceholder: '在此處留言...',
        titleDescription: '描述本文檔（可選）',
        documentName: '您上傳了那種類型的文件？', // shown as a label on edit details screen

        noDocuments: '您的帳戶中還沒有儲存任何文件。', // shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: '新增您的第一個文件', // label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: '文件名稱',
        singleOrMultiple: '選擇一項',
        addedDocument: '文件已新增 ',
        confirmUploadMsg: '現在您已上傳文件，您可以與 DHS PATH 分享該文件。',
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
        share: '分享', // share button
        shared: '分享文件', // label of shared tab on dashboard
        upload: '上傳',
        uploadDocument: '上傳文件',
        uploadFile: '上傳文件',
        uploadFiles: '上傳文件',
        view: '查看',
        save: '儲存',
        shareWithDHS: '分享至 DHS', // label
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
        month: '月',
        day: '日',
        year: '年',
        preferredLanguage: '您的偏好語言是哪種？',
      },

      // All copy related to the create shared folder flow
      sharing: {
        defaultName:
          '您在 {date}與無家可歸者服務部 (Department of Homeless Services, DHS) 分享的檔案',
        confirmSharedFiles: '與 DHS 分享的檔案',
        plusNMore: '再+ {count}',
        recipients: 'Recipients', // not found

        // placeholder text for the add recipient email field
        addRecipientPlaceholder: '輸入電子郵件地址',

        // step titles in the share flow
        confirmTitle: '確定要分享這些文件嗎？',
        addRecipientsTitle: '您要與誰分享這些文件？',
        selectFilesTitle: '選擇文件',

        disclaimerTitle: '提醒',
        shareDocumentDisclaimer: [
          'My File NYC facilitates document sharing with {emails} email accounts',
          '提醒事項：分享檔案後，DHS 員工可下載並保存您的檔案，以作為您的申請證明來提交。即使您從「My File」（我的檔案）中取消共享或刪除檔案，DHS 可能仍然存有支持您個案的副本。', // not found
        ],

        // on the confirmation step, could be "recipient" or "recipients" depending on number of items
        confirmRecipientsLabel: '您正在將檔案分享至',
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
        today: '今天',
        you: '您',
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
        folderName: '在 {date} 分 {time} 次上傳 {num} 份檔案',
        folderNameWithOneDocument:
          '1개의 문서가 {date} {time}에 공유되었습니다.',
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
        oneFileTitle: '單頁檔案',
        oneFileDescription: '從您的設備上傳單頁檔案或相片',
        multipleFilesTitle: '多頁檔案',
        multipleFilesDescription: '從您的設備上傳多頁檔案或相片。',
        multipageCaution: '一次上傳一份檔案。上傳時請勿合併檔案。',
        titleInfoButton: '您可以輸入身份、居住證明、申請等。',
        descriptionInfoButton: '提供您上傳的文件的簡要說明以進行說明。',
        yourFileTitle: '你的檔案',
        yourDocumentTitle: '您的檔案',
        uploadNewFile: '選擇新檔案',
        dragAndDropDescription: '拖動以重新排序頁面。',
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
    uk: {
      // label appearing in tabular content (list of users, list of shared collections etc)
      // as well as side bar on document view
      dateAdded: `Дата додавання`,

      application: {
        title: 'My File NYC',
      },

      errorMessages: {
        cannotDisplayDocumentHeader: 'Не вдається відобразити документ',
        cannotDisplayDocumentText:
          'Наразі неможливо відобразити документ. Замість цього скачайте його.',
        unsupportedBrowserHeader: 'Непідтримуваний браузер',
        unsupportedBrowserTextDesktop:
          'PDF Viewer не підтримує Firefox або Internet Explorer. Будь ласка, використовуйте інший веб-браузер, наприклад',
        or: 'або',
        unsupportedBrowserTextMobile:
          'PDF Viewer не підтримує Microsoft Edge, Firefox, Samsung Internet або Internet Explorer. Будь ласка, використовуйте інший веб-браузер, наприклад',
      },

      validationMsg: {
        firstNameRequired: 'Потрібно вказати ім’я.',
        firstNameNotValid: 'Ім’я неприпустиме.',
        firstNameMaxLength: 'Поле "Ім’я" має містити не більше 50 символів.',
        firstNameMinLength: 'Поле "Ім’я" має містити не менше 2 символів.',
        firstNameAlpha: 'Ім’я має містити тільки букви.',

        // Last Name
        lastNameRequired: 'Потрібно вказати прізвище.',
        lastNameNotValid: 'Прізвище неприпустиме.',
        lastNameMaxLength: 'Поле "Прізвище" має містити не більше 50 символів.',
        lastNameMinLength: 'Поле "Прізвище" має містити не менше 2 символів.',
        lastNameAlpha: 'Прізвище має містити тільки букви.',

        // Month
        monthNotValid: 'Місяць неприпустимий.',
        monthRequired: 'Потрібно вказати місяць.',

        // Day
        dayNotValid: 'День неприпустимий.',
        dayRequired: 'Потрібно вказати день.',

        // Year
        yearRequired: 'Потрібно вказати рік.',
        yearNotValid: 'Рік неприпустимий',

        // Case Number
        caseNumberRequired: 'Потрібно вказати номер справи.',
        caseNumberMaxLength:
          'Поле "Номер справи" має містити не більше 20 символів.',
        caseNumberMinLength:
          'Поле "Номер справи" має складатись не менш ніж з 4 символів.',
      },

      statusIndicator: {
        clientInReview: 'На перегляді',
        clientReviewed: 'Переглянуто',
      },

      forceLogout: {
        firstTimeoutWarningMessage:
          'Ви будете змушені ввійти знову менш ніж за {number} хв.',
        secondTimeoutWarningMessage:
          'Ви будете змушені ввійти знову менш ніж за {number} хв.',
        loginAgain:
          'Якщо ви працюєте в системі MyFile понад 1 годину, вам знадобиться ввійти повторно.',
        btnLoginAgain: 'Увійти ще раз',
      },

      toast: {
        acceptedDelegateInvite: 'Delegate Access Accepted', // not found
        delegateRemoved: 'Client Removed', // not found
        downloadLoadingState: 'Підготовка до скачування',
        sharingComplete: 'Надання доступу завершено',
        uploading: 'Додавання документа…', // displayed while a file is uploading
        uploadComplete: 'Завантаження завершено',
        fileDeletedConfirmation: 'Документ видалено',
        fileTooLarge: 'Документ завеликий (має бути <10 МБ)',
      },

      login: {
        loginButton: 'Вхід',
        createAccountButton: 'Створити обліковий запис',
        getStarted: {
          client: 'Розпочати',
          cityEmployee: 'City Employee Login', // not found
          cboWorker: 'CBO Worker Login', // not found
        },
        welcomeTitle: 'Ласкаво просимо',
        footerLogoAlt: 'Footer logo', // not found
      },

      navigation: {
        about: 'Відомості',
        account: 'My Account Managers', // not found
        settings: 'Мій профіль',
        settingsFirstRun:
          'Ласкаво просимо до My File NYC! Дайте відповідь на кілька запитань про себе, щоб розпочати.',
        welcomeFirstRun: 'Ласкаво просимо до My File NYC!',
        activity: 'Журнал активності',
        back: 'Назад',
        clients: 'Клієнти', // navigate back to agent view desktop not found
        close: 'Закрити',
        dashboard: 'Інформаційна панель',
        faq: 'Поширені запитання',
        loading: 'Завантаження',
        loggingIn: 'Вхід у систему…',
        manageAccounts: 'Manage Accounts', // not found
        signIn: 'Вхід',
        signOut: 'Вихід',
        switchAccount: '切換客戶端',
        termsOfUse: 'Умови використання',
        nycId: 'Виникли проблеми зі входом?',
      },

      document: {
        // This is the title of the confirmation dialog for deleting a document
        deleteConfirmationTitle: 'Видалити цей документ?',
        // This is the body content of the confirmation dialog for deleting a document
        deleteConfirmationBody: `Користувачі, яким надано доступ, більше не зможуть переглядати цей документ. Цю операцію неможливо скасувати.`,
        documentMenu: 'Меню документа',
        documentOptions: 'Параметри',
        downloadZip: 'Скачати всі',
        downloadPdf: 'Скачати PDF',
        description: 'Опис документа', // displayed beneath the document and expands to show description (if any)
        editDetailsTitle: 'Редагувати деталі', // page title on edit details screen
        enterNamePlaceholder: 'Дайте назву цьому документу',
        enterDescriptionPlaceholder: 'Напишіть повідомлення в цьому полі',
        titleDescription: 'Опишіть цей документ (необов’язково)',
        documentName: 'Який тип документа ви завантажили ?', // shown as a label on edit details screen

        noDocuments:
          'У вашому обліковому записі ще немає збережених документів.', // shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'Додати перший документ', // label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: 'Назва документа',
        singleOrMultiple: 'Виберіть варіант',
        addedDocument: 'Документ додано ',
        confirmUploadMsg:
          'Тепер, коли ви завантажили свій документ, ви можете надати DHS PATH доступ до нього.',
      },

      controls: {
        accept: 'Прийняти', //  eg. accept terms of use
        add: 'Додати', //  eg. add a delegate
        allFiles: 'Ваші документи', // shown as tab label on the dashboard
        cancel: 'Скасувати', // cancel button
        confirm: 'Підтвердити',
        confirmDelete: 'Так, видалити',
        declineAndLogOut: 'Відхилити й вийти', // decline TOS button
        delete: 'Видалити', // delete document kebab item
        done: 'Готово',
        download: 'Скачати', // edit document kebab item and button text
        editDetails: 'Редагувати деталі', // edit document kebab item
        edit: 'Редагувати', // edit account details
        continue: 'Продовжити',
        share: 'Поділитися', // share button
        shared: 'Спільні документи', // label of shared tab on dashboard
        upload: 'Завантажити',
        uploadDocument: 'Завантажити документ',
        uploadFile: 'Завантажити файл',
        uploadFiles: 'Завантажити файли',
        view: 'Переглянути',
        save: 'Зберегти',
        shareWithDHS: 'Надати доступ DHS', // label
      },

      // account settings page
      account: {
        language: 'Мова', // not found open language selector
        firstName: 'Ім’я',
        whatIsYourFirstName: 'Як вас звати?',
        lastName: 'Прізвище',
        whatIsYourLastName: 'Яке ваше прізвище?',
        dob: 'Дата народження',
        whatIsYourDob: 'Коли ви народилися?',
        caseNumber: 'Номер справи',
        whatIsYourDshCaseNumber: 'Який номер вашої справи DHS?',
        dhsShow:
          'Укажіть номер справи DHS, якщо ви – уже зареєстрована родина. Якщо ви ще не працювали з PATH, укажіть номер звернення, який ви отримали, коли звернулися в програму PATH (наприклад, CL ####).',
        locale: 'Виберіть мову',
        month: 'Місяць',
        day: 'День',
        year: 'Рік',
        preferredLanguage: 'Яка ваша мова?',
      },

      // All copy related to the create shared folder flow
      sharing: {
        defaultName: 'Документи, доступ до яких ви надали DHS {date}',
        confirmSharedFiles: 'Документи, доступ до яких буде надано DHS',
        plusNMore: '+ ще {count}',
        recipients: 'Одержувачі', // not found

        // placeholder text for the add recipient email field
        addRecipientPlaceholder: '輸入電子郵件地址',

        // step titles in the share flow
        confirmTitle: '確定要分享這些文件嗎？',
        addRecipientsTitle: '您要與誰分享這些文件？',
        selectFilesTitle: 'Виберіть документи',

        disclaimerTitle: 'Нагадування',
        shareDocumentDisclaimer: [
          'My File NYC facilitates document sharing with {emails} email accounts',
          'Нагадування. Після надання доступу до документів співробітники DHS можуть скачати й зберегти ваші документи, щоб подати їх на підтвердження вашої заявки. DHS може зберігати копії документів у вашій справі, навіть якщо ви скасуєте доступ до них або видалите їх із системи My File.', // not found
        ],

        // on the confirmation step, could be "recipient" or "recipients" depending on number of items
        confirmRecipientsLabel: 'Ви надаєте доступ до документів для',
        tooManyRecipients: 'You can share with up to {count} people', // (not found) error text when trying to add more than 10 recipients
      },

      tabTitles: {
        about: 'Відомості',
        authorizing: 'Authorizing', // not found not important - used while logging in
        dashboard: 'Інформаційна панель',
        document: 'Документ', // used for document preview while page is loading, then changes to document title
        faq: 'Часті запитання',
        shared: 'Надано доступ', // used in share flow
        sharedBy: 'Хто надав доступ：', //  used in share flow
        termsOfUse: 'Умови використання', // not found used while viewing TOU
        welcome: 'Ласкаво просимо', // displayed on the initial landing page
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
        accessed: 'отримав(-ла) доступ',
        added: 'додав(-ла)',
        delegateInvitedClient: 'to manage and share documents on your behalf', // not found
        delegateInvitedCbo: 'to manage and share documents on their behalf', // not found
        delegateAcceptedClient:
          'can now manage and share documents on your behalf', // not found
        delegateAcceptedCbo:
          'can now manage and share documents on this account', // not found
        delegateDeletedClient: 'has been removed from your account', // not found
        delegateDeletedCbo: 'has been removed from this account ', // not found
        deleted: 'видалив(-ла)',
        edited: 'відредагував(-ла) дані про',
        file: 'файл',
        files: 'документи',
        invited: 'запросив(-ла)',
        pageTitle: 'Активність облікового запису',
        shared: 'надав(-ла) доступ',
        today: 'СЬОГОДНІ',
        you: 'Ви',
      },

      // Copy where you are viewing shared folders
      sharedFolder: {
        // empty state for list of shared folders
        noCollections: `Ви ще не поділилися жодним документом.`, // message
        shareFirstDocument: 'Поділіться своїм першим документом', // call to action

        // empty state for an individual shared folder
        emptyCollection: 'Усі документи було видалено з цієї папки.', // message
        returnDashboard: 'Повернутися до інформаційної панелі', // call to action

        // empty state for list of clients who have shared collections with user
        noSharedDocuments: 'Вам ще не надано доступ до жодного документа.',
        // title for collection table name column
        collectionTableTitle:
          'Документи, до яких ви надали доступ, відсортовані за датою', // not found
        folderName: 'Доступ до документів ({num} шт.) надано {date} о {time}.',
        folderNameWithOneDocument:
          'Доступ до 1 документа надано {date} о {time}',
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
        oneFileTitle: 'Односторінковий документ',
        oneFileDescription:
          'Завантажте одну сторінку або фотографію зі свого пристрою.',
        multipleFilesTitle: 'Багатосторінковий документ.',
        multipleFilesDescription:
          'Завантажте кілька сторінок або фотографій зі свого пристрою.',
        multipageCaution:
          'Завантажуйте по одному документу за раз. Не об’єднуйте документи під час завантаження.',
        titleInfoButton:
          'Ви можете ввести посвідчення особи, або підтвердження місця проживання, або заяву, тощо.',
        descriptionInfoButton:
          'Для пояснення, надайте короткий опис завантажених файлів.',
        yourFileTitle: 'Ваш файл',
        yourDocumentTitle: 'Ваш документ',
        uploadNewFile: 'Завантажити новий файл',
        dragAndDropDescription:
          'Перетягніть сторінки, щоб перевпорядкувати їх.',
        removeFile: 'Вилучити',
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
    pt: {
      // label appearing in tabular content (list of users, list of shared collections etc)
      // as well as side bar on document view
      dateAdded: `Data em que foi adicionado`,

      application: {
        title: 'My File NYC',
      },

      errorMessages: {
        cannotDisplayDocumentHeader: 'Não é possível exibir o documento',
        cannotDisplayDocumentText:
          'Não é possível mostrar o documento no momento. Em vez disso, faça download do documento.',
        unsupportedBrowserHeader: 'Navegador não suportado',
        unsupportedBrowserTextDesktop:
          'O PDF Viewer não oferece suporte ao Firefox ou Internet Explorer. Por favor, use um navegador diferente, por exemplo',
        or: 'ou',
        unsupportedBrowserTextMobile:
          'O PDF Viewer não oferece suporte a Microsoft Edge, Firefox, Samsung Internet ou Internet Explorer. Por favor, use um navegador diferente, por exemplo',
      },

      validationMsg: {
        firstNameRequired: 'O campo Nome é obrigatório.',
        firstNameNotValid: 'Nome inválido.',
        firstNameMaxLength: 'O campo Nome não pode ter mais de 50 caracteres.',
        firstNameMinLength: 'O campo Nome deve conter pelo menos 2 caracteres.',
        firstNameAlpha: 'O nome deve conter apenas letras.',

        // Last Name
        lastNameRequired: 'O campo Sobrenome é obrigatório.',
        lastNameNotValid: 'Sobrenome inválido.',
        lastNameMaxLength:
          'O campo Sobrenome não pode ter mais de 50 caracteres.',
        lastNameMinLength:
          'O campo Sobrenome deve conter pelo menos 2 caracteres.',
        lastNameAlpha: 'O sobrenome deve conter apenas letras.',

        // Month
        monthNotValid: 'Mês inválido.',
        monthRequired: 'Você precisa especificar o mês.',

        // Day
        dayNotValid: 'O dia não é permitido.',
        dayRequired: 'O campo Dia é obrigatório.',

        // Year
        yearRequired: 'Você precisa especificar o ano.',
        yearNotValid: 'Ano inválido',

        // Case Number
        caseNumberRequired: 'O campo Número do processo é obrigatório',
        caseNumberMaxLength:
          'O campo Número do procecsso não pode ter mais de 20 caracteres.',
        caseNumberMinLength:
          'O campo Número do Caso deve conter no mínimo 4 caracteres.',
      },

      statusIndicator: {
        clientInReview: 'Em revisão',
        clientReviewed: 'Revisado',
      },

      forceLogout: {
        firstTimeoutWarningMessage:
          'Você terá que fazer login novamente em menos de {number} minutos',
        secondTimeoutWarningMessage:
          'Você terá que fazer login novamente em menos de {number} minutos',
        loginAgain:
          'Você receberá solicitação para fazer login novamente se estiver usando o Meu arquivo por mais de 1 hora.',
        btnLoginAgain: 'Fazer login novamente',
      },

      toast: {
        acceptedDelegateInvite: 'Delegate Access Accepted', // not found
        delegateRemoved: 'Client Removed', // not found
        downloadLoadingState: 'Preparando o download',
        sharingComplete: 'Compartilhamento concluído',
        uploading: 'Adicionando documento...', // displayed while a file is uploading
        uploadComplete: 'Upload concluído',
        fileDeletedConfirmation: 'Documento excluído',
        fileTooLarge: 'Documento muito grande (deve ser < 10 MB)',
      },

      login: {
        loginButton: 'Fazer login',
        createAccountButton: 'Criar conta',
        getStarted: {
          client: 'Iniciar',
          cityEmployee: 'City Employee Login', // not found
          cboWorker: 'CBO Worker Login', // not found
        },
        welcomeTitle: 'Boas vindas',
        footerLogoAlt: 'Footer logo', // not found
      },

      navigation: {
        about: 'Sobre',
        account: 'My Account Managers', // not found
        settings: 'Meu perfil',
        settingsFirstRun:
          'Boas vindas ao Meu arquivo NYC! Responda algumas perguntas sobre você para começar.',
        welcomeFirstRun: 'Boas vindas ao Meu arquivo NYC!',
        activity: 'Registro de atividades',
        back: 'Voltar',
        clients: 'Clientes', // navigate back to agent view desktop not found
        close: 'Fechar',
        dashboard: 'Painel',
        faq: 'Perguntas frequentes',
        loading: 'Carregando',
        loggingIn: 'ВFazendo login...',
        manageAccounts: 'Manage Accounts', // not found
        signIn: 'Entrar',
        signOut: 'Sair',
        switchAccount: '切換客戶端',
        termsOfUse: 'Termos de uso',
        nycId: 'Está tendo problemas para fazer login?',
      },

      document: {
        // This is the title of the confirmation dialog for deleting a document
        deleteConfirmationTitle: 'Excluir este documento?',
        // This is the body content of the confirmation dialog for deleting a document
        deleteConfirmationBody: `Qualquer pessoa com acesso compartilhado não poderá mais visualizar este documento. Isto não pode ser desfeito.`,
        documentMenu: 'Menu de documentos',
        documentOptions: 'Opções',
        downloadZip: 'Fazer download de todos',
        downloadPdf: 'Fazer download de PDF',
        description: 'Descrição do documento', // displayed beneath the document and expands to show description (if any)
        editDetailsTitle: 'Editar detalhes', // page title on edit details screen
        enterNamePlaceholder: 'Dê um nome a este documento',
        enterDescriptionPlaceholder: 'Escreva uma mensagem neste campo',
        titleDescription: 'Descreva este documento (opcional)',
        documentName: 'Que tipo de documento você baixou?', // shown as a label on edit details screen

        noDocuments: 'Ainda não há documentos salvos em sua conta.', // shown on dashboard when there are no documents
        previewOf: 'Preview of', // not found
        uploadFirst: 'Adicione seu primeiro documento', // label on the empty state upload button
        thumbnailOf: 'Thumbnail of', // not found
        fileName: 'Nome do documento',
        singleOrMultiple: 'Selecione uma opção',
        addedDocument: 'Documento adicionado ',
        confirmUploadMsg:
          'Agora que carregou seu documento, você pode compartilhá-lo com o PATH do DHS.',
      },

      controls: {
        accept: 'Aceitar', //  eg. accept terms of use
        add: 'Adicionar', //  eg. add a delegate
        allFiles: 'Seus documentos', // shown as tab label on the dashboard
        cancel: 'Cancelar', // cancel button
        confirm: 'Confirmar',
        confirmDelete: 'Sim, excluir',
        declineAndLogOut: 'Recusar e sair', // decline TOS button
        delete: 'Excluir', // delete document kebab item
        done: 'Feito',
        download: 'Fazer download', // edit document kebab item and button text
        editDetails: 'Editar detalhes', // edit document kebab item
        edit: 'Editar', // edit account details
        continue: 'Continuar',
        share: 'Compartilhar', // share button
        shared: 'Documentos compartilhados', // label of shared tab on dashboard
        upload: 'Fazer upload',
        uploadDocument: 'Fazer upload de documento',
        uploadFile: 'Fazer upload de arquivo',
        uploadFiles: 'Fazer upload de arquivos',
        view: 'Exibir',
        save: 'Salvar',
        shareWithDHS: 'Compartilhar com o DHS', // label
      },

      // account settings page
      account: {
        language: 'Idioma', // not found open language selector
        firstName: 'Nome',
        whatIsYourFirstName: 'Qual é o seu nome?',
        lastName: 'Sobrenome',
        whatIsYourLastName: 'Qual é o seu sobrenome?',
        dob: 'Data de nascimento',
        whatIsYourDob: 'Quando você nasceu?',
        caseNumber: 'Número do processo',
        whatIsYourDshCaseNumber: 'Qual o seu Número de processo do DHS?',
        dhsShow:
          'Adicione o seu número de processo do DHS se você for uma família que retorna. Se você é novo(a) no PATH, adicione o número do tíquete que você recebeu quando chegou ao PATH (exemplo: CL ####).',
        locale: 'Selecione o idioma',
        month: 'Mês',
        day: 'Dia',
        year: 'Ano',
        preferredLanguage: 'Qual é o seu idioma preferido?',
      },

      // All copy related to the create shared folder flow
      sharing: {
        defaultName: 'Documentos que você compartilhou com o DHS em {date}',
        confirmSharedFiles: 'Documentos a serem compartilhados com o DHS',
        plusNMore: '+ {count} mais',
        recipients: 'Destinatários',

        // placeholder text for the add recipient email field
        addRecipientPlaceholder: '輸入電子郵件地址',

        // step titles in the share flow
        confirmTitle: '確定要分享這些文件嗎？',
        addRecipientsTitle: '您要與誰分享這些文件？',
        selectFilesTitle: 'Selecionar documentos',

        disclaimerTitle: 'Lembrete',
        shareDocumentDisclaimer: [
          'My File NYC facilitates document sharing with {emails} email accounts',
          'Lembrete: Assim que os documentos forem compartilhados, os funcionários do DHS poderão fazer download e salvar seus documentos para enviá-los como prova de sua inscrição. O DHS ainda poderá ter cópias para apoiar o seu caso, mesmo se você cancelar o compartilhamento ou excluí-las do Meu arquivo.', // not found
        ],

        // on the confirmation step, could be "recipient" or "recipients" depending on number of items
        confirmRecipientsLabel: 'Você está compartilhando documentos com',
        tooManyRecipients: 'You can share with up to {count} people', // (not found) error text when trying to add more than 10 recipients
      },

      tabTitles: {
        about: 'Sobre',
        authorizing: 'Authorizing', // not found not important - used while logging in
        dashboard: 'Painel',
        document: 'Documento', // used for document preview while page is loading, then changes to document title
        faq: 'Perguntas frequentes',
        shared: 'Compartilhado', // used in share flow
        sharedBy: 'Compartilhado por', //  used in share flow
        termsOfUse: 'Termos de uso', // not found used while viewing TOU
        welcome: 'Boas vindas', // displayed on the initial landing page
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
        accessed: 'acessado',
        added: 'adicionado',
        delegateInvitedClient: 'to manage and share documents on your behalf', // not found
        delegateInvitedCbo: 'to manage and share documents on their behalf', // not found
        delegateAcceptedClient:
          'can now manage and share documents on your behalf', // not found
        delegateAcceptedCbo:
          'can now manage and share documents on this account', // not found
        delegateDeletedClient: 'has been removed from your account', // not found
        delegateDeletedCbo: 'has been removed from this account ', // not found
        deleted: 'excluído',
        edited: 'editados os detalhes de',
        file: 'arquivo',
        files: 'documentos',
        invited: 'convidado',
        pageTitle: 'Atividade da conta',
        shared: 'compartilhado',
        today: 'HOJE',
        you: 'Você',
      },

      // Copy where you are viewing shared folders
      sharedFolder: {
        // empty state for list of shared folders
        noCollections: `Você ainda não compartilhou documentos.`, // message
        shareFirstDocument: 'Compartilhe seu primeiro documento', // call to action

        // empty state for an individual shared folder
        emptyCollection: 'Todos os documentos foram removidos desta pasta.', // message
        returnDashboard: 'Retornar ao painel', // call to action

        // empty state for list of clients who have shared collections with user
        noSharedDocuments:
          'Você ainda não recebeu nenhum documento compartilhado.',
        // title for collection table name column
        collectionTableTitle:
          'Documentos que você compartilhou, organizados por data', // not found
        folderName: '{num} documentos compartilhados em {date} às {time}',
        folderNameWithOneDocument:
          '1 documento compartilhado em {date} às {time}',
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
        oneFileTitle: 'Documento de uma página',
        oneFileDescription:
          'Faça upload de uma página ou foto a partir de seu dispositivo.',
        multipleFilesTitle: 'Documentos de várias páginas',
        multipleFilesDescription:
          'Faça upload de várias páginas ou fotos a partir de seu dispositivo.',
        multipageCaution:
          'Faça upload de um documento de cada vez. Não combine documentos ao fazer upload.',
        titleInfoButton:
          'Você pode inserir um cartão de identificação, ou comprovante de residência, ou um extrato, etc.',
        descriptionInfoButton:
          'Para explicar, forneça uma breve descrição dos arquivos baixados.',
        yourFileTitle: 'Seu arquivo',
        yourDocumentTitle: 'Seus arquivos',
        uploadNewFile: 'Fazer upload de novo arquivo',
        dragAndDropDescription: 'Arraste para reorganizar as páginas.',
        removeFile: 'Remover',
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
