// Plugin for managing videos.

FCKCommands.RegisterCommand(
    'Zeit_Add_Video' ,
    new FCKDialogCommand(
        'Video', 'ZEIT: Video',
        FCKConfig.PageConfig.ZeitResources + '/video/dialog.pt?kind=video',
        380, 250));

FCKCommands.RegisterCommand(
    'Zeit_Add_Audio' ,
    new FCKDialogCommand(
        'Audio', 'ZEIT: Audio',
        FCKConfig.PageConfig.ZeitResources + '/video/dialog.pt?kind=audio',
        380, 250));


// Create the toolbar button.
var oVideoItem = new FCKToolbarButton(
    'Zeit_Add_Video', 'Video');
oVideoItem.IconPath = FCKConfig.PageConfig.ZeitResources+'/video/icon.jpg';
FCKToolbarItems.RegisterItem( 'Zeit_Add_Video', oVideoItem);

var oAudioItem = new FCKToolbarButton(
    'Zeit_Add_Audio', 'Audio');
oAudioItem.IconPath = FCKConfig.PageConfig.ZeitResources+'/video/audio_icon.gif';
FCKToolbarItems.RegisterItem( 'Zeit_Add_Audio', oAudioItem);
        
    
// Register context menu item
FCK.ContextMenu.RegisterListener({
    AddItems : function(menu, element, tagName) {
        if (tagName != 'INPUT')
            return;
        if (element.value.indexOf('video_article') == -1)
            return

        // when the option is displayed, show a separator  the command
        menu.AddSeparator() ;
        // the command needs the registered command name, the title for the
        // context menu, and the icon path
        menu.AddItem(
            'Zeit_Add_Video',
            'Video bearbeiten',
            oVideoItem.IconPath);
    }
});
