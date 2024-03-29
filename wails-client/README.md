# Version History

## 0.0.47

- App Window change (removed Native app border, added go's built in functions to handle window)
- Stable app version
- Moved --wails-draggable to Header
- Disabled selectable to prevent highlighting/selecting text on app
- Working on RefreshFiles.jsx
  - Changing room in Header changes GUI correctly.
  - Changing layout to be more CSS grid friendly
  - Changed FooterRight to hide nav option to here when already on this page
  - Need to fetch presentation data and display it here ✅
- Refresh Files fetching/displaying Sessions/Presentations
  - Need to adjust Filelist API for app ✅
- Passing filelist data to RefreshFiles
  - Need to fix CSS grid ✅
- Refresh Files now correctly displaying. File Sync algorithm not implemented yet.
  - Added custom scroll bar to Refresh Files
- Added chat box to HelpUser GUI. Functionality not implemented yet.
- Session CSS hotfix
- UI updates + hotfixes

## 0.0.46

- Deleted old mac app (./client)
- Stable version
- Added some comments to app.go for the next two functions. SyncFiles() & FileSyncStatus().
- GUI changes
- Added a new function 'SetRoom()' to properly change Session GUI when room is changed
- Identified a new bug after changing rooms
  - Session isn't passing data correctly down to Presentation
  - Session back/next bugs out sometimes.
    - In some cases (i think it's where sessionList.length < 2), sessionList isn't properly emptied/refresh ✅
    - shows session from incorrect room T.T ✅
- Added filter to footer navigation to show previous/back buttons correctly.
  - Need to pass this index up to session to change sessions correctly ✅
- Footer Navigation is passing index up to Session component
  - Need to add an event listener in Session component to display the right presentation based off index. ✅
  - Need to adjust for undefined (set to 0) ✅
- Footer navigation is Presentation GUI, but
  - Session GUI not changing ✅
  - has a undefined value bug when initially loading.
- Footer navigation is changing sessions correctly.
  - causes a bug if you change rooms and index > SessionList.length, for the room you're changing to
  - Need to add/adjust indexHandler ✅
- roomChange() is setting presentation to a n-1 state
- Temporarily lowered transparency to watch Baldur's Gate stream on Discord 😂 (re-enabled opacity)
- Changing how Footer interacts with Session/Presentation to decrease prop drilling/state issues.
- Footer navigation now correctly changes Presentation/Session
- Added the WindowReload() built in function to clear a potential memory leak when switching sessions.
- Temporarily bypassing handleSessionChange() and getPresentations() in Session component to avoid a init state set bug
- Built basic styling for RefreshFiles page, and added data on DB to fetch useful info.
  - May need to adjust DB structure later
- Added RefreshFileList() to fetch data to the RefreshList Component
- RefreshList Component is displaying file data for static linked room
  - Need to handle for correct room ✅
  - Need to add lazy load ✅
- RefreshFiles displaying file list on GUI for room.
  - Changing room works from home page, but not in RefreshFilesComponent
- Need to handle state management better.
  - Fixed initial Session render bug, but now Presentation isn't getting data correctly. ✅
- Fixed a series of state bugs within the Session component
- Code cleanup.

## 0.0.45

- Built GUI scaffolding using wails
- Added button function to open file
- Linked presentation data from SQL DB to client app
- Linked session data, displaying on GUI
- Formatted times on GUI
- Added day selector to GUI. Not connected to back end yet.
- AppleScript hotfixes to assign right folder/slide on presentation
- Added room selector GUI, room selector fetching correct data from DB.
- Added translucent background, added CSS grid template
- Room selection passes data up to App
- App uses a context provider to pass the room down to the rest of the app 😎
- Beginning to add session selection
- Footer Nav is receiving correct session data when room is changed.
- Beginning to add day selection functionality
- Added sorting so Sessions are returned in order by time. 👌🏼
- Session selector changes dates on GUI, passing to presentation is next
- Working on Context Provider to get data to Session/Presentation.
- Selector showing on Session page while WIP
- GUI WIP selector navigates through the sessions. Although kinda glitchy.
- May need to add more data to the database to clear some more edge cases.
- Hotfixed deleted a couple of redundant/unused columns on DB to better show data between sessions
- Added a filter to chek when sessions don't have any presentations added to the database.
- Identified a series of bugs in Presentations.
  - Need to handle the session data change when the room is changed ✅
  - Need to add unit test to Session.jsx (data integrity)
  - Need to add unit test Presentation.jsx (data integrity)
