
  window.watsonAssistantChatOptions = {
    integrationID: "3f5d7446-04cb-4796-8496-1351f8d8acfd", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "58af1a9a-a26e-4a48-ae6f-0881b0be4c0d", // The ID of your service instance.
    onLoad: function(instance) { instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
