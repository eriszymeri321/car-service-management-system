const menuToggle=document.getElementById('menuToggle');
const sidebar=document.getElementById('sidebar');
if(menuToggle&&sidebar){menuToggle.addEventListener('click',()=>sidebar.classList.toggle('open'));document.addEventListener('click',e=>{if(window.innerWidth<=800&&!sidebar.contains(e.target)&&!menuToggle.contains(e.target))sidebar.classList.remove('open')})}
const chatInput=document.getElementById('chatInput');
if(chatInput){document.querySelectorAll('[data-suggestion]').forEach(button=>button.addEventListener('click',()=>{chatInput.value=button.dataset.suggestion;chatInput.focus()}));const chatMessages=document.getElementById('chatMessages');if(chatMessages)chatMessages.scrollTop=chatMessages.scrollHeight}
const serviceCode=document.getElementById('serviceCode');
const serviceQuote=document.getElementById('serviceQuote');
if(serviceCode&&serviceQuote){const updateQuote=()=>{const price=Number(serviceCode.selectedOptions[0]?.dataset.price||0);serviceQuote.textContent=`€${price.toFixed(2)}`};serviceCode.addEventListener('change',updateQuote);updateQuote()}
const serviceVehicle=document.getElementById('serviceVehicle');
const newVehicleFields=document.getElementById('newVehicleFields');
const serviceOwner=document.getElementById('serviceOwner');
const newCustomerFields=document.getElementById('newCustomerFields');
if(serviceVehicle&&newVehicleFields){const syncNewVehicle=()=>{const show=serviceVehicle.value==='new';newVehicleFields.hidden=!show;newVehicleFields.querySelectorAll('[data-required]').forEach(field=>field.required=show&&field!==serviceOwner);if(serviceOwner)serviceOwner.required=show;syncNewCustomer()};const syncNewCustomer=()=>{if(!serviceOwner||!newCustomerFields)return;const show=serviceVehicle.value==='new'&&serviceOwner.value==='new';newCustomerFields.hidden=!show;newCustomerFields.querySelectorAll('[data-required]').forEach(field=>field.required=show)};serviceVehicle.addEventListener('change',syncNewVehicle);if(serviceOwner)serviceOwner.addEventListener('change',syncNewCustomer);syncNewVehicle()}
const vehicleOwner=document.getElementById('vehicleOwner');
const vehicleNewCustomerFields=document.getElementById('vehicleNewCustomerFields');
if(vehicleOwner&&vehicleNewCustomerFields){const syncVehicleCustomer=()=>{const show=vehicleOwner.value==='new';vehicleNewCustomerFields.hidden=!show;vehicleNewCustomerFields.querySelectorAll('[data-required]').forEach(field=>field.required=show)};vehicleOwner.addEventListener('change',syncVehicleCustomer);syncVehicleCustomer()}
const clientVehicleChoice=document.getElementById('clientVehicleChoice');
const clientNewVehicleFields=document.getElementById('clientNewVehicleFields');
if(clientVehicleChoice&&clientNewVehicleFields){const bookingMileage=document.getElementById('bookingMileage');const syncClientVehicle=()=>{const show=clientVehicleChoice.value==='new';clientNewVehicleFields.hidden=!show;clientNewVehicleFields.querySelectorAll('[data-required]').forEach(field=>field.required=show);if(bookingMileage)bookingMileage.value=show?'0':(clientVehicleChoice.selectedOptions[0]?.dataset.mileage||'0')};clientVehicleChoice.addEventListener('change',syncClientVehicle);syncClientVehicle()}
document.querySelectorAll('a[href="#portal-ai"]').forEach(link=>link.addEventListener('click',()=>{const panel=document.getElementById('portal-ai');if(panel instanceof HTMLDetailsElement)panel.open=true}));

