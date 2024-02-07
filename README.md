react-icons

const contactsRef = collection(db, "contacts");
//to grab collection made on firebase
//db is reference to firestore, and contacts is name of collection

const contactsSnapshot = await getDocs(contactsRef);
//this stores the data coming from tge firestore database

const contactLists = contactsSnapshot.docs.map((doc) => {return { id: doc.id, ...doc.data() };});
// used to extracts meaningful i.e the array of contacts saved on firebase, maps over every doc to resultant doc.data()

// Rendering a modal dialog with a portal
https://react.dev/reference/react-dom/createPortal

// the following code has to be reused using custom hooks

  <!-- const [isOpen, setOpen] = useState(false);

  function onOpen() {
    setOpen(true);
  }
  function onClose() {
    setOpen(false);
  } -->
