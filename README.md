# memory-cards

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth.uid != null;
    }
  }
}


<div v-if="getCurrentDeck">
      <cardGrid :deck="getCurrentDeck"></cardGrid>
      <hr />
      <addCardFormComponent  :deck="getCurrentDeck" />
      xx{{ currentUser }}xx
    </div>