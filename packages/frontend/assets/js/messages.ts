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
        settingsFirstRun: 'Please answer a few questions about yourself to get started.',
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
        nycId: 'What is NYC.ID?',
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
        fileName: "Document Name",
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
        edit: 'Edit', //edit account details
        continue: 'Continue',
        share: 'Share Now', // share button
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
        dhsShow: 'This number is given to you by DHS after you begin intake. If you don’t have one yet you can leave this blank.',
      },

      // All copy related to the create shared folder flow
      sharing: {
        defaultName: 'Documents you shared with DHS on {date}',
        confirmSharedFiles: 'Documents to be shared DHS | Documents to be shared DHS',
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
        addConfirmationTitle: 'Let this person manage documents on your account?',
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
        delegateAcceptedClient: 'can now manage and share documents on your behalf',
        delegateAcceptedCbo: 'can now manage and share documents on this account',
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
  },
  overrides,
)
