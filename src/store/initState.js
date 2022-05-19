export default {
    main: { isLoading: true, error: null },
    auth: {
      client: null,
      token: null,
      tokenExpiry: null,
      isSignedIn: false,
      onHandleAuth: { appState: {} },
      isAuthenticated: false,
    },
    modals: {
      addModal: false,
      editModal: false,
      deleteModal: false
    },
    sf: null,
  };