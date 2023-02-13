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
    ru: {
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
        loginButton: 'Авторизоваться',
        getStarted: {
          client: 'Get Started',
          cityEmployee: 'City Employee Login',
          cboWorker: 'CBO Worker Login',
        },
        welcomeTitle: 'Welcome',
        footerLogoAlt: 'Footer logo',
      },

      navigation: {
        about: 'Узнать больше',
        account: 'My Account Managers',
        settings: 'Моя учетная запись',
        settingsFirstRun:
          'Welcome to #My File NYC&! Please answer a few questions about yourself to get started.',
        welcomeFirstRun: 'Welcome to My File NYC!',
        activity: 'Активность',
        back: 'Back',
        clients: 'Clients', // navigate back to agent view desktop
        close: 'Close',
        dashboard: 'Dashboard',
        faq: 'Часто Задаваемые Вопросы',
        loading: 'Loading',
        loggingIn: 'Logging in...',
        manageAccounts: 'Manage Accounts',
        signIn: 'Sign in',
        signOut: 'Выйти',
        switchAccount: 'Switch Clients',
        termsOfUse: 'Условия использования',
        nycId: 'Проблемы?',
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
      },

      controls: {
        accept: 'Accept', // eg. accept terms of use
        add: 'Add', // eg. add a delegate
        allFiles: 'Ваши Документы', // shown as tab label on the dashboard
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
        shared: 'Документы которыми вы поделились', // label of shared tab on dashboard
        upload: 'Upload a Document',
        uploadDocument: 'Upload Document',
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
        confirmRecipientsLabel: 'Вы поделились документами с | Recipients',
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
        accessed: 'получили доступ',
        added: 'добавили',
        delegateInvitedClient: 'to manage and share documents on your behalf',
        delegateInvitedCbo: 'to manage and share documents on their behalf',
        delegateAcceptedClient:
          'can now manage and share documents on your behalf',
        delegateAcceptedCbo:
          'can now manage and share documents on this account',
        delegateDeletedClient: 'has been removed from your account',
        delegateDeletedCbo: 'has been removed from this account ',
        deleted: 'удалили',
        edited: 'edited details of',
        file: 'файл',
        files: 'документы',
        invited: 'invited',
        pageTitle: 'Account Activity',
        shared: 'поделились',
        today: 'TODAY',
        you: 'Вы',
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
    ch: {
      // label appearing in tabular content (list of users, list of shared collections etc)
      // as well as side bar on document view
      dateAdded: 'Date Added',

      application: {
        title: '我的文件紐約',
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
        about: '關於',
        account: 'My Account Managers',
        settings: '我的簡歷',
        settingsFirstRun:
          'Welcome to #My File NYC&! Please answer a few questions about yourself to get started.',
        welcomeFirstRun: '歡迎來到 My File NYC!',
        activity: '活動日誌',
        back: 'Back',
        clients: 'Clients', // navigate back to agent view desktop
        close: 'Close',
        dashboard: 'Dashboard',
        faq: '常問問題',
        loading: 'Loading',
        loggingIn: 'Logging in...',
        manageAccounts: 'Manage Accounts',
        signIn: '登入',
        signOut: '登出',
        switchAccount: 'Switch Clients',
        termsOfUse: '使用條款',
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
        welcome: '歡迎', // displayed on the initial landing page
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
        accessed: '訪問過',
        added: '添加',
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
        file: '文件',
        files: '文件',
        invited: 'invited',
        pageTitle: '帳戶活動',
        shared: 'shared',
        today: 'TODAY',
        you: '你',
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
        sharedWith: 'اس کے ساتھ اشتراک کردہ:', // promt for agency email
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
      dateAdded: 'Date Added',

      application: {
        title: '내 파일 뉴욕',
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
        welcomeTitle: '어서 오십시오',
        footerLogoAlt: 'Footer logo',
      },

      navigation: {
        about: '에 대한',
        account: 'My Account Managers',
        settings: '내 프로필',
        settingsFirstRun:
          'Welcome to #My File NYC&! Please answer a few questions about yourself to get started.',
        welcomeFirstRun: 'Welcome to My File NYC!',
        activity: '활동 로그',
        back: 'Back',
        clients: 'Clients', // navigate back to agent view desktop
        close: 'Close',
        dashboard: 'Dashboard',
        faq: '자주하는 질문',
        loading: 'Loading',
        loggingIn: 'Logging in...',
        manageAccounts: 'Manage Accounts',
        signIn: '로그인',
        signOut: '로그아웃',
        switchAccount: 'Switch Clients',
        termsOfUse: '이용약관',
        nycId: '로그인에 문제가 있습니까?',
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
      },

      controls: {
        accept: 'Accept', // eg. accept terms of use
        add: '추가하다', // eg. add a delegate
        allFiles: '귀하의 문서', // shown as tab label on the dashboard
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
        shared: '공유 문서', // label of shared tab on dashboard
        upload: 'Upload a Document',
        uploadDocument: 'Upload Document',
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
        accessed: '액세스',
        added: '추가',
        delegateInvitedClient: 'to manage and share documents on your behalf',
        delegateInvitedCbo: 'to manage and share documents on their behalf',
        delegateAcceptedClient:
          'can now manage and share documents on your behalf',
        delegateAcceptedCbo:
          'can now manage and share documents on this account',
        delegateDeletedClient: 'has been removed from your account',
        delegateDeletedCbo: 'has been removed from this account ',
        deleted: '삭제',
        edited: 'edited details of',
        file: '파일',
        files: '서류',
        invited: 'invited',
        pageTitle: '계정 활동',
        shared: '공유',
        today: 'TODAY',
        you: '너',
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
    pl: {
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
