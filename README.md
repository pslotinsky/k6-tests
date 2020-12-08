Тесты:
===


####Запустить все
* `yarn start-group ehr,entry,user,entryType,dictionary,service,service-catalog,schedule,price,organization`

* `yarn start-group billing,ehr,entry,entryType,dictionary,organization`

####Ehr
* `yarn start-group ehr`
#####Создание/редактирование
* `yarn start ehr/loader/createEhr`
#####Получение
* `yarn start ehr/loader/getEhrById`
* `yarn start ehr/loader/searchEhr`  
* `yarn start ehr/loader/getEhrFields`   
* `yarn start ehr/loader/getEhrFieldHistory`  
* `yarn start ehr/loader/getEhrPlan`  
* `yarn start ehr/loader/getReferralList`  
* `yarn start ehr/loader/getEhrBankCards`  
* `yarn start ehr/loader/findEhrSponsor`  
* `yarn start ehr/loader/getEhrSubscriptions`  
#
####Entry
* `yarn start-group entry`
#####Создание/редактирование
* `yarn start entry/loader/createEntry`
#####Получение  
* `yarn start entry/loader/getEntryById`  
* `yarn start entry/loader/getEntryVersion`
* `yarn start entry/loader/getEntryList`  
* `yarn start entry/loader/getRenderedServiceList`  
#
####EntryType
* `yarn start-group entryType`
#####Получение
* `yarn start entryType/loader/getEntryType`
* `yarn start entryType/loader/getEntryTypeList`
* `yarn start entryType/loader/getEntryTypeVersion`
* `yarn start entryType/loader/getEntryTypeBlockList`

####User
* `yarn start-group user`
#####Получение
* `yarn start user/loader/getUsers`
#
####Dictionary
* `yarn start-group dictionary`
#####Получение
* `yarn start dictionary/loader/getDictionaryItemById`
* `yarn start dictionary/loader/getDictionaryItemList`
#
####Service
* `yarn start-group service`
#####Получение
* `yarn start service/loader/getServiceList`
* `yarn start service/loader/findServiceByName`
* `yarn start service/loader/findServiceByIds`
#
####Service Catalog
* `yarn start-group service-catalog`
#####Получение
* `yarn start service-catalog/loader/getTagList`
* `yarn start service-catalog/loader/getSpecialityList`
#
####Schedule
* `yarn start-group schedule`
#####Получение
* `yarn start schedule/loader/findCustomizedServices`
* `yarn start schedule/loader/getEntryReservation`
* `yarn start schedule/loader/getSchedule`
* `yarn start schedule/loader/getScheduleOnDate`
* `yarn start schedule/loader/getScheduleSlots`
* `yarn start schedule/loader/getScheduleScheduleModelOnDate`
* `yarn start schedule/loader/getScheduleModelList`
* `yarn start schedule/loader/getScheduleModel`
* `yarn start schedule/loader/getScheduleModelWithRelation`
* `yarn start schedule/loader/getWorkTimeList`
#
####Price
* `yarn start-group price`
#####Получение
* `yarn start price/loader/findPrices`
* `yarn start price/loader/getCalculatedPrice`
* `yarn start price/loader/getCompositeServiceList`
* `yarn start price/loader/getListOfPriceList`
* `yarn start price/loader/getPriceList`
* `yarn start price/loader/getPrices`
* `yarn start price/loader/getActualOnPrice`
#
####Organization
* `yarn start-group organization`
#####Получение
* `yarn start organization/loader/getDeviceList`
* `yarn start organization/loader/getDeviceTypeList`
* `yarn start organization/loader/getNetworkList`
* `yarn start organization/loader/getOfficeList`
* `yarn start organization/loader/getOfficeTypeList`
* `yarn start organization/loader/getOrganizationList`
#
####Plan
* `yarn start-group plan`
#####Получение
* `yarn start plan/loader/getList`
* `yarn start plan/loader/getById`
* `yarn start plan/loader/getPlanVersions`
* `yarn start plan/loader/getPlanVersionByIds`
#
####Billing
* `yarn start-group billing`
#####Получение
* `yarn start billing/loader/getAllRenderedServiceList`
* `yarn start billing/loader/getBalance`
* `yarn start billing/loader/getCost`
#
####Service-group
* `yarn start-group service-group`
#####Получение
* `yarn start service-group/loader/getList`
#
