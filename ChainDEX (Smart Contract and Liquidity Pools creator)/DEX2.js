
const {createNode: __createNode__, connectPorts: __connectPorts__, createTracers: __createTracers__} = require("@cranq/runtime");

const __tracer_project_metadata__ = {"portIdNameMapping":{"fb159194-7413-4b61-9b9a-f6bbfd3d7977":"start","543f8ad2-7755-44f6-bc9b-e6208c87b15a":"data","0b28df10-b056-4666-ae14-2357d747f7b9":"read","e7a0df14-dc8c-41bd-8aba-367fdb468ce3":"data","92b91df5-41d7-4e23-aeec-3f459099e659":"written","e3876be5-e8c8-4983-b770-81fc8cdf5ff5":"not found","36268fed-37a0-40c5-bd24-79fab399251e":"multiplexed event","7b39d568-3d5a-46fe-8670-3355f60c2746":"fields","6ad86184-6890-4323-8021-3496a682c98e":"unsplit","12be78f3-a82c-4a9e-bb4e-46d61ee64ca3":"split","b937ea64-339e-46d3-9eff-16cdcaaf7ec4":"data","5773699e-0819-4c74-8282-fb2a9a77b0cf":"message","f6458629-a8b7-4338-b8c1-94eee78f7af5":"data","212ca288-0b71-4a49-bc23-cfe9caf267b9":"data","ad22d739-2b4a-481e-8d8c-4fd38873dec3":"message","cf8c6e28-3f51-4550-8ab4-a52f61b30f19":"prepare output-filled","e76062c0-e298-4443-a187-94cbd4b3bc74":"1","7af76a3e-ed65-41b9-9f9d-1a4593c5bf69":"2","069a212d-9cea-4987-be45-e0079a13d96f":"1","d1295197-1962-4680-a037-5890f2175bb9":"2","ef31c1e9-cfd5-458b-8d3a-951e3db9c232":"fields","eaadc9a9-28f4-48f0-b7d3-0c811b515f4a":"unsynced","75cde7e3-b158-4836-8bcd-a89e72314ee8":"synced","cc00cc18-d6ce-4661-8dd5-eb3140a3acae":"data","deb0a917-b393-4326-b573-ec6a6f82ffec":"pretty","25650a4f-7e35-4754-bc8f-1a57f538166f":"json","96bf3401-ac68-46e7-b86b-371758d5543a":"error","03b51ad2-3cd3-4a9a-bd5a-5fdee3a1b4d7":"data & pretty","1c2473e9-843e-43f8-bcf4-53c157aa7b80":"json","c5932291-88af-4e61-b46a-6eebe806ab06":"error","25aa567c-3316-4206-b42e-4cfe6a67b0c7":"template","d0eb3b1c-04b8-4b95-96ee-76b37fc067c6":"params","d6272c3f-069b-4af8-8d4c-fe762a581c40":"filled","df7b6135-bb57-4e2e-b1ad-3867c3d7a354":"template & params","81d00a83-cfd8-4e85-a63f-dd177a8b4706":"filled","f957fe01-72ca-4235-9ced-fc28f3c952f9":"factory address","f1e4cad6-05bf-4573-8927-f538e984cac4":"factory ABI","0c2e1194-9ff2-44aa-bffb-d14986a4d00c":"config","a9cf45e0-37b9-4439-8e04-9e86b2f7b285":"router address","80dee00a-4159-4d37-8f3b-45f552035cfe":"router ABI","b7167fe7-44be-41b8-a74d-cddd0bc8e01a":"events","e4958385-c9cb-415c-9cf3-498fe5938c77":"error","5199b9b1-7f03-4665-862a-613a23a8691a":"factory init hash","f6250a09-cd0c-49c2-af3c-aab4032750b4":"compiled Router contract","aa4575fc-d7b8-4205-944b-b87227acc8ea":"error","eaa9ae98-4f1e-4cd7-a7ac-6168540dbd12":"factory init hash","d52dc2ed-e787-456a-aa02-c9aec0cc1858":"compiled contracts","de6d47c9-a9f9-46fb-875d-7b16dd5cf777":"error","b0fb4a37-09d5-462e-952a-c3ab29a47e82":"data","0a9cd5b0-6de6-4c69-aa04-2816de994173":"data","2a182932-ca45-4c09-8753-a9a4f355c219":"read","0cf791d5-e2f9-456e-b8df-40c776f03f0f":"v2-periphery source","83b88c0c-d67b-42b4-982a-acd8c0779455":"factory init hash","c417cbe1-6e5c-4f6a-9bd9-e9329f6bae7f":"v2-periphery source","3d2487c4-3842-460a-aa49-c5afb7502621":"set instrumented contract-tree","07538bcd-7376-4aec-ad93-b4b368ae919c":"template","06531082-3e2d-45ab-ba18-527917d0ef5e":"params","20fa9606-aa5f-48b5-af3c-3aaa9e38ebf4":"token start","6ee3d9cc-c99d-41d8-a6cf-d1b100b64aa2":"token end","949d328e-fa91-41e4-8929-d3cd7a8d4cfc":"filled","b517f1ce-8441-406b-a71b-5741bd38d41f":"error","e327497c-6228-471d-ba94-955c145ccfdc":"params","ae4b344c-7e24-434a-a9ad-d7f5cc260d09":"filled","45c8e624-b725-40b6-8155-2ed9d980f540":"error","b9f6ade5-9bdd-46ef-99d2-616f1cb608c4":"1","f1aff635-6110-419c-81b3-ea2bd8b5f791":"2","cbfbd020-ce7f-4fb5-aa15-d63e33d10941":"3","4fcb135a-9c6c-497b-a96e-526c4727a64a":"4","8ee51005-e876-4db5-88b5-c9e148feba3f":"1","34f942cc-96a7-4278-a931-d9194e89dfe1":"2","da773107-7a7f-4fc2-b67d-bb9b76e361eb":"3","a5a46e47-dacb-477b-b823-398e570fe259":"4","cf2ad35e-cfac-4c59-ab25-30a4dd08111f":"tree","927e6b17-97e0-44de-887f-57204b7a1f9b":"path","b6722d08-460c-465b-a9f1-d1f843500424":"node","e97caed4-5898-4f86-911d-8e31acb2617b":"not found","acf1b446-a89f-4af0-8865-174b1dcbb51f":"tree & path","55eb513c-0913-498a-b11c-db8d9d0d41bf":"node","0b5f38f9-0f97-4d38-8cfa-92d2b444a159":"not found","2041b83b-940c-4ef5-89e6-07eb74a42daf":"tree","bae8488b-e628-456c-8ba4-df9b28a52d3e":"path","5dca309f-984d-4c27-8402-d2eedf77f5aa":"node","b73a3075-cfcf-4981-b23f-95d3b18de8a6":"tree","a3746e5d-5a79-4943-8318-db69cd8f92fa":"tree & path & node","77ffd279-c6a6-4084-8d00-158ce6d72fb4":"tree","7654e398-a401-4115-98b8-c2b8eba66ed4":"contracts","60fd9fa4-1462-4c91-915b-11b325c0d479":"output list","eb554de7-b398-413f-8ff0-99dd34a7580a":"compile settings","58f95201-dc73-469a-8503-ce955c514032":"compiled contracts","d00232d5-3801-4820-92ed-43ae75ccb626":"error","3a55b8dd-6eec-44c8-acae-4b1e60f90d7a":"data","6e0ac013-ee3c-4e0e-8b72-8eeb2419795c":"compiled contracts","b73438f2-808b-4980-9902-c63866012a5d":"error","47c56035-5bed-4f91-b7a9-606dedd7a13c":"dict","23142cc5-6b71-4d69-8c46-cc1cd58793d1":"key","ebb678af-2bc0-4d06-99dd-6dbb5647ad6a":"value","3e1b4eaf-6e2c-44f4-80bc-d685af75dbb7":"not found","50395fef-5d23-4f22-ad85-ac41ce728ca8":"dict & key","773e3764-85ca-4882-ad5a-4a8fcfdcbe9d":"value","c1a88321-b05f-4ef4-8ae1-a3527b419c92":"not found","ae906061-5695-4e79-aa79-a30b6ab50ca3":"fee setter address","1be1c7f6-ec26-496e-98a6-10b5a8b9b3f9":"factory contract","c6f7b167-e6a9-490e-95a5-509caa485269":"config","a6645263-ae6f-4a41-825f-cf10bad0e98c":"router contract","ff61a589-bab9-48de-997f-300f29073deb":"events","43026ea7-55a5-4af6-a937-272c8bfaba2a":"error","7863188d-de92-41cc-b5c3-f5326b24ec02":"confirmation","ca45ccd6-b1fb-4bb7-86ca-b9e774f899bb":"contract","21dc533c-92b5-4354-9d81-1cfd46f095c8":"connect credentials","0618062e-aa1f-4a81-9727-fa078f93332f":"contract params","6a44b0aa-dd80-42a5-ba19-15a130f0206a":"only estimate gas","9c78c7d9-7aee-4e04-92d6-5342e133d6b5":"settings","3483ab3b-5295-4761-8832-ec968f7399d9":"events","a6fdcbf5-7937-47f1-89db-2807b758842f":"confirmation","b94ccca9-9434-47e1-8382-6b615b5f3f47":"estimated gas","c8505107-dfeb-4ad6-a08c-2543a30b2887":"error","d4d6f2e9-1a7a-4bc8-8d8c-c0c8d0eacc68":"parameters","e7f5a7aa-c9d8-48d5-a248-3b2cac4262f1":"transaction hash","b81cd0dc-f7c4-43c4-8579-7e2c38cff351":"receipt","64e1ca3c-3e06-4ed5-9563-d71098ea99f4":"confirmation","dc68467f-bdb9-4d16-9eb7-0d4d366b95ff":"contract","96043b1f-6b74-408f-a93b-c6b7abc603d5":"estimated gas","0eb501ee-6d8f-4ef6-bdb9-95d3ebdce818":"error","545a5e1a-9807-4456-b557-dfa8aa8ef28a":"a","d694bd76-84f6-465f-9c8e-8b9570cc8e69":"b","8357d165-4753-4d32-8c61-e3baff88d8ba":"merged","ca5090ac-fdf0-4efd-a672-e66c52507873":"a & b","ca5f3c12-33fa-4548-997c-d8e006c5dc0b":"merged","812fd3c6-a75b-486e-9bd1-3f2a1ee28f0c":"fields","7bf13909-e44b-4f6a-9fc5-153cf3c2d286":"demultiplexed","b20b339d-6c7a-4f30-87c4-d600b4452103":"multiplexed","3e97c47b-9e13-48f3-b6a9-95cd8b676a8e":"data","51232407-ba2f-430d-b3fe-883a465cedd0":"array","5cbbb232-d9b4-4d06-9db0-e548e44e43b6":"array","2d02022b-c114-4207-935e-11490a6c2926":"item","092ca265-7614-4182-9d9f-bd325c094abb":"array","313b183a-6816-45e9-abb7-dd5319a48fbd":"array & item","5de10da8-d82e-4757-9e51-fd1815c2e57b":"array","14a6e991-cb90-4f42-b1df-3ea7d58d895b":"factory ABI","202dbb68-350c-4df4-a992-85352f7e692c":"factory address","9cd53ac0-f4b8-4082-9f7e-0d509cf18101":"web3 provider URL","a42c8f8d-11c4-4b8b-96b9-3a801f3e7fb6":"init hash","2513d1ad-d856-4c98-9e44-7ac1aab94fb4":"V2Factory data","420181c4-34a5-4a36-aa50-7de8a799af90":"init hash","b398713c-c8ff-4a98-9d77-5ad8023a43a5":"network","f5711708-f236-47e0-b84a-aa3bc1b88196":"WETH address","67c68864-f37a-4967-9ddd-3a87617ac325":"confirmation","465fe590-d79e-4987-b1c6-a414e01773e2":"number required","eadf732a-e84a-47e0-a825-95574d2f25ee":"contract address","87d3064e-5a44-4029-bea8-ba632449f2f5":"data","0e7419a5-ec56-4a97-8f11-6add5ff3ae1e":"open","7fe23af1-29bf-4cc5-810c-5b91dea1b61a":"data","98485573-47d4-418c-8005-be19cff54d6a":"data & open","ff977c1f-7317-4ae9-b0d5-4c0e308a7f2c":"data","50e32f24-30af-4721-9e0a-89e85a9ee240":"a","2a91d8d8-a748-4135-9f8f-a7f200d97e6d":"b","66ea4495-b5be-4650-9448-c802141b82cd":"equal","229e784b-52e2-4b64-9338-0babdf91b09a":"a & b","5b0ac3ea-ca4b-40c4-a8b7-21add78630d4":"equal","01ef7f62-ecc9-4fd2-8f70-980a2d25795a":"data","5d570fcf-b8db-4a62-8b84-4953a92d517f":"default","dae97765-6472-42e4-b129-749784e976f6":"read","9da98005-545d-4036-a36e-0f354a84cb50":"data","72a73ffe-8319-4427-878e-3e67f2d150ff":"data","f58efe33-f70e-4570-ac54-670aaf844385":"trigger","eb4c2873-890f-4780-a895-53e321f3739e":"data","aa1f8f2f-1676-4be6-a8e1-e74acffbeffd":"a","4f9a7be2-f54a-4447-bc3c-c813adf0051b":"b","0c5489c9-f28d-4ca4-b93f-3c2bb821a2ae":"min","bd6d3a45-6800-4f99-89bf-355e3740c104":"a & b","4328a906-3097-42a8-b056-7e8f951eef65":"min","6ee9ed3a-0d16-4b51-b377-517e9ad882b8":"dict","a22eb79b-2432-4640-8f0c-7de0dcc5778a":"confirmation","9debb883-e28c-42e7-8680-6e479e795d0d":"dict","d1abdb29-7cc9-4d41-8b20-9594e3e9504c":"key","1f6bf4d0-2058-4552-9e89-1a67a502a762":"has","7d8a1e5c-fe55-4483-8604-d8198c09f05e":"to true","71b2d8f8-8c04-4e7d-8f46-049cee8da304":"to false","5d478d32-ae8f-4f2b-8f32-9d3cf14db437":"boolean","bffdd7a0-eeaa-41c5-b272-20aff39ae810":"a","442847b6-23b9-4ad6-a3f5-cce6e5159644":"not","b4a42586-39a2-4221-8fd8-673b6177a389":"start","fc7c8edc-22f7-4f9d-b5ee-72e155409e8d":"config","daa4f3d3-2740-484d-8a07-0f0072306f2c":"error","6b8d3b0d-4d59-4b9d-87b6-5682692cdb0d":"factory address","aa325adc-6920-45e6-9b96-13cd43d6c551":"events","a0a5ca88-b262-4dc6-82e8-5e7bfe825bf4":"factory ABI","3dd8b80c-d01f-4d47-abff-104f98782ec6":"start","2b7af6d6-aa19-4c89-9cba-5c8b4a8f6fb0":"compiled Factory contract","86c83cbf-ac3a-4a4e-bab8-1578bbdcb5ba":"error","6847d4a5-3a0a-429b-bf8f-410f4da7e1ab":"start","2b981481-b683-4dfd-9738-febe673b08fa":"compile core-compiled contracts","c56db654-2db7-4cb2-ac28-2213dae50128":"error","858f2cdf-e216-49be-9910-aa483d782f62":"read","8db497a4-cf26-4b44-bb99-0a6266736222":"v2-core sources","3d76105d-d387-4ebf-8751-5060aadc4c54":"config","73758fba-7b0c-4ea6-8fec-0b56982d5451":"data","6f7ec5a1-7049-45d6-867c-14d8b522ffaf":"pairs","3a8d9830-3642-42ae-af03-055c099aeb0a":"config","cdbbece1-c5db-4481-83c0-b2101e03fe45":"router contract","320e50f1-a96f-4f21-b3d5-6ac93f7b31d7":"result","f49d6af9-9ab4-4546-8faa-c597546de3a7":"error","a710bb66-7d75-4a4b-8a7a-657cb4328897":"pairs","3c09e73b-ae71-4668-95fc-8fb9041ab544":"to address","b8628829-12f1-4e72-8d6f-c49372d6a081":"deadline","1a3a20cd-3619-4f71-80e3-991b67aa633c":"router contract","0cea3ff4-443d-449c-9db2-05fb3815264b":"credentials","b69fb11c-5508-4a80-837d-3976f69f9cd2":"result","0f7509cf-9bf3-4774-b97a-35ad0bc0904d":"error","ca036788-5f7a-4d08-a4cf-f4223b4ce604":"tokenA","78d8f5a9-17e7-45e2-b778-f46cda29a80a":"tokenB or ETH","7de50776-c33c-49fd-ae41-bb85b3da0501":"to addres","76512fec-78df-43fd-a9fd-20e33817bb49":"deadline","a1a9f3b2-f3b9-4917-b77a-bf507b19f47f":"router contract","77827705-1577-47c3-904c-8dff54475e8d":"credentials","ca296aaa-e80e-4141-8a2c-2be8aad5dec2":"result","4fbce32e-7012-4bde-bdc5-052501a3efde":"error","4602e6ff-ae72-46bd-bddb-2065b4f4895a":"tokenA","e971b0f8-3982-4b6e-98d7-22f8409f3817":"ETH","46368936-c937-4d59-9cf5-943b756ace58":"to address","642a80c9-e59e-4e40-98e0-842ce385e544":"deadline","9ab46954-d296-43b4-a18a-377cc168128d":"router contract","8c3157b3-36b1-4b1f-a20d-202a622dc38c":"credentials","60a037e1-67e3-4d3b-9606-3398163f27af":"result","193c7b18-8f27-4b68-878f-2c2d0bc1b8c4":"error","8af36cde-8a26-4e21-938d-066a5e5742bd":"router address","86a67e4f-9f7d-4924-b1b8-9e9b17c5c8cf":"amount","3eb6ccfa-35e8-4704-947b-89c795ea6871":"token address","82b16f00-66eb-49b7-8f6d-afa56a77f4c9":"credentials","74f19ab3-291b-479d-98b0-52ac9cd6affe":"result","91b4a65a-6da8-4469-a63e-bc64c18b0d78":"error","6760b665-131e-4ec5-b2f7-12bbfa1f60d9":"read","a7efbc77-d51f-43df-9c45-273de73aafb7":"abi","e62bb3b3-e749-4e85-b789-51e33a3fbe82":"contract address","39a06197-ca9b-4ada-ab8e-6de9bd241529":"contract abi","1c54037b-03d2-447f-8e10-41c1f3ebfbfe":"method name","9ff09a73-b892-48f2-b976-2cd7de67dcbd":"parameters","a1d2a03b-c119-442d-b464-d3aeeab20f1e":"transaction parameters","5e721c7e-2b06-494f-a65e-6b527531cddc":"credentials","87606a66-0567-440c-9686-f02bf52462e4":"result","21d246f0-67a7-4b2e-984a-94cf1f7d21e8":"error","244fb79b-f74f-4ba9-ad9b-9d4bbfb66d96":"data","a8910f08-11f8-4764-817b-ea55ea851dd5":"result","00cbcc07-f756-4b6f-a21e-4e7ddcaa2b9b":"error","0d455460-c659-44c5-afd7-bdba5211c32d":"units","6ffb69e8-3e06-43ed-b449-83880fdcedcf":"decimals","aaa7049a-c2b9-4257-a583-eaf68de2c346":"result","b3cea331-0e22-4273-be38-3a574b507611":"units & deximals","9efa481d-63ea-4735-b8df-06add0d6d1bc":"result","3988660b-8398-4a78-8889-e5cc8506394e":"tokenA","8d57999d-148b-4eff-9e4d-ca00f36e10ea":"ETH","78fb26c0-e46e-490b-a5d7-ff880ac745da":"liquidity token to","04df0153-0ab3-410d-9054-44b0965cfce2":"deadline","4e3e4f4a-2e69-4af0-9799-b0a12f0a9499":"router contract","48cc93ef-ab76-4081-8f58-3fbcc626599c":"credentials","44d775fe-b109-427a-8d30-2fb70ec3b250":"result","6dacdfe2-fc10-4f08-9919-2f198cda89f4":"error","8dae1988-d752-4c9b-b8c5-f9222e776dec":"data","8e1a5f69-ca43-484d-8099-ef265bedda62":"condition","26b011f0-6b5a-45a3-a4b6-a90d93ce7046":"on true","8c42e25b-e7f1-421a-90f5-cd88a4674cf0":"on false","71d40b23-b956-4355-813d-d2c70c81b7f5":"data & condition","bbe6eb8b-a22e-4b23-9063-3cddbe4aafee":"true","978a565d-6b67-4198-90a7-c3214ab6ae6a":"false","a0934373-43a4-4cd5-83eb-860bc20d790a":"a","3a93b0f5-d7ce-4dfd-bc70-f46c768bf142":"b","61410efe-0096-4bd0-8169-30b254646910":"equal","208799e1-a794-4a47-afc0-7fd53a57de00":"a & b","d4fcc3f9-b12d-4024-8970-2ba54139f651":"equal","eacfcdd3-c907-40b3-86a5-15855a7b4caf":"array","c2471c2d-1ad7-4738-a3d8-87ebc566aa64":"data","987cc1f0-ddda-4f01-8358-d32676a0861e":"data","3796de71-a230-4869-9963-2c1815242213":"array","90dc3844-70bc-4a25-a7f4-3d281c97e5fc":"length","20b11cff-e0f4-415a-9a82-7d5f6d7e4a5f":"data","8e1d3a32-366a-4829-9cad-5559dac5fba1":"count","fda3e580-c396-4439-a59d-f7cf0fac24a8":"data","152c9d12-556b-4bd4-ba17-e39ac5d72490":"data & count","8bf5830c-baef-497f-a1d3-a9acfcf84618":"data","d079a46d-16a1-4019-b037-eb25ff63b344":"array","6724a763-9749-41bb-a3dc-2ec659c8b72b":"next","da78f0ed-be96-41f5-90e5-bf31ef6fd262":"item","0d15a9b9-a708-4b34-b199-51232e59f94b":"index","ed7be79a-f008-4d37-8d43-faf2607e6ef5":"done","5f5589df-af99-4cdf-82f7-2e4d99e6962c":"bounced","f5e0ae76-bfc3-4041-98b7-9fbc6688a148":"data","f61bcb62-2072-41d6-87da-79ccad20f7d2":"data","c1a54d85-36b5-4842-9688-fb2ab8d1cd41":"array","9f2d26e4-7f08-45c0-91bc-b2495b0c4a79":"next","232f9f14-c24e-4f7f-b415-27ccbdfb9dbf":"item","8e36f0c9-932a-4e31-aa7a-e17ff0fee028":"index","e159c36b-a301-46ff-92db-64eaeab74d69":"done","ca54dccf-ed97-4731-8eb0-ef76fe19e844":"data","c1927e5c-f5ca-42e1-aedd-78efd6748dfe":"data","490cac9b-c555-40d9-b5b2-06d7e75e84db":"bounced","4b2b80cb-8d64-40a5-ae06-342257b858cc":"data","b9ad661b-2879-4b8f-9335-c223ba010a4b":"data","a5ea47e0-1e3f-4f32-afc4-3f0ebe9c3030":"bounced","f8db2394-8b73-41b1-8cee-570acf0ca976":"a","824b46d4-6dad-4859-939f-376702e84adb":"b","3157073c-40d2-44fd-a94b-ea3adcce3440":"sum","0ad25c87-04a9-47ce-94c5-4b4af15d7e09":"a & b","f3bdd887-63e3-4db0-8735-38ea85e2a74e":"sum","ab9f3927-d793-46eb-9813-48684812bd65":"start","6b7f4fea-9e9c-4026-9bf9-1405591400ca":"timestamp getter-timestamp","943705ad-e7cc-4633-a8cf-008f165bd16e":"expiration-data","4181cd34-31ac-4d3b-8d19-3661105e6d1e":"get","b57a2f23-7db9-4007-9c94-c66251abede3":"timestamp"},"nodeIdNameMapping":{"8253ddd3-0709-42eb-b91e-309f5d3acf43":"start","73f605b7-b4fd-4a04-b4d3-fec7378957cf":"config","35e9024c-a209-4315-bde3-b5af6d092398":"multiplexed event logger","9e768ea8-995c-4569-9f56-c1e2d6ed3ad0":"logger (with message)","cfe07181-2ece-4be0-8fb9-634df3066a4e":"compile and deploy Router","f9200cc1-dc57-4b85-ad6a-5ac014d714af":"compile and deploy Factory","a238193b-090a-495e-9e3a-3af6c5803989":"multiplexed event logger copy","e87ec83d-fbb9-404c-9df0-7bf955b8d7b7":"logger (with message) copy","47519456-9068-479a-b619-47064373c588":"logger","ecf24b65-8403-4d9b-9366-f8fc4a546588":"add liquidities","887798fa-1225-4a56-ad47-a0a1437076d8":"syncer","882b5420-002a-4999-8ff6-908121f2f742":"liquidities","884667fe-5c74-4432-bf55-f1f2732271f4":"logger (with message) copy copy","53b25c7f-4c36-4289-beff-ad040a4f0b97":"logger copy","cf33122c-5e22-4a95-8bec-5da349dc1bf7":"splitter","c9e7b74a-271e-45c9-a297-6bcb1a666de8":"logger (with message)","8e6081f4-d095-4eb5-9e25-145732eaa415":"log","3857b11e-3de4-4da1-bdf3-66b1ccd53c56":"format output","342e1b32-1ec8-4522-a4d8-89e3f7783956":"forwarder/double","dc962b16-d558-4210-9b54-f706b8d6d3ba":"serialize","f676106a-0950-4945-9d85-ced698472c5e":"prepare output","e14995f6-e7c2-4b8c-859c-613093366a6c":"prepare params","76b31d35-373f-415e-a0a4-9faa80e2ac4e":"sync inputs","5089473d-add9-4be6-b13a-34e3b9444454":"restore in order","d9b75e43-880e-42d8-ba9c-a79f03e3815c":"sync data & pretty","186f22d0-90f7-4e41-a9ca-1c23036528f7":"serialize","ef09b848-e73a-434c-b826-d66ede351b15":"sync template & params","be775bad-12dd-4560-bc84-95af8180521b":"fill template","b7507c33-c455-42cd-bbe5-5f24eb47115c":"router compiler","99c5736c-f94c-4241-96ff-b1ec44d509f6":"router deployer","3275f55a-8369-4be9-b1cf-0fdd01d68a5d":"init code pair hash requester","4d261585-52ab-48e3-8600-84768c2c00bc":"item getter","5cc8a2e3-9139-487d-9d44-f8228476d04f":"weth addresses","9990efd9-cbdd-487e-b28c-024cab85e2bc":"get network","c188decd-3ddf-4282-a6fd-c44e2a7013dc":"contract deployment waiter","d9ffaa3b-a8e9-41af-a31c-850d8034055a":"get ABI key","b60a494d-271b-4075-9001-8398d281de1c":"compile periphery-v2","b7e27645-449a-4b81-9702-053b820d6f27":"item getter","051646a2-d6a9-440a-9792-a876bb6f1aa9":"forwarder","0af3dded-37eb-4e94-b814-f1b7c8e16a98":"periphery source code","0c7ef0e8-33dc-43fa-9fcf-f22933bfbf0b":"instrument source","90cc2f29-a201-42d1-8b8b-b65d3315276a":"compile periphery","3c8814c6-3419-4916-abe1-54a071217692":"output list periphery","e53e1b57-9826-49a1-8ca5-c440ba04b1d8":"compile settings periphery","2b240e9c-a41b-4372-a195-dfd8c853fbad":"contracts periphery instrumented","c746adec-1911-43a9-930e-738e63902fcc":"replace placeholder","d0a321f3-15f0-4768-8678-aa455e236214":"get contract to instrument","e91a57e9-05df-4e1b-bc38-97c7689a41b2":"prepare params","4dbfa54e-c049-4c12-8463-c82cab55cf71":"path  to contract to instrument","e3ffaba8-df0f-4868-ac53-525186a12841":"set instrumented contract","140d4de0-65a6-403d-9e3f-661f9bad8032":"fill template","17e43d61-f38c-436e-bbbd-041f16ba7563":"syncer","df09be9e-33dd-43f5-8f43-022732a1582d":"forward","2dd51e88-bca8-4773-a20a-afe0ef2b0687":"sync inputs","1119aa5e-b75d-489f-ad48-567d16c0d9ae":"restore in order","ef429890-b8b0-45f5-9188-b626aa5275eb":"sync tree & path","796f16be-c947-444c-98a5-4046fb7b995b":"get node","f80981ba-b58c-40ac-bcf6-f67e853b35e6":"set node","8112d4da-ee18-47d0-a80b-6180f7a0445c":"sync inputs","cd1268c4-7b29-45a3-b095-a623fe3f27ae":"compile contracts","0624083d-5d20-4068-bcc5-510b4cc6c711":"syncer","5ae09e24-6724-4227-aa2c-a41ff95c9d53":"sync dict & key","06f47813-60ef-40d1-9f9b-b31940f27820":"get item","9d688e36-c761-45b7-b5a6-156c56048fa0":"deploy factory contract","6772e7a4-b7d6-42fc-abd2-21f32fdf3681":"wrapper","5f82a8dc-297d-4ebc-b82c-85f0fa5a300a":"item appender","523f713b-c414-43f6-9179-db27247c01af":"deploy contract","f7c0d38f-e3a0-41f0-8764-b7cb93ec8fab":"build parameters","2b93ff24-0dc3-41d8-8f34-13b5556a492e":"merger","333f5c4c-6c23-47c4-8b0b-cef235c7eaa2":"multiplexer","65eb02b8-d090-4120-b2dc-6c01baefd46a":"sync a & b","a96a53ad-a84b-4f4c-8f3d-41f892d50073":"merge","7890d318-1ed9-4fe9-a7b6-6d6e7e683adf":"syncer B","492cdba8-ab4f-4428-8339-5ab70efa576f":"append item","39d7325b-1323-4def-9dad-195c95c002e1":"sync array & item","55a4cf2e-74c6-4b5a-8593-cd9650bdadd4":"query init hash","c14af7ee-f774-48d9-ac23-95dd3fd3f0ae":"syncer","084622c0-5d4b-4aca-a257-9b19a9256b3b":"WETH address","b473d654-fc0c-46d7-97bf-3aa0b0896b1f":"item getter","3a804a8b-9202-4993-b998-8714f0cd2b2e":"is confirmation is enough","93e7e84f-1e55-4c1b-b1d9-fbd4ba848f87":"gate","12d9ad6d-4b4c-4a5a-b014-82fd94938c53":"equality tester","5d06bee6-4f6b-411f-a9c5-91894a8b3af8":"get receipt","21054f2f-6b39-4989-bf2c-9e172a48783a":"get contract address","6f38a834-1679-4350-8034-b5dfbdc1c209":"parameter with default","7b899f7c-3ea1-45bf-af7d-99ec6cd6b373":"cap value at 24","013f5628-ad92-4245-82f2-5d359b46c1d3":"fetch confirmation","5d63b3df-ade9-499d-818e-24a8a803c480":"gate","fbc970a3-a2f5-4552-abae-b023e86a4633":"sync data & open","76d82260-8c8d-4e7b-ba36-27d7fc3ad649":"sync a & b","97ca1c28-365c-4dd3-8126-810fdb73d644":"equal","85cd0e81-1f9c-4a27-a32f-c0397133409b":"store","be8ed238-12f0-4326-8d68-0b912f7657ee":"default","80e986d3-2297-4f5a-a8a0-da569beb2e7d":"depot","d0227f18-3f30-44b3-ba97-3a632066ff5c":"syncer","d43f830c-9821-4442-911b-ee7d9447b55b":"splitter","0a44b540-dec5-4a19-a41c-187250c73055":"sync a & b","828dbd6d-ae34-480d-82d3-fd7abc514372":"pick min","58b8b6dc-c3a0-4eb6-a2bb-e80501858a4d":"check if dict has confirmationNumber","82ad6712-a1db-46fb-9ae5-a26c3c814f8a":"forward dictionary","a57a4a52-9c76-49cf-b589-994c0dbc9fdb":"not","cb9b5ae2-df31-4e8e-ac2b-b5427b925b40":"extract data field if present","7ecca89e-13ba-473b-9971-052274cff030":"forward dictionary for extraction","ed14805b-8dfa-4e13-8531-aa6766d37640":"gate","293bf535-e0ad-4be3-bc2d-1790e6a30090":"check if dict has confirmationNumber copy","2f47a491-c1ad-4e11-8560-bac7c37fb21d":"get item","474213fa-035b-427f-ab76-8c8a482d28bf":"to boolean","be2a3997-d6b8-401c-9ddb-cfadd5eeb5a8":"true","9641b8f9-b293-417f-ab77-60c55f364b97":"false","523bcb55-9683-4c42-b8ce-56533357dfe3":"factory compiler","0578f4e4-0771-48b4-bcef-de91b22af598":"factory deployer B","ba58a0fb-28e3-43ba-b008-9023a0a3e94f":"contract deployment waiter","8868bf64-1fa3-400d-9fc8-5451c1ecf978":"item getter","9e4aeeba-4b6a-4a93-8d0a-58480fdcea3f":"core compiler","eb643b73-30d8-4ff9-a1f9-be0e01289d0b":"item getter","c4bd90e6-58a3-4311-860d-c393b02014a2":"output list core","80e26d21-bc67-4e97-aca2-078911414e45":"compile settings","d7171c51-e89b-4504-bc72-6b1edbad818b":"compile","3f5ab142-e534-4422-818d-a21322798476":"core-v2 sources clone","0830922f-ebb7-4894-b9e3-e5edb69ae3f0":"uniswap v2-core instrumented source","b3f8212b-2d52-42de-b3bf-2e6f4612c407":"item getter","0cc6ed66-8a7c-428c-b9c2-98eee354bff6":"wrapper","657b8bbb-65eb-4111-9f13-dd8fdc14c678":"parameter with default","178673a4-37db-4ff2-bade-7b2673a85704":"log","bb5d26bd-66e5-460e-a815-b2fb0e043c7e":"serialize","e0728891-a259-47aa-bdfb-3067e1d32416":"liquidities adder","abca443d-4129-4259-bcfd-f9810d6b44b5":"adder","5ba3799d-ae18-456c-b22c-281999d15068":"calculate deadline","f0cf53b8-8cc7-46b0-863c-7e814ab04283":"item getter","d9a30d41-2946-4cb3-a3b7-23cb197db9fe":"add liquidity","c7ad3b00-3c53-4fbe-8d3f-b2a50b16fb71":"splitter","1b19ef0f-612d-4130-91be-ad385babbc37":"repeater","4e19d8fa-49f6-480f-aa06-e21ddce741db":"forwarder","ae2166c0-60cb-4583-b23c-7c334eb588bc":"syncer","4dc742fa-11d3-41b7-b97b-c22c22af8a87":"splitter B","f15b0853-85a0-49f1-ad88-0f063d6f39b2":"step iterator","2e379074-d1a2-45d3-b8a6-8f0d1c900838":"liquidity adder","353417a4-ceb9-46aa-9d38-1bfdcb794220":"liquidity adder eth","2d481479-6d1b-42bc-83b1-d8543e9150e7":"contract parameters","abfddba8-b87f-401c-a5ef-b1477ad429ec":"operation parameters","85bbd70b-bfe5-4d5a-8643-c7cb4055e9ad":"get \"address\"","439ba717-afcf-4844-aba4-830279e33b17":"if \"ETH\"","fb076c2f-8805-4fc1-96e1-3da223d1887b":"is \"ETH\"?","bab278f9-92f3-4313-9363-6ad084394c0c":"tokenA data","0b6ed1c2-ac5a-46dd-b36e-8b0c2f04ca5d":"tokenB data","2505b99d-e535-49cf-8793-02ff8c957157":"approve tokenA","131b7957-e555-4d92-8f81-d86c2ebf2874":"approve tokenB","55ca1580-e573-4f63-bb8f-2306a0776468":"add liquidity ETH","f96fee45-39d2-4f55-b5c5-f8dc6ecdbbed":"sync approvals","c3a856a1-4bff-48dd-8683-4e5300f0a987":"addLiquidity params","9598eafb-20d4-4a27-8513-aba3797511b1":"operation params","23a03b65-cf8a-483a-8f9b-692e1472b900":"router address, credentials","6a229973-3f50-4f6d-ab83-c2ec02f8ae5d":"router contract data","6f4a6090-083a-4df4-a8af-67978a7a5ff9":"wait for approvals","608be892-0175-40f5-9f6a-3381250199d8":"wait for tokenA approval","a4bc94d2-1fe9-48cb-8340-d5288766e521":"errors","868ee981-e9cc-4677-a04b-cd8ab1b12053":"ERC20","c5b4fef7-6cc6-4424-b37c-c1d9c1488fb3":"forwarder (quadruple)","85bc5fb8-b3ca-4a5f-a4fa-3cc4d3552792":"build parameters","5be21e78-dfb5-4901-b015-91030d73ccb7":"contract executor","105c12ac-463a-47f8-98be-669d614d3ca5":"unit parser","1884d640-c3e3-4e07-b325-229996f11bec":"abi","a8b08540-468f-4bbe-b8dd-47df8ac7273b":"build contract parameters","b9a448ac-f405-4f0e-8c59-1b721cc14472":"method call","28d8e85d-b1ed-42e2-a385-78eeed02f55e":"build data","ff670edc-99bd-4d12-bf66-b86f0d5ccf3b":"convert to BigNumber","46a4d777-9d35-452d-95da-5d27eea22923":"syncer","0eee9868-aa74-4170-84e0-f4b73756f378":"parameter with default","6a46d9ee-484c-4644-a7e9-8e7ded5e2d22":"tokenA min amount","66275e94-414c-4fba-883f-5fc59fa26be2":"tokenaB min amount with default","c835bdca-271b-4e71-86f8-ab72f5efd377":"tokenA info","e3e81fb6-1f53-4199-896b-5ceedf297c97":"ETH info","4bffa1d2-efc3-4fe0-a9aa-693fda567d9e":"router contract data","9d66d7a8-2928-441d-8586-0d10834887aa":"build contract parameters","38b4e4ae-3fc7-4dfa-99e5-ea74d2a379f1":"contract call params","29dbff4f-9603-4f57-b51c-65207e8c8b7c":"operation params","56c1fe60-e438-44c5-b719-25ba23097ed0":"liquidity to & deadline","5053c784-80b1-47ed-acf8-3c128b464911":"credentials","45c6dc20-b4b7-44c1-b3cd-122da513973b":"contract executor","a605a6e6-3188-48b6-b2ef-c8137eb2ee99":"to units tokenA amount","217bb35c-f4d5-4cde-8012-eb0cc8f57832":"to units tokenB amount","a01f5b1b-fa4d-47cb-9143-fb868e472b11":"to unit tokenA min amount","a2943213-f51f-4fad-a615-1753c8b0743f":"to units tokenB min amount","dffb3e51-6ffc-4a24-875e-79927f4e78e8":"execute contract","dbe3ffd9-aaf6-4b13-a966-960749ec04e3":"build transaction parameters","16e4c2b9-c2dc-4262-b6b5-1688865d2b93":"ETH min amount","ce278617-a354-4332-a2f9-e994a8542ec5":"convert to units desiredAmountA","eac44e68-4316-4f25-8883-4e96d35fd14c":"convert  to units desiredAmountEth","ff10a3bb-e85d-44b5-b517-fce6ec7a7a98":"convert  to units tokenA min amount","ac1a0c09-9aae-4f23-a038-60da20618b97":"convert  to units eth min amount","dac346f3-5551-4dd1-ac9b-5297b4d303fb":"sync data & condition","c530f214-0b46-41d4-ab2a-331e97584592":"fork","81f55657-a1f5-47b0-90af-64ef3cfd3612":"sync a & b","ebea7b0e-dc05-416c-bce2-66b2129b8c91":"equal","20fba366-3e52-4a3c-89a6-dcc8f28afc5a":"count items","1b383f97-809a-4271-9071-3016d4fe986d":"repeat data","6b5f63b1-6430-4f52-94be-bb4c87d50929":"sync data & count","dea17bc9-3677-4e41-a63a-47683a06c031":"repeat","494ff0d1-6927-4a1c-88ff-94b9e543b3dd":"nest tag","41e56f76-09a7-448a-b664-8abe89489332":"iterate","6f28b266-027d-49ca-9b50-071c0294ad9d":"trim tag","58b349c6-e113-4592-b7f1-f9a857a46626":"increment tag","8734d770-7efb-4328-b75b-c77caeec3221":"sync a & b","76cad5f1-c028-4287-8bd7-bf7f2d141731":"add","f5c7f3cd-cd6d-40a3-b274-fa851f57dae2":"expiration","97fe37d7-4afd-4eb6-a786-c397c76c496c":"timestamp getter"}};  
const __tracers__ = __createTracers__({}, __tracer_project_metadata__);


/* Functions to trace eventual errors */
/* no tracers defined, fallback to console tracer */
const {traceNodeErrorFactory, tracePortErrorFactory} = require("@cranq/runtime");

__traceNodeError__ = traceNodeErrorFactory(__tracers__, ["console"]);
__tracePortError__ = tracePortErrorFactory(__tracers__, ["console"]);



const __prototypes__ = {};
/*
Project root
*/
__prototypes__["#workspace/DEX2"] = (params, path = []) => {
  const nodes = {
  "start": __prototypes__["flow/Starter"]({}, ["8253ddd3-0709-42eb-b91e-309f5d3acf43", ...path]),
"config": __prototypes__["data/Store"]({"data": {
  "providerUrl": "https://eth-goerli.g.alchemy.com/v2/llhUGiucVoNhTw8wrZzJ4iyG1CNCVkhV",
  "privateKey": "ad23fdd3f6dc3fb46ba4b7d98d7870e983d26cc29f80bd3ded6bbe0d604ea2ed",
  "accountAddress": "0xf2C73548DF655FAcdAF7e62856b5020E10a86f70",
  "network": "goerli"
}}, ["73f605b7-b4fd-4a04-b4d3-fec7378957cf", ...path]),
"logger (with message)": __prototypes__["debug/Logger (with message)"]({"message": "Factory compilation error"}, ["9e768ea8-995c-4569-9f56-c1e2d6ed3ad0", ...path]),
"compile and deploy Router": __prototypes__["#workspace/Uniswap v2 clone/Group"]({}, ["cfe07181-2ece-4be0-8fb9-634df3066a4e", ...path]),
"compile and deploy Factory": __prototypes__["#workspace/Uniswap v2 clone/Group 3"]({}, ["f9200cc1-dc57-4b85-ad6a-5ac014d714af", ...path]),
"logger (with message) copy": __prototypes__["debug/Logger (with message)"]({"message": "Router compilation or deployment error"}, ["e87ec83d-fbb9-404c-9df0-7bf955b8d7b7", ...path]),
"logger": __prototypes__["debug/Logger"]({}, ["47519456-9068-479a-b619-47064373c588", ...path]),
"add liquidities": __prototypes__["#workspace/Uniswap v2 clone/Group 4"]({}, ["ecf24b65-8403-4d9b-9366-f8fc4a546588", ...path]),
"syncer": __prototypes__["flow/Syncer"]({"fields": ["address", "abi"]}, ["887798fa-1225-4a56-ad47-a0a1437076d8", ...path]),
"liquidities": __prototypes__["data/Store"]({"data": [
 [
   {
     "address":"0x92B3Bd00153C6deF60738b593571944Dd6B1B641",
     "desiredAmount": 1000
   },
   {
      "address": "ETH",
      "desiredAmount": 0.001
   }
 ],
 [
   {
     "address":"0x92B3Bd00153C6deF60738b593571944Dd6B1B641",
     "desiredAmount": 100
   },
   {
      "address": "0xe045E554fA845918592F204E87efbc4695B078f2",
      "desiredAmount": 1000
   }
 ],
 [
   {
     "address":"0x43F9E3a1E870d62508C22337f7E3f0984c5e1A6c",
     "desiredAmount": 1000
   },
   {
      "address": "ETH",
      "desiredAmount": 0.001
   }
 ]
]}, ["882b5420-002a-4999-8ff6-908121f2f742", ...path]),
"logger (with message) copy copy": __prototypes__["debug/Logger (with message)"]({"message": "Add liquidities error"}, ["884667fe-5c74-4432-bf55-f1f2732271f4", ...path]),
"logger copy": __prototypes__["debug/Logger"]({}, ["53b25c7f-4c36-4289-beff-ad040a4f0b97", ...path])
};
__connectPorts__(nodes["start"]?.outputs["start"], nodes["config"]?.inputs["read"]);
__connectPorts__(nodes["start"]?.outputs["start"], nodes["compile and deploy Factory"]?.inputs["start"]);
__connectPorts__(nodes["start"]?.outputs["start"], nodes["liquidities"]?.inputs["read"]);
__connectPorts__(nodes["config"]?.outputs["data"], nodes["compile and deploy Factory"]?.inputs["config"]);
__connectPorts__(nodes["config"]?.outputs["data"], nodes["compile and deploy Router"]?.inputs["config"]);
__connectPorts__(nodes["config"]?.outputs["data"], nodes["add liquidities"]?.inputs["config"]);
__connectPorts__(nodes["compile and deploy Factory"]?.outputs["error"], nodes["logger (with message)"]?.inputs["data"]);
//Connection disabled: compile and deploy Factory.events -> [Node disabled]multiplexed event logger.multiplexed event
__connectPorts__(nodes["compile and deploy Factory"]?.outputs["factory address"], nodes["compile and deploy Router"]?.inputs["factory address"]);
__connectPorts__(nodes["compile and deploy Factory"]?.outputs["factory ABI"], nodes["compile and deploy Router"]?.inputs["factory ABI"]);
//Connection disabled: compile and deploy Router.events -> [Node disabled]multiplexed event logger copy.multiplexed event
__connectPorts__(nodes["compile and deploy Router"]?.outputs["error"], nodes["logger (with message) copy"]?.inputs["data"]);
__connectPorts__(nodes["compile and deploy Router"]?.outputs["router address"], nodes["logger"]?.inputs["data"]);
__connectPorts__(nodes["compile and deploy Router"]?.outputs["router address"], nodes["syncer"]?.inputs["address"]);
__connectPorts__(nodes["compile and deploy Router"]?.outputs["router ABI"], nodes["syncer"]?.inputs["abi"]);
__connectPorts__(nodes["syncer"]?.outputs["synced"], nodes["add liquidities"]?.inputs["router contract"]);
__connectPorts__(nodes["liquidities"]?.outputs["data"], nodes["add liquidities"]?.inputs["pairs"]);
__connectPorts__(nodes["add liquidities"]?.outputs["error"], nodes["logger (with message) copy copy"]?.inputs["data"]);
__connectPorts__(nodes["add liquidities"]?.outputs["result"], nodes["logger copy"]?.inputs["data"]);
// Node disabled: multiplexed event logger
// Node disabled: multiplexed event logger copy
return __createNode__([], (outputs) => {
  
  return {
  
};
},
undefined,
{},
{},
path);
}
/*
Sends the signal null@"start" asynchronously right after the node was created at runtime.

Mostly used to kick-start the entire program.
*/
__prototypes__["flow/Starter"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["start"], (outputs) => {
  try {
    setTimeout(()=>outputs.start(null, "start"), 0);
  } catch(error) {
    __traceNodeError__(path, error);
  }
  return {
  
};
},
(outputs) => {
  
},
{},
{"start": "fb159194-7413-4b61-9b9a-f6bbfd3d7977"},
path);
  };
})();
/*
Stores data and sends it via `data` when read. When the store is empty, any attempt to read the contents will result in a signal sent out via `not found`.

Example:
1. `data` set to "hello"
2. null@1 received via `read`
3. "hello"@1 sent via `data` (output)
*/
__prototypes__["data/Store"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["data","written","not found"], (outputs) => {
  
  return {
  /*
Receives contents of the store. Can be set as parameter, or received as signal.
*/
"data": (data, tag) => {
  try {
    state.data = data;
    outputs.written(null, tag);
  } catch(error) {
    __tracePortError__(path, "543f8ad2-7755-44f6-bc9b-e6208c87b15a", error);
  }
},
/*
Receives a signal that triggers the contents being sent via `data` (output), or `not found` when has no content.
*/
"read": (data, tag) => {
  try {
    const value = state.data !== undefined 
      ? state.data
      : params.data;
    if (value !== undefined)
      outputs.data(value, tag);
    else
      outputs["not found"](null, tag);
  } catch(error) {
    __tracePortError__(path, "0b28df10-b056-4666-ae14-2357d747f7b9", error);
  }
}
};
},
(outputs) => {
  
},
{"data": "543f8ad2-7755-44f6-bc9b-e6208c87b15a","read": "0b28df10-b056-4666-ae14-2357d747f7b9"},
{"data": "e7a0df14-dc8c-41bd-8aba-367fdb468ce3","written": "92b91df5-41d7-4e23-aeec-3f459099e659","not found": "e3876be5-e8c8-4983-b770-81fc8cdf5ff5"},
path);
  };
})();
__prototypes__["debug/Multiplexed event logger"] = (params, path = []) => {
  const nodes = {
  "splitter": __prototypes__["flow/Splitter"]({"unsplit": params["multiplexed event"],"fields": ["field", "data"]}, ["cf33122c-5e22-4a95-8bec-5da349dc1bf7", ...path]),
"logger (with message)": __prototypes__["debug/Logger (with message)"]({}, ["c9e7b74a-271e-45c9-a297-6bcb1a666de8", ...path])
};
__connectPorts__(nodes["splitter"]?.outputs["field"], nodes["logger (with message)"]?.inputs["message"]);
__connectPorts__(nodes["splitter"]?.outputs["data"], nodes["logger (with message)"]?.inputs["data"]);
return __createNode__([], (outputs) => {
  
  return {
  /*
[Inherited from port `unsplit` of `splitter`] 
Receives records or tuples to be split into individual items.

Examples:
* {"a": 5, "b": 2}
* [5, 2]
*/
"multiplexed event": (data, tag) => {
  nodes["splitter"]?.inputs["unsplit"]?.(data, tag);
}
};
},
undefined,
{"multiplexed event": "36268fed-37a0-40c5-bd24-79fab399251e"},
{},
path);
}
/*
Splits data received via `unsplit` by fields / indexes.

Do not use splitters to access optional record fields. Opt for a `data/dictionary/Item getter` in those cases instead.

Example A (record input):
1.`fields` is set to ["a", "b"]
2. Output ports `a` and `b` get created.
3. {"a": "foo", "b": "bar"}@0 received by `unsplit`
4. "foo"@0 is sent via `a`
5. "bar"@0 is sent via `b`

Example B (tuple input):
1.`fields` is set to [0, 1]
2. Output ports `0` and `1` get created.
3. ["foo", "bar"]@0 received by `unsplit`
4. "foo"@0 is sent via `0`
5. "bar"@0 is sent via `1`

More: https://github.com/Cranq-io/cranq-tutorials/blob/main/reference/1_application_flow/1_3_synchronization/README.md#example---synchronizing-node-inputs.
*/
__prototypes__["flow/Splitter"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__([...(Array.isArray(params["fields"]) ? params["fields"] : [])], (outputs) => {
  
  return {
  /*
Sets a list of output port names matching property names in the data received via `unsplit`.

Must be parameter.

Example:
["a", "b"]
*/
"fields": (data, tag) => {
  try {
    throw new Error('Input port not implemented for current target.');
  } catch(error) {
    __tracePortError__(path, "7b39d568-3d5a-46fe-8670-3355f60c2746", error);
  }
},
/*
Receives records or tuples to be split into individual items.

Examples:
* {"a": 5, "b": 2}
* [5, 2]
*/
"unsplit": (data, tag) => {
  try {
    const fields = params.fields;
    for (const field of fields) {
      const value = data[field];
      if (value !== undefined)
        outputs[field](value, tag);
    }
  } catch(error) {
    __tracePortError__(path, "6ad86184-6890-4323-8021-3496a682c98e", error);
  }
}
};
},
(outputs) => {
  
},
{"fields": "7b39d568-3d5a-46fe-8670-3355f60c2746","unsplit": "6ad86184-6890-4323-8021-3496a682c98e"},
{...(Array.isArray(params["fields"]) ? params["fields"] : []).reduce((r, i) => {r[i] = i; return r}, {})},
path);
  };
})();
__prototypes__["debug/Logger (with message)"] = (params, path = []) => {
  const nodes = {
  "log": __prototypes__["debug/Logger (unformatted)"]({}, ["8e6081f4-d095-4eb5-9e25-145732eaa415", ...path]),
"format output": __prototypes__["debug/Output formatter"]({"data": params["data"],"message": params["message"]}, ["3857b11e-3de4-4da1-bdf3-66b1ccd53c56", ...path])
};
__connectPorts__(nodes["format output"]?.outputs["prepare output-filled"], nodes["log"]?.inputs["data"]);
return __createNode__([], (outputs) => {
  
  return {
  "data": (data, tag) => {
  nodes["format output"]?.inputs["data"]?.(data, tag);
},
"message": (data, tag) => {
  nodes["format output"]?.inputs["message"]?.(data, tag);
}
};
},
undefined,
{"data": "b937ea64-339e-46d3-9eff-16cdcaaf7ec4","message": "5773699e-0819-4c74-8282-fb2a9a77b0cf"},
{},
path);
}
/*
Logs received data to the output, using default formatting options.

Not recommended for complex data types.
*/
__prototypes__["debug/Logger (unformatted)"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__([], (outputs) => {
  
  return {
  "data": (data, tag) => {
  try {
    console.log(`${data} @${tag}`);
  } catch(error) {
    __tracePortError__(path, "f6458629-a8b7-4338-b8c1-94eee78f7af5", error);
  }
}
};
},
(outputs) => {
  
},
{"data": "f6458629-a8b7-4338-b8c1-94eee78f7af5"},
{},
path);
  };
})();
/*
Formats output based on received data and a custom message.
*/
__prototypes__["debug/Output formatter"] = (params, path = []) => {
  const nodes = {
  "forwarder/double": __prototypes__["flow/Forwarder (double)"]({"1": params["data"],"2": params["message"]}, ["342e1b32-1ec8-4522-a4d8-89e3f7783956", ...path]),
"serialize": __prototypes__["json/Serializer"]({"pretty": true}, ["dc962b16-d558-4210-9b54-f706b8d6d3ba", ...path]),
"prepare output": __prototypes__["string/Template filler"]({"template": "{MESSAGE} {DATA}"}, ["f676106a-0950-4945-9d85-ced698472c5e", ...path]),
"prepare params": __prototypes__["flow/Syncer"]({"fields": ["MESSAGE", "DATA"]}, ["e14995f6-e7c2-4b8c-859c-613093366a6c", ...path])
};
__connectPorts__(nodes["forwarder/double"]?.outputs["1"], nodes["serialize"]?.inputs["data"]);
__connectPorts__(nodes["forwarder/double"]?.outputs["2"], nodes["prepare params"]?.inputs["MESSAGE"]);
__connectPorts__(nodes["prepare params"]?.outputs["synced"], nodes["prepare output"]?.inputs["params"]);
__connectPorts__(nodes["serialize"]?.outputs["json"], nodes["prepare params"]?.inputs["DATA"]);
return __createNode__(["prepare output-filled"], (outputs) => {
  __connectPorts__(nodes["prepare output"]?.outputs["filled"], outputs["prepare output-filled"]);
  return {
  "data": (data, tag) => {
  nodes["forwarder/double"]?.inputs["1"]?.(data, tag);
},
"message": (data, tag) => {
  nodes["forwarder/double"]?.inputs["2"]?.(data, tag);
}
};
},
undefined,
{"data": "212ca288-0b71-4a49-bc23-cfe9caf267b9","message": "ad22d739-2b4a-481e-8d8c-4fd38873dec3"},
{"prepare output-filled": "cf8c6e28-3f51-4550-8ab4-a52f61b30f19"},
path);
}
/*
Forwards both received signals in the order of the names of the ports.

Used for two purposes:
* Ensuring that any of a node's inputs may receive signals or be set as parameter.
* Ensuring the order in which signals are sent.

Example a) param vs. signal:
1. `2`(input) set to "B"
2. "A"@0 received via `1` (input)
3. "A"@0 sent via `1` (output)
4. "B"@0 sent via `2` (output)

Example b) signal order:
1. "B"@0 received via `2` (input)
2. "A"@0 received via `1` (input)
3. "A"@0 sent via `1` (output)
4. "B"@0 sent via `2` (output)
*/
__prototypes__["flow/Forwarder (double)"] = (params, path = []) => {
  const nodes = {
  "sync inputs": __prototypes__["flow/Syncer"]({"1": params["1"],"2": params["2"],"fields": ["1","2"]}, ["76b31d35-373f-415e-a0a4-9faa80e2ac4e", ...path]),
"restore in order": __prototypes__["flow/Splitter"]({"fields": ["1","2"]}, ["5089473d-add9-4be6-b13a-34e3b9444454", ...path])
};
__connectPorts__(nodes["sync inputs"]?.outputs["synced"], nodes["restore in order"]?.inputs["unsplit"]);
return __createNode__(["1","2"], (outputs) => {
  __connectPorts__(nodes["restore in order"]?.outputs["1"], outputs["1"]);
__connectPorts__(nodes["restore in order"]?.outputs["2"], outputs["2"]);
  return {
  /*
Receives signal or takes parameter to be sent out first.
*/
"1": (data, tag) => {
  nodes["sync inputs"]?.inputs["1"]?.(data, tag);
},
/*
Receives signal or takes parameter to be sent out second.
*/
"2": (data, tag) => {
  nodes["sync inputs"]?.inputs["2"]?.(data, tag);
}
};
},
undefined,
{"1": "e76062c0-e298-4443-a187-94cbd4b3bc74","2": "7af76a3e-ed65-41b9-9f9d-1a4593c5bf69"},
{"1": "069a212d-9cea-4987-be45-e0079a13d96f","2": "d1295197-1962-4680-a037-5890f2175bb9"},
path);
}
/*
Bundles input signals that have the same tag. All inputs must receive exactly one signal for a given tag (or be a parameter) for the bundle (record or tuple, depending on the type of `fields`) to be sent.

Example A (record):
1. `fields` is set to ["a", "b"]
2. Inputs ports `a` and `b` get created
3. `a` receives "Foo"@0
4. `b` receives "Bar"@0
5. `synced` sends {"a": "Foo", "b": "Bar"}@0

Example B (tuple):
1. `fields` is set to [0, 1]
2. Inputs ports `0` and `1` get created
3. `0` receives "Foo"@0
4. `1` receives "Bar"@0
5. `synced` sends ["Foo", "Bar"]@0

More: https://github.com/Cranq-io/cranq-tutorials/blob/main/reference/1_application_flow/1_3_synchronization/README.md#example---synchronizing-node-inputs
*/
__prototypes__["flow/Syncer"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["synced"], (outputs) => {
  try {
    const fields = params.fields || []
    state.dynamicFields = fields
      .filter(field => params[field] === undefined);
    state.staticBundle = fields
      .filter(field => params[field] !== undefined)
      .reduce(
        (result, field) => {result[field] = params[field]; return result},
        typeof fields[0] === "number" ? [] : {});
    state.bundlesByTag = state.bundlesByTag || new Map();
    state.portsByTag = state.portsByTag || new Map();
    state.copy = (value) => value instanceof Array
      ? [...value] : value instanceof Object
        ? {...value} : value;
  } catch(error) {
    __traceNodeError__(path, error);
  }
  return {
  /*
Sets a list of inupt port names matching property names in the data sent via `synced`.

Must be parameter.

Example values:
* ["a", "b"] will result in record output
* [0, 1] will result in a tuple output
*/
"fields": (data, tag) => {
  try {
    throw new Error('Input port not implemented for current target.');
  } catch(error) {
    __tracePortError__(path, "ef31c1e9-cfd5-458b-8d3a-951e3db9c232", error);
  }
},
/*
Receives individual item for syncing.
*/
...(Array.isArray(params["fields"]) ? params["fields"] : []).reduce((__inputs__, input) => {
  __inputs__[input] = (data, tag) => {
    try {
      const {bundlesByTag, portsByTag} = state;
      let bundle = bundlesByTag.get(tag);
      if (!bundle) {
        bundle = state.copy(state.staticBundle);
        bundlesByTag.set(tag, bundle);
      }
      let ports = portsByTag.get(tag);
      if (!ports) {
        ports = new Set(state.dynamicFields);
        portsByTag.set(tag, ports);
      }
      bundle[input] = data;
      ports.delete(input);
      if (ports.size === 0) {
        bundlesByTag.delete(tag);
        portsByTag.delete(tag);
        outputs.synced(bundle, tag);
      }
    } catch(error) {
      __tracePortError__(path, input, error);
    }    
  };
  return __inputs__;
}, {})
};
},
(outputs) => {
  
},
{"fields": "ef31c1e9-cfd5-458b-8d3a-951e3db9c232",...(Array.isArray(params["fields"]) ? params["fields"] : []).reduce((r, i) => {r[i] = i; return r}, {})},
{"synced": "75cde7e3-b158-4836-8bcd-a89e72314ee8"},
path);
  };
})();
/*
Serializes JSON into string.
*/
__prototypes__["json/Serializer"] = (params, path = []) => {
  const nodes = {
  "sync data & pretty": __prototypes__["flow/Syncer"]({"data": params["data"],"pretty": params["pretty"],"fields": ["data", "pretty"]}, ["d9b75e43-880e-42d8-ba9c-a79f03e3815c", ...path]),
"serialize": __prototypes__["json/Serializer/Internal"]({}, ["186f22d0-90f7-4e41-a9ca-1c23036528f7", ...path])
};
__connectPorts__(nodes["sync data & pretty"]?.outputs["synced"], nodes["serialize"]?.inputs["data & pretty"]);
return __createNode__(["json","error"], (outputs) => {
  __connectPorts__(nodes["serialize"]?.outputs["json"], outputs["json"]);
__connectPorts__(nodes["serialize"]?.outputs["error"], outputs["error"]);
  return {
  /*
Receives the data to be serialized.
*/
"data": (data, tag) => {
  nodes["sync data & pretty"]?.inputs["data"]?.(data, tag);
},
/*
Whether to pretty-format the output string. (Indented with 2 spaces.)
*/
"pretty": (data, tag) => {
  nodes["sync data & pretty"]?.inputs["pretty"]?.(data, tag);
}
};
},
undefined,
{"data": "cc00cc18-d6ce-4661-8dd5-eb3140a3acae","pretty": "deb0a917-b393-4326-b573-ec6a6f82ffec"},
{"json": "25650a4f-7e35-4754-bc8f-1a57f538166f","error": "96bf3401-ac68-46e7-b86b-371758d5543a"},
path);
}
__prototypes__["json/Serializer/Internal"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["json","error"], (outputs) => {
  
  return {
  "data & pretty": (data, tag) => {
  try {
    try {
      outputs.json(
        JSON.stringify(data.data, null, data.pretty ? 2 : 0),
        tag);
    } catch (err) {
      const {inspect} = require("util");
      outputs.error(`Can't serialize JSON.\n${inspect(data.data)}`, tag);
    }
  } catch(error) {
    __tracePortError__(path, "03b51ad2-3cd3-4a9a-bd5a-5fdee3a1b4d7", error);
  }
}
};
},
(outputs) => {
  
},
{"data & pretty": "03b51ad2-3cd3-4a9a-bd5a-5fdee3a1b4d7"},
{"json": "1c2473e9-843e-43f8-bcf4-53c157aa7b80","error": "c5932291-88af-4e61-b46a-6eebe806ab06"},
path);
  };
})();
/*
Substitutes parameters into a template.

Example:

1. "Hello {subject}!"@0 is received via `template`
2. {"subject":"world"}@0 is received via params
3. "Hello world!"@0 is sent via `filled`
*/
__prototypes__["string/Template filler"] = (params, path = []) => {
  const nodes = {
  "sync template & params": __prototypes__["flow/Syncer"]({"template": params["template"],"params": params["params"],"fields": ["template","params"]}, ["ef09b848-e73a-434c-b826-d66ede351b15", ...path]),
"fill template": __prototypes__["string/Template filler/Internal"]({}, ["be775bad-12dd-4560-bc84-95af8180521b", ...path])
};
__connectPorts__(nodes["sync template & params"]?.outputs["synced"], nodes["fill template"]?.inputs["template & params"]);
return __createNode__(["filled"], (outputs) => {
  __connectPorts__(nodes["fill template"]?.outputs["filled"], outputs["filled"]);
  return {
  /*
The template to be filled
*/
"template": (data, tag) => {
  nodes["sync template & params"]?.inputs["template"]?.(data, tag);
},
/*
The actual parameters used for filling the template
*/
"params": (data, tag) => {
  nodes["sync template & params"]?.inputs["params"]?.(data, tag);
}
};
},
undefined,
{"template": "25aa567c-3316-4206-b42e-4cfe6a67b0c7","params": "d0eb3b1c-04b8-4b95-96ee-76b37fc067c6"},
{"filled": "d6272c3f-069b-4af8-8d4c-fe762a581c40"},
path);
}
__prototypes__["string/Template filler/Internal"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["filled"], (outputs) => {
  
  return {
  "template & params": (data, tag) => {
  try {
    const {template, params} = data;
    outputs.filled(template.replace(
      /(?<!\\){((?:\\}|[^}])*)}/g,
      (match, key) => {
        const param = params[key];
        return param === undefined ? match : param;
      }), tag);
  } catch(error) {
    __tracePortError__(path, "df7b6135-bb57-4e2e-b1ad-3867c3d7a354", error);
  }
}
};
},
(outputs) => {
  
},
{"template & params": "df7b6135-bb57-4e2e-b1ad-3867c3d7a354"},
{"filled": "81d00a83-cfd8-4e85-a63f-dd177a8b4706"},
path);
  };
})();
__prototypes__["#workspace/Uniswap v2 clone/Group"] = (params, path = []) => {
  const nodes = {
  "router compiler": __prototypes__["blockchain/ethereum/Uniswap/v2/Router compiler"]({}, ["b7507c33-c455-42cd-bbe5-5f24eb47115c", ...path]),
"router deployer": __prototypes__["blockchain/ethereum/Uniswap/v2/Router deployer"]({"factory address": params["factory address"],"config": params["config"]}, ["99c5736c-f94c-4241-96ff-b1ec44d509f6", ...path]),
"init code pair hash requester": __prototypes__["blockchain/ethereum/Uniswap/v2/Init code pair hash requester"]({"factory address": params["factory address"],"factory ABI": params["factory ABI"]}, ["3275f55a-8369-4be9-b1cf-0fdd01d68a5d", ...path]),
"item getter": __prototypes__["data/dictionary/Item getter"]({"dict": params["config"],"key": "providerUrl"}, ["4d261585-52ab-48e3-8600-84768c2c00bc", ...path]),
"weth addresses": __prototypes__["blockchain/ethereum/Uniswap/v2/WETH addresses"]({}, ["5cc8a2e3-9139-487d-9d44-f8228476d04f", ...path]),
"get network": __prototypes__["data/dictionary/Item getter"]({"dict": params["config"],"key": "network"}, ["9990efd9-cbdd-487e-b28c-024cab85e2bc", ...path]),
"contract deployment waiter": __prototypes__["blockchain/ethereum/Contract deployment waiter"]({"number required": 2}, ["c188decd-3ddf-4282-a6fd-c44e2a7013dc", ...path]),
"get ABI key": __prototypes__["data/dictionary/Item getter"]({"key": "abi"}, ["d9ffaa3b-a8e9-41af-a31c-850d8034055a", ...path])
};
__connectPorts__(nodes["init code pair hash requester"]?.outputs["init hash"], nodes["router compiler"]?.inputs["factory init hash"]);
__connectPorts__(nodes["item getter"]?.outputs["value"], nodes["init code pair hash requester"]?.inputs["web3 provider URL"]);
__connectPorts__(nodes["router compiler"]?.outputs["compiled Router contract"], nodes["router deployer"]?.inputs["router contract"]);
__connectPorts__(nodes["router compiler"]?.outputs["compiled Router contract"], nodes["get ABI key"]?.inputs["dict"]);
__connectPorts__(nodes["get network"]?.outputs["value"], nodes["weth addresses"]?.inputs["network"]);
__connectPorts__(nodes["weth addresses"]?.outputs["WETH address"], nodes["router deployer"]?.inputs["WETH address"]);
__connectPorts__(nodes["router deployer"]?.outputs["confirmation"], nodes["contract deployment waiter"]?.inputs["confirmation"]);
return __createNode__(["router address","router ABI","events","error"], (outputs) => {
  __connectPorts__(nodes["router compiler"]?.outputs["error"], outputs["error"]);
__connectPorts__(nodes["router deployer"]?.outputs["error"], outputs["error"]);
__connectPorts__(nodes["router deployer"]?.outputs["events"], outputs["events"]);
__connectPorts__(nodes["contract deployment waiter"]?.outputs["contract address"], outputs["router address"]);
__connectPorts__(nodes["get ABI key"]?.outputs["value"], outputs["router ABI"]);
  return {
  "factory address": (data, tag) => {
  nodes["init code pair hash requester"]?.inputs["factory address"]?.(data, tag);
nodes["router deployer"]?.inputs["factory address"]?.(data, tag);
},
"factory ABI": (data, tag) => {
  nodes["init code pair hash requester"]?.inputs["factory ABI"]?.(data, tag);
},
"config": (data, tag) => {
  nodes["item getter"]?.inputs["dict"]?.(data, tag);
nodes["router deployer"]?.inputs["config"]?.(data, tag);
nodes["get network"]?.inputs["dict"]?.(data, tag);
}
};
},
undefined,
{"factory address": "f957fe01-72ca-4235-9ced-fc28f3c952f9","factory ABI": "f1e4cad6-05bf-4573-8927-f538e984cac4","config": "0c2e1194-9ff2-44aa-bffb-d14986a4d00c"},
{"router address": "a9cf45e0-37b9-4439-8e04-9e86b2f7b285","router ABI": "80dee00a-4159-4d37-8f3b-45f552035cfe","events": "b7167fe7-44be-41b8-a74d-cddd0bc8e01a","error": "e4958385-c9cb-415c-9cf3-498fe5938c77"},
path);
}
/*
Compiles UniswapV2Router02 contract
*/
__prototypes__["blockchain/ethereum/Uniswap/v2/Router compiler"] = (params, path = []) => {
  const nodes = {
  "compile periphery-v2": __prototypes__["blockchain/ethereum/Uniswap/v2/Periphery compiler"]({"factory init hash": params["factory init hash"]}, ["b60a494d-271b-4075-9001-8398d281de1c", ...path]),
"item getter": __prototypes__["data/dictionary/Item getter"]({"key": "UniswapV2Router02"}, ["b7e27645-449a-4b81-9702-053b820d6f27", ...path])
};
__connectPorts__(nodes["compile periphery-v2"]?.outputs["compiled contracts"], nodes["item getter"]?.inputs["dict"]);
return __createNode__(["compiled Router contract","error"], (outputs) => {
  __connectPorts__(nodes["item getter"]?.outputs["value"], outputs["compiled Router contract"]);
__connectPorts__(nodes["compile periphery-v2"]?.outputs["error"], outputs["error"]);
  return {
  /*
Receives the value called 'INIT_HASH_CODE' that is shared between the Factory and the Router. This value can be retrieved from the Factory.
*/
"factory init hash": (data, tag) => {
  nodes["compile periphery-v2"]?.inputs["factory init hash"]?.(data, tag);
}
};
},
undefined,
{"factory init hash": "5199b9b1-7f03-4665-862a-613a23a8691a"},
{"compiled Router contract": "f6250a09-cd0c-49c2-af3c-aab4032750b4","error": "aa4575fc-d7b8-4205-944b-b87227acc8ea"},
path);
}
/*
Compiles Uniswap V2 periphery contracts
*/
__prototypes__["blockchain/ethereum/Uniswap/v2/Periphery compiler"] = (params, path = []) => {
  const nodes = {
  "forwarder": __prototypes__["flow/Forwarder"]({"data": params["factory init hash"]}, ["051646a2-d6a9-440a-9792-a876bb6f1aa9", ...path]),
"periphery source code": __prototypes__["blockchain/ethereum/Uniswap/v2/Periphery source code (instrumented)"]({}, ["0af3dded-37eb-4e94-b814-f1b7c8e16a98", ...path]),
"instrument source": __prototypes__["blockchain/ethereum/Uniswap/v2/Periphery source code instrumenter"]({}, ["0c7ef0e8-33dc-43fa-9fcf-f22933bfbf0b", ...path]),
"compile periphery": __prototypes__["blockchain/ethereum/Contracts compiler"]({}, ["90cc2f29-a201-42d1-8b8b-b65d3315276a", ...path]),
"output list periphery": __prototypes__["data/Store"]({"read": params["factory init hash"],"data": [
"v2-periphery/contracts/UniswapV2Migrator.sol",
  "v2-periphery/contracts/UniswapV2Router01.sol",
  "v2-periphery/contracts/UniswapV2Router02.sol"
]}, ["3c8814c6-3419-4916-abe1-54a071217692", ...path]),
"compile settings periphery": __prototypes__["data/Store"]({"read": params["factory init hash"],"data": {
    "includeRoots": [
      "v2-periphery/contracts",
      "v2-periphery/node_modules"
    ],
    "solidityVersion": "v0.6.6+commit.6c089d02",
    "compileOptions": {
      "evmVersion": "istanbul",
      "optimizer": {"enabled": true, "runs": 999999}
    }
  }}, ["e53e1b57-9826-49a1-8ca5-c440ba04b1d8", ...path])
};
__connectPorts__(nodes["forwarder"]?.outputs["data"], nodes["periphery source code"]?.inputs["read"]);
__connectPorts__(nodes["forwarder"]?.outputs["data"], nodes["instrument source"]?.inputs["factory init hash"]);
__connectPorts__(nodes["periphery source code"]?.outputs["v2-periphery source"], nodes["instrument source"]?.inputs["v2-periphery source"]);
__connectPorts__(nodes["instrument source"]?.outputs["set instrumented contract-tree"], nodes["compile periphery"]?.inputs["contracts"]);
__connectPorts__(nodes["output list periphery"]?.outputs["data"], nodes["compile periphery"]?.inputs["output list"]);
__connectPorts__(nodes["compile settings periphery"]?.outputs["data"], nodes["compile periphery"]?.inputs["compile settings"]);
return __createNode__(["compiled contracts","error"], (outputs) => {
  __connectPorts__(nodes["compile periphery"]?.outputs["compiled contracts"], outputs["compiled contracts"]);
__connectPorts__(nodes["compile periphery"]?.outputs["error"], outputs["error"]);
  return {
  /*
Receives the value called 'INIT_HASH_CODE' that is shared between the Factory and the Router.
This value can be retrieved from the Factory.
*/
"factory init hash": (data, tag) => {
  nodes["forwarder"]?.inputs["data"]?.(data, tag);
nodes["output list periphery"]?.inputs["read"]?.(data, tag);
nodes["compile settings periphery"]?.inputs["read"]?.(data, tag);
}
};
},
undefined,
{"factory init hash": "eaa9ae98-4f1e-4cd7-a7ac-6168540dbd12"},
{"compiled contracts": "d52dc2ed-e787-456a-aa02-c9aec0cc1858","error": "de6d47c9-a9f9-46fb-875d-7b16dd5cf777"},
path);
}
/*
Forwards signal received via `data` (input) to `data` (output).

Rarely necessary, and when it is used, it's usually to clean up nodes visually.
*/
__prototypes__["flow/Forwarder"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["data"], (outputs) => {
  
  return {
  /*
Receives data to be forwarded.
*/
"data": (data, tag) => {
  try {
    outputs.data(data, tag);
  } catch(error) {
    __tracePortError__(path, "b0fb4a37-09d5-462e-952a-c3ab29a47e82", error);
  }
}
};
},
(outputs) => {
  
},
{"data": "b0fb4a37-09d5-462e-952a-c3ab29a47e82"},
{"data": "0a9cd5b0-6de6-4c69-aa04-2816de994173"},
path);
  };
})();
/*
Holds the Uniswap V2 Core source code in a structured way.
*/
__prototypes__["blockchain/ethereum/Uniswap/v2/Periphery source code (instrumented)"] = (params, path = []) => {
  const nodes = {
  "contracts periphery instrumented": __prototypes__["data/Store"]({"read": params["read"],"data": {
  "v2-periphery": {
    "contracts": {
      "interfaces": {
        "IERC20.sol": "pragma solidity >=0.5.0;\r\n\r\ninterface IERC20 {\r\n    event Approval(address indexed owner, address indexed spender, uint value);\r\n    event Transfer(address indexed from, address indexed to, uint value);\r\n\r\n    function name() external view returns (string memory);\r\n    function symbol() external view returns (string memory);\r\n    function decimals() external view returns (uint8);\r\n    function totalSupply() external view returns (uint);\r\n    function balanceOf(address owner) external view returns (uint);\r\n    function allowance(address owner, address spender) external view returns (uint);\r\n\r\n    function approve(address spender, uint value) external returns (bool);\r\n    function transfer(address to, uint value) external returns (bool);\r\n    function transferFrom(address from, address to, uint value) external returns (bool);\r\n}\r\n",
        "IUniswapV2Migrator.sol": "pragma solidity >=0.5.0;\r\n\r\ninterface IUniswapV2Migrator {\r\n    function migrate(address token, uint amountTokenMin, uint amountETHMin, address to, uint deadline) external;\r\n}\r\n",
        "IUniswapV2Router01.sol": "pragma solidity >=0.6.2;\r\n\r\ninterface IUniswapV2Router01 {\r\n    function factory() external pure returns (address);\r\n    function WETH() external pure returns (address);\r\n\r\n    function addLiquidity(\r\n        address tokenA,\r\n        address tokenB,\r\n        uint amountADesired,\r\n        uint amountBDesired,\r\n        uint amountAMin,\r\n        uint amountBMin,\r\n        address to,\r\n        uint deadline\r\n    ) external returns (uint amountA, uint amountB, uint liquidity);\r\n    function addLiquidityETH(\r\n        address token,\r\n        uint amountTokenDesired,\r\n        uint amountTokenMin,\r\n        uint amountETHMin,\r\n        address to,\r\n        uint deadline\r\n    ) external payable returns (uint amountToken, uint amountETH, uint liquidity);\r\n    function removeLiquidity(\r\n        address tokenA,\r\n        address tokenB,\r\n        uint liquidity,\r\n        uint amountAMin,\r\n        uint amountBMin,\r\n        address to,\r\n        uint deadline\r\n    ) external returns (uint amountA, uint amountB);\r\n    function removeLiquidityETH(\r\n        address token,\r\n        uint liquidity,\r\n        uint amountTokenMin,\r\n        uint amountETHMin,\r\n        address to,\r\n        uint deadline\r\n    ) external returns (uint amountToken, uint amountETH);\r\n    function removeLiquidityWithPermit(\r\n        address tokenA,\r\n        address tokenB,\r\n        uint liquidity,\r\n        uint amountAMin,\r\n        uint amountBMin,\r\n        address to,\r\n        uint deadline,\r\n        bool approveMax, uint8 v, bytes32 r, bytes32 s\r\n    ) external returns (uint amountA, uint amountB);\r\n    function removeLiquidityETHWithPermit(\r\n        address token,\r\n        uint liquidity,\r\n        uint amountTokenMin,\r\n        uint amountETHMin,\r\n        address to,\r\n        uint deadline,\r\n        bool approveMax, uint8 v, bytes32 r, bytes32 s\r\n    ) external returns (uint amountToken, uint amountETH);\r\n    function swapExactTokensForTokens(\r\n        uint amountIn,\r\n        uint amountOutMin,\r\n        address[] calldata path,\r\n        address to,\r\n        uint deadline\r\n    ) external returns (uint[] memory amounts);\r\n    function swapTokensForExactTokens(\r\n        uint amountOut,\r\n        uint amountInMax,\r\n        address[] calldata path,\r\n        address to,\r\n        uint deadline\r\n    ) external returns (uint[] memory amounts);\r\n    function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)\r\n        external\r\n        payable\r\n        returns (uint[] memory amounts);\r\n    function swapTokensForExactETH(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)\r\n        external\r\n        returns (uint[] memory amounts);\r\n    function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)\r\n        external\r\n        returns (uint[] memory amounts);\r\n    function swapETHForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline)\r\n        external\r\n        payable\r\n        returns (uint[] memory amounts);\r\n\r\n    function quote(uint amountA, uint reserveA, uint reserveB) external pure returns (uint amountB);\r\n    function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut) external pure returns (uint amountOut);\r\n    function getAmountIn(uint amountOut, uint reserveIn, uint reserveOut) external pure returns (uint amountIn);\r\n    function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts);\r\n    function getAmountsIn(uint amountOut, address[] calldata path) external view returns (uint[] memory amounts);\r\n}\r\n",
        "IUniswapV2Router02.sol": "pragma solidity >=0.6.2;\r\n\r\nimport './IUniswapV2Router01.sol';\r\n\r\ninterface IUniswapV2Router02 is IUniswapV2Router01 {\r\n    function removeLiquidityETHSupportingFeeOnTransferTokens(\r\n        address token,\r\n        uint liquidity,\r\n        uint amountTokenMin,\r\n        uint amountETHMin,\r\n        address to,\r\n        uint deadline\r\n    ) external returns (uint amountETH);\r\n    function removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(\r\n        address token,\r\n        uint liquidity,\r\n        uint amountTokenMin,\r\n        uint amountETHMin,\r\n        address to,\r\n        uint deadline,\r\n        bool approveMax, uint8 v, bytes32 r, bytes32 s\r\n    ) external returns (uint amountETH);\r\n\r\n    function swapExactTokensForTokensSupportingFeeOnTransferTokens(\r\n        uint amountIn,\r\n        uint amountOutMin,\r\n        address[] calldata path,\r\n        address to,\r\n        uint deadline\r\n    ) external;\r\n    function swapExactETHForTokensSupportingFeeOnTransferTokens(\r\n        uint amountOutMin,\r\n        address[] calldata path,\r\n        address to,\r\n        uint deadline\r\n    ) external payable;\r\n    function swapExactTokensForETHSupportingFeeOnTransferTokens(\r\n        uint amountIn,\r\n        uint amountOutMin,\r\n        address[] calldata path,\r\n        address to,\r\n        uint deadline\r\n    ) external;\r\n}\r\n",
        "IWETH.sol": "pragma solidity >=0.5.0;\r\n\r\ninterface IWETH {\r\n    function deposit() external payable;\r\n    function transfer(address to, uint value) external returns (bool);\r\n    function withdraw(uint) external;\r\n}\r\n",
        "V1": {
          "IUniswapV1Exchange.sol": "pragma solidity >=0.5.0;\r\n\r\ninterface IUniswapV1Exchange {\r\n    function balanceOf(address owner) external view returns (uint);\r\n    function transferFrom(address from, address to, uint value) external returns (bool);\r\n    function removeLiquidity(uint, uint, uint, uint) external returns (uint, uint);\r\n    function tokenToEthSwapInput(uint, uint, uint) external returns (uint);\r\n    function ethToTokenSwapInput(uint, uint) external payable returns (uint);\r\n}\r\n",
          "IUniswapV1Factory.sol": "pragma solidity >=0.5.0;\r\n\r\ninterface IUniswapV1Factory {\r\n    function getExchange(address) external view returns (address);\r\n}\r\n"
        }
      },
      "libraries": {
        "SafeMath.sol": "pragma solidity =0.6.6;\r\n\r\n// a library for performing overflow-safe math, courtesy of DappHub (https://github.com/dapphub/ds-math)\r\n\r\nlibrary SafeMath {\r\n    function add(uint x, uint y) internal pure returns (uint z) {\r\n        require((z = x + y) >= x, 'ds-math-add-overflow');\r\n    }\r\n\r\n    function sub(uint x, uint y) internal pure returns (uint z) {\r\n        require((z = x - y) <= x, 'ds-math-sub-underflow');\r\n    }\r\n\r\n    function mul(uint x, uint y) internal pure returns (uint z) {\r\n        require(y == 0 || (z = x * y) / y == x, 'ds-math-mul-overflow');\r\n    }\r\n}\r\n",
        "UniswapV2Library.sol": "pragma solidity >=0.5.0;\r\n\r\nimport '@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol';\r\n\r\nimport \"./SafeMath.sol\";\r\n\r\nlibrary UniswapV2Library {\r\n    using SafeMath for uint;\r\n\r\n    // returns sorted token addresses, used to handle return values from pairs sorted in this order\r\n    function sortTokens(address tokenA, address tokenB) internal pure returns (address token0, address token1) {\r\n        require(tokenA != tokenB, 'UniswapV2Library: IDENTICAL_ADDRESSES');\r\n        (token0, token1) = tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);\r\n        require(token0 != address(0), 'UniswapV2Library: ZERO_ADDRESS');\r\n    }\r\n\r\n    // calculates the CREATE2 address for a pair without making any external calls\r\n    function pairFor(address factory, address tokenA, address tokenB) internal pure returns (address pair) {\r\n        (address token0, address token1) = sortTokens(tokenA, tokenB);\r\n        pair = address(uint(keccak256(abi.encodePacked(\r\n                hex'ff',\r\n                factory,\r\n                keccak256(abi.encodePacked(token0, token1)),\r\n                hex'###PLACEHOLDER_FOR_FACTORY_INIT_HASH###' // init code hash\r\n            ))));\r\n    }\r\n\r\n    // fetches and sorts the reserves for a pair\r\n    function getReserves(address factory, address tokenA, address tokenB) internal view returns (uint reserveA, uint reserveB) {\r\n        (address token0,) = sortTokens(tokenA, tokenB);\r\n        (uint reserve0, uint reserve1,) = IUniswapV2Pair(pairFor(factory, tokenA, tokenB)).getReserves();\r\n        (reserveA, reserveB) = tokenA == token0 ? (reserve0, reserve1) : (reserve1, reserve0);\r\n    }\r\n\r\n    // given some amount of an asset and pair reserves, returns an equivalent amount of the other asset\r\n    function quote(uint amountA, uint reserveA, uint reserveB) internal pure returns (uint amountB) {\r\n        require(amountA > 0, 'UniswapV2Library: INSUFFICIENT_AMOUNT');\r\n        require(reserveA > 0 && reserveB > 0, 'UniswapV2Library: INSUFFICIENT_LIQUIDITY');\r\n        amountB = amountA.mul(reserveB) / reserveA;\r\n    }\r\n\r\n    // given an input amount of an asset and pair reserves, returns the maximum output amount of the other asset\r\n    function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut) internal pure returns (uint amountOut) {\r\n        require(amountIn > 0, 'UniswapV2Library: INSUFFICIENT_INPUT_AMOUNT');\r\n        require(reserveIn > 0 && reserveOut > 0, 'UniswapV2Library: INSUFFICIENT_LIQUIDITY');\r\n        uint amountInWithFee = amountIn.mul(997);\r\n        uint numerator = amountInWithFee.mul(reserveOut);\r\n        uint denominator = reserveIn.mul(1000).add(amountInWithFee);\r\n        amountOut = numerator / denominator;\r\n    }\r\n\r\n    // given an output amount of an asset and pair reserves, returns a required input amount of the other asset\r\n    function getAmountIn(uint amountOut, uint reserveIn, uint reserveOut) internal pure returns (uint amountIn) {\r\n        require(amountOut > 0, 'UniswapV2Library: INSUFFICIENT_OUTPUT_AMOUNT');\r\n        require(reserveIn > 0 && reserveOut > 0, 'UniswapV2Library: INSUFFICIENT_LIQUIDITY');\r\n        uint numerator = reserveIn.mul(amountOut).mul(1000);\r\n        uint denominator = reserveOut.sub(amountOut).mul(997);\r\n        amountIn = (numerator / denominator).add(1);\r\n    }\r\n\r\n    // performs chained getAmountOut calculations on any number of pairs\r\n    function getAmountsOut(address factory, uint amountIn, address[] memory path) internal view returns (uint[] memory amounts) {\r\n        require(path.length >= 2, 'UniswapV2Library: INVALID_PATH');\r\n        amounts = new uint[](path.length);\r\n        amounts[0] = amountIn;\r\n        for (uint i; i < path.length - 1; i++) {\r\n            (uint reserveIn, uint reserveOut) = getReserves(factory, path[i], path[i + 1]);\r\n            amounts[i + 1] = getAmountOut(amounts[i], reserveIn, reserveOut);\r\n        }\r\n    }\r\n\r\n    // performs chained getAmountIn calculations on any number of pairs\r\n    function getAmountsIn(address factory, uint amountOut, address[] memory path) internal view returns (uint[] memory amounts) {\r\n        require(path.length >= 2, 'UniswapV2Library: INVALID_PATH');\r\n        amounts = new uint[](path.length);\r\n        amounts[amounts.length - 1] = amountOut;\r\n        for (uint i = path.length - 1; i > 0; i--) {\r\n            (uint reserveIn, uint reserveOut) = getReserves(factory, path[i - 1], path[i]);\r\n            amounts[i - 1] = getAmountIn(amounts[i], reserveIn, reserveOut);\r\n        }\r\n    }\r\n}\r\n",
        "UniswapV2LiquidityMathLibrary.sol": "pragma solidity >=0.5.0;\r\n\r\nimport '@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol';\r\nimport '@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol';\r\nimport '@uniswap/lib/contracts/libraries/Babylonian.sol';\r\nimport '@uniswap/lib/contracts/libraries/FullMath.sol';\r\n\r\nimport './SafeMath.sol';\r\nimport './UniswapV2Library.sol';\r\n\r\n// library containing some math for dealing with the liquidity shares of a pair, e.g. computing their exact value\r\n// in terms of the underlying tokens\r\nlibrary UniswapV2LiquidityMathLibrary {\r\n    using SafeMath for uint256;\r\n\r\n    // computes the direction and magnitude of the profit-maximizing trade\r\n    function computeProfitMaximizingTrade(\r\n        uint256 truePriceTokenA,\r\n        uint256 truePriceTokenB,\r\n        uint256 reserveA,\r\n        uint256 reserveB\r\n    ) pure internal returns (bool aToB, uint256 amountIn) {\r\n        aToB = FullMath.mulDiv(reserveA, truePriceTokenB, reserveB) < truePriceTokenA;\r\n\r\n        uint256 invariant = reserveA.mul(reserveB);\r\n\r\n        uint256 leftSide = Babylonian.sqrt(\r\n            FullMath.mulDiv(\r\n                invariant.mul(1000),\r\n                aToB ? truePriceTokenA : truePriceTokenB,\r\n                (aToB ? truePriceTokenB : truePriceTokenA).mul(997)\r\n            )\r\n        );\r\n        uint256 rightSide = (aToB ? reserveA.mul(1000) : reserveB.mul(1000)) / 997;\r\n\r\n        if (leftSide < rightSide) return (false, 0);\r\n\r\n        // compute the amount that must be sent to move the price to the profit-maximizing price\r\n        amountIn = leftSide.sub(rightSide);\r\n    }\r\n\r\n    // gets the reserves after an arbitrage moves the price to the profit-maximizing ratio given an externally observed true price\r\n    function getReservesAfterArbitrage(\r\n        address factory,\r\n        address tokenA,\r\n        address tokenB,\r\n        uint256 truePriceTokenA,\r\n        uint256 truePriceTokenB\r\n    ) view internal returns (uint256 reserveA, uint256 reserveB) {\r\n        // first get reserves before the swap\r\n        (reserveA, reserveB) = UniswapV2Library.getReserves(factory, tokenA, tokenB);\r\n\r\n        require(reserveA > 0 && reserveB > 0, 'UniswapV2ArbitrageLibrary: ZERO_PAIR_RESERVES');\r\n\r\n        // then compute how much to swap to arb to the true price\r\n        (bool aToB, uint256 amountIn) = computeProfitMaximizingTrade(truePriceTokenA, truePriceTokenB, reserveA, reserveB);\r\n\r\n        if (amountIn == 0) {\r\n            return (reserveA, reserveB);\r\n        }\r\n\r\n        // now affect the trade to the reserves\r\n        if (aToB) {\r\n            uint amountOut = UniswapV2Library.getAmountOut(amountIn, reserveA, reserveB);\r\n            reserveA += amountIn;\r\n            reserveB -= amountOut;\r\n        } else {\r\n            uint amountOut = UniswapV2Library.getAmountOut(amountIn, reserveB, reserveA);\r\n            reserveB += amountIn;\r\n            reserveA -= amountOut;\r\n        }\r\n    }\r\n\r\n    // computes liquidity value given all the parameters of the pair\r\n    function computeLiquidityValue(\r\n        uint256 reservesA,\r\n        uint256 reservesB,\r\n        uint256 totalSupply,\r\n        uint256 liquidityAmount,\r\n        bool feeOn,\r\n        uint kLast\r\n    ) internal pure returns (uint256 tokenAAmount, uint256 tokenBAmount) {\r\n        if (feeOn && kLast > 0) {\r\n            uint rootK = Babylonian.sqrt(reservesA.mul(reservesB));\r\n            uint rootKLast = Babylonian.sqrt(kLast);\r\n            if (rootK > rootKLast) {\r\n                uint numerator1 = totalSupply;\r\n                uint numerator2 = rootK.sub(rootKLast);\r\n                uint denominator = rootK.mul(5).add(rootKLast);\r\n                uint feeLiquidity = FullMath.mulDiv(numerator1, numerator2, denominator);\r\n                totalSupply = totalSupply.add(feeLiquidity);\r\n            }\r\n        }\r\n        return (reservesA.mul(liquidityAmount) / totalSupply, reservesB.mul(liquidityAmount) / totalSupply);\r\n    }\r\n\r\n    // get all current parameters from the pair and compute value of a liquidity amount\r\n    // **note this is subject to manipulation, e.g. sandwich attacks**. prefer passing a manipulation resistant price to\r\n    // #getLiquidityValueAfterArbitrageToPrice\r\n    function getLiquidityValue(\r\n        address factory,\r\n        address tokenA,\r\n        address tokenB,\r\n        uint256 liquidityAmount\r\n    ) internal view returns (uint256 tokenAAmount, uint256 tokenBAmount) {\r\n        (uint256 reservesA, uint256 reservesB) = UniswapV2Library.getReserves(factory, tokenA, tokenB);\r\n        IUniswapV2Pair pair = IUniswapV2Pair(UniswapV2Library.pairFor(factory, tokenA, tokenB));\r\n        bool feeOn = IUniswapV2Factory(factory).feeTo() != address(0);\r\n        uint kLast = feeOn ? pair.kLast() : 0;\r\n        uint totalSupply = pair.totalSupply();\r\n        return computeLiquidityValue(reservesA, reservesB, totalSupply, liquidityAmount, feeOn, kLast);\r\n    }\r\n\r\n    // given two tokens, tokenA and tokenB, and their \"true price\", i.e. the observed ratio of value of token A to token B,\r\n    // and a liquidity amount, returns the value of the liquidity in terms of tokenA and tokenB\r\n    function getLiquidityValueAfterArbitrageToPrice(\r\n        address factory,\r\n        address tokenA,\r\n        address tokenB,\r\n        uint256 truePriceTokenA,\r\n        uint256 truePriceTokenB,\r\n        uint256 liquidityAmount\r\n    ) internal view returns (\r\n        uint256 tokenAAmount,\r\n        uint256 tokenBAmount\r\n    ) {\r\n        bool feeOn = IUniswapV2Factory(factory).feeTo() != address(0);\r\n        IUniswapV2Pair pair = IUniswapV2Pair(UniswapV2Library.pairFor(factory, tokenA, tokenB));\r\n        uint kLast = feeOn ? pair.kLast() : 0;\r\n        uint totalSupply = pair.totalSupply();\r\n\r\n        // this also checks that totalSupply > 0\r\n        require(totalSupply >= liquidityAmount && liquidityAmount > 0, 'ComputeLiquidityValue: LIQUIDITY_AMOUNT');\r\n\r\n        (uint reservesA, uint reservesB) = getReservesAfterArbitrage(factory, tokenA, tokenB, truePriceTokenA, truePriceTokenB);\r\n\r\n        return computeLiquidityValue(reservesA, reservesB, totalSupply, liquidityAmount, feeOn, kLast);\r\n    }\r\n}\r\n",
        "UniswapV2OracleLibrary.sol": "pragma solidity >=0.5.0;\r\n\r\nimport '@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol';\r\nimport '@uniswap/lib/contracts/libraries/FixedPoint.sol';\r\n\r\n// library with helper methods for oracles that are concerned with computing average prices\r\nlibrary UniswapV2OracleLibrary {\r\n    using FixedPoint for *;\r\n\r\n    // helper function that returns the current block timestamp within the range of uint32, i.e. [0, 2**32 - 1]\r\n    function currentBlockTimestamp() internal view returns (uint32) {\r\n        return uint32(block.timestamp % 2 ** 32);\r\n    }\r\n\r\n    // produces the cumulative price using counterfactuals to save gas and avoid a call to sync.\r\n    function currentCumulativePrices(\r\n        address pair\r\n    ) internal view returns (uint price0Cumulative, uint price1Cumulative, uint32 blockTimestamp) {\r\n        blockTimestamp = currentBlockTimestamp();\r\n        price0Cumulative = IUniswapV2Pair(pair).price0CumulativeLast();\r\n        price1Cumulative = IUniswapV2Pair(pair).price1CumulativeLast();\r\n\r\n        // if time has elapsed since the last update on the pair, mock the accumulated price values\r\n        (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast) = IUniswapV2Pair(pair).getReserves();\r\n        if (blockTimestampLast != blockTimestamp) {\r\n            // subtraction overflow is desired\r\n            uint32 timeElapsed = blockTimestamp - blockTimestampLast;\r\n            // addition overflow is desired\r\n            // counterfactual\r\n            price0Cumulative += uint(FixedPoint.fraction(reserve1, reserve0)._x) * timeElapsed;\r\n            // counterfactual\r\n            price1Cumulative += uint(FixedPoint.fraction(reserve0, reserve1)._x) * timeElapsed;\r\n        }\r\n    }\r\n}\r\n"
      },
      "test": {
        "DeflatingERC20.sol": "pragma solidity =0.6.6;\r\n\r\nimport '../libraries/SafeMath.sol';\r\n\r\ncontract DeflatingERC20 {\r\n    using SafeMath for uint;\r\n\r\n    string public constant name = 'Deflating Test Token';\r\n    string public constant symbol = 'DTT';\r\n    uint8 public constant decimals = 18;\r\n    uint  public totalSupply;\r\n    mapping(address => uint) public balanceOf;\r\n    mapping(address => mapping(address => uint)) public allowance;\r\n\r\n    bytes32 public DOMAIN_SEPARATOR;\r\n    // keccak256(\"Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)\");\r\n    bytes32 public constant PERMIT_TYPEHASH = 0x6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9;\r\n    mapping(address => uint) public nonces;\r\n\r\n    event Approval(address indexed owner, address indexed spender, uint value);\r\n    event Transfer(address indexed from, address indexed to, uint value);\r\n\r\n    constructor(uint _totalSupply) public {\r\n        uint chainId;\r\n        assembly {\r\n            chainId := chainid()\r\n        }\r\n        DOMAIN_SEPARATOR = keccak256(\r\n            abi.encode(\r\n                keccak256('EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)'),\r\n                keccak256(bytes(name)),\r\n                keccak256(bytes('1')),\r\n                chainId,\r\n                address(this)\r\n            )\r\n        );\r\n        _mint(msg.sender, _totalSupply);\r\n    }\r\n\r\n    function _mint(address to, uint value) internal {\r\n        totalSupply = totalSupply.add(value);\r\n        balanceOf[to] = balanceOf[to].add(value);\r\n        emit Transfer(address(0), to, value);\r\n    }\r\n\r\n    function _burn(address from, uint value) internal {\r\n        balanceOf[from] = balanceOf[from].sub(value);\r\n        totalSupply = totalSupply.sub(value);\r\n        emit Transfer(from, address(0), value);\r\n    }\r\n\r\n    function _approve(address owner, address spender, uint value) private {\r\n        allowance[owner][spender] = value;\r\n        emit Approval(owner, spender, value);\r\n    }\r\n\r\n    function _transfer(address from, address to, uint value) private {\r\n        uint burnAmount = value / 100;\r\n        _burn(from, burnAmount);\r\n        uint transferAmount = value.sub(burnAmount);\r\n        balanceOf[from] = balanceOf[from].sub(transferAmount);\r\n        balanceOf[to] = balanceOf[to].add(transferAmount);\r\n        emit Transfer(from, to, transferAmount);\r\n    }\r\n\r\n    function approve(address spender, uint value) external returns (bool) {\r\n        _approve(msg.sender, spender, value);\r\n        return true;\r\n    }\r\n\r\n    function transfer(address to, uint value) external returns (bool) {\r\n        _transfer(msg.sender, to, value);\r\n        return true;\r\n    }\r\n\r\n    function transferFrom(address from, address to, uint value) external returns (bool) {\r\n        if (allowance[from][msg.sender] != uint(-1)) {\r\n            allowance[from][msg.sender] = allowance[from][msg.sender].sub(value);\r\n        }\r\n        _transfer(from, to, value);\r\n        return true;\r\n    }\r\n\r\n    function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external {\r\n        require(deadline >= block.timestamp, 'EXPIRED');\r\n        bytes32 digest = keccak256(\r\n            abi.encodePacked(\r\n                '\\x19\\x01',\r\n                DOMAIN_SEPARATOR,\r\n                keccak256(abi.encode(PERMIT_TYPEHASH, owner, spender, value, nonces[owner]++, deadline))\r\n            )\r\n        );\r\n        address recoveredAddress = ecrecover(digest, v, r, s);\r\n        require(recoveredAddress != address(0) && recoveredAddress == owner, 'INVALID_SIGNATURE');\r\n        _approve(owner, spender, value);\r\n    }\r\n}\r\n",
        "ERC20.sol": "pragma solidity =0.6.6;\r\n\r\nimport '../libraries/SafeMath.sol';\r\n\r\ncontract ERC20 {\r\n    using SafeMath for uint;\r\n\r\n    string public constant name = 'Test Token';\r\n    string public constant symbol = 'TT';\r\n    uint8 public constant decimals = 18;\r\n    uint  public totalSupply;\r\n    mapping(address => uint) public balanceOf;\r\n    mapping(address => mapping(address => uint)) public allowance;\r\n\r\n    bytes32 public DOMAIN_SEPARATOR;\r\n    // keccak256(\"Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)\");\r\n    bytes32 public constant PERMIT_TYPEHASH = 0x6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9;\r\n    mapping(address => uint) public nonces;\r\n\r\n    event Approval(address indexed owner, address indexed spender, uint value);\r\n    event Transfer(address indexed from, address indexed to, uint value);\r\n\r\n    constructor(uint _totalSupply) public {\r\n        uint chainId;\r\n        assembly {\r\n            chainId := chainid()\r\n        }\r\n        DOMAIN_SEPARATOR = keccak256(\r\n            abi.encode(\r\n                keccak256('EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)'),\r\n                keccak256(bytes(name)),\r\n                keccak256(bytes('1')),\r\n                chainId,\r\n                address(this)\r\n            )\r\n        );\r\n        _mint(msg.sender, _totalSupply);\r\n    }\r\n\r\n    function _mint(address to, uint value) internal {\r\n        totalSupply = totalSupply.add(value);\r\n        balanceOf[to] = balanceOf[to].add(value);\r\n        emit Transfer(address(0), to, value);\r\n    }\r\n\r\n    function _burn(address from, uint value) internal {\r\n        balanceOf[from] = balanceOf[from].sub(value);\r\n        totalSupply = totalSupply.sub(value);\r\n        emit Transfer(from, address(0), value);\r\n    }\r\n\r\n    function _approve(address owner, address spender, uint value) private {\r\n        allowance[owner][spender] = value;\r\n        emit Approval(owner, spender, value);\r\n    }\r\n\r\n    function _transfer(address from, address to, uint value) private {\r\n        balanceOf[from] = balanceOf[from].sub(value);\r\n        balanceOf[to] = balanceOf[to].add(value);\r\n        emit Transfer(from, to, value);\r\n    }\r\n\r\n    function approve(address spender, uint value) external returns (bool) {\r\n        _approve(msg.sender, spender, value);\r\n        return true;\r\n    }\r\n\r\n    function transfer(address to, uint value) external returns (bool) {\r\n        _transfer(msg.sender, to, value);\r\n        return true;\r\n    }\r\n\r\n    function transferFrom(address from, address to, uint value) external returns (bool) {\r\n        if (allowance[from][msg.sender] != uint(-1)) {\r\n            allowance[from][msg.sender] = allowance[from][msg.sender].sub(value);\r\n        }\r\n        _transfer(from, to, value);\r\n        return true;\r\n    }\r\n\r\n    function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external {\r\n        require(deadline >= block.timestamp, 'EXPIRED');\r\n        bytes32 digest = keccak256(\r\n            abi.encodePacked(\r\n                '\\x19\\x01',\r\n                DOMAIN_SEPARATOR,\r\n                keccak256(abi.encode(PERMIT_TYPEHASH, owner, spender, value, nonces[owner]++, deadline))\r\n            )\r\n        );\r\n        address recoveredAddress = ecrecover(digest, v, r, s);\r\n        require(recoveredAddress != address(0) && recoveredAddress == owner, 'INVALID_SIGNATURE');\r\n        _approve(owner, spender, value);\r\n    }\r\n}\r\n",
        "RouterEventEmitter.sol": "pragma solidity =0.6.6;\r\n\r\nimport '../interfaces/IUniswapV2Router01.sol';\r\n\r\ncontract RouterEventEmitter {\r\n    event Amounts(uint[] amounts);\r\n\r\n    receive() external payable {}\r\n\r\n    function swapExactTokensForTokens(\r\n        address router,\r\n        uint amountIn,\r\n        uint amountOutMin,\r\n        address[] calldata path,\r\n        address to,\r\n        uint deadline\r\n    ) external {\r\n        (bool success, bytes memory returnData) = router.delegatecall(abi.encodeWithSelector(\r\n            IUniswapV2Router01(router).swapExactTokensForTokens.selector, amountIn, amountOutMin, path, to, deadline\r\n        ));\r\n        assert(success);\r\n        emit Amounts(abi.decode(returnData, (uint[])));\r\n    }\r\n\r\n    function swapTokensForExactTokens(\r\n        address router,\r\n        uint amountOut,\r\n        uint amountInMax,\r\n        address[] calldata path,\r\n        address to,\r\n        uint deadline\r\n    ) external {\r\n        (bool success, bytes memory returnData) = router.delegatecall(abi.encodeWithSelector(\r\n            IUniswapV2Router01(router).swapTokensForExactTokens.selector, amountOut, amountInMax, path, to, deadline\r\n        ));\r\n        assert(success);\r\n        emit Amounts(abi.decode(returnData, (uint[])));\r\n    }\r\n\r\n    function swapExactETHForTokens(\r\n        address router,\r\n        uint amountOutMin,\r\n        address[] calldata path,\r\n        address to,\r\n        uint deadline\r\n    ) external payable {\r\n        (bool success, bytes memory returnData) = router.delegatecall(abi.encodeWithSelector(\r\n            IUniswapV2Router01(router).swapExactETHForTokens.selector, amountOutMin, path, to, deadline\r\n        ));\r\n        assert(success);\r\n        emit Amounts(abi.decode(returnData, (uint[])));\r\n    }\r\n\r\n    function swapTokensForExactETH(\r\n        address router,\r\n        uint amountOut,\r\n        uint amountInMax,\r\n        address[] calldata path,\r\n        address to,\r\n        uint deadline\r\n    ) external {\r\n        (bool success, bytes memory returnData) = router.delegatecall(abi.encodeWithSelector(\r\n            IUniswapV2Router01(router).swapTokensForExactETH.selector, amountOut, amountInMax, path, to, deadline\r\n        ));\r\n        assert(success);\r\n        emit Amounts(abi.decode(returnData, (uint[])));\r\n    }\r\n\r\n    function swapExactTokensForETH(\r\n        address router,\r\n        uint amountIn,\r\n        uint amountOutMin,\r\n        address[] calldata path,\r\n        address to,\r\n        uint deadline\r\n    ) external {\r\n        (bool success, bytes memory returnData) = router.delegatecall(abi.encodeWithSelector(\r\n            IUniswapV2Router01(router).swapExactTokensForETH.selector, amountIn, amountOutMin, path, to, deadline\r\n        ));\r\n        assert(success);\r\n        emit Amounts(abi.decode(returnData, (uint[])));\r\n    }\r\n\r\n    function swapETHForExactTokens(\r\n        address router,\r\n        uint amountOut,\r\n        address[] calldata path,\r\n        address to,\r\n        uint deadline\r\n    ) external payable {\r\n        (bool success, bytes memory returnData) = router.delegatecall(abi.encodeWithSelector(\r\n            IUniswapV2Router01(router).swapETHForExactTokens.selector, amountOut, path, to, deadline\r\n        ));\r\n        assert(success);\r\n        emit Amounts(abi.decode(returnData, (uint[])));\r\n    }\r\n}\r\n",
        "WETH9.sol": "// Copyright (C) 2015, 2016, 2017 Dapphub\r\n\r\n// This program is free software: you can redistribute it and/or modify\r\n// it under the terms of the GNU General Public License as published by\r\n// the Free Software Foundation, either version 3 of the License, or\r\n// (at your option) any later version.\r\n\r\n// This program is distributed in the hope that it will be useful,\r\n// but WITHOUT ANY WARRANTY; without even the implied warranty of\r\n// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\r\n// GNU General Public License for more details.\r\n\r\n// You should have received a copy of the GNU General Public License\r\n// along with this program.  If not, see <http://www.gnu.org/licenses/>.\r\n\r\npragma solidity =0.6.6;\r\n\r\ncontract WETH9 {\r\n    string public name     = \"Wrapped Ether\";\r\n    string public symbol   = \"WETH\";\r\n    uint8  public decimals = 18;\r\n\r\n    event  Approval(address indexed src, address indexed guy, uint wad);\r\n    event  Transfer(address indexed src, address indexed dst, uint wad);\r\n    event  Deposit(address indexed dst, uint wad);\r\n    event  Withdrawal(address indexed src, uint wad);\r\n\r\n    mapping (address => uint)                       public  balanceOf;\r\n    mapping (address => mapping (address => uint))  public  allowance;\r\n\r\n    // function() public payable {\r\n    //     deposit();\r\n    // }\r\n    function deposit() public payable {\r\n        balanceOf[msg.sender] += msg.value;\r\n        emit Deposit(msg.sender, msg.value);\r\n    }\r\n    function withdraw(uint wad) public {\r\n        require(balanceOf[msg.sender] >= wad, \"\");\r\n        balanceOf[msg.sender] -= wad;\r\n        msg.sender.transfer(wad);\r\n        emit Withdrawal(msg.sender, wad);\r\n    }\r\n\r\n    function totalSupply() public view returns (uint) {\r\n        return address(this).balance;\r\n    }\r\n\r\n    function approve(address guy, uint wad) public returns (bool) {\r\n        allowance[msg.sender][guy] = wad;\r\n        emit Approval(msg.sender, guy, wad);\r\n        return true;\r\n    }\r\n\r\n    function transfer(address dst, uint wad) public returns (bool) {\r\n        return transferFrom(msg.sender, dst, wad);\r\n    }\r\n\r\n    function transferFrom(address src, address dst, uint wad)\r\n        public\r\n        returns (bool)\r\n    {\r\n        require(balanceOf[src] >= wad, \"\");\r\n\r\n        if (src != msg.sender && allowance[src][msg.sender] != uint(-1)) {\r\n            require(allowance[src][msg.sender] >= wad, \"\");\r\n            allowance[src][msg.sender] -= wad;\r\n        }\r\n\r\n        balanceOf[src] -= wad;\r\n        balanceOf[dst] += wad;\r\n\r\n        emit Transfer(src, dst, wad);\r\n\r\n        return true;\r\n    }\r\n}\r\n\r\n\r\n/*\r\n                    GNU GENERAL PUBLIC LICENSE\r\n                       Version 3, 29 June 2007\r\n\r\n Copyright (C) 2007 Free Software Foundation, Inc. <http://fsf.org/>\r\n Everyone is permitted to copy and distribute verbatim copies\r\n of this license document, but changing it is not allowed.\r\n\r\n                            Preamble\r\n\r\n  The GNU General Public License is a free, copyleft license for\r\nsoftware and other kinds of works.\r\n\r\n  The licenses for most software and other practical works are designed\r\nto take away your freedom to share and change the works.  By contrast,\r\nthe GNU General Public License is intended to guarantee your freedom to\r\nshare and change all versions of a program--to make sure it remains free\r\nsoftware for all its users.  We, the Free Software Foundation, use the\r\nGNU General Public License for most of our software; it applies also to\r\nany other work released this way by its authors.  You can apply it to\r\nyour programs, too.\r\n\r\n  When we speak of free software, we are referring to freedom, not\r\nprice.  Our General Public Licenses are designed to make sure that you\r\nhave the freedom to distribute copies of free software (and charge for\r\nthem if you wish), that you receive source code or can get it if you\r\nwant it, that you can change the software or use pieces of it in new\r\nfree programs, and that you know you can do these things.\r\n\r\n  To protect your rights, we need to prevent others from denying you\r\nthese rights or asking you to surrender the rights.  Therefore, you have\r\ncertain responsibilities if you distribute copies of the software, or if\r\nyou modify it: responsibilities to respect the freedom of others.\r\n\r\n  For example, if you distribute copies of such a program, whether\r\ngratis or for a fee, you must pass on to the recipients the same\r\nfreedoms that you received.  You must make sure that they, too, receive\r\nor can get the source code.  And you must show them these terms so they\r\nknow their rights.\r\n\r\n  Developers that use the GNU GPL protect your rights with two steps:\r\n(1) assert copyright on the software, and (2) offer you this License\r\ngiving you legal permission to copy, distribute and/or modify it.\r\n\r\n  For the developers' and authors' protection, the GPL clearly explains\r\nthat there is no warranty for this free software.  For both users' and\r\nauthors' sake, the GPL requires that modified versions be marked as\r\nchanged, so that their problems will not be attributed erroneously to\r\nauthors of previous versions.\r\n\r\n  Some devices are designed to deny users access to install or run\r\nmodified versions of the software inside them, although the manufacturer\r\ncan do so.  This is fundamentally incompatible with the aim of\r\nprotecting users' freedom to change the software.  The systematic\r\npattern of such abuse occurs in the area of products for individuals to\r\nuse, which is precisely where it is most unacceptable.  Therefore, we\r\nhave designed this version of the GPL to prohibit the practice for those\r\nproducts.  If such problems arise substantially in other domains, we\r\nstand ready to extend this provision to those domains in future versions\r\nof the GPL, as needed to protect the freedom of users.\r\n\r\n  Finally, every program is threatened constantly by software patents.\r\nStates should not allow patents to restrict development and use of\r\nsoftware on general-purpose computers, but in those that do, we wish to\r\navoid the special danger that patents applied to a free program could\r\nmake it effectively proprietary.  To prevent this, the GPL assures that\r\npatents cannot be used to render the program non-free.\r\n\r\n  The precise terms and conditions for copying, distribution and\r\nmodification follow.\r\n\r\n                       TERMS AND CONDITIONS\r\n\r\n  0. Definitions.\r\n\r\n  \"This License\" refers to version 3 of the GNU General Public License.\r\n\r\n  \"Copyright\" also means copyright-like laws that apply to other kinds of\r\nworks, such as semiconductor masks.\r\n\r\n  \"The Program\" refers to any copyrightable work licensed under this\r\nLicense.  Each licensee is addressed as \"you\".  \"Licensees\" and\r\n\"recipients\" may be individuals or organizations.\r\n\r\n  To \"modify\" a work means to copy from or adapt all or part of the work\r\nin a fashion requiring copyright permission, other than the making of an\r\nexact copy.  The resulting work is called a \"modified version\" of the\r\nearlier work or a work \"based on\" the earlier work.\r\n\r\n  A \"covered work\" means either the unmodified Program or a work based\r\non the Program.\r\n\r\n  To \"propagate\" a work means to do anything with it that, without\r\npermission, would make you directly or secondarily liable for\r\ninfringement under applicable copyright law, except executing it on a\r\ncomputer or modifying a private copy.  Propagation includes copying,\r\ndistribution (with or without modification), making available to the\r\npublic, and in some countries other activities as well.\r\n\r\n  To \"convey\" a work means any kind of propagation that enables other\r\nparties to make or receive copies.  Mere interaction with a user through\r\na computer network, with no transfer of a copy, is not conveying.\r\n\r\n  An interactive user interface displays \"Appropriate Legal Notices\"\r\nto the extent that it includes a convenient and prominently visible\r\nfeature that (1) displays an appropriate copyright notice, and (2)\r\ntells the user that there is no warranty for the work (except to the\r\nextent that warranties are provided), that licensees may convey the\r\nwork under this License, and how to view a copy of this License.  If\r\nthe interface presents a list of user commands or options, such as a\r\nmenu, a prominent item in the list meets this criterion.\r\n\r\n  1. Source Code.\r\n\r\n  The \"source code\" for a work means the preferred form of the work\r\nfor making modifications to it.  \"Object code\" means any non-source\r\nform of a work.\r\n\r\n  A \"Standard Interface\" means an interface that either is an official\r\nstandard defined by a recognized standards body, or, in the case of\r\ninterfaces specified for a particular programming language, one that\r\nis widely used among developers working in that language.\r\n\r\n  The \"System Libraries\" of an executable work include anything, other\r\nthan the work as a whole, that (a) is included in the normal form of\r\npackaging a Major Component, but which is not part of that Major\r\nComponent, and (b) serves only to enable use of the work with that\r\nMajor Component, or to implement a Standard Interface for which an\r\nimplementation is available to the public in source code form.  A\r\n\"Major Component\", in this context, means a major essential component\r\n(kernel, window system, and so on) of the specific operating system\r\n(if any) on which the executable work runs, or a compiler used to\r\nproduce the work, or an object code interpreter used to run it.\r\n\r\n  The \"Corresponding Source\" for a work in object code form means all\r\nthe source code needed to generate, install, and (for an executable\r\nwork) run the object code and to modify the work, including scripts to\r\ncontrol those activities.  However, it does not include the work's\r\nSystem Libraries, or general-purpose tools or generally available free\r\nprograms which are used unmodified in performing those activities but\r\nwhich are not part of the work.  For example, Corresponding Source\r\nincludes interface definition files associated with source files for\r\nthe work, and the source code for shared libraries and dynamically\r\nlinked subprograms that the work is specifically designed to require,\r\nsuch as by intimate data communication or control flow between those\r\nsubprograms and other parts of the work.\r\n\r\n  The Corresponding Source need not include anything that users\r\ncan regenerate automatically from other parts of the Corresponding\r\nSource.\r\n\r\n  The Corresponding Source for a work in source code form is that\r\nsame work.\r\n\r\n  2. Basic Permissions.\r\n\r\n  All rights granted under this License are granted for the term of\r\ncopyright on the Program, and are irrevocable provided the stated\r\nconditions are met.  This License explicitly affirms your unlimited\r\npermission to run the unmodified Program.  The output from running a\r\ncovered work is covered by this License only if the output, given its\r\ncontent, constitutes a covered work.  This License acknowledges your\r\nrights of fair use or other equivalent, as provided by copyright law.\r\n\r\n  You may make, run and propagate covered works that you do not\r\nconvey, without conditions so long as your license otherwise remains\r\nin force.  You may convey covered works to others for the sole purpose\r\nof having them make modifications exclusively for you, or provide you\r\nwith facilities for running those works, provided that you comply with\r\nthe terms of this License in conveying all material for which you do\r\nnot control copyright.  Those thus making or running the covered works\r\nfor you must do so exclusively on your behalf, under your direction\r\nand control, on terms that prohibit them from making any copies of\r\nyour copyrighted material outside their relationship with you.\r\n\r\n  Conveying under any other circumstances is permitted solely under\r\nthe conditions stated below.  Sublicensing is not allowed; section 10\r\nmakes it unnecessary.\r\n\r\n  3. Protecting Users' Legal Rights From Anti-Circumvention Law.\r\n\r\n  No covered work shall be deemed part of an effective technological\r\nmeasure under any applicable law fulfilling obligations under article\r\n11 of the WIPO copyright treaty adopted on 20 December 1996, or\r\nsimilar laws prohibiting or restricting circumvention of such\r\nmeasures.\r\n\r\n  When you convey a covered work, you waive any legal power to forbid\r\ncircumvention of technological measures to the extent such circumvention\r\nis effected by exercising rights under this License with respect to\r\nthe covered work, and you disclaim any intention to limit operation or\r\nmodification of the work as a means of enforcing, against the work's\r\nusers, your or third parties' legal rights to forbid circumvention of\r\ntechnological measures.\r\n\r\n  4. Conveying Verbatim Copies.\r\n\r\n  You may convey verbatim copies of the Program's source code as you\r\nreceive it, in any medium, provided that you conspicuously and\r\nappropriately publish on each copy an appropriate copyright notice;\r\nkeep intact all notices stating that this License and any\r\nnon-permissive terms added in accord with section 7 apply to the code;\r\nkeep intact all notices of the absence of any warranty; and give all\r\nrecipients a copy of this License along with the Program.\r\n\r\n  You may charge any price or no price for each copy that you convey,\r\nand you may offer support or warranty protection for a fee.\r\n\r\n  5. Conveying Modified Source Versions.\r\n\r\n  You may convey a work based on the Program, or the modifications to\r\nproduce it from the Program, in the form of source code under the\r\nterms of section 4, provided that you also meet all of these conditions:\r\n\r\n    a) The work must carry prominent notices stating that you modified\r\n    it, and giving a relevant date.\r\n\r\n    b) The work must carry prominent notices stating that it is\r\n    released under this License and any conditions added under section\r\n    7.  This requirement modifies the requirement in section 4 to\r\n    \"keep intact all notices\".\r\n\r\n    c) You must license the entire work, as a whole, under this\r\n    License to anyone who comes into possession of a copy.  This\r\n    License will therefore apply, along with any applicable section 7\r\n    additional terms, to the whole of the work, and all its parts,\r\n    regardless of how they are packaged.  This License gives no\r\n    permission to license the work in any other way, but it does not\r\n    invalidate such permission if you have separately received it.\r\n\r\n    d) If the work has interactive user interfaces, each must display\r\n    Appropriate Legal Notices; however, if the Program has interactive\r\n    interfaces that do not display Appropriate Legal Notices, your\r\n    work need not make them do so.\r\n\r\n  A compilation of a covered work with other separate and independent\r\nworks, which are not by their nature extensions of the covered work,\r\nand which are not combined with it such as to form a larger program,\r\nin or on a volume of a storage or distribution medium, is called an\r\n\"aggregate\" if the compilation and its resulting copyright are not\r\nused to limit the access or legal rights of the compilation's users\r\nbeyond what the individual works permit.  Inclusion of a covered work\r\nin an aggregate does not cause this License to apply to the other\r\nparts of the aggregate.\r\n\r\n  6. Conveying Non-Source Forms.\r\n\r\n  You may convey a covered work in object code form under the terms\r\nof sections 4 and 5, provided that you also convey the\r\nmachine-readable Corresponding Source under the terms of this License,\r\nin one of these ways:\r\n\r\n    a) Convey the object code in, or embodied in, a physical product\r\n    (including a physical distribution medium), accompanied by the\r\n    Corresponding Source fixed on a durable physical medium\r\n    customarily used for software interchange.\r\n\r\n    b) Convey the object code in, or embodied in, a physical product\r\n    (including a physical distribution medium), accompanied by a\r\n    written offer, valid for at least three years and valid for as\r\n    long as you offer spare parts or customer support for that product\r\n    model, to give anyone who possesses the object code either (1) a\r\n    copy of the Corresponding Source for all the software in the\r\n    product that is covered by this License, on a durable physical\r\n    medium customarily used for software interchange, for a price no\r\n    more than your reasonable cost of physically performing this\r\n    conveying of source, or (2) access to copy the\r\n    Corresponding Source from a network server at no charge.\r\n\r\n    c) Convey individual copies of the object code with a copy of the\r\n    written offer to provide the Corresponding Source.  This\r\n    alternative is allowed only occasionally and noncommercially, and\r\n    only if you received the object code with such an offer, in accord\r\n    with subsection 6b.\r\n\r\n    d) Convey the object code by offering access from a designated\r\n    place (gratis or for a charge), and offer equivalent access to the\r\n    Corresponding Source in the same way through the same place at no\r\n    further charge.  You need not require recipients to copy the\r\n    Corresponding Source along with the object code.  If the place to\r\n    copy the object code is a network server, the Corresponding Source\r\n    may be on a different server (operated by you or a third party)\r\n    that supports equivalent copying facilities, provided you maintain\r\n    clear directions next to the object code saying where to find the\r\n    Corresponding Source.  Regardless of what server hosts the\r\n    Corresponding Source, you remain obligated to ensure that it is\r\n    available for as long as needed to satisfy these requirements.\r\n\r\n    e) Convey the object code using peer-to-peer transmission, provided\r\n    you inform other peers where the object code and Corresponding\r\n    Source of the work are being offered to the general public at no\r\n    charge under subsection 6d.\r\n\r\n  A separable portion of the object code, whose source code is excluded\r\nfrom the Corresponding Source as a System Library, need not be\r\nincluded in conveying the object code work.\r\n\r\n  A \"User Product\" is either (1) a \"consumer product\", which means any\r\ntangible personal property which is normally used for personal, family,\r\nor household purposes, or (2) anything designed or sold for incorporation\r\ninto a dwelling.  In determining whether a product is a consumer product,\r\ndoubtful cases shall be resolved in favor of coverage.  For a particular\r\nproduct received by a particular user, \"normally used\" refers to a\r\ntypical or common use of that class of product, regardless of the status\r\nof the particular user or of the way in which the particular user\r\nactually uses, or expects or is expected to use, the product.  A product\r\nis a consumer product regardless of whether the product has substantial\r\ncommercial, industrial or non-consumer uses, unless such uses represent\r\nthe only significant mode of use of the product.\r\n\r\n  \"Installation Information\" for a User Product means any methods,\r\nprocedures, authorization keys, or other information required to install\r\nand execute modified versions of a covered work in that User Product from\r\na modified version of its Corresponding Source.  The information must\r\nsuffice to ensure that the continued functioning of the modified object\r\ncode is in no case prevented or interfered with solely because\r\nmodification has been made.\r\n\r\n  If you convey an object code work under this section in, or with, or\r\nspecifically for use in, a User Product, and the conveying occurs as\r\npart of a transaction in which the right of possession and use of the\r\nUser Product is transferred to the recipient in perpetuity or for a\r\nfixed term (regardless of how the transaction is characterized), the\r\nCorresponding Source conveyed under this section must be accompanied\r\nby the Installation Information.  But this requirement does not apply\r\nif neither you nor any third party retains the ability to install\r\nmodified object code on the User Product (for example, the work has\r\nbeen installed in ROM).\r\n\r\n  The requirement to provide Installation Information does not include a\r\nrequirement to continue to provide support service, warranty, or updates\r\nfor a work that has been modified or installed by the recipient, or for\r\nthe User Product in which it has been modified or installed.  Access to a\r\nnetwork may be denied when the modification itself materially and\r\nadversely affects the operation of the network or violates the rules and\r\nprotocols for communication across the network.\r\n\r\n  Corresponding Source conveyed, and Installation Information provided,\r\nin accord with this section must be in a format that is publicly\r\ndocumented (and with an implementation available to the public in\r\nsource code form), and must require no special password or key for\r\nunpacking, reading or copying.\r\n\r\n  7. Additional Terms.\r\n\r\n  \"Additional permissions\" are terms that supplement the terms of this\r\nLicense by making exceptions from one or more of its conditions.\r\nAdditional permissions that are applicable to the entire Program shall\r\nbe treated as though they were included in this License, to the extent\r\nthat they are valid under applicable law.  If additional permissions\r\napply only to part of the Program, that part may be used separately\r\nunder those permissions, but the entire Program remains governed by\r\nthis License without regard to the additional permissions.\r\n\r\n  When you convey a copy of a covered work, you may at your option\r\nremove any additional permissions from that copy, or from any part of\r\nit.  (Additional permissions may be written to require their own\r\nremoval in certain cases when you modify the work.)  You may place\r\nadditional permissions on material, added by you to a covered work,\r\nfor which you have or can give appropriate copyright permission.\r\n\r\n  Notwithstanding any other provision of this License, for material you\r\nadd to a covered work, you may (if authorized by the copyright holders of\r\nthat material) supplement the terms of this License with terms:\r\n\r\n    a) Disclaiming warranty or limiting liability differently from the\r\n    terms of sections 15 and 16 of this License; or\r\n\r\n    b) Requiring preservation of specified reasonable legal notices or\r\n    author attributions in that material or in the Appropriate Legal\r\n    Notices displayed by works containing it; or\r\n\r\n    c) Prohibiting misrepresentation of the origin of that material, or\r\n    requiring that modified versions of such material be marked in\r\n    reasonable ways as different from the original version; or\r\n\r\n    d) Limiting the use for publicity purposes of names of licensors or\r\n    authors of the material; or\r\n\r\n    e) Declining to grant rights under trademark law for use of some\r\n    trade names, trademarks, or service marks; or\r\n\r\n    f) Requiring indemnification of licensors and authors of that\r\n    material by anyone who conveys the material (or modified versions of\r\n    it) with contractual assumptions of liability to the recipient, for\r\n    any liability that these contractual assumptions directly impose on\r\n    those licensors and authors.\r\n\r\n  All other non-permissive additional terms are considered \"further\r\nrestrictions\" within the meaning of section 10.  If the Program as you\r\nreceived it, or any part of it, contains a notice stating that it is\r\ngoverned by this License along with a term that is a further\r\nrestriction, you may remove that term.  If a license document contains\r\na further restriction but permits relicensing or conveying under this\r\nLicense, you may add to a covered work material governed by the terms\r\nof that license document, provided that the further restriction does\r\nnot survive such relicensing or conveying.\r\n\r\n  If you add terms to a covered work in accord with this section, you\r\nmust place, in the relevant source files, a statement of the\r\nadditional terms that apply to those files, or a notice indicating\r\nwhere to find the applicable terms.\r\n\r\n  Additional terms, permissive or non-permissive, may be stated in the\r\nform of a separately written license, or stated as exceptions;\r\nthe above requirements apply either way.\r\n\r\n  8. Termination.\r\n\r\n  You may not propagate or modify a covered work except as expressly\r\nprovided under this License.  Any attempt otherwise to propagate or\r\nmodify it is void, and will automatically terminate your rights under\r\nthis License (including any patent licenses granted under the third\r\nparagraph of section 11).\r\n\r\n  However, if you cease all violation of this License, then your\r\nlicense from a particular copyright holder is reinstated (a)\r\nprovisionally, unless and until the copyright holder explicitly and\r\nfinally terminates your license, and (b) permanently, if the copyright\r\nholder fails to notify you of the violation by some reasonable means\r\nprior to 60 days after the cessation.\r\n\r\n  Moreover, your license from a particular copyright holder is\r\nreinstated permanently if the copyright holder notifies you of the\r\nviolation by some reasonable means, this is the first time you have\r\nreceived notice of violation of this License (for any work) from that\r\ncopyright holder, and you cure the violation prior to 30 days after\r\nyour receipt of the notice.\r\n\r\n  Termination of your rights under this section does not terminate the\r\nlicenses of parties who have received copies or rights from you under\r\nthis License.  If your rights have been terminated and not permanently\r\nreinstated, you do not qualify to receive new licenses for the same\r\nmaterial under section 10.\r\n\r\n  9. Acceptance Not Required for Having Copies.\r\n\r\n  You are not required to accept this License in order to receive or\r\nrun a copy of the Program.  Ancillary propagation of a covered work\r\noccurring solely as a consequence of using peer-to-peer transmission\r\nto receive a copy likewise does not require acceptance.  However,\r\nnothing other than this License grants you permission to propagate or\r\nmodify any covered work.  These actions infringe copyright if you do\r\nnot accept this License.  Therefore, by modifying or propagating a\r\ncovered work, you indicate your acceptance of this License to do so.\r\n\r\n  10. Automatic Licensing of Downstream Recipients.\r\n\r\n  Each time you convey a covered work, the recipient automatically\r\nreceives a license from the original licensors, to run, modify and\r\npropagate that work, subject to this License.  You are not responsible\r\nfor enforcing compliance by third parties with this License.\r\n\r\n  An \"entity transaction\" is a transaction transferring control of an\r\norganization, or substantially all assets of one, or subdividing an\r\norganization, or merging organizations.  If propagation of a covered\r\nwork results from an entity transaction, each party to that\r\ntransaction who receives a copy of the work also receives whatever\r\nlicenses to the work the party's predecessor in interest had or could\r\ngive under the previous paragraph, plus a right to possession of the\r\nCorresponding Source of the work from the predecessor in interest, if\r\nthe predecessor has it or can get it with reasonable efforts.\r\n\r\n  You may not impose any further restrictions on the exercise of the\r\nrights granted or affirmed under this License.  For example, you may\r\nnot impose a license fee, royalty, or other charge for exercise of\r\nrights granted under this License, and you may not initiate litigation\r\n(including a cross-claim or counterclaim in a lawsuit) alleging that\r\nany patent claim is infringed by making, using, selling, offering for\r\nsale, or importing the Program or any portion of it.\r\n\r\n  11. Patents.\r\n\r\n  A \"contributor\" is a copyright holder who authorizes use under this\r\nLicense of the Program or a work on which the Program is based.  The\r\nwork thus licensed is called the contributor's \"contributor version\".\r\n\r\n  A contributor's \"essential patent claims\" are all patent claims\r\nowned or controlled by the contributor, whether already acquired or\r\nhereafter acquired, that would be infringed by some manner, permitted\r\nby this License, of making, using, or selling its contributor version,\r\nbut do not include claims that would be infringed only as a\r\nconsequence of further modification of the contributor version.  For\r\npurposes of this definition, \"control\" includes the right to grant\r\npatent sublicenses in a manner consistent with the requirements of\r\nthis License.\r\n\r\n  Each contributor grants you a non-exclusive, worldwide, royalty-free\r\npatent license under the contributor's essential patent claims, to\r\nmake, use, sell, offer for sale, import and otherwise run, modify and\r\npropagate the contents of its contributor version.\r\n\r\n  In the following three paragraphs, a \"patent license\" is any express\r\nagreement or commitment, however denominated, not to enforce a patent\r\n(such as an express permission to practice a patent or covenant not to\r\nsue for patent infringement).  To \"grant\" such a patent license to a\r\nparty means to make such an agreement or commitment not to enforce a\r\npatent against the party.\r\n\r\n  If you convey a covered work, knowingly relying on a patent license,\r\nand the Corresponding Source of the work is not available for anyone\r\nto copy, free of charge and under the terms of this License, through a\r\npublicly available network server or other readily accessible means,\r\nthen you must either (1) cause the Corresponding Source to be so\r\navailable, or (2) arrange to deprive yourself of the benefit of the\r\npatent license for this particular work, or (3) arrange, in a manner\r\nconsistent with the requirements of this License, to extend the patent\r\nlicense to downstream recipients.  \"Knowingly relying\" means you have\r\nactual knowledge that, but for the patent license, your conveying the\r\ncovered work in a country, or your recipient's use of the covered work\r\nin a country, would infringe one or more identifiable patents in that\r\ncountry that you have reason to believe are valid.\r\n\r\n  If, pursuant to or in connection with a single transaction or\r\narrangement, you convey, or propagate by procuring conveyance of, a\r\ncovered work, and grant a patent license to some of the parties\r\nreceiving the covered work authorizing them to use, propagate, modify\r\nor convey a specific copy of the covered work, then the patent license\r\nyou grant is automatically extended to all recipients of the covered\r\nwork and works based on it.\r\n\r\n  A patent license is \"discriminatory\" if it does not include within\r\nthe scope of its coverage, prohibits the exercise of, or is\r\nconditioned on the non-exercise of one or more of the rights that are\r\nspecifically granted under this License.  You may not convey a covered\r\nwork if you are a party to an arrangement with a third party that is\r\nin the business of distributing software, under which you make payment\r\nto the third party based on the extent of your activity of conveying\r\nthe work, and under which the third party grants, to any of the\r\nparties who would receive the covered work from you, a discriminatory\r\npatent license (a) in connection with copies of the covered work\r\nconveyed by you (or copies made from those copies), or (b) primarily\r\nfor and in connection with specific products or compilations that\r\ncontain the covered work, unless you entered into that arrangement,\r\nor that patent license was granted, prior to 28 March 2007.\r\n\r\n  Nothing in this License shall be construed as excluding or limiting\r\nany implied license or other defenses to infringement that may\r\notherwise be available to you under applicable patent law.\r\n\r\n  12. No Surrender of Others' Freedom.\r\n\r\n  If conditions are imposed on you (whether by court order, agreement or\r\notherwise) that contradict the conditions of this License, they do not\r\nexcuse you from the conditions of this License.  If you cannot convey a\r\ncovered work so as to satisfy simultaneously your obligations under this\r\nLicense and any other pertinent obligations, then as a consequence you may\r\nnot convey it at all.  For example, if you agree to terms that obligate you\r\nto collect a royalty for further conveying from those to whom you convey\r\nthe Program, the only way you could satisfy both those terms and this\r\nLicense would be to refrain entirely from conveying the Program.\r\n\r\n  13. Use with the GNU Affero General Public License.\r\n\r\n  Notwithstanding any other provision of this License, you have\r\npermission to link or combine any covered work with a work licensed\r\nunder version 3 of the GNU Affero General Public License into a single\r\ncombined work, and to convey the resulting work.  The terms of this\r\nLicense will continue to apply to the part which is the covered work,\r\nbut the special requirements of the GNU Affero General Public License,\r\nsection 13, concerning interaction through a network will apply to the\r\ncombination as such.\r\n\r\n  14. Revised Versions of this License.\r\n\r\n  The Free Software Foundation may publish revised and/or new versions of\r\nthe GNU General Public License from time to time.  Such new versions will\r\nbe similar in spirit to the present version, but may differ in detail to\r\naddress new problems or concerns.\r\n\r\n  Each version is given a distinguishing version number.  If the\r\nProgram specifies that a certain numbered version of the GNU General\r\nPublic License \"or any later version\" applies to it, you have the\r\noption of following the terms and conditions either of that numbered\r\nversion or of any later version published by the Free Software\r\nFoundation.  If the Program does not specify a version number of the\r\nGNU General Public License, you may choose any version ever published\r\nby the Free Software Foundation.\r\n\r\n  If the Program specifies that a proxy can decide which future\r\nversions of the GNU General Public License can be used, that proxy's\r\npublic statement of acceptance of a version permanently authorizes you\r\nto choose that version for the Program.\r\n\r\n  Later license versions may give you additional or different\r\npermissions.  However, no additional obligations are imposed on any\r\nauthor or copyright holder as a result of your choosing to follow a\r\nlater version.\r\n\r\n  15. Disclaimer of Warranty.\r\n\r\n  THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY\r\nAPPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT\r\nHOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM \"AS IS\" WITHOUT WARRANTY\r\nOF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,\r\nTHE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR\r\nPURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM\r\nIS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF\r\nALL NECESSARY SERVICING, REPAIR OR CORRECTION.\r\n\r\n  16. Limitation of Liability.\r\n\r\n  IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING\r\nWILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS\r\nTHE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY\r\nGENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE\r\nUSE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF\r\nDATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD\r\nPARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),\r\nEVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF\r\nSUCH DAMAGES.\r\n\r\n  17. Interpretation of Sections 15 and 16.\r\n\r\n  If the disclaimer of warranty and limitation of liability provided\r\nabove cannot be given local legal effect according to their terms,\r\nreviewing courts shall apply local law that most closely approximates\r\nan absolute waiver of all civil liability in connection with the\r\nProgram, unless a warranty or assumption of liability accompanies a\r\ncopy of the Program in return for a fee.\r\n\r\n                     END OF TERMS AND CONDITIONS\r\n\r\n            How to Apply These Terms to Your New Programs\r\n\r\n  If you develop a new program, and you want it to be of the greatest\r\npossible use to the public, the best way to achieve this is to make it\r\nfree software which everyone can redistribute and change under these terms.\r\n\r\n  To do so, attach the following notices to the program.  It is safest\r\nto attach them to the start of each source file to most effectively\r\nstate the exclusion of warranty; and each file should have at least\r\nthe \"copyright\" line and a pointer to where the full notice is found.\r\n\r\n    <one line to give the program's name and a brief idea of what it does.>\r\n    Copyright (C) <year>  <name of author>\r\n\r\n    This program is free software: you can redistribute it and/or modify\r\n    it under the terms of the GNU General Public License as published by\r\n    the Free Software Foundation, either version 3 of the License, or\r\n    (at your option) any later version.\r\n\r\n    This program is distributed in the hope that it will be useful,\r\n    but WITHOUT ANY WARRANTY; without even the implied warranty of\r\n    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\r\n    GNU General Public License for more details.\r\n\r\n    You should have received a copy of the GNU General Public License\r\n    along with this program.  If not, see <http://www.gnu.org/licenses/>.\r\n\r\nAlso add information on how to contact you by electronic and paper mail.\r\n\r\n  If the program does terminal interaction, make it output a short\r\nnotice like this when it starts in an interactive mode:\r\n\r\n    <program>  Copyright (C) <year>  <name of author>\r\n    This program comes with ABSOLUTELY NO WARRANTY; for details type `show w'.\r\n    This is free software, and you are welcome to redistribute it\r\n    under certain conditions; type `show c' for details.\r\n\r\nThe hypothetical commands `show w' and `show c' should show the appropriate\r\nparts of the General Public License.  Of course, your program's commands\r\nmight be different; for a GUI interface, you would use an \"about box\".\r\n\r\n  You should also get your employer (if you work as a programmer) or school,\r\nif any, to sign a \"copyright disclaimer\" for the program, if necessary.\r\nFor more information on this, and how to apply and follow the GNU GPL, see\r\n<http://www.gnu.org/licenses/>.\r\n\r\n  The GNU General Public License does not permit incorporating your program\r\ninto proprietary programs.  If your program is a subroutine library, you\r\nmay consider it more useful to permit linking proprietary applications with\r\nthe library.  If this is what you want to do, use the GNU Lesser General\r\nPublic License instead of this License.  But first, please read\r\n<http://www.gnu.org/philosophy/why-not-lgpl.html>.\r\n\r\n*/"
      },
      "UniswapV2Migrator.sol": "pragma solidity =0.6.6;\r\n\r\nimport '@uniswap/lib/contracts/libraries/TransferHelper.sol';\r\n\r\nimport './interfaces/IUniswapV2Migrator.sol';\r\nimport './interfaces/V1/IUniswapV1Factory.sol';\r\nimport './interfaces/V1/IUniswapV1Exchange.sol';\r\nimport './interfaces/IUniswapV2Router01.sol';\r\nimport './interfaces/IERC20.sol';\r\n\r\ncontract UniswapV2Migrator is IUniswapV2Migrator {\r\n    IUniswapV1Factory immutable factoryV1;\r\n    IUniswapV2Router01 immutable router;\r\n\r\n    constructor(address _factoryV1, address _router) public {\r\n        factoryV1 = IUniswapV1Factory(_factoryV1);\r\n        router = IUniswapV2Router01(_router);\r\n    }\r\n\r\n    // needs to accept ETH from any v1 exchange and the router. ideally this could be enforced, as in the router,\r\n    // but it's not possible because it requires a call to the v1 factory, which takes too much gas\r\n    receive() external payable {}\r\n\r\n    function migrate(address token, uint amountTokenMin, uint amountETHMin, address to, uint deadline)\r\n        external\r\n        override\r\n    {\r\n        IUniswapV1Exchange exchangeV1 = IUniswapV1Exchange(factoryV1.getExchange(token));\r\n        uint liquidityV1 = exchangeV1.balanceOf(msg.sender);\r\n        require(exchangeV1.transferFrom(msg.sender, address(this), liquidityV1), 'TRANSFER_FROM_FAILED');\r\n        (uint amountETHV1, uint amountTokenV1) = exchangeV1.removeLiquidity(liquidityV1, 1, 1, uint(-1));\r\n        TransferHelper.safeApprove(token, address(router), amountTokenV1);\r\n        (uint amountTokenV2, uint amountETHV2,) = router.addLiquidityETH{value: amountETHV1}(\r\n            token,\r\n            amountTokenV1,\r\n            amountTokenMin,\r\n            amountETHMin,\r\n            to,\r\n            deadline\r\n        );\r\n        if (amountTokenV1 > amountTokenV2) {\r\n            TransferHelper.safeApprove(token, address(router), 0); // be a good blockchain citizen, reset allowance to 0\r\n            TransferHelper.safeTransfer(token, msg.sender, amountTokenV1 - amountTokenV2);\r\n        } else if (amountETHV1 > amountETHV2) {\r\n            // addLiquidityETH guarantees that all of amountETHV1 or amountTokenV1 will be used, hence this else is safe\r\n            TransferHelper.safeTransferETH(msg.sender, amountETHV1 - amountETHV2);\r\n        }\r\n    }\r\n}\r\n",
      "UniswapV2Router01.sol": "pragma solidity =0.6.6;\r\n\r\nimport '@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol';\r\nimport '@uniswap/lib/contracts/libraries/TransferHelper.sol';\r\n\r\nimport './libraries/UniswapV2Library.sol';\r\nimport './interfaces/IUniswapV2Router01.sol';\r\nimport './interfaces/IERC20.sol';\r\nimport './interfaces/IWETH.sol';\r\n\r\ncontract UniswapV2Router01 is IUniswapV2Router01 {\r\n    address public immutable override factory;\r\n    address public immutable override WETH;\r\n\r\n    modifier ensure(uint deadline) {\r\n        require(deadline >= block.timestamp, 'UniswapV2Router: EXPIRED');\r\n        _;\r\n    }\r\n\r\n    constructor(address _factory, address _WETH) public {\r\n        factory = _factory;\r\n        WETH = _WETH;\r\n    }\r\n\r\n    receive() external payable {\r\n        assert(msg.sender == WETH); // only accept ETH via fallback from the WETH contract\r\n    }\r\n\r\n    // **** ADD LIQUIDITY ****\r\n    function _addLiquidity(\r\n        address tokenA,\r\n        address tokenB,\r\n        uint amountADesired,\r\n        uint amountBDesired,\r\n        uint amountAMin,\r\n        uint amountBMin\r\n    ) private returns (uint amountA, uint amountB) {\r\n        // create the pair if it doesn't exist yet\r\n        if (IUniswapV2Factory(factory).getPair(tokenA, tokenB) == address(0)) {\r\n            IUniswapV2Factory(factory).createPair(tokenA, tokenB);\r\n        }\r\n        (uint reserveA, uint reserveB) = UniswapV2Library.getReserves(factory, tokenA, tokenB);\r\n        if (reserveA == 0 && reserveB == 0) {\r\n            (amountA, amountB) = (amountADesired, amountBDesired);\r\n        } else {\r\n            uint amountBOptimal = UniswapV2Library.quote(amountADesired, reserveA, reserveB);\r\n            if (amountBOptimal <= amountBDesired) {\r\n                require(amountBOptimal >= amountBMin, 'UniswapV2Router: INSUFFICIENT_B_AMOUNT');\r\n                (amountA, amountB) = (amountADesired, amountBOptimal);\r\n            } else {\r\n                uint amountAOptimal = UniswapV2Library.quote(amountBDesired, reserveB, reserveA);\r\n                assert(amountAOptimal <= amountADesired);\r\n                require(amountAOptimal >= amountAMin, 'UniswapV2Router: INSUFFICIENT_A_AMOUNT');\r\n                (amountA, amountB) = (amountAOptimal, amountBDesired);\r\n            }\r\n        }\r\n    }\r\n    function addLiquidity(\r\n        address tokenA,\r\n        address tokenB,\r\n        uint amountADesired,\r\n        uint amountBDesired,\r\n        uint amountAMin,\r\n        uint amountBMin,\r\n        address to,\r\n        uint deadline\r\n    ) external override ensure(deadline) returns (uint amountA, uint amountB, uint liquidity) {\r\n        (amountA, amountB) = _addLiquidity(tokenA, tokenB, amountADesired, amountBDesired, amountAMin, amountBMin);\r\n        address pair = UniswapV2Library.pairFor(factory, tokenA, tokenB);\r\n        TransferHelper.safeTransferFrom(tokenA, msg.sender, pair, amountA);\r\n        TransferHelper.safeTransferFrom(tokenB, msg.sender, pair, amountB);\r\n        liquidity = IUniswapV2Pair(pair).mint(to);\r\n    }\r\n    function addLiquidityETH(\r\n        address token,\r\n        uint amountTokenDesired,\r\n        uint amountTokenMin,\r\n        uint amountETHMin,\r\n        address to,\r\n        uint deadline\r\n    ) external override payable ensure(deadline) returns (uint amountToken, uint amountETH, uint liquidity) {\r\n        (amountToken, amountETH) = _addLiquidity(\r\n            token,\r\n            WETH,\r\n            amountTokenDesired,\r\n            msg.value,\r\n            amountTokenMin,\r\n            amountETHMin\r\n        );\r\n        address pair = UniswapV2Library.pairFor(factory, token, WETH);\r\n        TransferHelper.safeTransferFrom(token, msg.sender, pair, amountToken);\r\n        IWETH(WETH).deposit{value: amountETH}();\r\n        assert(IWETH(WETH).transfer(pair, amountETH));\r\n        liquidity = IUniswapV2Pair(pair).mint(to);\r\n        if (msg.value > amountETH) TransferHelper.safeTransferETH(msg.sender, msg.value - amountETH); // refund dust eth, if any\r\n    }\r\n\r\n    // **** REMOVE LIQUIDITY ****\r\n    function removeLiquidity(\r\n        address tokenA,\r\n        address tokenB,\r\n        uint liquidity,\r\n        uint amountAMin,\r\n        uint amountBMin,\r\n        address to,\r\n        uint deadline\r\n    ) public override ensure(deadline) returns (uint amountA, uint amountB) {\r\n        address pair = UniswapV2Library.pairFor(factory, tokenA, tokenB);\r\n        IUniswapV2Pair(pair).transferFrom(msg.sender, pair, liquidity); // send liquidity to pair\r\n        (uint amount0, uint amount1) = IUniswapV2Pair(pair).burn(to);\r\n        (address token0,) = UniswapV2Library.sortTokens(tokenA, tokenB);\r\n        (amountA, amountB) = tokenA == token0 ? (amount0, amount1) : (amount1, amount0);\r\n        require(amountA >= amountAMin, 'UniswapV2Router: INSUFFICIENT_A_AMOUNT');\r\n        require(amountB >= amountBMin, 'UniswapV2Router: INSUFFICIENT_B_AMOUNT');\r\n    }\r\n    function removeLiquidityETH(\r\n        address token,\r\n        uint liquidity,\r\n        uint amountTokenMin,\r\n        uint amountETHMin,\r\n        address to,\r\n        uint deadline\r\n    ) public override ensure(deadline) returns (uint amountToken, uint amountETH) {\r\n        (amountToken, amountETH) = removeLiquidity(\r\n            token,\r\n            WETH,\r\n            liquidity,\r\n            amountTokenMin,\r\n            amountETHMin,\r\n            address(this),\r\n            deadline\r\n        );\r\n        TransferHelper.safeTransfer(token, to, amountToken);\r\n        IWETH(WETH).withdraw(amountETH);\r\n        TransferHelper.safeTransferETH(to, amountETH);\r\n    }\r\n    function removeLiquidityWithPermit(\r\n        address tokenA,\r\n        address tokenB,\r\n        uint liquidity,\r\n        uint amountAMin,\r\n        uint amountBMin,\r\n        address to,\r\n        uint deadline,\r\n        bool approveMax, uint8 v, bytes32 r, bytes32 s\r\n    ) external override returns (uint amountA, uint amountB) {\r\n        address pair = UniswapV2Library.pairFor(factory, tokenA, tokenB);\r\n        uint value = approveMax ? uint(-1) : liquidity;\r\n        IUniswapV2Pair(pair).permit(msg.sender, address(this), value, deadline, v, r, s);\r\n        (amountA, amountB) = removeLiquidity(tokenA, tokenB, liquidity, amountAMin, amountBMin, to, deadline);\r\n    }\r\n    function removeLiquidityETHWithPermit(\r\n        address token,\r\n        uint liquidity,\r\n        uint amountTokenMin,\r\n        uint amountETHMin,\r\n        address to,\r\n        uint deadline,\r\n        bool approveMax, uint8 v, bytes32 r, bytes32 s\r\n    ) external override returns (uint amountToken, uint amountETH) {\r\n        address pair = UniswapV2Library.pairFor(factory, token, WETH);\r\n        uint value = approveMax ? uint(-1) : liquidity;\r\n        IUniswapV2Pair(pair).permit(msg.sender, address(this), value, deadline, v, r, s);\r\n        (amountToken, amountETH) = removeLiquidityETH(token, liquidity, amountTokenMin, amountETHMin, to, deadline);\r\n    }\r\n\r\n    // **** SWAP ****\r\n    // requires the initial amount to have already been sent to the first pair\r\n    function _swap(uint[] memory amounts, address[] memory path, address _to) private {\r\n        for (uint i; i < path.length - 1; i++) {\r\n            (address input, address output) = (path[i], path[i + 1]);\r\n            (address token0,) = UniswapV2Library.sortTokens(input, output);\r\n            uint amountOut = amounts[i + 1];\r\n            (uint amount0Out, uint amount1Out) = input == token0 ? (uint(0), amountOut) : (amountOut, uint(0));\r\n            address to = i < path.length - 2 ? UniswapV2Library.pairFor(factory, output, path[i + 2]) : _to;\r\n            IUniswapV2Pair(UniswapV2Library.pairFor(factory, input, output)).swap(amount0Out, amount1Out, to, new bytes(0));\r\n        }\r\n    }\r\n    function swapExactTokensForTokens(\r\n        uint amountIn,\r\n        uint amountOutMin,\r\n        address[] calldata path,\r\n        address to,\r\n        uint deadline\r\n    ) external override ensure(deadline) returns (uint[] memory amounts) {\r\n        amounts = UniswapV2Library.getAmountsOut(factory, amountIn, path);\r\n        require(amounts[amounts.length - 1] >= amountOutMin, 'UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT');\r\n        TransferHelper.safeTransferFrom(path[0], msg.sender, UniswapV2Library.pairFor(factory, path[0], path[1]), amounts[0]);\r\n        _swap(amounts, path, to);\r\n    }\r\n    function swapTokensForExactTokens(\r\n        uint amountOut,\r\n        uint amountInMax,\r\n        address[] calldata path,\r\n        address to,\r\n        uint deadline\r\n    ) external override ensure(deadline) returns (uint[] memory amounts) {\r\n        amounts = UniswapV2Library.getAmountsIn(factory, amountOut, path);\r\n        require(amounts[0] <= amountInMax, 'UniswapV2Router: EXCESSIVE_INPUT_AMOUNT');\r\n        TransferHelper.safeTransferFrom(path[0], msg.sender, UniswapV2Library.pairFor(factory, path[0], path[1]), amounts[0]);\r\n        _swap(amounts, path, to);\r\n    }\r\n    function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)\r\n        external\r\n        override\r\n        payable\r\n        ensure(deadline)\r\n        returns (uint[] memory amounts)\r\n    {\r\n        require(path[0] == WETH, 'UniswapV2Router: INVALID_PATH');\r\n        amounts = UniswapV2Library.getAmountsOut(factory, msg.value, path);\r\n        require(amounts[amounts.length - 1] >= amountOutMin, 'UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT');\r\n        IWETH(WETH).deposit{value: amounts[0]}();\r\n        assert(IWETH(WETH).transfer(UniswapV2Library.pairFor(factory, path[0], path[1]), amounts[0]));\r\n        _swap(amounts, path, to);\r\n    }\r\n    function swapTokensForExactETH(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)\r\n        external\r\n        override\r\n        ensure(deadline)\r\n        returns (uint[] memory amounts)\r\n    {\r\n        require(path[path.length - 1] == WETH, 'UniswapV2Router: INVALID_PATH');\r\n        amounts = UniswapV2Library.getAmountsIn(factory, amountOut, path);\r\n        require(amounts[0] <= amountInMax, 'UniswapV2Router: EXCESSIVE_INPUT_AMOUNT');\r\n        TransferHelper.safeTransferFrom(path[0], msg.sender, UniswapV2Library.pairFor(factory, path[0], path[1]), amounts[0]);\r\n        _swap(amounts, path, address(this));\r\n        IWETH(WETH).withdraw(amounts[amounts.length - 1]);\r\n        TransferHelper.safeTransferETH(to, amounts[amounts.length - 1]);\r\n    }\r\n    function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)\r\n        external\r\n        override\r\n        ensure(deadline)\r\n        returns (uint[] memory amounts)\r\n    {\r\n        require(path[path.length - 1] == WETH, 'UniswapV2Router: INVALID_PATH');\r\n        amounts = UniswapV2Library.getAmountsOut(factory, amountIn, path);\r\n        require(amounts[amounts.length - 1] >= amountOutMin, 'UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT');\r\n        TransferHelper.safeTransferFrom(path[0], msg.sender, UniswapV2Library.pairFor(factory, path[0], path[1]), amounts[0]);\r\n        _swap(amounts, path, address(this));\r\n        IWETH(WETH).withdraw(amounts[amounts.length - 1]);\r\n        TransferHelper.safeTransferETH(to, amounts[amounts.length - 1]);\r\n    }\r\n    function swapETHForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline)\r\n        external\r\n        override\r\n        payable\r\n        ensure(deadline)\r\n        returns (uint[] memory amounts)\r\n    {\r\n        require(path[0] == WETH, 'UniswapV2Router: INVALID_PATH');\r\n        amounts = UniswapV2Library.getAmountsIn(factory, amountOut, path);\r\n        require(amounts[0] <= msg.value, 'UniswapV2Router: EXCESSIVE_INPUT_AMOUNT');\r\n        IWETH(WETH).deposit{value: amounts[0]}();\r\n        assert(IWETH(WETH).transfer(UniswapV2Library.pairFor(factory, path[0], path[1]), amounts[0]));\r\n        _swap(amounts, path, to);\r\n        if (msg.value > amounts[0]) TransferHelper.safeTransferETH(msg.sender, msg.value - amounts[0]); // refund dust eth, if any\r\n    }\r\n\r\n    function quote(uint amountA, uint reserveA, uint reserveB) public pure override returns (uint amountB) {\r\n        return UniswapV2Library.quote(amountA, reserveA, reserveB);\r\n    }\r\n\r\n    function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut) public pure override returns (uint amountOut) {\r\n        return UniswapV2Library.getAmountOut(amountIn, reserveIn, reserveOut);\r\n    }\r\n\r\n    function getAmountIn(uint amountOut, uint reserveIn, uint reserveOut) public pure override returns (uint amountIn) {\r\n        return UniswapV2Library.getAmountOut(amountOut, reserveIn, reserveOut);\r\n    }\r\n\r\n    function getAmountsOut(uint amountIn, address[] memory path) public view override returns (uint[] memory amounts) {\r\n        return UniswapV2Library.getAmountsOut(factory, amountIn, path);\r\n    }\r\n\r\n    function getAmountsIn(uint amountOut, address[] memory path) public view override returns (uint[] memory amounts) {\r\n        return UniswapV2Library.getAmountsIn(factory, amountOut, path);\r\n    }\r\n}\r\n",
      "UniswapV2Router02.sol": "pragma solidity =0.6.6;\r\n\r\nimport '@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol';\r\nimport '@uniswap/lib/contracts/libraries/TransferHelper.sol';\r\n\r\nimport './interfaces/IUniswapV2Router02.sol';\r\nimport './libraries/UniswapV2Library.sol';\r\nimport './libraries/SafeMath.sol';\r\nimport './interfaces/IERC20.sol';\r\nimport './interfaces/IWETH.sol';\r\n\r\ncontract UniswapV2Router02 is IUniswapV2Router02 {\r\n    using SafeMath for uint;\r\n\r\n    address public immutable override factory;\r\n    address public immutable override WETH;\r\n\r\n    modifier ensure(uint deadline) {\r\n        require(deadline >= block.timestamp, 'UniswapV2Router: EXPIRED');\r\n        _;\r\n    }\r\n\r\n    constructor(address _factory, address _WETH) public {\r\n        factory = _factory;\r\n        WETH = _WETH;\r\n    }\r\n\r\n    receive() external payable {\r\n        assert(msg.sender == WETH); // only accept ETH via fallback from the WETH contract\r\n    }\r\n\r\n    // **** ADD LIQUIDITY ****\r\n    function _addLiquidity(\r\n        address tokenA,\r\n        address tokenB,\r\n        uint amountADesired,\r\n        uint amountBDesired,\r\n        uint amountAMin,\r\n        uint amountBMin\r\n    ) internal virtual returns (uint amountA, uint amountB) {\r\n        // create the pair if it doesn't exist yet\r\n        if (IUniswapV2Factory(factory).getPair(tokenA, tokenB) == address(0)) {\r\n            IUniswapV2Factory(factory).createPair(tokenA, tokenB);\r\n        }\r\n        (uint reserveA, uint reserveB) = UniswapV2Library.getReserves(factory, tokenA, tokenB);\r\n        if (reserveA == 0 && reserveB == 0) {\r\n            (amountA, amountB) = (amountADesired, amountBDesired);\r\n        } else {\r\n            uint amountBOptimal = UniswapV2Library.quote(amountADesired, reserveA, reserveB);\r\n            if (amountBOptimal <= amountBDesired) {\r\n                require(amountBOptimal >= amountBMin, 'UniswapV2Router: INSUFFICIENT_B_AMOUNT');\r\n                (amountA, amountB) = (amountADesired, amountBOptimal);\r\n            } else {\r\n                uint amountAOptimal = UniswapV2Library.quote(amountBDesired, reserveB, reserveA);\r\n                assert(amountAOptimal <= amountADesired);\r\n                require(amountAOptimal >= amountAMin, 'UniswapV2Router: INSUFFICIENT_A_AMOUNT');\r\n                (amountA, amountB) = (amountAOptimal, amountBDesired);\r\n            }\r\n        }\r\n    }\r\n    function addLiquidity(\r\n        address tokenA,\r\n        address tokenB,\r\n        uint amountADesired,\r\n        uint amountBDesired,\r\n        uint amountAMin,\r\n        uint amountBMin,\r\n        address to,\r\n        uint deadline\r\n    ) external virtual override ensure(deadline) returns (uint amountA, uint amountB, uint liquidity) {\r\n        (amountA, amountB) = _addLiquidity(tokenA, tokenB, amountADesired, amountBDesired, amountAMin, amountBMin);\r\n        address pair = UniswapV2Library.pairFor(factory, tokenA, tokenB);\r\n        TransferHelper.safeTransferFrom(tokenA, msg.sender, pair, amountA);\r\n        TransferHelper.safeTransferFrom(tokenB, msg.sender, pair, amountB);\r\n        liquidity = IUniswapV2Pair(pair).mint(to);\r\n    }\r\n    function addLiquidityETH(\r\n        address token,\r\n        uint amountTokenDesired,\r\n        uint amountTokenMin,\r\n        uint amountETHMin,\r\n        address to,\r\n        uint deadline\r\n    ) external virtual override payable ensure(deadline) returns (uint amountToken, uint amountETH, uint liquidity) {\r\n        (amountToken, amountETH) = _addLiquidity(\r\n            token,\r\n            WETH,\r\n            amountTokenDesired,\r\n            msg.value,\r\n            amountTokenMin,\r\n            amountETHMin\r\n        );\r\n        address pair = UniswapV2Library.pairFor(factory, token, WETH);\r\n        TransferHelper.safeTransferFrom(token, msg.sender, pair, amountToken);\r\n        IWETH(WETH).deposit{value: amountETH}();\r\n        assert(IWETH(WETH).transfer(pair, amountETH));\r\n        liquidity = IUniswapV2Pair(pair).mint(to);\r\n        // refund dust eth, if any\r\n        if (msg.value > amountETH) TransferHelper.safeTransferETH(msg.sender, msg.value - amountETH);\r\n    }\r\n\r\n    // **** REMOVE LIQUIDITY ****\r\n    function removeLiquidity(\r\n        address tokenA,\r\n        address tokenB,\r\n        uint liquidity,\r\n        uint amountAMin,\r\n        uint amountBMin,\r\n        address to,\r\n        uint deadline\r\n    ) public virtual override ensure(deadline) returns (uint amountA, uint amountB) {\r\n        address pair = UniswapV2Library.pairFor(factory, tokenA, tokenB);\r\n        IUniswapV2Pair(pair).transferFrom(msg.sender, pair, liquidity); // send liquidity to pair\r\n        (uint amount0, uint amount1) = IUniswapV2Pair(pair).burn(to);\r\n        (address token0,) = UniswapV2Library.sortTokens(tokenA, tokenB);\r\n        (amountA, amountB) = tokenA == token0 ? (amount0, amount1) : (amount1, amount0);\r\n        require(amountA >= amountAMin, 'UniswapV2Router: INSUFFICIENT_A_AMOUNT');\r\n        require(amountB >= amountBMin, 'UniswapV2Router: INSUFFICIENT_B_AMOUNT');\r\n    }\r\n    function removeLiquidityETH(\r\n        address token,\r\n        uint liquidity,\r\n        uint amountTokenMin,\r\n        uint amountETHMin,\r\n        address to,\r\n        uint deadline\r\n    ) public virtual override ensure(deadline) returns (uint amountToken, uint amountETH) {\r\n        (amountToken, amountETH) = removeLiquidity(\r\n            token,\r\n            WETH,\r\n            liquidity,\r\n            amountTokenMin,\r\n            amountETHMin,\r\n            address(this),\r\n            deadline\r\n        );\r\n        TransferHelper.safeTransfer(token, to, amountToken);\r\n        IWETH(WETH).withdraw(amountETH);\r\n        TransferHelper.safeTransferETH(to, amountETH);\r\n    }\r\n    function removeLiquidityWithPermit(\r\n        address tokenA,\r\n        address tokenB,\r\n        uint liquidity,\r\n        uint amountAMin,\r\n        uint amountBMin,\r\n        address to,\r\n        uint deadline,\r\n        bool approveMax, uint8 v, bytes32 r, bytes32 s\r\n    ) external virtual override returns (uint amountA, uint amountB) {\r\n        address pair = UniswapV2Library.pairFor(factory, tokenA, tokenB);\r\n        uint value = approveMax ? uint(-1) : liquidity;\r\n        IUniswapV2Pair(pair).permit(msg.sender, address(this), value, deadline, v, r, s);\r\n        (amountA, amountB) = removeLiquidity(tokenA, tokenB, liquidity, amountAMin, amountBMin, to, deadline);\r\n    }\r\n    function removeLiquidityETHWithPermit(\r\n        address token,\r\n        uint liquidity,\r\n        uint amountTokenMin,\r\n        uint amountETHMin,\r\n        address to,\r\n        uint deadline,\r\n        bool approveMax, uint8 v, bytes32 r, bytes32 s\r\n    ) external virtual override returns (uint amountToken, uint amountETH) {\r\n        address pair = UniswapV2Library.pairFor(factory, token, WETH);\r\n        uint value = approveMax ? uint(-1) : liquidity;\r\n        IUniswapV2Pair(pair).permit(msg.sender, address(this), value, deadline, v, r, s);\r\n        (amountToken, amountETH) = removeLiquidityETH(token, liquidity, amountTokenMin, amountETHMin, to, deadline);\r\n    }\r\n\r\n    // **** REMOVE LIQUIDITY (supporting fee-on-transfer tokens) ****\r\n    function removeLiquidityETHSupportingFeeOnTransferTokens(\r\n        address token,\r\n        uint liquidity,\r\n        uint amountTokenMin,\r\n        uint amountETHMin,\r\n        address to,\r\n        uint deadline\r\n    ) public virtual override ensure(deadline) returns (uint amountETH) {\r\n        (, amountETH) = removeLiquidity(\r\n            token,\r\n            WETH,\r\n            liquidity,\r\n            amountTokenMin,\r\n            amountETHMin,\r\n            address(this),\r\n            deadline\r\n        );\r\n        TransferHelper.safeTransfer(token, to, IERC20(token).balanceOf(address(this)));\r\n        IWETH(WETH).withdraw(amountETH);\r\n        TransferHelper.safeTransferETH(to, amountETH);\r\n    }\r\n    function removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(\r\n        address token,\r\n        uint liquidity,\r\n        uint amountTokenMin,\r\n        uint amountETHMin,\r\n        address to,\r\n        uint deadline,\r\n        bool approveMax, uint8 v, bytes32 r, bytes32 s\r\n    ) external virtual override returns (uint amountETH) {\r\n        address pair = UniswapV2Library.pairFor(factory, token, WETH);\r\n        uint value = approveMax ? uint(-1) : liquidity;\r\n        IUniswapV2Pair(pair).permit(msg.sender, address(this), value, deadline, v, r, s);\r\n        amountETH = removeLiquidityETHSupportingFeeOnTransferTokens(\r\n            token, liquidity, amountTokenMin, amountETHMin, to, deadline\r\n        );\r\n    }\r\n\r\n    // **** SWAP ****\r\n    // requires the initial amount to have already been sent to the first pair\r\n    function _swap(uint[] memory amounts, address[] memory path, address _to) internal virtual {\r\n        for (uint i; i < path.length - 1; i++) {\r\n            (address input, address output) = (path[i], path[i + 1]);\r\n            (address token0,) = UniswapV2Library.sortTokens(input, output);\r\n            uint amountOut = amounts[i + 1];\r\n            (uint amount0Out, uint amount1Out) = input == token0 ? (uint(0), amountOut) : (amountOut, uint(0));\r\n            address to = i < path.length - 2 ? UniswapV2Library.pairFor(factory, output, path[i + 2]) : _to;\r\n            IUniswapV2Pair(UniswapV2Library.pairFor(factory, input, output)).swap(\r\n                amount0Out, amount1Out, to, new bytes(0)\r\n            );\r\n        }\r\n    }\r\n    function swapExactTokensForTokens(\r\n        uint amountIn,\r\n        uint amountOutMin,\r\n        address[] calldata path,\r\n        address to,\r\n        uint deadline\r\n    ) external virtual override ensure(deadline) returns (uint[] memory amounts) {\r\n        amounts = UniswapV2Library.getAmountsOut(factory, amountIn, path);\r\n        require(amounts[amounts.length - 1] >= amountOutMin, 'UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT');\r\n        TransferHelper.safeTransferFrom(\r\n            path[0], msg.sender, UniswapV2Library.pairFor(factory, path[0], path[1]), amounts[0]\r\n        );\r\n        _swap(amounts, path, to);\r\n    }\r\n    function swapTokensForExactTokens(\r\n        uint amountOut,\r\n        uint amountInMax,\r\n        address[] calldata path,\r\n        address to,\r\n        uint deadline\r\n    ) external virtual override ensure(deadline) returns (uint[] memory amounts) {\r\n        amounts = UniswapV2Library.getAmountsIn(factory, amountOut, path);\r\n        require(amounts[0] <= amountInMax, 'UniswapV2Router: EXCESSIVE_INPUT_AMOUNT');\r\n        TransferHelper.safeTransferFrom(\r\n            path[0], msg.sender, UniswapV2Library.pairFor(factory, path[0], path[1]), amounts[0]\r\n        );\r\n        _swap(amounts, path, to);\r\n    }\r\n    function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)\r\n        external\r\n        virtual\r\n        override\r\n        payable\r\n        ensure(deadline)\r\n        returns (uint[] memory amounts)\r\n    {\r\n        require(path[0] == WETH, 'UniswapV2Router: INVALID_PATH');\r\n        amounts = UniswapV2Library.getAmountsOut(factory, msg.value, path);\r\n        require(amounts[amounts.length - 1] >= amountOutMin, 'UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT');\r\n        IWETH(WETH).deposit{value: amounts[0]}();\r\n        assert(IWETH(WETH).transfer(UniswapV2Library.pairFor(factory, path[0], path[1]), amounts[0]));\r\n        _swap(amounts, path, to);\r\n    }\r\n    function swapTokensForExactETH(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)\r\n        external\r\n        virtual\r\n        override\r\n        ensure(deadline)\r\n        returns (uint[] memory amounts)\r\n    {\r\n        require(path[path.length - 1] == WETH, 'UniswapV2Router: INVALID_PATH');\r\n        amounts = UniswapV2Library.getAmountsIn(factory, amountOut, path);\r\n        require(amounts[0] <= amountInMax, 'UniswapV2Router: EXCESSIVE_INPUT_AMOUNT');\r\n        TransferHelper.safeTransferFrom(\r\n            path[0], msg.sender, UniswapV2Library.pairFor(factory, path[0], path[1]), amounts[0]\r\n        );\r\n        _swap(amounts, path, address(this));\r\n        IWETH(WETH).withdraw(amounts[amounts.length - 1]);\r\n        TransferHelper.safeTransferETH(to, amounts[amounts.length - 1]);\r\n    }\r\n    function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)\r\n        external\r\n        virtual\r\n        override\r\n        ensure(deadline)\r\n        returns (uint[] memory amounts)\r\n    {\r\n        require(path[path.length - 1] == WETH, 'UniswapV2Router: INVALID_PATH');\r\n        amounts = UniswapV2Library.getAmountsOut(factory, amountIn, path);\r\n        require(amounts[amounts.length - 1] >= amountOutMin, 'UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT');\r\n        TransferHelper.safeTransferFrom(\r\n            path[0], msg.sender, UniswapV2Library.pairFor(factory, path[0], path[1]), amounts[0]\r\n        );\r\n        _swap(amounts, path, address(this));\r\n        IWETH(WETH).withdraw(amounts[amounts.length - 1]);\r\n        TransferHelper.safeTransferETH(to, amounts[amounts.length - 1]);\r\n    }\r\n    function swapETHForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline)\r\n        external\r\n        virtual\r\n        override\r\n        payable\r\n        ensure(deadline)\r\n        returns (uint[] memory amounts)\r\n    {\r\n        require(path[0] == WETH, 'UniswapV2Router: INVALID_PATH');\r\n        amounts = UniswapV2Library.getAmountsIn(factory, amountOut, path);\r\n        require(amounts[0] <= msg.value, 'UniswapV2Router: EXCESSIVE_INPUT_AMOUNT');\r\n        IWETH(WETH).deposit{value: amounts[0]}();\r\n        assert(IWETH(WETH).transfer(UniswapV2Library.pairFor(factory, path[0], path[1]), amounts[0]));\r\n        _swap(amounts, path, to);\r\n        // refund dust eth, if any\r\n        if (msg.value > amounts[0]) TransferHelper.safeTransferETH(msg.sender, msg.value - amounts[0]);\r\n    }\r\n\r\n    // **** SWAP (supporting fee-on-transfer tokens) ****\r\n    // requires the initial amount to have already been sent to the first pair\r\n    function _swapSupportingFeeOnTransferTokens(address[] memory path, address _to) internal virtual {\r\n        for (uint i; i < path.length - 1; i++) {\r\n            (address input, address output) = (path[i], path[i + 1]);\r\n            (address token0,) = UniswapV2Library.sortTokens(input, output);\r\n            IUniswapV2Pair pair = IUniswapV2Pair(UniswapV2Library.pairFor(factory, input, output));\r\n            uint amountInput;\r\n            uint amountOutput;\r\n            { // scope to avoid stack too deep errors\r\n            (uint reserve0, uint reserve1,) = pair.getReserves();\r\n            (uint reserveInput, uint reserveOutput) = input == token0 ? (reserve0, reserve1) : (reserve1, reserve0);\r\n            amountInput = IERC20(input).balanceOf(address(pair)).sub(reserveInput);\r\n            amountOutput = UniswapV2Library.getAmountOut(amountInput, reserveInput, reserveOutput);\r\n            }\r\n            (uint amount0Out, uint amount1Out) = input == token0 ? (uint(0), amountOutput) : (amountOutput, uint(0));\r\n            address to = i < path.length - 2 ? UniswapV2Library.pairFor(factory, output, path[i + 2]) : _to;\r\n            pair.swap(amount0Out, amount1Out, to, new bytes(0));\r\n        }\r\n    }\r\n    function swapExactTokensForTokensSupportingFeeOnTransferTokens(\r\n        uint amountIn,\r\n        uint amountOutMin,\r\n        address[] calldata path,\r\n        address to,\r\n        uint deadline\r\n    ) external virtual override ensure(deadline) {\r\n        TransferHelper.safeTransferFrom(\r\n            path[0], msg.sender, UniswapV2Library.pairFor(factory, path[0], path[1]), amountIn\r\n        );\r\n        uint balanceBefore = IERC20(path[path.length - 1]).balanceOf(to);\r\n        _swapSupportingFeeOnTransferTokens(path, to);\r\n        require(\r\n            IERC20(path[path.length - 1]).balanceOf(to).sub(balanceBefore) >= amountOutMin,\r\n            'UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT'\r\n        );\r\n    }\r\n    function swapExactETHForTokensSupportingFeeOnTransferTokens(\r\n        uint amountOutMin,\r\n        address[] calldata path,\r\n        address to,\r\n        uint deadline\r\n    )\r\n        external\r\n        virtual\r\n        override\r\n        payable\r\n        ensure(deadline)\r\n    {\r\n        require(path[0] == WETH, 'UniswapV2Router: INVALID_PATH');\r\n        uint amountIn = msg.value;\r\n        IWETH(WETH).deposit{value: amountIn}();\r\n        assert(IWETH(WETH).transfer(UniswapV2Library.pairFor(factory, path[0], path[1]), amountIn));\r\n        uint balanceBefore = IERC20(path[path.length - 1]).balanceOf(to);\r\n        _swapSupportingFeeOnTransferTokens(path, to);\r\n        require(\r\n            IERC20(path[path.length - 1]).balanceOf(to).sub(balanceBefore) >= amountOutMin,\r\n            'UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT'\r\n        );\r\n    }\r\n    function swapExactTokensForETHSupportingFeeOnTransferTokens(\r\n        uint amountIn,\r\n        uint amountOutMin,\r\n        address[] calldata path,\r\n        address to,\r\n        uint deadline\r\n    )\r\n        external\r\n        virtual\r\n        override\r\n        ensure(deadline)\r\n    {\r\n        require(path[path.length - 1] == WETH, 'UniswapV2Router: INVALID_PATH');\r\n        TransferHelper.safeTransferFrom(\r\n            path[0], msg.sender, UniswapV2Library.pairFor(factory, path[0], path[1]), amountIn\r\n        );\r\n        _swapSupportingFeeOnTransferTokens(path, address(this));\r\n        uint amountOut = IERC20(WETH).balanceOf(address(this));\r\n        require(amountOut >= amountOutMin, 'UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT');\r\n        IWETH(WETH).withdraw(amountOut);\r\n        TransferHelper.safeTransferETH(to, amountOut);\r\n    }\r\n\r\n    // **** LIBRARY FUNCTIONS ****\r\n    function quote(uint amountA, uint reserveA, uint reserveB) public pure virtual override returns (uint amountB) {\r\n        return UniswapV2Library.quote(amountA, reserveA, reserveB);\r\n    }\r\n\r\n    function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut)\r\n        public\r\n        pure\r\n        virtual\r\n        override\r\n        returns (uint amountOut)\r\n    {\r\n        return UniswapV2Library.getAmountOut(amountIn, reserveIn, reserveOut);\r\n    }\r\n\r\n    function getAmountIn(uint amountOut, uint reserveIn, uint reserveOut)\r\n        public\r\n        pure\r\n        virtual\r\n        override\r\n        returns (uint amountIn)\r\n    {\r\n        return UniswapV2Library.getAmountIn(amountOut, reserveIn, reserveOut);\r\n    }\r\n\r\n    function getAmountsOut(uint amountIn, address[] memory path)\r\n        public\r\n        view\r\n        virtual\r\n        override\r\n        returns (uint[] memory amounts)\r\n    {\r\n        return UniswapV2Library.getAmountsOut(factory, amountIn, path);\r\n    }\r\n\r\n    function getAmountsIn(uint amountOut, address[] memory path)\r\n        public\r\n        view\r\n        virtual\r\n        override\r\n        returns (uint[] memory amounts)\r\n    {\r\n        return UniswapV2Library.getAmountsIn(factory, amountOut, path);\r\n    }\r\n}\r\n"
    },
    "node_modules": {
      "@uniswap": {
        "lib": {
          "contracts": {
            "libraries": {
              "AddressStringUtil.sol": "// SPDX-License-Identifier: GPL-3.0-or-later\n\npragma solidity >=0.5.0;\n\nlibrary AddressStringUtil {\n    // converts an address to the uppercase hex string, extracting only len bytes (up to 20, multiple of 2)\n    function toAsciiString(address addr, uint256 len) internal pure returns (string memory) {\n        require(len % 2 == 0 && len > 0 && len <= 40, 'AddressStringUtil: INVALID_LEN');\n\n        bytes memory s = new bytes(len);\n        uint256 addrNum = uint256(addr);\n        for (uint256 i = 0; i < len / 2; i++) {\n            // shift right and truncate all but the least significant byte to extract the byte at position 19-i\n            uint8 b = uint8(addrNum >> (8 * (19 - i)));\n            // first hex character is the most significant 4 bits\n            uint8 hi = b >> 4;\n            // second hex character is the least significant 4 bits\n            uint8 lo = b - (hi << 4);\n            s[2 * i] = char(hi);\n            s[2 * i + 1] = char(lo);\n        }\n        return string(s);\n    }\n\n    // hi and lo are only 4 bits and between 0 and 16\n    // this method converts those values to the unicode/ascii code point for the hex representation\n    // uses upper case for the characters\n    function char(uint8 b) private pure returns (bytes1 c) {\n        if (b < 10) {\n            return bytes1(b + 0x30);\n        } else {\n            return bytes1(b + 0x37);\n        }\n    }\n}\n",
              "Babylonian.sol": "// SPDX-License-Identifier: GPL-3.0-or-later\n\npragma solidity >=0.4.0;\n\n// computes square roots using the babylonian method\n// https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method\nlibrary Babylonian {\n    // credit for this implementation goes to\n    // https://github.com/abdk-consulting/abdk-libraries-solidity/blob/master/ABDKMath64x64.sol#L687\n    function sqrt(uint256 x) internal pure returns (uint256) {\n        if (x == 0) return 0;\n        // this block is equivalent to r = uint256(1) << (BitMath.mostSignificantBit(x) / 2);\n        // however that code costs significantly more gas\n        uint256 xx = x;\n        uint256 r = 1;\n        if (xx >= 0x100000000000000000000000000000000) {\n            xx >>= 128;\n            r <<= 64;\n        }\n        if (xx >= 0x10000000000000000) {\n            xx >>= 64;\n            r <<= 32;\n        }\n        if (xx >= 0x100000000) {\n            xx >>= 32;\n            r <<= 16;\n        }\n        if (xx >= 0x10000) {\n            xx >>= 16;\n            r <<= 8;\n        }\n        if (xx >= 0x100) {\n            xx >>= 8;\n            r <<= 4;\n        }\n        if (xx >= 0x10) {\n            xx >>= 4;\n            r <<= 2;\n        }\n        if (xx >= 0x8) {\n            r <<= 1;\n        }\n        r = (r + x / r) >> 1;\n        r = (r + x / r) >> 1;\n        r = (r + x / r) >> 1;\n        r = (r + x / r) >> 1;\n        r = (r + x / r) >> 1;\n        r = (r + x / r) >> 1;\n        r = (r + x / r) >> 1; // Seven iterations should be enough\n        uint256 r1 = x / r;\n        return (r < r1 ? r : r1);\n    }\n}\n",
              "BitMath.sol": "// SPDX-License-Identifier: GPL-3.0-or-later\npragma solidity >=0.5.0;\n\nlibrary BitMath {\n    // returns the 0 indexed position of the most significant bit of the input x\n    // s.t. x >= 2**msb and x < 2**(msb+1)\n    function mostSignificantBit(uint256 x) internal pure returns (uint8 r) {\n        require(x > 0, 'BitMath::mostSignificantBit: zero');\n\n        if (x >= 0x100000000000000000000000000000000) {\n            x >>= 128;\n            r += 128;\n        }\n        if (x >= 0x10000000000000000) {\n            x >>= 64;\n            r += 64;\n        }\n        if (x >= 0x100000000) {\n            x >>= 32;\n            r += 32;\n        }\n        if (x >= 0x10000) {\n            x >>= 16;\n            r += 16;\n        }\n        if (x >= 0x100) {\n            x >>= 8;\n            r += 8;\n        }\n        if (x >= 0x10) {\n            x >>= 4;\n            r += 4;\n        }\n        if (x >= 0x4) {\n            x >>= 2;\n            r += 2;\n        }\n        if (x >= 0x2) r += 1;\n    }\n\n    // returns the 0 indexed position of the least significant bit of the input x\n    // s.t. (x & 2**lsb) != 0 and (x & (2**(lsb) - 1)) == 0)\n    // i.e. the bit at the index is set and the mask of all lower bits is 0\n    function leastSignificantBit(uint256 x) internal pure returns (uint8 r) {\n        require(x > 0, 'BitMath::leastSignificantBit: zero');\n\n        r = 255;\n        if (x & uint128(-1) > 0) {\n            r -= 128;\n        } else {\n            x >>= 128;\n        }\n        if (x & uint64(-1) > 0) {\n            r -= 64;\n        } else {\n            x >>= 64;\n        }\n        if (x & uint32(-1) > 0) {\n            r -= 32;\n        } else {\n            x >>= 32;\n        }\n        if (x & uint16(-1) > 0) {\n            r -= 16;\n        } else {\n            x >>= 16;\n        }\n        if (x & uint8(-1) > 0) {\n            r -= 8;\n        } else {\n            x >>= 8;\n        }\n        if (x & 0xf > 0) {\n            r -= 4;\n        } else {\n            x >>= 4;\n        }\n        if (x & 0x3 > 0) {\n            r -= 2;\n        } else {\n            x >>= 2;\n        }\n        if (x & 0x1 > 0) r -= 1;\n    }\n}\n",
              "FixedPoint.sol": "// SPDX-License-Identifier: GPL-3.0-or-later\npragma solidity >=0.4.0;\n\nimport './FullMath.sol';\nimport './Babylonian.sol';\nimport './BitMath.sol';\n\n// a library for handling binary fixed point numbers (https://en.wikipedia.org/wiki/Q_(number_format))\nlibrary FixedPoint {\n    // range: [0, 2**112 - 1]\n    // resolution: 1 / 2**112\n    struct uq112x112 {\n        uint224 _x;\n    }\n\n    // range: [0, 2**144 - 1]\n    // resolution: 1 / 2**112\n    struct uq144x112 {\n        uint256 _x;\n    }\n\n    uint8 public constant RESOLUTION = 112;\n    uint256 public constant Q112 = 0x10000000000000000000000000000; // 2**112\n    uint256 private constant Q224 = 0x100000000000000000000000000000000000000000000000000000000; // 2**224\n    uint256 private constant LOWER_MASK = 0xffffffffffffffffffffffffffff; // decimal of UQ*x112 (lower 112 bits)\n\n    // encode a uint112 as a UQ112x112\n    function encode(uint112 x) internal pure returns (uq112x112 memory) {\n        return uq112x112(uint224(x) << RESOLUTION);\n    }\n\n    // encodes a uint144 as a UQ144x112\n    function encode144(uint144 x) internal pure returns (uq144x112 memory) {\n        return uq144x112(uint256(x) << RESOLUTION);\n    }\n\n    // decode a UQ112x112 into a uint112 by truncating after the radix point\n    function decode(uq112x112 memory self) internal pure returns (uint112) {\n        return uint112(self._x >> RESOLUTION);\n    }\n\n    // decode a UQ144x112 into a uint144 by truncating after the radix point\n    function decode144(uq144x112 memory self) internal pure returns (uint144) {\n        return uint144(self._x >> RESOLUTION);\n    }\n\n    // multiply a UQ112x112 by a uint, returning a UQ144x112\n    // reverts on overflow\n    function mul(uq112x112 memory self, uint256 y) internal pure returns (uq144x112 memory) {\n        uint256 z = 0;\n        require(y == 0 || (z = self._x * y) / y == self._x, 'FixedPoint::mul: overflow');\n        return uq144x112(z);\n    }\n\n    // multiply a UQ112x112 by an int and decode, returning an int\n    // reverts on overflow\n    function muli(uq112x112 memory self, int256 y) internal pure returns (int256) {\n        uint256 z = FullMath.mulDiv(self._x, uint256(y < 0 ? -y : y), Q112);\n        require(z < 2**255, 'FixedPoint::muli: overflow');\n        return y < 0 ? -int256(z) : int256(z);\n    }\n\n    // multiply a UQ112x112 by a UQ112x112, returning a UQ112x112\n    // lossy\n    function muluq(uq112x112 memory self, uq112x112 memory other) internal pure returns (uq112x112 memory) {\n        if (self._x == 0 || other._x == 0) {\n            return uq112x112(0);\n        }\n        uint112 upper_self = uint112(self._x >> RESOLUTION); // * 2^0\n        uint112 lower_self = uint112(self._x & LOWER_MASK); // * 2^-112\n        uint112 upper_other = uint112(other._x >> RESOLUTION); // * 2^0\n        uint112 lower_other = uint112(other._x & LOWER_MASK); // * 2^-112\n\n        // partial products\n        uint224 upper = uint224(upper_self) * upper_other; // * 2^0\n        uint224 lower = uint224(lower_self) * lower_other; // * 2^-224\n        uint224 uppers_lowero = uint224(upper_self) * lower_other; // * 2^-112\n        uint224 uppero_lowers = uint224(upper_other) * lower_self; // * 2^-112\n\n        // so the bit shift does not overflow\n        require(upper <= uint112(-1), 'FixedPoint::muluq: upper overflow');\n\n        // this cannot exceed 256 bits, all values are 224 bits\n        uint256 sum = uint256(upper << RESOLUTION) + uppers_lowero + uppero_lowers + (lower >> RESOLUTION);\n\n        // so the cast does not overflow\n        require(sum <= uint224(-1), 'FixedPoint::muluq: sum overflow');\n\n        return uq112x112(uint224(sum));\n    }\n\n    // divide a UQ112x112 by a UQ112x112, returning a UQ112x112\n    function divuq(uq112x112 memory self, uq112x112 memory other) internal pure returns (uq112x112 memory) {\n        require(other._x > 0, 'FixedPoint::divuq: division by zero');\n        if (self._x == other._x) {\n            return uq112x112(uint224(Q112));\n        }\n        if (self._x <= uint144(-1)) {\n            uint256 value = (uint256(self._x) << RESOLUTION) / other._x;\n            require(value <= uint224(-1), 'FixedPoint::divuq: overflow');\n            return uq112x112(uint224(value));\n        }\n\n        uint256 result = FullMath.mulDiv(Q112, self._x, other._x);\n        require(result <= uint224(-1), 'FixedPoint::divuq: overflow');\n        return uq112x112(uint224(result));\n    }\n\n    // returns a UQ112x112 which represents the ratio of the numerator to the denominator\n    // can be lossy\n    function fraction(uint256 numerator, uint256 denominator) internal pure returns (uq112x112 memory) {\n        require(denominator > 0, 'FixedPoint::fraction: division by zero');\n        if (numerator == 0) return FixedPoint.uq112x112(0);\n\n        if (numerator <= uint144(-1)) {\n            uint256 result = (numerator << RESOLUTION) / denominator;\n            require(result <= uint224(-1), 'FixedPoint::fraction: overflow');\n            return uq112x112(uint224(result));\n        } else {\n            uint256 result = FullMath.mulDiv(numerator, Q112, denominator);\n            require(result <= uint224(-1), 'FixedPoint::fraction: overflow');\n            return uq112x112(uint224(result));\n        }\n    }\n\n    // take the reciprocal of a UQ112x112\n    // reverts on overflow\n    // lossy\n    function reciprocal(uq112x112 memory self) internal pure returns (uq112x112 memory) {\n        require(self._x != 0, 'FixedPoint::reciprocal: reciprocal of zero');\n        require(self._x != 1, 'FixedPoint::reciprocal: overflow');\n        return uq112x112(uint224(Q224 / self._x));\n    }\n\n    // square root of a UQ112x112\n    // lossy between 0/1 and 40 bits\n    function sqrt(uq112x112 memory self) internal pure returns (uq112x112 memory) {\n        if (self._x <= uint144(-1)) {\n            return uq112x112(uint224(Babylonian.sqrt(uint256(self._x) << 112)));\n        }\n\n        uint8 safeShiftBits = 255 - BitMath.mostSignificantBit(self._x);\n        safeShiftBits -= safeShiftBits % 2;\n        return uq112x112(uint224(Babylonian.sqrt(uint256(self._x) << safeShiftBits) << ((112 - safeShiftBits) / 2)));\n    }\n}\n",
              "FullMath.sol": "// SPDX-License-Identifier: CC-BY-4.0\npragma solidity >=0.4.0;\n\n// taken from https://medium.com/coinmonks/math-in-solidity-part-3-percents-and-proportions-4db014e080b1\n// license is CC-BY-4.0\nlibrary FullMath {\n    function fullMul(uint256 x, uint256 y) internal pure returns (uint256 l, uint256 h) {\n        uint256 mm = mulmod(x, y, uint256(-1));\n        l = x * y;\n        h = mm - l;\n        if (mm < l) h -= 1;\n    }\n\n    function fullDiv(\n        uint256 l,\n        uint256 h,\n        uint256 d\n    ) private pure returns (uint256) {\n        uint256 pow2 = d & -d;\n        d /= pow2;\n        l /= pow2;\n        l += h * ((-pow2) / pow2 + 1);\n        uint256 r = 1;\n        r *= 2 - d * r;\n        r *= 2 - d * r;\n        r *= 2 - d * r;\n        r *= 2 - d * r;\n        r *= 2 - d * r;\n        r *= 2 - d * r;\n        r *= 2 - d * r;\n        r *= 2 - d * r;\n        return l * r;\n    }\n\n    function mulDiv(\n        uint256 x,\n        uint256 y,\n        uint256 d\n    ) internal pure returns (uint256) {\n        (uint256 l, uint256 h) = fullMul(x, y);\n\n        uint256 mm = mulmod(x, y, d);\n        if (mm > l) h -= 1;\n        l -= mm;\n\n        if (h == 0) return l / d;\n\n        require(h < d, 'FullMath: FULLDIV_OVERFLOW');\n        return fullDiv(l, h, d);\n    }\n}\n",
              "SafeERC20Namer.sol": "// SPDX-License-Identifier: GPL-3.0-or-later\n\npragma solidity >=0.5.0;\n\nimport './AddressStringUtil.sol';\n\n// produces token descriptors from inconsistent or absent ERC20 symbol implementations that can return string or bytes32\n// this library will always produce a string symbol to represent the token\nlibrary SafeERC20Namer {\n    function bytes32ToString(bytes32 x) private pure returns (string memory) {\n        bytes memory bytesString = new bytes(32);\n        uint256 charCount = 0;\n        for (uint256 j = 0; j < 32; j++) {\n            bytes1 char = x[j];\n            if (char != 0) {\n                bytesString[charCount] = char;\n                charCount++;\n            }\n        }\n        bytes memory bytesStringTrimmed = new bytes(charCount);\n        for (uint256 j = 0; j < charCount; j++) {\n            bytesStringTrimmed[j] = bytesString[j];\n        }\n        return string(bytesStringTrimmed);\n    }\n\n    // assumes the data is in position 2\n    function parseStringData(bytes memory b) private pure returns (string memory) {\n        uint256 charCount = 0;\n        // first parse the charCount out of the data\n        for (uint256 i = 32; i < 64; i++) {\n            charCount <<= 8;\n            charCount += uint8(b[i]);\n        }\n\n        bytes memory bytesStringTrimmed = new bytes(charCount);\n        for (uint256 i = 0; i < charCount; i++) {\n            bytesStringTrimmed[i] = b[i + 64];\n        }\n\n        return string(bytesStringTrimmed);\n    }\n\n    // uses a heuristic to produce a token name from the address\n    // the heuristic returns the full hex of the address string in upper case\n    function addressToName(address token) private pure returns (string memory) {\n        return AddressStringUtil.toAsciiString(token, 40);\n    }\n\n    // uses a heuristic to produce a token symbol from the address\n    // the heuristic returns the first 6 hex of the address string in upper case\n    function addressToSymbol(address token) private pure returns (string memory) {\n        return AddressStringUtil.toAsciiString(token, 6);\n    }\n\n    // calls an external view token contract method that returns a symbol or name, and parses the output into a string\n    function callAndParseStringReturn(address token, bytes4 selector) private view returns (string memory) {\n        (bool success, bytes memory data) = token.staticcall(abi.encodeWithSelector(selector));\n        // if not implemented, or returns empty data, return empty string\n        if (!success || data.length == 0) {\n            return '';\n        }\n        // bytes32 data always has length 32\n        if (data.length == 32) {\n            bytes32 decoded = abi.decode(data, (bytes32));\n            return bytes32ToString(decoded);\n        } else if (data.length > 64) {\n            return abi.decode(data, (string));\n        }\n        return '';\n    }\n\n    // attempts to extract the token symbol. if it does not implement symbol, returns a symbol derived from the address\n    function tokenSymbol(address token) internal view returns (string memory) {\n        // 0x95d89b41 = bytes4(keccak256(\"symbol()\"))\n        string memory symbol = callAndParseStringReturn(token, 0x95d89b41);\n        if (bytes(symbol).length == 0) {\n            // fallback to 6 uppercase hex of address\n            return addressToSymbol(token);\n        }\n        return symbol;\n    }\n\n    // attempts to extract the token name. if it does not implement name, returns a name derived from the address\n    function tokenName(address token) internal view returns (string memory) {\n        // 0x06fdde03 = bytes4(keccak256(\"name()\"))\n        string memory name = callAndParseStringReturn(token, 0x06fdde03);\n        if (bytes(name).length == 0) {\n            // fallback to full hex of address\n            return addressToName(token);\n        }\n        return name;\n    }\n}\n",
              "TransferHelper.sol": "// SPDX-License-Identifier: GPL-3.0-or-later\n\npragma solidity >=0.6.0;\n\n// helper methods for interacting with ERC20 tokens and sending ETH that do not consistently return true/false\nlibrary TransferHelper {\n    function safeApprove(\n        address token,\n        address to,\n        uint256 value\n    ) internal {\n        // bytes4(keccak256(bytes('approve(address,uint256)')));\n        (bool success, bytes memory data) = token.call(abi.encodeWithSelector(0x095ea7b3, to, value));\n        require(\n            success && (data.length == 0 || abi.decode(data, (bool))),\n            'TransferHelper::safeApprove: approve failed'\n        );\n    }\n\n    function safeTransfer(\n        address token,\n        address to,\n        uint256 value\n    ) internal {\n        // bytes4(keccak256(bytes('transfer(address,uint256)')));\n        (bool success, bytes memory data) = token.call(abi.encodeWithSelector(0xa9059cbb, to, value));\n        require(\n            success && (data.length == 0 || abi.decode(data, (bool))),\n            'TransferHelper::safeTransfer: transfer failed'\n        );\n    }\n\n    function safeTransferFrom(\n        address token,\n        address from,\n        address to,\n        uint256 value\n    ) internal {\n        // bytes4(keccak256(bytes('transferFrom(address,address,uint256)')));\n        (bool success, bytes memory data) = token.call(abi.encodeWithSelector(0x23b872dd, from, to, value));\n        require(\n            success && (data.length == 0 || abi.decode(data, (bool))),\n            'TransferHelper::transferFrom: transferFrom failed'\n        );\n    }\n\n    function safeTransferETH(address to, uint256 value) internal {\n        (bool success, ) = to.call{value: value}(new bytes(0));\n        require(success, 'TransferHelper::safeTransferETH: ETH transfer failed');\n    }\n}\n"
            }
          }
        },
        "v2-core": {
          "contracts": {
            "interfaces": {
              "IERC20.sol": "pragma solidity >=0.5.0;\n\ninterface IERC20 {\n    event Approval(address indexed owner, address indexed spender, uint value);\n    event Transfer(address indexed from, address indexed to, uint value);\n\n    function name() external view returns (string memory);\n    function symbol() external view returns (string memory);\n    function decimals() external view returns (uint8);\n    function totalSupply() external view returns (uint);\n    function balanceOf(address owner) external view returns (uint);\n    function allowance(address owner, address spender) external view returns (uint);\n\n    function approve(address spender, uint value) external returns (bool);\n    function transfer(address to, uint value) external returns (bool);\n    function transferFrom(address from, address to, uint value) external returns (bool);\n}\n",
              "IUniswapV2Callee.sol": "pragma solidity >=0.5.0;\n\ninterface IUniswapV2Callee {\n    function uniswapV2Call(address sender, uint amount0, uint amount1, bytes calldata data) external;\n}\n",
              "IUniswapV2ERC20.sol": "pragma solidity >=0.5.0;\n\ninterface IUniswapV2ERC20 {\n    event Approval(address indexed owner, address indexed spender, uint value);\n    event Transfer(address indexed from, address indexed to, uint value);\n\n    function name() external pure returns (string memory);\n    function symbol() external pure returns (string memory);\n    function decimals() external pure returns (uint8);\n    function totalSupply() external view returns (uint);\n    function balanceOf(address owner) external view returns (uint);\n    function allowance(address owner, address spender) external view returns (uint);\n\n    function approve(address spender, uint value) external returns (bool);\n    function transfer(address to, uint value) external returns (bool);\n    function transferFrom(address from, address to, uint value) external returns (bool);\n\n    function DOMAIN_SEPARATOR() external view returns (bytes32);\n    function PERMIT_TYPEHASH() external pure returns (bytes32);\n    function nonces(address owner) external view returns (uint);\n\n    function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external;\n}\n",
              "IUniswapV2Factory.sol": "pragma solidity >=0.5.0;\n\ninterface IUniswapV2Factory {\n    event PairCreated(address indexed token0, address indexed token1, address pair, uint);\n\n    function feeTo() external view returns (address);\n    function feeToSetter() external view returns (address);\n\n    function getPair(address tokenA, address tokenB) external view returns (address pair);\n    function allPairs(uint) external view returns (address pair);\n    function allPairsLength() external view returns (uint);\n\n    function createPair(address tokenA, address tokenB) external returns (address pair);\n\n    function setFeeTo(address) external;\n    function setFeeToSetter(address) external;\n}\n",
              "IUniswapV2Pair.sol": "pragma solidity >=0.5.0;\n\ninterface IUniswapV2Pair {\n    event Approval(address indexed owner, address indexed spender, uint value);\n    event Transfer(address indexed from, address indexed to, uint value);\n\n    function name() external pure returns (string memory);\n    function symbol() external pure returns (string memory);\n    function decimals() external pure returns (uint8);\n    function totalSupply() external view returns (uint);\n    function balanceOf(address owner) external view returns (uint);\n    function allowance(address owner, address spender) external view returns (uint);\n\n    function approve(address spender, uint value) external returns (bool);\n    function transfer(address to, uint value) external returns (bool);\n    function transferFrom(address from, address to, uint value) external returns (bool);\n\n    function DOMAIN_SEPARATOR() external view returns (bytes32);\n    function PERMIT_TYPEHASH() external pure returns (bytes32);\n    function nonces(address owner) external view returns (uint);\n\n    function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external;\n\n    event Mint(address indexed sender, uint amount0, uint amount1);\n    event Burn(address indexed sender, uint amount0, uint amount1, address indexed to);\n    event Swap(\n        address indexed sender,\n        uint amount0In,\n        uint amount1In,\n        uint amount0Out,\n        uint amount1Out,\n        address indexed to\n    );\n    event Sync(uint112 reserve0, uint112 reserve1);\n\n    function MINIMUM_LIQUIDITY() external pure returns (uint);\n    function factory() external view returns (address);\n    function token0() external view returns (address);\n    function token1() external view returns (address);\n    function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);\n    function price0CumulativeLast() external view returns (uint);\n    function price1CumulativeLast() external view returns (uint);\n    function kLast() external view returns (uint);\n\n    function mint(address to) external returns (uint liquidity);\n    function burn(address to) external returns (uint amount0, uint amount1);\n    function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external;\n    function skim(address to) external;\n    function sync() external;\n\n    function initialize(address, address) external;\n}\n"
            },
            "libraries": {
              "Math.sol": "pragma solidity =0.5.16;\n\n// a library for performing various math operations\n\nlibrary Math {\n    function min(uint x, uint y) internal pure returns (uint z) {\n        z = x < y ? x : y;\n    }\n\n    // babylonian method (https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method)\n    function sqrt(uint y) internal pure returns (uint z) {\n        if (y > 3) {\n            z = y;\n            uint x = y / 2 + 1;\n            while (x < z) {\n                z = x;\n                x = (y / x + x) / 2;\n            }\n        } else if (y != 0) {\n            z = 1;\n        }\n    }\n}\n",
              "SafeMath.sol": "pragma solidity =0.5.16;\n\n// a library for performing overflow-safe math, courtesy of DappHub (https://github.com/dapphub/ds-math)\n\nlibrary SafeMath {\n    function add(uint x, uint y) internal pure returns (uint z) {\n        require((z = x + y) >= x, 'ds-math-add-overflow');\n    }\n\n    function sub(uint x, uint y) internal pure returns (uint z) {\n        require((z = x - y) <= x, 'ds-math-sub-underflow');\n    }\n\n    function mul(uint x, uint y) internal pure returns (uint z) {\n        require(y == 0 || (z = x * y) / y == x, 'ds-math-mul-overflow');\n    }\n}\n",
              "UQ112x112.sol": "pragma solidity =0.5.16;\n\n// a library for handling binary fixed point numbers (https://en.wikipedia.org/wiki/Q_(number_format))\n\n// range: [0, 2**112 - 1]\n// resolution: 1 / 2**112\n\nlibrary UQ112x112 {\n    uint224 constant Q112 = 2**112;\n\n    // encode a uint112 as a UQ112x112\n    function encode(uint112 y) internal pure returns (uint224 z) {\n        z = uint224(y) * Q112; // never overflows\n    }\n\n    // divide a UQ112x112 by a uint112, returning a UQ112x112\n    function uqdiv(uint224 x, uint112 y) internal pure returns (uint224 z) {\n        z = x / uint224(y);\n    }\n}\n"
            },
            "test": {
              "ERC20.sol": "pragma solidity =0.5.16;\n\nimport '../UniswapV2ERC20.sol';\n\ncontract ERC20 is UniswapV2ERC20 {\n    constructor(uint _totalSupply) public {\n        _mint(msg.sender, _totalSupply);\n    }\n}\n"
            },
            "UniswapV2ERC20.sol": "pragma solidity =0.5.16;\n\nimport './interfaces/IUniswapV2ERC20.sol';\nimport './libraries/SafeMath.sol';\n\ncontract UniswapV2ERC20 is IUniswapV2ERC20 {\n    using SafeMath for uint;\n\n    string public constant name = 'Uniswap V2';\n    string public constant symbol = 'UNI-V2';\n    uint8 public constant decimals = 18;\n    uint  public totalSupply;\n    mapping(address => uint) public balanceOf;\n    mapping(address => mapping(address => uint)) public allowance;\n\n    bytes32 public DOMAIN_SEPARATOR;\n    // keccak256(\"Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)\");\n    bytes32 public constant PERMIT_TYPEHASH = 0x6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9;\n    mapping(address => uint) public nonces;\n\n    event Approval(address indexed owner, address indexed spender, uint value);\n    event Transfer(address indexed from, address indexed to, uint value);\n\n    constructor() public {\n        uint chainId;\n        assembly {\n            chainId := chainid\n        }\n        DOMAIN_SEPARATOR = keccak256(\n            abi.encode(\n                keccak256('EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)'),\n                keccak256(bytes(name)),\n                keccak256(bytes('1')),\n                chainId,\n                address(this)\n            )\n        );\n    }\n\n    function _mint(address to, uint value) internal {\n        totalSupply = totalSupply.add(value);\n        balanceOf[to] = balanceOf[to].add(value);\n        emit Transfer(address(0), to, value);\n    }\n\n    function _burn(address from, uint value) internal {\n        balanceOf[from] = balanceOf[from].sub(value);\n        totalSupply = totalSupply.sub(value);\n        emit Transfer(from, address(0), value);\n    }\n\n    function _approve(address owner, address spender, uint value) private {\n        allowance[owner][spender] = value;\n        emit Approval(owner, spender, value);\n    }\n\n    function _transfer(address from, address to, uint value) private {\n        balanceOf[from] = balanceOf[from].sub(value);\n        balanceOf[to] = balanceOf[to].add(value);\n        emit Transfer(from, to, value);\n    }\n\n    function approve(address spender, uint value) external returns (bool) {\n        _approve(msg.sender, spender, value);\n        return true;\n    }\n\n    function transfer(address to, uint value) external returns (bool) {\n        _transfer(msg.sender, to, value);\n        return true;\n    }\n\n    function transferFrom(address from, address to, uint value) external returns (bool) {\n        if (allowance[from][msg.sender] != uint(-1)) {\n            allowance[from][msg.sender] = allowance[from][msg.sender].sub(value);\n        }\n        _transfer(from, to, value);\n        return true;\n    }\n\n    function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external {\n        require(deadline >= block.timestamp, 'UniswapV2: EXPIRED');\n        bytes32 digest = keccak256(\n            abi.encodePacked(\n                '\\x19\\x01',\n                DOMAIN_SEPARATOR,\n                keccak256(abi.encode(PERMIT_TYPEHASH, owner, spender, value, nonces[owner]++, deadline))\n            )\n        );\n        address recoveredAddress = ecrecover(digest, v, r, s);\n        require(recoveredAddress != address(0) && recoveredAddress == owner, 'UniswapV2: INVALID_SIGNATURE');\n        _approve(owner, spender, value);\n    }\n}\n",
            "UniswapV2Factory.sol": "pragma solidity =0.5.16;\n\nimport './interfaces/IUniswapV2Factory.sol';\nimport './UniswapV2Pair.sol';\n\ncontract UniswapV2Factory is IUniswapV2Factory {\n    address public feeTo;\n    address public feeToSetter;\n\n    mapping(address => mapping(address => address)) public getPair;\n    address[] public allPairs;\n\n    event PairCreated(address indexed token0, address indexed token1, address pair, uint);\n\n    constructor(address _feeToSetter) public {\n        feeToSetter = _feeToSetter;\n    }\n\n    function allPairsLength() external view returns (uint) {\n        return allPairs.length;\n    }\n\n    function createPair(address tokenA, address tokenB) external returns (address pair) {\n        require(tokenA != tokenB, 'UniswapV2: IDENTICAL_ADDRESSES');\n        (address token0, address token1) = tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);\n        require(token0 != address(0), 'UniswapV2: ZERO_ADDRESS');\n        require(getPair[token0][token1] == address(0), 'UniswapV2: PAIR_EXISTS'); // single check is sufficient\n        bytes memory bytecode = type(UniswapV2Pair).creationCode;\n        bytes32 salt = keccak256(abi.encodePacked(token0, token1));\n        assembly {\n            pair := create2(0, add(bytecode, 32), mload(bytecode), salt)\n        }\n        IUniswapV2Pair(pair).initialize(token0, token1);\n        getPair[token0][token1] = pair;\n        getPair[token1][token0] = pair; // populate mapping in the reverse direction\n        allPairs.push(pair);\n        emit PairCreated(token0, token1, pair, allPairs.length);\n    }\n\n    function setFeeTo(address _feeTo) external {\n        require(msg.sender == feeToSetter, 'UniswapV2: FORBIDDEN');\n        feeTo = _feeTo;\n    }\n\n    function setFeeToSetter(address _feeToSetter) external {\n        require(msg.sender == feeToSetter, 'UniswapV2: FORBIDDEN');\n        feeToSetter = _feeToSetter;\n    }\n}\n",
            "UniswapV2Pair.sol": "pragma solidity =0.5.16;\n\nimport './interfaces/IUniswapV2Pair.sol';\nimport './UniswapV2ERC20.sol';\nimport './libraries/Math.sol';\nimport './libraries/UQ112x112.sol';\nimport './interfaces/IERC20.sol';\nimport './interfaces/IUniswapV2Factory.sol';\nimport './interfaces/IUniswapV2Callee.sol';\n\ncontract UniswapV2Pair is IUniswapV2Pair, UniswapV2ERC20 {\n    using SafeMath  for uint;\n    using UQ112x112 for uint224;\n\n    uint public constant MINIMUM_LIQUIDITY = 10**3;\n    bytes4 private constant SELECTOR = bytes4(keccak256(bytes('transfer(address,uint256)')));\n\n    address public factory;\n    address public token0;\n    address public token1;\n\n    uint112 private reserve0;           // uses single storage slot, accessible via getReserves\n    uint112 private reserve1;           // uses single storage slot, accessible via getReserves\n    uint32  private blockTimestampLast; // uses single storage slot, accessible via getReserves\n\n    uint public price0CumulativeLast;\n    uint public price1CumulativeLast;\n    uint public kLast; // reserve0 * reserve1, as of immediately after the most recent liquidity event\n\n    uint private unlocked = 1;\n    modifier lock() {\n        require(unlocked == 1, 'UniswapV2: LOCKED');\n        unlocked = 0;\n        _;\n        unlocked = 1;\n    }\n\n    function getReserves() public view returns (uint112 _reserve0, uint112 _reserve1, uint32 _blockTimestampLast) {\n        _reserve0 = reserve0;\n        _reserve1 = reserve1;\n        _blockTimestampLast = blockTimestampLast;\n    }\n\n    function _safeTransfer(address token, address to, uint value) private {\n        (bool success, bytes memory data) = token.call(abi.encodeWithSelector(SELECTOR, to, value));\n        require(success && (data.length == 0 || abi.decode(data, (bool))), 'UniswapV2: TRANSFER_FAILED');\n    }\n\n    event Mint(address indexed sender, uint amount0, uint amount1);\n    event Burn(address indexed sender, uint amount0, uint amount1, address indexed to);\n    event Swap(\n        address indexed sender,\n        uint amount0In,\n        uint amount1In,\n        uint amount0Out,\n        uint amount1Out,\n        address indexed to\n    );\n    event Sync(uint112 reserve0, uint112 reserve1);\n\n    constructor() public {\n        factory = msg.sender;\n    }\n\n    // called once by the factory at time of deployment\n    function initialize(address _token0, address _token1) external {\n        require(msg.sender == factory, 'UniswapV2: FORBIDDEN'); // sufficient check\n        token0 = _token0;\n        token1 = _token1;\n    }\n\n    // update reserves and, on the first call per block, price accumulators\n    function _update(uint balance0, uint balance1, uint112 _reserve0, uint112 _reserve1) private {\n        require(balance0 <= uint112(-1) && balance1 <= uint112(-1), 'UniswapV2: OVERFLOW');\n        uint32 blockTimestamp = uint32(block.timestamp % 2**32);\n        uint32 timeElapsed = blockTimestamp - blockTimestampLast; // overflow is desired\n        if (timeElapsed > 0 && _reserve0 != 0 && _reserve1 != 0) {\n            // * never overflows, and + overflow is desired\n            price0CumulativeLast += uint(UQ112x112.encode(_reserve1).uqdiv(_reserve0)) * timeElapsed;\n            price1CumulativeLast += uint(UQ112x112.encode(_reserve0).uqdiv(_reserve1)) * timeElapsed;\n        }\n        reserve0 = uint112(balance0);\n        reserve1 = uint112(balance1);\n        blockTimestampLast = blockTimestamp;\n        emit Sync(reserve0, reserve1);\n    }\n\n    // if fee is on, mint liquidity equivalent to 1/6th of the growth in sqrt(k)\n    function _mintFee(uint112 _reserve0, uint112 _reserve1) private returns (bool feeOn) {\n        address feeTo = IUniswapV2Factory(factory).feeTo();\n        feeOn = feeTo != address(0);\n        uint _kLast = kLast; // gas savings\n        if (feeOn) {\n            if (_kLast != 0) {\n                uint rootK = Math.sqrt(uint(_reserve0).mul(_reserve1));\n                uint rootKLast = Math.sqrt(_kLast);\n                if (rootK > rootKLast) {\n                    uint numerator = totalSupply.mul(rootK.sub(rootKLast));\n                    uint denominator = rootK.mul(5).add(rootKLast);\n                    uint liquidity = numerator / denominator;\n                    if (liquidity > 0) _mint(feeTo, liquidity);\n                }\n            }\n        } else if (_kLast != 0) {\n            kLast = 0;\n        }\n    }\n\n    // this low-level function should be called from a contract which performs important safety checks\n    function mint(address to) external lock returns (uint liquidity) {\n        (uint112 _reserve0, uint112 _reserve1,) = getReserves(); // gas savings\n        uint balance0 = IERC20(token0).balanceOf(address(this));\n        uint balance1 = IERC20(token1).balanceOf(address(this));\n        uint amount0 = balance0.sub(_reserve0);\n        uint amount1 = balance1.sub(_reserve1);\n\n        bool feeOn = _mintFee(_reserve0, _reserve1);\n        uint _totalSupply = totalSupply; // gas savings, must be defined here since totalSupply can update in _mintFee\n        if (_totalSupply == 0) {\n            liquidity = Math.sqrt(amount0.mul(amount1)).sub(MINIMUM_LIQUIDITY);\n           _mint(address(0), MINIMUM_LIQUIDITY); // permanently lock the first MINIMUM_LIQUIDITY tokens\n        } else {\n            liquidity = Math.min(amount0.mul(_totalSupply) / _reserve0, amount1.mul(_totalSupply) / _reserve1);\n        }\n        require(liquidity > 0, 'UniswapV2: INSUFFICIENT_LIQUIDITY_MINTED');\n        _mint(to, liquidity);\n\n        _update(balance0, balance1, _reserve0, _reserve1);\n        if (feeOn) kLast = uint(reserve0).mul(reserve1); // reserve0 and reserve1 are up-to-date\n        emit Mint(msg.sender, amount0, amount1);\n    }\n\n    // this low-level function should be called from a contract which performs important safety checks\n    function burn(address to) external lock returns (uint amount0, uint amount1) {\n        (uint112 _reserve0, uint112 _reserve1,) = getReserves(); // gas savings\n        address _token0 = token0;                                // gas savings\n        address _token1 = token1;                                // gas savings\n        uint balance0 = IERC20(_token0).balanceOf(address(this));\n        uint balance1 = IERC20(_token1).balanceOf(address(this));\n        uint liquidity = balanceOf[address(this)];\n\n        bool feeOn = _mintFee(_reserve0, _reserve1);\n        uint _totalSupply = totalSupply; // gas savings, must be defined here since totalSupply can update in _mintFee\n        amount0 = liquidity.mul(balance0) / _totalSupply; // using balances ensures pro-rata distribution\n        amount1 = liquidity.mul(balance1) / _totalSupply; // using balances ensures pro-rata distribution\n        require(amount0 > 0 && amount1 > 0, 'UniswapV2: INSUFFICIENT_LIQUIDITY_BURNED');\n        _burn(address(this), liquidity);\n        _safeTransfer(_token0, to, amount0);\n        _safeTransfer(_token1, to, amount1);\n        balance0 = IERC20(_token0).balanceOf(address(this));\n        balance1 = IERC20(_token1).balanceOf(address(this));\n\n        _update(balance0, balance1, _reserve0, _reserve1);\n        if (feeOn) kLast = uint(reserve0).mul(reserve1); // reserve0 and reserve1 are up-to-date\n        emit Burn(msg.sender, amount0, amount1, to);\n    }\n\n    // this low-level function should be called from a contract which performs important safety checks\n    function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external lock {\n        require(amount0Out > 0 || amount1Out > 0, 'UniswapV2: INSUFFICIENT_OUTPUT_AMOUNT');\n        (uint112 _reserve0, uint112 _reserve1,) = getReserves(); // gas savings\n        require(amount0Out < _reserve0 && amount1Out < _reserve1, 'UniswapV2: INSUFFICIENT_LIQUIDITY');\n\n        uint balance0;\n        uint balance1;\n        { // scope for _token{0,1}, avoids stack too deep errors\n        address _token0 = token0;\n        address _token1 = token1;\n        require(to != _token0 && to != _token1, 'UniswapV2: INVALID_TO');\n        if (amount0Out > 0) _safeTransfer(_token0, to, amount0Out); // optimistically transfer tokens\n        if (amount1Out > 0) _safeTransfer(_token1, to, amount1Out); // optimistically transfer tokens\n        if (data.length > 0) IUniswapV2Callee(to).uniswapV2Call(msg.sender, amount0Out, amount1Out, data);\n        balance0 = IERC20(_token0).balanceOf(address(this));\n        balance1 = IERC20(_token1).balanceOf(address(this));\n        }\n        uint amount0In = balance0 > _reserve0 - amount0Out ? balance0 - (_reserve0 - amount0Out) : 0;\n        uint amount1In = balance1 > _reserve1 - amount1Out ? balance1 - (_reserve1 - amount1Out) : 0;\n        require(amount0In > 0 || amount1In > 0, 'UniswapV2: INSUFFICIENT_INPUT_AMOUNT');\n        { // scope for reserve{0,1}Adjusted, avoids stack too deep errors\n        uint balance0Adjusted = balance0.mul(1000).sub(amount0In.mul(3));\n        uint balance1Adjusted = balance1.mul(1000).sub(amount1In.mul(3));\n        require(balance0Adjusted.mul(balance1Adjusted) >= uint(_reserve0).mul(_reserve1).mul(1000**2), 'UniswapV2: K');\n        }\n\n        _update(balance0, balance1, _reserve0, _reserve1);\n        emit Swap(msg.sender, amount0In, amount1In, amount0Out, amount1Out, to);\n    }\n\n    // force balances to match reserves\n    function skim(address to) external lock {\n        address _token0 = token0; // gas savings\n        address _token1 = token1; // gas savings\n        _safeTransfer(_token0, to, IERC20(_token0).balanceOf(address(this)).sub(reserve0));\n        _safeTransfer(_token1, to, IERC20(_token1).balanceOf(address(this)).sub(reserve1));\n    }\n\n    // force reserves to match balances\n    function sync() external lock {\n        _update(IERC20(token0).balanceOf(address(this)), IERC20(token1).balanceOf(address(this)), reserve0, reserve1);\n    }\n}\n"
          }
        }
      }
    }
  }
}}, ["2b240e9c-a41b-4372-a195-dfd8c853fbad", ...path])
};

return __createNode__(["v2-periphery source"], (outputs) => {
  __connectPorts__(nodes["contracts periphery instrumented"]?.outputs["data"], outputs["v2-periphery source"]);
  return {
  /*
Receives a signal that triggers the Unicode V2 Periphery source code being sent via `v2-periphery sources` output port.
*/
"read": (data, tag) => {
  nodes["contracts periphery instrumented"]?.inputs["read"]?.(data, tag);
}
};
},
undefined,
{"read": "2a182932-ca45-4c09-8753-a9a4f355c219"},
{"v2-periphery source": "0cf791d5-e2f9-456e-b8df-40c776f03f0f"},
path);
}
__prototypes__["blockchain/ethereum/Uniswap/v2/Periphery source code instrumenter"] = (params, path = []) => {
  const nodes = {
  "replace placeholder": __prototypes__["string/Custom template filler"]({"token start": "###","token end": "###"}, ["c746adec-1911-43a9-930e-738e63902fcc", ...path]),
"get contract to instrument": __prototypes__["data/tree/Node getter"]({"tree": params["v2-periphery source"]}, ["d0a321f3-15f0-4768-8678-aa455e236214", ...path]),
"prepare params": __prototypes__["flow/Syncer"]({"PLACEHOLDER_FOR_FACTORY_INIT_HASH": params["factory init hash"],"fields": ["PLACEHOLDER_FOR_FACTORY_INIT_HASH"]}, ["e91a57e9-05df-4e1b-bc38-97c7689a41b2", ...path]),
"path  to contract to instrument": __prototypes__["data/Store"]({"read": params["factory init hash"],"data": [
  "v2-periphery", 
  "contracts",
  "libraries",
  "UniswapV2Library.sol"
]}, ["4dbfa54e-c049-4c12-8463-c82cab55cf71", ...path]),
"set instrumented contract": __prototypes__["data/tree/Node setter"]({"tree": params["v2-periphery source"]}, ["e3ffaba8-df0f-4868-ac53-525186a12841", ...path])
};
__connectPorts__(nodes["get contract to instrument"]?.outputs["node"], nodes["replace placeholder"]?.inputs["template"]);
__connectPorts__(nodes["prepare params"]?.outputs["synced"], nodes["replace placeholder"]?.inputs["params"]);
__connectPorts__(nodes["path  to contract to instrument"]?.outputs["data"], nodes["get contract to instrument"]?.inputs["path"]);
__connectPorts__(nodes["path  to contract to instrument"]?.outputs["data"], nodes["set instrumented contract"]?.inputs["path"]);
__connectPorts__(nodes["replace placeholder"]?.outputs["filled"], nodes["set instrumented contract"]?.inputs["node"]);
return __createNode__(["set instrumented contract-tree"], (outputs) => {
  __connectPorts__(nodes["set instrumented contract"]?.outputs["tree"], outputs["set instrumented contract-tree"]);
  return {
  "factory init hash": (data, tag) => {
  nodes["prepare params"]?.inputs["PLACEHOLDER_FOR_FACTORY_INIT_HASH"]?.(data, tag);
nodes["path  to contract to instrument"]?.inputs["read"]?.(data, tag);
},
/*
Structured source of Uniswap v2 periphery
*/
"v2-periphery source": (data, tag) => {
  nodes["get contract to instrument"]?.inputs["tree"]?.(data, tag);
nodes["set instrumented contract"]?.inputs["tree"]?.(data, tag);
}
};
},
undefined,
{"factory init hash": "83b88c0c-d67b-42b4-982a-acd8c0779455","v2-periphery source": "c417cbe1-6e5c-4f6a-9bd9-e9329f6bae7f"},
{"set instrumented contract-tree": "3d2487c4-3842-460a-aa49-c5afb7502621"},
path);
}
/*
Substitutes parameters into a template. Parameter placeholder's (token) start/end can be customized.

Example:

1. "Hello {#subject#}!"@0 is received via `template`
2. {"subject":"world"}@0 is received via params
3. "{#"@0 is received via `token start`
4. "#}"@0 is received via `token end`
5. "Hello world!"@0 is sent via `filled`
*/
__prototypes__["string/Custom template filler"] = (params, path = []) => {
  const nodes = {
  "fill template": __prototypes__["string/Custom template filler/Internal"]({}, ["140d4de0-65a6-403d-9e3f-661f9bad8032", ...path]),
"syncer": __prototypes__["flow/Syncer"]({"fields": ["template","params","token start","token end"]}, ["17e43d61-f38c-436e-bbbd-041f16ba7563", ...path]),
"forward": __prototypes__["flow/Forwarder (quadruple)"]({"1": params["template"],"2": params["params"],"3": params["token start"],"4": params["token end"]}, ["df09be9e-33dd-43f5-8f43-022732a1582d", ...path])
};
__connectPorts__(nodes["syncer"]?.outputs["synced"], nodes["fill template"]?.inputs["params"]);
__connectPorts__(nodes["forward"]?.outputs["1"], nodes["syncer"]?.inputs["template"]);
__connectPorts__(nodes["forward"]?.outputs["2"], nodes["syncer"]?.inputs["params"]);
__connectPorts__(nodes["forward"]?.outputs["3"], nodes["syncer"]?.inputs["token start"]);
__connectPorts__(nodes["forward"]?.outputs["4"], nodes["syncer"]?.inputs["token end"]);
return __createNode__(["filled","error"], (outputs) => {
  __connectPorts__(nodes["fill template"]?.outputs["filled"], outputs["filled"]);
__connectPorts__(nodes["fill template"]?.outputs["error"], outputs["error"]);
  return {
  /*
Receives the template string to replace parameters in.

Example:
"Hello {#subject#}!"
*/
"template": (data, tag) => {
  nodes["forward"]?.inputs["1"]?.(data, tag);
},
/*
Receives the parameters to replace in the template.

Example: 
{"subject":"world"}
*/
"params": (data, tag) => {
  nodes["forward"]?.inputs["2"]?.(data, tag);
},
/*
Receives the string that marks the start of the parameter placeholder (token) within the template.

Example:
"{#"
*/
"token start": (data, tag) => {
  nodes["forward"]?.inputs["3"]?.(data, tag);
},
/*
Receives the string that marks the end of the parameter placholder (token) within the template.

Example:
"#}"
*/
"token end": (data, tag) => {
  nodes["forward"]?.inputs["4"]?.(data, tag);
}
};
},
undefined,
{"template": "07538bcd-7376-4aec-ad93-b4b368ae919c","params": "06531082-3e2d-45ab-ba18-527917d0ef5e","token start": "20fa9606-aa5f-48b5-af3c-3aaa9e38ebf4","token end": "6ee3d9cc-c99d-41d8-a6cf-d1b100b64aa2"},
{"filled": "949d328e-fa91-41e4-8929-d3cd7a8d4cfc","error": "b517f1ce-8441-406b-a71b-5741bd38d41f"},
path);
}
/*
See `string/Custom template filler`
*/
__prototypes__["string/Custom template filler/Internal"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["filled","error"], (outputs) => {
  
  return {
  "params": (data, tag) => {
  try {
    // from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }
    
    const { 
      template,
      params,
      ["token start"]: tokenStart, 
      ["token end"]: tokenEnd
    } = data;
    try {
      const re = new RegExp(`${escapeRegExp(tokenStart)}((?:.)*?)${escapeRegExp(tokenEnd)}`, "g");
      
      outputs.filled(
        template.replace(
          re,
          (match, key) => {
            const param = params[key];
            return param === undefined ? match : param;
          }
        ),
        tag);
    } catch(error) {
      outputs.error({error: error.toString()}, tag);
    }
  } catch(error) {
    __tracePortError__(path, "e327497c-6228-471d-ba94-955c145ccfdc", error);
  }
}
};
},
(outputs) => {
  
},
{"params": "e327497c-6228-471d-ba94-955c145ccfdc"},
{"filled": "ae4b344c-7e24-434a-a9ad-d7f5cc260d09","error": "45c8e624-b725-40b6-8155-2ed9d980f540"},
path);
  };
})();
/*
Forwards all 4 received signals in the order of the names of the ports.

Used for two purposes:
* Ensuring that any of a node's inputs may receive signals or be set as parameter.
* Ensuring the order in which signals are sent.

For examples, see `flow/Forwarder (double)`.
*/
__prototypes__["flow/Forwarder (quadruple)"] = (params, path = []) => {
  const nodes = {
  "sync inputs": __prototypes__["flow/Syncer"]({"1": params["1"],"2": params["2"],"3": params["3"],"4": params["4"],"fields": ["1","2","3","4"]}, ["2dd51e88-bca8-4773-a20a-afe0ef2b0687", ...path]),
"restore in order": __prototypes__["flow/Splitter"]({"fields": ["1","2","3","4"]}, ["1119aa5e-b75d-489f-ad48-567d16c0d9ae", ...path])
};
__connectPorts__(nodes["sync inputs"]?.outputs["synced"], nodes["restore in order"]?.inputs["unsplit"]);
return __createNode__(["1","2","3","4"], (outputs) => {
  __connectPorts__(nodes["restore in order"]?.outputs["1"], outputs["1"]);
__connectPorts__(nodes["restore in order"]?.outputs["2"], outputs["2"]);
__connectPorts__(nodes["restore in order"]?.outputs["3"], outputs["3"]);
__connectPorts__(nodes["restore in order"]?.outputs["4"], outputs["4"]);
  return {
  /*
Receives signal or takes parameter to be sent out first.
*/
"1": (data, tag) => {
  nodes["sync inputs"]?.inputs["1"]?.(data, tag);
},
/*
Receives signal or takes parameter to be sent out second.
*/
"2": (data, tag) => {
  nodes["sync inputs"]?.inputs["2"]?.(data, tag);
},
/*
Receives signal or takes parameter to be sent out third.
*/
"3": (data, tag) => {
  nodes["sync inputs"]?.inputs["3"]?.(data, tag);
},
/*
Receives signal or takes parameter to be sent out fourth.
*/
"4": (data, tag) => {
  nodes["sync inputs"]?.inputs["4"]?.(data, tag);
}
};
},
undefined,
{"1": "b9f6ade5-9bdd-46ef-99d2-616f1cb608c4","2": "f1aff635-6110-419c-81b3-ea2bd8b5f791","3": "cbfbd020-ce7f-4fb5-aa15-d63e33d10941","4": "4fcb135a-9c6c-497b-a96e-526c4727a64a"},
{"1": "8ee51005-e876-4db5-88b5-c9e148feba3f","2": "34f942cc-96a7-4278-a931-d9194e89dfe1","3": "da773107-7a7f-4fc2-b67d-bb9b76e361eb","4": "a5a46e47-dacb-477b-b823-398e570fe259"},
path);
}
/*
Retrieves the node at the specified path of the tree.

Example:
1. {"foo": {"bar": "baz"}}@0 is received via `tree`
2. ["foo", "bar"]@0 is received via `path`
3. "baz"@0 is sent via `node`

*/
__prototypes__["data/tree/Node getter"] = (params, path = []) => {
  const nodes = {
  "sync tree & path": __prototypes__["flow/Syncer"]({"tree": params["tree"],"path": params["path"],"fields": ["tree","path"]}, ["ef429890-b8b0-45f5-9188-b626aa5275eb", ...path]),
"get node": __prototypes__["data/tree/Node getter/Internal"]({}, ["796f16be-c947-444c-98a5-4046fb7b995b", ...path])
};
__connectPorts__(nodes["sync tree & path"]?.outputs["synced"], nodes["get node"]?.inputs["tree & path"]);
return __createNode__(["node","not found"], (outputs) => {
  __connectPorts__(nodes["get node"]?.outputs["node"], outputs["node"]);
__connectPorts__(nodes["get node"]?.outputs["not found"], outputs["not found"]);
  return {
  /*
Receives the tree the node is extracted from
*/
"tree": (data, tag) => {
  nodes["sync tree & path"]?.inputs["tree"]?.(data, tag);
},
/*
Receives the path segments in an array
*/
"path": (data, tag) => {
  nodes["sync tree & path"]?.inputs["path"]?.(data, tag);
}
};
},
undefined,
{"tree": "cf2ad35e-cfac-4c59-ab25-30a4dd08111f","path": "927e6b17-97e0-44de-887f-57204b7a1f9b"},
{"node": "b6722d08-460c-465b-a9f1-d1f843500424","not found": "e97caed4-5898-4f86-911d-8e31acb2617b"},
path);
}
__prototypes__["data/tree/Node getter/Internal"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["node","not found"], (outputs) => {
  
  return {
  "tree & path": (data, tag) => {
  try {
    const {tree, path} = data;
    let node = tree;
    for (let i=0, length=path.length; i<length; i++) {
      if (node instanceof Object) {
        node = node[path[i]];
      } else {
        node = undefined;
        break;
      }
    }
    if(node === undefined) {
      outputs["not found"](path, tag)
    }
    else {
      outputs.node(node, tag);
    }
  } catch(error) {
    __tracePortError__(path, "acf1b446-a89f-4af0-8865-174b1dcbb51f", error);
  }
}
};
},
(outputs) => {
  
},
{"tree & path": "acf1b446-a89f-4af0-8865-174b1dcbb51f"},
{"node": "55eb513c-0913-498a-b11c-db8d9d0d41bf","not found": "0b5f38f9-0f97-4d38-8cfa-92d2b444a159"},
path);
  };
})();
/*
Immutably stores the specified node on the specified path of the tree.
*/
__prototypes__["data/tree/Node setter"] = (params, path = []) => {
  const nodes = {
  "set node": __prototypes__["data/tree/Node setter (internal)"]({}, ["f80981ba-b58c-40ac-bcf6-f67e853b35e6", ...path]),
"sync inputs": __prototypes__["flow/Syncer"]({"tree": params["tree"],"path": params["path"],"node": params["node"],"fields": ["tree", "path", "node"]}, ["8112d4da-ee18-47d0-a80b-6180f7a0445c", ...path])
};
__connectPorts__(nodes["sync inputs"]?.outputs["synced"], nodes["set node"]?.inputs["tree & path & node"]);
return __createNode__(["tree"], (outputs) => {
  __connectPorts__(nodes["set node"]?.outputs["tree"], outputs["tree"]);
  return {
  /*
Tree data structure in which to store a node.
*/
"tree": (data, tag) => {
  nodes["sync inputs"]?.inputs["tree"]?.(data, tag);
},
/*
Specifies the location of the node.
*/
"path": (data, tag) => {
  nodes["sync inputs"]?.inputs["path"]?.(data, tag);
},
/*
The node to be stored in the tree.
*/
"node": (data, tag) => {
  nodes["sync inputs"]?.inputs["node"]?.(data, tag);
}
};
},
undefined,
{"tree": "2041b83b-940c-4ef5-89e6-07eb74a42daf","path": "bae8488b-e628-456c-8ba4-df9b28a52d3e","node": "5dca309f-984d-4c27-8402-d2eedf77f5aa"},
{"tree": "b73a3075-cfcf-4981-b23f-95d3b18de8a6"},
path);
}
__prototypes__["data/tree/Node setter (internal)"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["tree"], (outputs) => {
  
  return {
  "tree & path & node": (data, tag) => {
  try {
    const {tree, path, node} = data;
    let source = tree;
    let dest = {...tree};
    const result = dest;
    for (let i = 0, count = path.length - 1; i < count; i++) {
      const key = path[i];
      const child = source !== undefined
        ? source[key]
        : undefined;
      if (child instanceof Array)
        dest[key] = [...child];
      else if (child instanceof Object)
        dest[key] = {...child};
      else {
        const nextKey = path[i + 1];
        if (typeof nextKey === "number")
          dest[key] = [];
        else if (typeof nextKey === "string")
          dest[key] = {};
      }
      source = child;
      dest = dest[key];
    }
    const key = path[path.length - 1];
    dest[key] = node;
    outputs.tree(result, tag);
  } catch(error) {
    __tracePortError__(path, "a3746e5d-5a79-4943-8318-db69cd8f92fa", error);
  }
}
};
},
(outputs) => {
  
},
{"tree & path & node": "a3746e5d-5a79-4943-8318-db69cd8f92fa"},
{"tree": "77ffd279-c6a6-4084-8d00-158ce6d72fb4"},
path);
  };
})();
/*
Compiles specified Solidity contracts using the specified compiler settings and outputs the selected compiled contract data
*/
__prototypes__["blockchain/ethereum/Contracts compiler"] = (params, path = []) => {
  const nodes = {
  "compile contracts": __prototypes__["blockchain/ethereum/Contracts compiler/Internal"]({}, ["cd1268c4-7b29-45a3-b095-a623fe3f27ae", ...path]),
"syncer": __prototypes__["flow/Syncer"]({"contracts": params["contracts"],"compileSettings": params["compile settings"],"outputList": params["output list"],"fields": ["contracts", "outputList", "compileSettings"]}, ["0624083d-5d20-4068-bcc5-510b4cc6c711", ...path])
};
__connectPorts__(nodes["syncer"]?.outputs["synced"], nodes["compile contracts"]?.inputs["data"]);
return __createNode__(["compiled contracts","error"], (outputs) => {
  __connectPorts__(nodes["compile contracts"]?.outputs["compiled contracts"], outputs["compiled contracts"]);
__connectPorts__(nodes["compile contracts"]?.outputs["error"], outputs["error"]);
  return {
  /*
Receives the source code of the contracts to compile.
*/
"contracts": (data, tag) => {
  nodes["syncer"]?.inputs["contracts"]?.(data, tag);
},
/*
Receives the list of selected files from the contracts dictionary that should be passed to the Solidity compiler as 'root' sources. The other entries in 'contracts' should contain the dependencies.
*/
"output list": (data, tag) => {
  nodes["syncer"]?.inputs["outputList"]?.(data, tag);
},
/*
Receives the settings for the compilation.
*/
"compile settings": (data, tag) => {
  nodes["syncer"]?.inputs["compileSettings"]?.(data, tag);
}
};
},
undefined,
{"contracts": "7654e398-a401-4115-98b8-c2b8eba66ed4","output list": "60fd9fa4-1462-4c91-915b-11b325c0d479","compile settings": "eb554de7-b398-413f-8ff0-99dd34a7580a"},
{"compiled contracts": "58f95201-dc73-469a-8503-ce955c514032","error": "d00232d5-3801-4820-92ed-43ae75ccb626"},
path);
}
__prototypes__["blockchain/ethereum/Contracts compiler/Internal"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["compiled contracts","error"], (outputs) => {
  
  return {
  "data": (data, tag) => {
  try {
    const solc = require('solc');
    
    const { contracts, outputList, compileSettings } = data ?? {};
    if (!(contracts && outputList && compileSettings)) {
        throw new Error("Input data is invalid. Please check it complies with type!");
    }
    if (!Array.isArray(outputList)) {
        throw new Error("Input data contains invalid value for `outputList`. Please check type!")
    }
    const { includeRoots, solidityVersion, compileOptions } = compileSettings ?? {};
    if (!(includeRoots && solidityVersion && compileOptions)) {
        throw new Error("Input data contains invalid value for `compileSetting`. Please check type!");
    }
    if (!Array.isArray(includeRoots)) {
        throw new Error("Input data contains invalid value for `includeRoots`. Please check type!");
    }
    if (typeof compileOptions !== "object") {
        throw new Error("Input data contains invalid value for `compileOptions`. Please check type!");
    }
    
    const rootPrefix = "root_file__";
    
    //  Create input(s) for the compiler
    //  Note: The keys of the dictionary MUST NOT match the file name of any dependency because the compiler fails.
    //    (It will insert all compiled dependencies to the same level under the "contracts" note using its filename as a key.)
    const sources = Object.fromEntries(
        outputList.map((item) => {
            const { file } = splitPath(item);
            return [
                `${rootPrefix}${file}`,
                {
                    content: getContractByPath(item)
                }];
        })
    );
    
    let compiledContracts;
    let solcError;
    
    function Compile() {
    
        compilationRunning = shared.compilationRunning || false;
        if (compilationRunning) {
            setTimeout(() => Compile(), 800);
        }
        else {
            //  Prevent starting to download multiple compiler versions at the same time
            shared.compilationRunning = true;
            solc.loadRemoteVersion(solidityVersion, function (err, solcSnapshot) {
                if (!err) {
                    const settings = {
                        outputSelection: {
                            "*": {
                                "*": [
                                    "evm.bytecode.object",
                                    "evm.deployedBytecode.object",
                                    "abi",
                                    "evm.bytecode.sourceMap",
                                    "evm.deployedBytecode.sourceMap",
                                    "metadata"
                                ],
                                "": ["ast"]
                            }
                        },
                        ...compileOptions
                    };
    
                    // Solidity Compiler's expected format
                    const input = {
                        language: 'Solidity',
                        sources: sources,
                        settings: settings
                    };
    
                    // Parse the compiler output to retrieve the ABI and Bytecode
                    const output = solcSnapshot.compile(JSON.stringify(input), { import: findImports });
                    const outputParsed = JSON.parse(output);
    
                    if (hasError(outputParsed)){
                        sendToOutput("error", {error: output}, tag);
                        shared.compilationRunning = false;
                        return;
                    }
    
                    //  Ignore the intermediate compile results
                    const filtered = Object.fromEntries(Object.entries(outputParsed.contracts).filter(([key, _value]) => key.startsWith(rootPrefix)));
                    //  Elevate the results one level: use contract names as keys
                    compiledContracts = Object.entries(filtered).reduce((acc, [key, value]) => ({ ...acc, ...value }), {});
    
                    sendToOutput("compiled contracts", compiledContracts, tag);
                } else {
                    solcError = err;
                    sendToOutput("error", {error: err.toString()}, tag);
                }
    
                shared.compilationRunning = false;
            });
        }
    }
    
    Compile();
    
    function sendToOutput(name, value, tag){
        setTimeout(()=>{
            outputs[name](value, tag);
        }, 0);
    }
    
    function getContractByPath(path) {
        return path.split('/').reduce((p, c) => p?.[c], contracts);
    }
    
    //  does not use node.js only path functions
    function splitPath(fullPath) {
        const route = fullPath.split('/');
        const file = route.pop();
        const path = route.join('/');
        return { file: file, path: path, fullPath: fullPath };
    }
    
    //  see:
    //  https://github.com/ethereum/solc-js/blob/master/README.md
    //  https://www.npmjs.com/package/solc4
    function findImports(path) {
        for (const i in includeRoots) {
            const fullPath = `${includeRoots[i]}/${path}`;
            const res = getContractByPath(fullPath);
            if (res) {
                return {
                    contents: res
                };
            }
        }
    }
    
    function hasError(outputParsed){
        return (!outputParsed) || (outputParsed.errors && outputParsed.errors.some(
          x => x.severity && x.severity.toLowerCase() === 'error'
        ));
      }
  } catch(error) {
    __tracePortError__(path, "3a55b8dd-6eec-44c8-acae-4b1e60f90d7a", error);
  }
}
};
},
(outputs) => {
  
},
{"data": "3a55b8dd-6eec-44c8-acae-4b1e60f90d7a"},
{"compiled contracts": "6e0ac013-ee3c-4e0e-8b72-8eeb2419795c","error": "b73438f2-808b-4980-9902-c63866012a5d"},
path);
  };
})();
/*
Retrieves an item's value by its key from a dictionary.
If the item is not found, the inputs are sent via `not found`.

Example A:
1. { "first": 1, "third": 3, "fifth": 5 } @0 received via `dict`
2. "first"@0 received via `key`
3. `value` sends 1@0

Example B:
1. { "first": 1, "third": 3, "fifth": 5 } @0 received via `dict`
2. "second"@0 received via `key`
3. `not found` sends { "dict":  { "first": 1, "third": 3, "fifth": 5 }, "key": "second" }@0

More:
https://github.com/Cranq-io/cranq-tutorials/tree/main/reference/3_querying_data/3_1_getters
*/
__prototypes__["data/dictionary/Item getter"] = (params, path = []) => {
  const nodes = {
  "sync dict & key": __prototypes__["flow/Syncer"]({"dict": params["dict"],"key": params["key"],"fields": ["dict","key"]}, ["5ae09e24-6724-4227-aa2c-a41ff95c9d53", ...path]),
"get item": __prototypes__["data/dictionary/Item getter/Internal"]({}, ["06f47813-60ef-40d1-9f9b-b31940f27820", ...path])
};
__connectPorts__(nodes["sync dict & key"]?.outputs["synced"], nodes["get item"]?.inputs["dict & key"]);
return __createNode__(["value","not found"], (outputs) => {
  __connectPorts__(nodes["get item"]?.outputs["value"], outputs["value"]);
__connectPorts__(nodes["get item"]?.outputs["not found"], outputs["not found"]);
  return {
  /*
Receives the dictionary to get the value from.

Example:
{ "first": 1, "third": 3, "fifth": 5 }
*/
"dict": (data, tag) => {
  nodes["sync dict & key"]?.inputs["dict"]?.(data, tag);
},
/*
Receives the key corresponding to the value to get.

Example:
"third"
*/
"key": (data, tag) => {
  nodes["sync dict & key"]?.inputs["key"]?.(data, tag);
}
};
},
undefined,
{"dict": "47c56035-5bed-4f91-b7a9-606dedd7a13c","key": "23142cc5-6b71-4d69-8c46-cc1cd58793d1"},
{"value": "ebb678af-2bc0-4d06-99dd-6dbb5647ad6a","not found": "3e1b4eaf-6e2c-44f4-80bc-d685af75dbb7"},
path);
}
__prototypes__["data/dictionary/Item getter/Internal"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["value","not found"], (outputs) => {
  
  return {
  "dict & key": (data, tag) => {
  try {
    const value = data.dict[data.key];
    
    if (value !== undefined) {
      outputs.value(value, tag);
    } else {
      outputs["not found"](data, tag); 
    }
  } catch(error) {
    __tracePortError__(path, "50395fef-5d23-4f22-ad85-ac41ce728ca8", error);
  }
}
};
},
(outputs) => {
  
},
{"dict & key": "50395fef-5d23-4f22-ad85-ac41ce728ca8"},
{"value": "773e3764-85ca-4882-ad5a-4a8fcfdcbe9d","not found": "c1a88321-b05f-4ef4-8ae1-a3527b419c92"},
path);
  };
})();
/*
Deployes UniswapV2Router02 contract to the chain
*/
__prototypes__["blockchain/ethereum/Uniswap/v2/Router deployer"] = (params, path = []) => {
  const nodes = {
  "deploy router contract": __prototypes__["blockchain/ethereum/Contract deployer"]({"connect credentials": params["config"],"contract": params["router contract"],"settings": {"gas": 6000000},"only estimate gas": false}, ["9d688e36-c761-45b7-b5a6-156c56048fa0", ...path]),
"wrapper": __prototypes__["data/array/Wrapper"]({"data": params["factory address"]}, ["6772e7a4-b7d6-42fc-abd2-21f32fdf3681", ...path]),
"item appender": __prototypes__["data/array/Item appender"]({"item": params["WETH address"]}, ["5f82a8dc-297d-4ebc-b82c-85f0fa5a300a", ...path])
};
__connectPorts__(nodes["wrapper"]?.outputs["array"], nodes["item appender"]?.inputs["array"]);
__connectPorts__(nodes["item appender"]?.outputs["array"], nodes["deploy router contract"]?.inputs["contract params"]);
return __createNode__(["events","error","confirmation"], (outputs) => {
  __connectPorts__(nodes["deploy router contract"]?.outputs["error"], outputs["error"]);
__connectPorts__(nodes["deploy router contract"]?.outputs["confirmation"], outputs["confirmation"]);
__connectPorts__(nodes["deploy router contract"]?.outputs["events"], outputs["events"]);
  return {
  /*
Address of the deployed UniswapV2Factory contract
*/
"factory address": (data, tag) => {
  nodes["wrapper"]?.inputs["data"]?.(data, tag);
},
/*
Address of the WETH token on the targetet network
*/
"WETH address": (data, tag) => {
  nodes["item appender"]?.inputs["item"]?.(data, tag);
},
"config": (data, tag) => {
  nodes["deploy router contract"]?.inputs["connect credentials"]?.(data, tag);
},
/*
Receives the compiled UniswapV2Router02 contract
*/
"router contract": (data, tag) => {
  nodes["deploy router contract"]?.inputs["contract"]?.(data, tag);
}
};
},
undefined,
{"factory address": "ae906061-5695-4e79-aa79-a30b6ab50ca3","WETH address": "1be1c7f6-ec26-496e-98a6-10b5a8b9b3f9","config": "c6f7b167-e6a9-490e-95a5-509caa485269","router contract": "a6645263-ae6f-4a41-825f-cf10bad0e98c"},
{"events": "ff61a589-bab9-48de-997f-300f29073deb","error": "43026ea7-55a5-4af6-a937-272c8bfaba2a","confirmation": "7863188d-de92-41cc-b5c3-f5326b24ec02"},
path);
}
/*
Deploys a smart contract on an ethereum network
*/
__prototypes__["blockchain/ethereum/Contract deployer"] = (params, path = []) => {
  const nodes = {
  "deploy contract": __prototypes__["blockchain/ethereum/Contract deployer/Internal"]({}, ["523f713b-c414-43f6-9179-db27247c01af", ...path]),
"build parameters": __prototypes__["flow/Syncer"]({"contract": params["contract"],"contractParams": params["contract params"],"estimateGas": params["only estimate gas"],"fields": ["contract","settings", "contractParams", "estimateGas"]}, ["f7c0d38f-e3a0-41f0-8764-b7cb93ec8fab", ...path]),
"merger": __prototypes__["data/dictionary/Merger"]({"b": params["settings"],"a": params["connect credentials"]}, ["2b93ff24-0dc3-41d8-8f34-13b5556a492e", ...path]),
"multiplexer": __prototypes__["flow/Multiplexer"]({"fields": ["transaction hash", "receipt", "confirmation", "contract", "error"]}, ["333f5c4c-6c23-47c4-8b0b-cef235c7eaa2", ...path])
};
__connectPorts__(nodes["build parameters"]?.outputs["synced"], nodes["deploy contract"]?.inputs["parameters"]);
__connectPorts__(nodes["merger"]?.outputs["merged"], nodes["build parameters"]?.inputs["settings"]);
__connectPorts__(nodes["deploy contract"]?.outputs["transaction hash"], nodes["multiplexer"]?.inputs["transaction hash"]);
__connectPorts__(nodes["deploy contract"]?.outputs["receipt"], nodes["multiplexer"]?.inputs["receipt"]);
__connectPorts__(nodes["deploy contract"]?.outputs["confirmation"], nodes["multiplexer"]?.inputs["confirmation"]);
__connectPorts__(nodes["deploy contract"]?.outputs["contract"], nodes["multiplexer"]?.inputs["contract"]);
__connectPorts__(nodes["deploy contract"]?.outputs["error"], nodes["multiplexer"]?.inputs["error"]);
return __createNode__(["events","confirmation","estimated gas","error"], (outputs) => {
  __connectPorts__(nodes["deploy contract"]?.outputs["confirmation"], outputs["confirmation"]);
__connectPorts__(nodes["deploy contract"]?.outputs["estimated gas"], outputs["estimated gas"]);
__connectPorts__(nodes["deploy contract"]?.outputs["error"], outputs["error"]);
__connectPorts__(nodes["multiplexer"]?.outputs["multiplexed"], outputs["events"]);
  return {
  "contract": (data, tag) => {
  nodes["build parameters"]?.inputs["contract"]?.(data, tag);
},
"connect credentials": (data, tag) => {
  nodes["merger"]?.inputs["a"]?.(data, tag);
},
"contract params": (data, tag) => {
  nodes["build parameters"]?.inputs["contractParams"]?.(data, tag);
},
"only estimate gas": (data, tag) => {
  nodes["build parameters"]?.inputs["estimateGas"]?.(data, tag);
},
"settings": (data, tag) => {
  nodes["merger"]?.inputs["b"]?.(data, tag);
}
};
},
undefined,
{"contract": "ca45ccd6-b1fb-4bb7-86ca-b9e774f899bb","connect credentials": "21dc533c-92b5-4354-9d81-1cfd46f095c8","contract params": "0618062e-aa1f-4a81-9727-fa078f93332f","only estimate gas": "6a44b0aa-dd80-42a5-ba19-15a130f0206a","settings": "9c78c7d9-7aee-4e04-92d6-5342e133d6b5"},
{"events": "3483ab3b-5295-4761-8832-ec968f7399d9","confirmation": "a6fdcbf5-7937-47f1-89db-2807b758842f","estimated gas": "b94ccca9-9434-47e1-8382-6b615b5f3f47","error": "c8505107-dfeb-4ad6-a08c-2543a30b2887"},
path);
}
__prototypes__["blockchain/ethereum/Contract deployer/Internal"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["transaction hash","receipt","confirmation","contract","estimated gas","error"], (outputs) => {
  
  return {
  "parameters": (data, tag) => {
  try {
    const Web3 = require("web3");
    
    const {contract, contractParams, settings, estimateGas = false} = data ?? {};
    if (!(contract && contractParams && settings)) {
      throw new Error("Input data is invalid. Please check it complies with type!");
    }
    
    const {providerUrl, privateKey, gas, gasPrice} = settings ?? {};
    if (!(providerUrl && privateKey && gas)) {
      throw new Error("Input data contains invalid value for `settings`. Please check type!");
    }
    
    const abi = contract.abi;
    const bytecode = contract.evm.bytecode.object;
    
    const web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));
    const signer = web3.eth.accounts.privateKeyToAccount(privateKey);
    web3.eth.accounts.wallet.add(signer);
    const ethContract = new web3.eth.Contract(abi, {from: signer.address});
    ethContract.options.data = bytecode;
    
    const deployTx = ethContract.deploy({data: bytecode, arguments: contractParams});
    
    async function main() {
    
      if (estimateGas === true) {
        outputs["estimated gas"](await deployTx.estimateGas(), tag);
      } else {
        try {
          shared.nonces = shared.nonces || {};
          const observedNonce = await web3.eth.getTransactionCount(signer.address);
          const stateNonce = shared.nonces[signer.address];
          const nonce = (stateNonce) ? Math.max(stateNonce, observedNonce) : observedNonce;
          shared.nonces[signer.address] = nonce + 1;
          const newContractInstance = await deploy(nonce);
          outputs["contract"](newContractInstance, tag);
        } catch (error) {
          outputs["error"]({error: error.message}, tag);
        }
      }
    }
    
    async function deploy(nonce) {
      return deployTx.send({
          gas: gas,
          gasPrice: gasPrice,
          nonce: nonce
        })
        .once("transactionHash", (txhash) => {
          outputs["transaction hash"](txhash, tag);
        })
        .once("receipt", (receipt) => {
          outputs["receipt"](receipt, tag);
        })
        .on("confirmation", (confirmationNumber, receipt, latestBlockHash) => {
          outputs["confirmation"](
            {
              confirmationNumber: confirmationNumber,
              receipt: receipt,
              latestBlockHash: latestBlockHash
            },
            tag
          );
        });
    }
    
    main();
  } catch(error) {
    __tracePortError__(path, "d4d6f2e9-1a7a-4bc8-8d8c-c0c8d0eacc68", error);
  }
}
};
},
(outputs) => {
  
},
{"parameters": "d4d6f2e9-1a7a-4bc8-8d8c-c0c8d0eacc68"},
{"transaction hash": "e7f5a7aa-c9d8-48d5-a248-3b2cac4262f1","receipt": "b81cd0dc-f7c4-43c4-8579-7e2c38cff351","confirmation": "64e1ca3c-3e06-4ed5-9563-d71098ea99f4","contract": "dc68467f-bdb9-4d16-9eb7-0d4d366b95ff","estimated gas": "96043b1f-6b74-408f-a93b-c6b7abc603d5","error": "0eb501ee-6d8f-4ef6-bdb9-95d3ebdce818"},
path);
  };
})();
/*
Merges dictionary `b` to dictionary `a`. Values of `a` will be ignored on key conflict.

Frequently used to apply default values to record fields.

Example:
1. { "first": 1, "third": 0 }@0 received via `a`
2. { "third": 3, "fifth": 5 }@0 received via `b`
3. `merged` sends { "first": 1, "third": 3, "fifth": 5 }@0

More:
https://github.com/Cranq-io/cranq-tutorials/tree/main/reference/2_constructing_data/2_4_merge_concat
*/
__prototypes__["data/dictionary/Merger"] = (params, path = []) => {
  const nodes = {
  "sync a & b": __prototypes__["flow/Syncer"]({"a": params["a"],"b": params["b"],"fields": ["a","b"]}, ["65eb02b8-d090-4120-b2dc-6c01baefd46a", ...path]),
"merge": __prototypes__["data/dictionary/Merger/Internal"]({}, ["a96a53ad-a84b-4f4c-8f3d-41f892d50073", ...path])
};
__connectPorts__(nodes["sync a & b"]?.outputs["synced"], nodes["merge"]?.inputs["a & b"]);
return __createNode__(["merged"], (outputs) => {
  __connectPorts__(nodes["merge"]?.outputs["merged"], outputs["merged"]);
  return {
  /*
Receives the dictionary to merge onto.

Example:
{ "first": 1, "third": 0 }
*/
"a": (data, tag) => {
  nodes["sync a & b"]?.inputs["a"]?.(data, tag);
},
/*
Receives the dictionary to merge with.

Example:
{ "third": 3, "fifth": 5 }
*/
"b": (data, tag) => {
  nodes["sync a & b"]?.inputs["b"]?.(data, tag);
}
};
},
undefined,
{"a": "545a5e1a-9807-4456-b557-dfa8aa8ef28a","b": "d694bd76-84f6-465f-9c8e-8b9570cc8e69"},
{"merged": "8357d165-4753-4d32-8c61-e3baff88d8ba"},
path);
}
__prototypes__["data/dictionary/Merger/Internal"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["merged"], (outputs) => {
  
  return {
  "a & b": (data, tag) => {
  try {
    outputs.merged({...data.a, ...data.b}, tag);
  } catch(error) {
    __tracePortError__(path, "ca5090ac-fdf0-4efd-a672-e66c52507873", error);
  }
}
};
},
(outputs) => {
  
},
{"a & b": "ca5090ac-fdf0-4efd-a672-e66c52507873"},
{"merged": "ca5f3c12-33fa-4548-997c-d8e006c5dc0b"},
path);
  };
})();
/*
Forwards data received via dynamic inputs to `multiplexed`, wrapped in a record which carries both the data and the ID of the port (field) that it was received through.

Example:
1. `fields` is set to ["a", "b"]
2. Input ports `a` and `b` get created
3. The number 5 received via `b`
4. {"field": "b", "data": 5} will be sent via `multiplexed`.
*/
__prototypes__["flow/Multiplexer"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["multiplexed"], (outputs) => {
  
  return {
  /*
Receives a list of input port names to accept data payload through.
*/
"fields": (data, tag) => {
  try {
    throw new Error('Input port not implemented for current target.');
  } catch(error) {
    __tracePortError__(path, "812fd3c6-a75b-486e-9bd1-3f2a1ee28f0c", error);
  }
},
/*
Receives data payload for multiplexing.
*/
...(Array.isArray(params["fields"]) ? params["fields"] : []).reduce((__inputs__, input) => {
  __inputs__[input] = (data, tag) => {
    try {
      outputs.multiplexed({data, field: input}, tag);
    } catch(error) {
      __tracePortError__(path, input, error);
    }    
  };
  return __inputs__;
}, {})
};
},
(outputs) => {
  
},
{"fields": "812fd3c6-a75b-486e-9bd1-3f2a1ee28f0c",...(Array.isArray(params["fields"]) ? params["fields"] : []).reduce((r, i) => {r[i] = i; return r}, {})},
{"multiplexed": "b20b339d-6c7a-4f30-87c4-d600b4452103"},
path);
  };
})();
/*
Wraps input in a 1-element array
*/
__prototypes__["data/array/Wrapper"] = (params, path = []) => {
  const nodes = {
  "syncer B": __prototypes__["flow/Syncer"]({"0": params["data"],"fields": [0]}, ["7890d318-1ed9-4fe9-a7b6-6d6e7e683adf", ...path])
};

return __createNode__(["array"], (outputs) => {
  __connectPorts__(nodes["syncer B"]?.outputs["synced"], outputs["array"]);
  return {
  "data": (data, tag) => {
  nodes["syncer B"]?.inputs["0"]?.(data, tag);
}
};
},
undefined,
{"data": "3e97c47b-9e13-48f3-b6a9-95cd8b676a8e"},
{"array": "51232407-ba2f-430d-b3fe-883a465cedd0"},
path);
}
/*
Appends item to the array.

Example: 
1. [1,2,3]@0 recieved via `array` 
2. 1@0 recieved via `item` 
3. [1,2,3,1]@0 sent via `array`
*/
__prototypes__["data/array/Item appender"] = (params, path = []) => {
  const nodes = {
  "append item": __prototypes__["data/array/Item appender/Internal"]({}, ["492cdba8-ab4f-4428-8339-5ab70efa576f", ...path]),
"sync array & item": __prototypes__["flow/Syncer"]({"array": params["array"],"item": params["item"],"fields": ["array", "item"]}, ["39d7325b-1323-4def-9dad-195c95c002e1", ...path])
};
__connectPorts__(nodes["sync array & item"]?.outputs["synced"], nodes["append item"]?.inputs["array & item"]);
return __createNode__(["array"], (outputs) => {
  __connectPorts__(nodes["append item"]?.outputs["array"], outputs["array"]);
  return {
  /*
Receives array to append item to.

Example:
[1,2,3]
*/
"array": (data, tag) => {
  nodes["sync array & item"]?.inputs["array"]?.(data, tag);
},
/*
Receives item to append to the array.

Example:
1
*/
"item": (data, tag) => {
  nodes["sync array & item"]?.inputs["item"]?.(data, tag);
}
};
},
undefined,
{"array": "5cbbb232-d9b4-4d06-9db0-e548e44e43b6","item": "2d02022b-c114-4207-935e-11490a6c2926"},
{"array": "092ca265-7614-4182-9d9f-bd325c094abb"},
path);
}
/*
See data/array/Item appender
*/
__prototypes__["data/array/Item appender/Internal"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["array"], (outputs) => {
  
  return {
  "array & item": (data, tag) => {
  try {
    outputs.array([...data.array, data.item], tag);
  } catch(error) {
    __tracePortError__(path, "313b183a-6816-45e9-abb7-dd5319a48fbd", error);
  }
}
};
},
(outputs) => {
  
},
{"array & item": "313b183a-6816-45e9-abb7-dd5319a48fbd"},
{"array": "5de10da8-d82e-4757-9e51-fd1815c2e57b"},
path);
  };
})();
/*
Queries the init code hash from the deployed UniswapV2Factory
*/
__prototypes__["blockchain/ethereum/Uniswap/v2/Init code pair hash requester"] = (params, path = []) => {
  const nodes = {
  "query init hash": __prototypes__["blockchain/ethereum/Uniswap/v2/Init code pair hash requester/Internal"]({}, ["55a4cf2e-74c6-4b5a-8593-cd9650bdadd4", ...path]),
"syncer": __prototypes__["flow/Syncer"]({"providerUrl": params["web3 provider URL"],"contract address": params["factory address"],"V2Factory Abi": params["factory ABI"],"fields": ["V2Factory Abi", "contract address", "providerUrl"]}, ["c14af7ee-f774-48d9-ac23-95dd3fd3f0ae", ...path])
};
__connectPorts__(nodes["syncer"]?.outputs["synced"], nodes["query init hash"]?.inputs["V2Factory data"]);
return __createNode__(["init hash"], (outputs) => {
  __connectPorts__(nodes["query init hash"]?.outputs["init hash"], outputs["init hash"]);
  return {
  /*
Receives the ABI of the compiled Uniswap V2 Factory contract
*/
"factory ABI": (data, tag) => {
  nodes["syncer"]?.inputs["V2Factory Abi"]?.(data, tag);
},
/*
Receives the address of the deployed Uniswap V2 Factory contract.
*/
"factory address": (data, tag) => {
  nodes["syncer"]?.inputs["contract address"]?.(data, tag);
},
/*
Receives the provider URL to use to connect to the chain
*/
"web3 provider URL": (data, tag) => {
  nodes["syncer"]?.inputs["providerUrl"]?.(data, tag);
}
};
},
undefined,
{"factory ABI": "14a6e991-cb90-4f42-b1df-3ea7d58d895b","factory address": "202dbb68-350c-4df4-a992-85352f7e692c","web3 provider URL": "9cd53ac0-f4b8-4082-9f7e-0d509cf18101"},
{"init hash": "a42c8f8d-11c4-4b8b-96b9-3a801f3e7fb6"},
path);
}
__prototypes__["blockchain/ethereum/Uniswap/v2/Init code pair hash requester/Internal"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["init hash"], (outputs) => {
  
  return {
  "V2Factory data": (data, tag) => {
  try {
    const Web3 = require("web3");
    const {providerUrl, "contract address": contractAddress, "V2Factory Abi": factoryAbi} = data ?? {};
    if (!(providerUrl && contractAddress && factoryAbi)) {
      throw new Error("Input data is invalid. Please check it complies with type!");
    }
    
    const provider = new Web3.providers.HttpProvider(providerUrl);
    const web3 = new Web3(provider);
    
    const factory = new web3.eth.Contract(factoryAbi, contractAddress);
    
    async function queryInitHash(){
      let initHash = await factory.methods.INIT_CODE_PAIR_HASH().call();
    
      if (initHash.startsWith('0x')){
        initHash = initHash.substring(2);
      }
    
      outputs["init hash"](initHash, tag);
    }
    
    queryInitHash();
  } catch(error) {
    __tracePortError__(path, "2513d1ad-d856-4c98-9e44-7ac1aab94fb4", error);
  }
}
};
},
(outputs) => {
  
},
{"V2Factory data": "2513d1ad-d856-4c98-9e44-7ac1aab94fb4"},
{"init hash": "420181c4-34a5-4a36-aa50-7de8a799af90"},
path);
  };
})();
/*
Holds WETH addresses on different supported networks
*/
__prototypes__["blockchain/ethereum/Uniswap/v2/WETH addresses"] = (params, path = []) => {
  const nodes = {
  "WETH address": __prototypes__["data/Store"]({"read": params["network"],"data": {
  "mainnet": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  "ropsten": "0xc778417E063141139Fce010982780140Aa0cD5Ab",
  "rinkeby": "0xc778417E063141139Fce010982780140Aa0cD5Ab",
  "goerli":	"0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
  "kovan": "0xd0A1E359811322d97991E03f863a0C30C2cF029C"
}}, ["084622c0-5d4b-4aca-a257-9b19a9256b3b", ...path]),
"item getter": __prototypes__["data/dictionary/Item getter"]({"key": params["network"]}, ["b473d654-fc0c-46d7-97bf-3aa0b0896b1f", ...path])
};
__connectPorts__(nodes["WETH address"]?.outputs["data"], nodes["item getter"]?.inputs["dict"]);
return __createNode__(["WETH address"], (outputs) => {
  __connectPorts__(nodes["item getter"]?.outputs["value"], outputs["WETH address"]);
  return {
  /*
Receives the name of the Ethereum network to use
*/
"network": (data, tag) => {
  nodes["WETH address"]?.inputs["read"]?.(data, tag);
nodes["item getter"]?.inputs["key"]?.(data, tag);
}
};
},
undefined,
{"network": "b398713c-c8ff-4a98-9d77-5ad8023a43a5"},
{"WETH address": "f5711708-f236-47e0-b84a-aa3bc1b88196"},
path);
}
/*
Waits for the specified number of confirmation events after a contract deployment then emits the deployed contract address.
*/
__prototypes__["blockchain/ethereum/Contract deployment waiter"] = (params, path = []) => {
  const nodes = {
  "is confirmation is enough": __prototypes__["data/dictionary/Item getter"]({"key": "confirmationNumber"}, ["3a804a8b-9202-4993-b998-8714f0cd2b2e", ...path]),
"gate": __prototypes__["flow/Gate"]({}, ["93e7e84f-1e55-4c1b-b1d9-fbd4ba848f87", ...path]),
"equality tester": __prototypes__["number/Equality tester"]({}, ["12d9ad6d-4b4c-4a5a-b014-82fd94938c53", ...path]),
"get receipt": __prototypes__["data/dictionary/Item getter"]({"key": "receipt"}, ["5d06bee6-4f6b-411f-a9c5-91894a8b3af8", ...path]),
"get contract address": __prototypes__["data/dictionary/Item getter"]({"key": "contractAddress"}, ["21054f2f-6b39-4989-bf2c-9e172a48783a", ...path]),
"parameter with default": __prototypes__["flow/Parameter with default"]({"read": params["confirmation"],"data": params["number required"],"default": 24}, ["6f38a834-1679-4350-8034-b5dfbdc1c209", ...path]),
"cap value at 24": __prototypes__["number/Min picker"]({"b": 24}, ["7b899f7c-3ea1-45bf-af7d-99ec6cd6b373", ...path]),
"fetch confirmation": __prototypes__["blockchain/ethereum/Contract deployment waiter/internal/confirmation fetcher"]({"dict": params["confirmation"]}, ["013f5628-ad92-4245-82f2-5d359b46c1d3", ...path])
};
__connectPorts__(nodes["is confirmation is enough"]?.outputs["value"], nodes["equality tester"]?.inputs["a"]);
__connectPorts__(nodes["equality tester"]?.outputs["equal"], nodes["gate"]?.inputs["open"]);
__connectPorts__(nodes["gate"]?.outputs["data"], nodes["get receipt"]?.inputs["dict"]);
__connectPorts__(nodes["get receipt"]?.outputs["value"], nodes["get contract address"]?.inputs["dict"]);
__connectPorts__(nodes["parameter with default"]?.outputs["data"], nodes["cap value at 24"]?.inputs["a"]);
__connectPorts__(nodes["cap value at 24"]?.outputs["min"], nodes["equality tester"]?.inputs["b"]);
__connectPorts__(nodes["fetch confirmation"]?.outputs["confirmation"], nodes["gate"]?.inputs["data"]);
__connectPorts__(nodes["fetch confirmation"]?.outputs["confirmation"], nodes["is confirmation is enough"]?.inputs["dict"]);
return __createNode__(["contract address"], (outputs) => {
  __connectPorts__(nodes["get contract address"]?.outputs["value"], outputs["contract address"]);
  return {
  /*
Receives the confirmation(s) of the deployment as received from the chain.
*/
"confirmation": (data, tag) => {
  nodes["parameter with default"]?.inputs["read"]?.(data, tag);
nodes["fetch confirmation"]?.inputs["dict"]?.(data, tag);
},
/*
Optional. The number of confirmations required to accept the contract as deployed. Defaults to 24.
*/
"number required": (data, tag) => {
  nodes["parameter with default"]?.inputs["data"]?.(data, tag);
}
};
},
undefined,
{"confirmation": "67c68864-f37a-4967-9ddd-3a87617ac325","number required": "465fe590-d79e-4987-b1c6-a414e01773e2"},
{"contract address": "eadf732a-e84a-47e0-a825-95574d2f25ee"},
path);
}
/*
Forwards signal received via `data` when corresponding signal received via `open` is true.

Example A:
1. "A"@0 received via `data`
2. false@0 received via `open`
3. No signal is sent via `data` (output)

Example B:
1. true@0 received via `open`
2. "B"@0  received via `data`
3. "B"@0 is sent via `data` (output)
*/
__prototypes__["flow/Gate"] = (params, path = []) => {
  const nodes = {
  "gate": __prototypes__["flow/Gate (internal)"]({}, ["5d63b3df-ade9-499d-818e-24a8a803c480", ...path]),
"sync data & open": __prototypes__["flow/Syncer"]({"data": params["data"],"open": params["open"],"fields": ["data", "open"]}, ["fbc970a3-a2f5-4552-abae-b023e86a4633", ...path])
};
__connectPorts__(nodes["sync data & open"]?.outputs["synced"], nodes["gate"]?.inputs["data & open"]);
return __createNode__(["data"], (outputs) => {
  __connectPorts__(nodes["gate"]?.outputs["data"], outputs["data"]);
  return {
  /*
Receives the signal to be forwarded / filtered.
*/
"data": (data, tag) => {
  nodes["sync data & open"]?.inputs["data"]?.(data, tag);
},
/*
Whether to forward the signal received via `data`.
*/
"open": (data, tag) => {
  nodes["sync data & open"]?.inputs["open"]?.(data, tag);
}
};
},
undefined,
{"data": "87d3064e-5a44-4029-bea8-ba632449f2f5","open": "0e7419a5-ec56-4a97-8f11-6add5ff3ae1e"},
{"data": "7fe23af1-29bf-4cc5-810c-5b91dea1b61a"},
path);
}
/*
See `flow/Gate`
*/
__prototypes__["flow/Gate (internal)"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["data"], (outputs) => {
  
  return {
  "data & open": (data, tag) => {
  try {
    if (data.open) outputs.data(data.data, tag);
  } catch(error) {
    __tracePortError__(path, "98485573-47d4-418c-8005-be19cff54d6a", error);
  }
}
};
},
(outputs) => {
  
},
{"data & open": "98485573-47d4-418c-8005-be19cff54d6a"},
{"data": "ff977c1f-7317-4ae9-b0d5-4c0e308a7f2c"},
path);
  };
})();
/*
Checks the received numbers for equality.

Example:

1. 23@0 is received via `a`
2. 23@0 is received via `b`
3. true@0 is sent via `equal`
*/
__prototypes__["number/Equality tester"] = (params, path = []) => {
  const nodes = {
  "sync a & b": __prototypes__["flow/Syncer"]({"a": params["a"],"b": params["b"],"fields": ["a","b"]}, ["76d82260-8c8d-4e7b-ba36-27d7fc3ad649", ...path]),
"equal": __prototypes__["number/Equality tester/Internal"]({}, ["97ca1c28-365c-4dd3-8126-810fdb73d644", ...path])
};
__connectPorts__(nodes["sync a & b"]?.outputs["synced"], nodes["equal"]?.inputs["a & b"]);
return __createNode__(["equal"], (outputs) => {
  __connectPorts__(nodes["equal"]?.outputs["equal"], outputs["equal"]);
  return {
  /*
The first number
*/
"a": (data, tag) => {
  nodes["sync a & b"]?.inputs["a"]?.(data, tag);
},
/*
The second number
*/
"b": (data, tag) => {
  nodes["sync a & b"]?.inputs["b"]?.(data, tag);
}
};
},
undefined,
{"a": "50e32f24-30af-4721-9e0a-89e85a9ee240","b": "2a91d8d8-a748-4135-9f8f-a7f200d97e6d"},
{"equal": "66ea4495-b5be-4650-9448-c802141b82cd"},
path);
}
__prototypes__["number/Equality tester/Internal"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["equal"], (outputs) => {
  
  return {
  "a & b": (data, tag) => {
  try {
    outputs.equal(data.a === data.b, tag);
  } catch(error) {
    __tracePortError__(path, "229e784b-52e2-4b64-9338-0babdf91b09a", error);
  }
}
};
},
(outputs) => {
  
},
{"a & b": "229e784b-52e2-4b64-9338-0babdf91b09a"},
{"equal": "5b0ac3ea-ca4b-40c4-a8b7-21add78630d4"},
path);
  };
})();
/*
Stores a parameter and sends it out on receiving a signal to `read`.

Sends the default value when `data` is not set.

Example A:
1. "foo" is set or received on `data`
2. "bar" is set on `default`
3. null@1 received via `read`
4. "foo"@1 sent via `data` (output)

Example B:
1. no value is set on `data`
2. "bar" is set on `default`
3. null@1 received via `read`
4. "bar" is sent via `data` (output)
*/
__prototypes__["flow/Parameter with default"] = (params, path = []) => {
  const nodes = {
  "store": __prototypes__["data/Store"]({"data": params["data"],"read": params["read"]}, ["85cd0e81-1f9c-4a27-a32f-c0397133409b", ...path]),
"default": __prototypes__["data/Store"]({"read": params["read"],"data": params["default"]}, ["be8ed238-12f0-4326-8d68-0b912f7657ee", ...path]),
"depot": __prototypes__["flow/Depot"]({}, ["80e986d3-2297-4f5a-a8a0-da569beb2e7d", ...path])
};
__connectPorts__(nodes["default"]?.outputs["data"], nodes["depot"]?.inputs["data"]);
__connectPorts__(nodes["store"]?.outputs["not found"], nodes["depot"]?.inputs["trigger"]);
return __createNode__(["data"], (outputs) => {
  __connectPorts__(nodes["store"]?.outputs["data"], outputs["data"]);
__connectPorts__(nodes["depot"]?.outputs["data"], outputs["data"]);
  return {
  /*
Sets the parameter value.
*/
"data": (data, tag) => {
  nodes["store"]?.inputs["data"]?.(data, tag);
},
/*
Sets the default value for the parameter. 

Works as static parameter only.
*/
"default": (data, tag) => {
  nodes["default"]?.inputs["data"]?.(data, tag);
},
/*
Receives signal that triggers sending out the stored parameter value or the default in case the prior is not set.
*/
"read": (data, tag) => {
  nodes["store"]?.inputs["read"]?.(data, tag);
nodes["default"]?.inputs["read"]?.(data, tag);
}
};
},
undefined,
{"data": "01ef7f62-ecc9-4fd2-8f70-980a2d25795a","default": "5d570fcf-b8db-4a62-8b84-4953a92d517f","read": "dae97765-6472-42e4-b129-749784e976f6"},
{"data": "9da98005-545d-4036-a36e-0f354a84cb50"},
path);
}
/*
Forwards signal received through `data` when corresponding signal was received via `trigger`.

Example:
1. "A"@0 received via `data` (input)
2. Wait 1s
3. null@0 received via `trigger`
4. "A"@0 is sent through `data` (output)
*/
__prototypes__["flow/Depot"] = (params, path = []) => {
  const nodes = {
  "syncer": __prototypes__["flow/Syncer"]({"data": params["data"],"trigger": params["trigger"],"fields": ["data", "trigger"]}, ["d0227f18-3f30-44b3-ba97-3a632066ff5c", ...path]),
"splitter": __prototypes__["flow/Splitter"]({"fields": ["data"]}, ["d43f830c-9821-4442-911b-ee7d9447b55b", ...path])
};
__connectPorts__(nodes["syncer"]?.outputs["synced"], nodes["splitter"]?.inputs["unsplit"]);
return __createNode__(["data"], (outputs) => {
  __connectPorts__(nodes["splitter"]?.outputs["data"], outputs["data"]);
  return {
  /*
Receives data to be forwarded on trigger signal.
*/
"data": (data, tag) => {
  nodes["syncer"]?.inputs["data"]?.(data, tag);
},
/*
Receives a signal indicating that the corresponding `data` input signal may be forwarded.
*/
"trigger": (data, tag) => {
  nodes["syncer"]?.inputs["trigger"]?.(data, tag);
}
};
},
undefined,
{"data": "72a73ffe-8319-4427-878e-3e67f2d150ff","trigger": "f58efe33-f70e-4570-ac54-670aaf844385"},
{"data": "eb4c2873-890f-4780-a895-53e321f3739e"},
path);
}
/*
Picks the minimum out of two numbers.

Example:

1. 12@0 is received via `a`
2. 22@0 is received via `b`
3. 12@0 is sent via `min`
*/
__prototypes__["number/Min picker"] = (params, path = []) => {
  const nodes = {
  "sync a & b": __prototypes__["flow/Syncer"]({"a": params["a"],"b": params["b"],"fields": ["a","b"]}, ["0a44b540-dec5-4a19-a41c-187250c73055", ...path]),
"pick min": __prototypes__["number/Min picker/Internal"]({}, ["828dbd6d-ae34-480d-82d3-fd7abc514372", ...path])
};
__connectPorts__(nodes["sync a & b"]?.outputs["synced"], nodes["pick min"]?.inputs["a & b"]);
return __createNode__(["min"], (outputs) => {
  __connectPorts__(nodes["pick min"]?.outputs["min"], outputs["min"]);
  return {
  /*
The first value to pick the minimum from
*/
"a": (data, tag) => {
  nodes["sync a & b"]?.inputs["a"]?.(data, tag);
},
/*
The second value to pick the minimum from
*/
"b": (data, tag) => {
  nodes["sync a & b"]?.inputs["b"]?.(data, tag);
}
};
},
undefined,
{"a": "aa1f8f2f-1676-4be6-a8e1-e74acffbeffd","b": "4f9a7be2-f54a-4447-bc3c-c813adf0051b"},
{"min": "0c5489c9-f28d-4ca4-b93f-3c2bb821a2ae"},
path);
}
__prototypes__["number/Min picker/Internal"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["min"], (outputs) => {
  
  return {
  "a & b": (data, tag) => {
  try {
    outputs.min(Math.min(data.a, data.b), tag);
  } catch(error) {
    __tracePortError__(path, "bd6d3a45-6800-4f99-89bf-355e3740c104", error);
  }
}
};
},
(outputs) => {
  
},
{"a & b": "bd6d3a45-6800-4f99-89bf-355e3740c104"},
{"min": "4328a906-3097-42a8-b056-7e8f951eef65"},
path);
  };
})();
__prototypes__["blockchain/ethereum/Contract deployment waiter/internal/confirmation fetcher"] = (params, path = []) => {
  const nodes = {
  "check if dict has confirmationNumber": __prototypes__["data/dictionary/Has key tester"]({"dict": params["dict"],"key": "confirmationNumber"}, ["58b8b6dc-c3a0-4eb6-a2bb-e80501858a4d", ...path]),
"forward dictionary": __prototypes__["flow/Gate"]({"data": params["dict"]}, ["82ad6712-a1db-46fb-9ae5-a26c3c814f8a", ...path]),
"not": __prototypes__["boolean/Not"]({}, ["a57a4a52-9c76-49cf-b589-994c0dbc9fdb", ...path]),
"extract data field if present": __prototypes__["data/dictionary/Item getter"]({"key": "data"}, ["cb9b5ae2-df31-4e8e-ac2b-b5427b925b40", ...path]),
"forward dictionary for extraction": __prototypes__["flow/Gate"]({"data": params["dict"]}, ["7ecca89e-13ba-473b-9971-052274cff030", ...path]),
"gate": __prototypes__["flow/Gate"]({}, ["ed14805b-8dfa-4e13-8531-aa6766d37640", ...path]),
"check if dict has confirmationNumber copy": __prototypes__["data/dictionary/Has key tester"]({"key": "confirmationNumber"}, ["293bf535-e0ad-4be3-bc2d-1790e6a30090", ...path])
};
__connectPorts__(nodes["check if dict has confirmationNumber"]?.outputs["has"], nodes["forward dictionary"]?.inputs["open"]);
__connectPorts__(nodes["check if dict has confirmationNumber"]?.outputs["has"], nodes["not"]?.inputs["a"]);
__connectPorts__(nodes["not"]?.outputs["not"], nodes["forward dictionary for extraction"]?.inputs["open"]);
__connectPorts__(nodes["forward dictionary for extraction"]?.outputs["data"], nodes["extract data field if present"]?.inputs["dict"]);
__connectPorts__(nodes["extract data field if present"]?.outputs["value"], nodes["gate"]?.inputs["data"]);
__connectPorts__(nodes["extract data field if present"]?.outputs["value"], nodes["check if dict has confirmationNumber copy"]?.inputs["dict"]);
__connectPorts__(nodes["check if dict has confirmationNumber copy"]?.outputs["has"], nodes["gate"]?.inputs["open"]);
return __createNode__(["confirmation"], (outputs) => {
  __connectPorts__(nodes["forward dictionary"]?.outputs["data"], outputs["confirmation"]);
__connectPorts__(nodes["gate"]?.outputs["data"], outputs["confirmation"]);
  return {
  /*
[Inherited from port `dict` of `has key tester`] 
Receives the dictionary to test.

Example:
{ "first": 1, "third": 3, "fifth": 5 }
*/
"dict": (data, tag) => {
  nodes["check if dict has confirmationNumber"]?.inputs["dict"]?.(data, tag);
nodes["forward dictionary for extraction"]?.inputs["data"]?.(data, tag);
nodes["forward dictionary"]?.inputs["data"]?.(data, tag);
}
};
},
undefined,
{"dict": "6ee9ed3a-0d16-4b51-b377-517e9ad882b8"},
{"confirmation": "a22eb79b-2432-4640-8f0c-7de0dcc5778a"},
path);
}
/*
Tests whether a dictionary has a specific key.

Example A:
1. { "first": 1, "third": 3, "fifth": 5 } @0 received via `dict`
2. "first"@0 received via `key`
3. `has` sends true@0

Example B:
1. { "first": 1, "third": 3, "fifth": 5 } @0 received via `dict`
2. "second"@0 received via `key`
3. `has` sends false@0
*/
__prototypes__["data/dictionary/Has key tester"] = (params, path = []) => {
  const nodes = {
  "get item": __prototypes__["data/dictionary/Item getter"]({"dict": params["dict"],"key": params["key"]}, ["2f47a491-c1ad-4e11-8560-bac7c37fb21d", ...path]),
"to boolean": __prototypes__["boolean/Reverse condition"]({}, ["474213fa-035b-427f-ab76-8c8a482d28bf", ...path])
};
__connectPorts__(nodes["get item"]?.outputs["value"], nodes["to boolean"]?.inputs["to true"]);
__connectPorts__(nodes["get item"]?.outputs["not found"], nodes["to boolean"]?.inputs["to false"]);
return __createNode__(["has"], (outputs) => {
  __connectPorts__(nodes["to boolean"]?.outputs["boolean"], outputs["has"]);
  return {
  /*
Receives the dictionary to test.

Example:
{ "first": 1, "third": 3, "fifth": 5 }
*/
"dict": (data, tag) => {
  nodes["get item"]?.inputs["dict"]?.(data, tag);
},
/*
Receives the key to look for in the dictionary.

Example:
"first"
*/
"key": (data, tag) => {
  nodes["get item"]?.inputs["key"]?.(data, tag);
}
};
},
undefined,
{"dict": "9debb883-e28c-42e7-8680-6e479e795d0d","key": "d1abdb29-7cc9-4d41-8b20-9594e3e9504c"},
{"has": "1f6bf4d0-2058-4552-9e89-1a67a502a762"},
path);
}
/*
Turns binary independent signals into a boolean.

Example A:
1. null@0 is received via `true`
2. true@0 is sent via `boolean`

Example B:
1. "foo"@1 is received via `false`
2. false@1 is sent via `boolean`
*/
__prototypes__["boolean/Reverse condition"] = (params, path = []) => {
  const nodes = {
  "true": __prototypes__["data/Store"]({"read": params["to true"],"data": true}, ["be2a3997-d6b8-401c-9ddb-cfadd5eeb5a8", ...path]),
"false": __prototypes__["data/Store"]({"read": params["to false"],"data": false}, ["9641b8f9-b293-417f-ab77-60c55f364b97", ...path])
};

return __createNode__(["boolean"], (outputs) => {
  __connectPorts__(nodes["true"]?.outputs["data"], outputs["boolean"]);
__connectPorts__(nodes["false"]?.outputs["data"], outputs["boolean"]);
  return {
  /*
Receives signals to be evaluated to true.
*/
"to true": (data, tag) => {
  nodes["true"]?.inputs["read"]?.(data, tag);
},
/*
Receives signals to be evaluated to false.
*/
"to false": (data, tag) => {
  nodes["false"]?.inputs["read"]?.(data, tag);
}
};
},
undefined,
{"to true": "7d8a1e5c-fe55-4483-8604-d8198c09f05e","to false": "71b2d8f8-8c04-4e7d-8f46-049cee8da304"},
{"boolean": "5d478d32-ae8f-4f2b-8f32-9d3cf14db437"},
path);
}
/*
Performs a boolean NOT operation on the value received via input `a`.

Example:

1. false@0 is received via `a`
2. true@0 is sent via `not`
*/
__prototypes__["boolean/Not"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["not"], (outputs) => {
  
  return {
  /*
The value to be negated.
*/
"a": (data, tag) => {
  try {
    outputs.not(!data, tag);
  } catch(error) {
    __tracePortError__(path, "bffdd7a0-eeaa-41c5-b272-20aff39ae810", error);
  }
}
};
},
(outputs) => {
  
},
{"a": "bffdd7a0-eeaa-41c5-b272-20aff39ae810"},
{"not": "442847b6-23b9-4ad6-a3f5-cce6e5159644"},
path);
  };
})();
__prototypes__["#workspace/Uniswap v2 clone/Group 3"] = (params, path = []) => {
  const nodes = {
  "factory compiler": __prototypes__["blockchain/ethereum/Uniswap/v2/Factory compiler"]({"start": params["start"]}, ["523bcb55-9683-4c42-b8ce-56533357dfe3", ...path]),
"factory deployer B": __prototypes__["blockchain/ethereum/Uniswap/v2/Factory deployer"]({"config": params["config"]}, ["0578f4e4-0771-48b4-bcef-de91b22af598", ...path]),
"contract deployment waiter": __prototypes__["blockchain/ethereum/Contract deployment waiter"]({"number required": 2}, ["ba58a0fb-28e3-43ba-b008-9023a0a3e94f", ...path]),
"item getter": __prototypes__["data/dictionary/Item getter"]({"key": "abi"}, ["8868bf64-1fa3-400d-9fc8-5451c1ecf978", ...path])
};
__connectPorts__(nodes["factory compiler"]?.outputs["compiled Factory contract"], nodes["factory deployer B"]?.inputs["factory contract"]);
__connectPorts__(nodes["factory compiler"]?.outputs["compiled Factory contract"], nodes["item getter"]?.inputs["dict"]);
__connectPorts__(nodes["factory deployer B"]?.outputs["confirmation"], nodes["contract deployment waiter"]?.inputs["confirmation"]);
return __createNode__(["error","factory address","events","factory ABI"], (outputs) => {
  __connectPorts__(nodes["factory deployer B"]?.outputs["events"], outputs["events"]);
__connectPorts__(nodes["factory deployer B"]?.outputs["error"], outputs["error"]);
__connectPorts__(nodes["contract deployment waiter"]?.outputs["contract address"], outputs["factory address"]);
__connectPorts__(nodes["item getter"]?.outputs["value"], outputs["factory ABI"]);
  return {
  "start": (data, tag) => {
  nodes["factory compiler"]?.inputs["start"]?.(data, tag);
},
"config": (data, tag) => {
  nodes["factory deployer B"]?.inputs["config"]?.(data, tag);
}
};
},
undefined,
{"start": "b4a42586-39a2-4221-8fd8-673b6177a389","config": "fc7c8edc-22f7-4f9d-b5ee-72e155409e8d"},
{"error": "daa4f3d3-2740-484d-8a07-0f0072306f2c","factory address": "6b8d3b0d-4d59-4b9d-87b6-5682692cdb0d","events": "aa325adc-6920-45e6-9b96-13cd43d6c551","factory ABI": "a0a5ca88-b262-4dc6-82e8-5e7bfe825bf4"},
path);
}
/*
Compiles Uniswap V2 Factory contract
*/
__prototypes__["blockchain/ethereum/Uniswap/v2/Factory compiler"] = (params, path = []) => {
  const nodes = {
  "core compiler": __prototypes__["blockchain/ethereum/Uniswap/v2/Core compiler"]({"start": params["start"]}, ["9e4aeeba-4b6a-4a93-8d0a-58480fdcea3f", ...path]),
"item getter": __prototypes__["data/dictionary/Item getter"]({"key": "UniswapV2Factory"}, ["eb643b73-30d8-4ff9-a1f9-be0e01289d0b", ...path])
};
__connectPorts__(nodes["core compiler"]?.outputs["compile core-compiled contracts"], nodes["item getter"]?.inputs["dict"]);
return __createNode__(["compiled Factory contract","error"], (outputs) => {
  __connectPorts__(nodes["item getter"]?.outputs["value"], outputs["compiled Factory contract"]);
__connectPorts__(nodes["core compiler"]?.outputs["error"], outputs["error"]);
  return {
  /*
Receives a signal that triggers the compilation of the Uniswap V2 Factory contract.
*/
"start": (data, tag) => {
  nodes["core compiler"]?.inputs["start"]?.(data, tag);
}
};
},
undefined,
{"start": "3dd8b80c-d01f-4d47-abff-104f98782ec6"},
{"compiled Factory contract": "2b7af6d6-aa19-4c89-9cba-5c8b4a8f6fb0","error": "86c83cbf-ac3a-4a4e-bab8-1578bbdcb5ba"},
path);
}
/*
Compiles Uniswap V2 core contracts
*/
__prototypes__["blockchain/ethereum/Uniswap/v2/Core compiler"] = (params, path = []) => {
  const nodes = {
  "output list core": __prototypes__["data/Store"]({"read": params["start"],"data": [
  "v2-core/contracts/UniswapV2Factory.sol",
  "v2-core/contracts/UniswapV2ERC20.sol",
  "v2-core/contracts/UniswapV2Pair.sol",
  "v2-core/contracts/interfaces/IERC20.sol",
  "v2-core/contracts/interfaces/IUniswapV2Callee.sol",
  "v2-core/contracts/interfaces/IUniswapV2ERC20.sol",
  "v2-core/contracts/interfaces/IUniswapV2Factory.sol",
  "v2-core/contracts/interfaces/IUniswapV2Pair.sol",
  "v2-core/contracts/libraries/Math.sol",
  "v2-core/contracts/libraries/SafeMath.sol",
  "v2-core/contracts/libraries/UQ112x112.sol"
]}, ["c4bd90e6-58a3-4311-860d-c393b02014a2", ...path]),
"compile settings": __prototypes__["data/Store"]({"read": params["start"],"data": {
  "includeRoots": [
    "v2-core/contracts",
    "libs"
  ],
  "solidityVersion": "v0.5.16+commit.9c3226ce",
    "compileOptions": {
      "evmVersion": "istanbul",
      "optimizer": {"enabled": true, "runs": 999999}
    }
}}, ["80e26d21-bc67-4e97-aca2-078911414e45", ...path]),
"compile": __prototypes__["blockchain/ethereum/Contracts compiler"]({}, ["d7171c51-e89b-4504-bc72-6b1edbad818b", ...path]),
"core-v2 sources clone": __prototypes__["blockchain/ethereum/Uniswap/v2/Core source code"]({"read": params["start"]}, ["3f5ab142-e534-4422-818d-a21322798476", ...path])
};
__connectPorts__(nodes["output list core"]?.outputs["data"], nodes["compile"]?.inputs["output list"]);
__connectPorts__(nodes["compile settings"]?.outputs["data"], nodes["compile"]?.inputs["compile settings"]);
__connectPorts__(nodes["core-v2 sources clone"]?.outputs["v2-core sources"], nodes["compile"]?.inputs["contracts"]);
return __createNode__(["compile core-compiled contracts","error"], (outputs) => {
  __connectPorts__(nodes["compile"]?.outputs["compiled contracts"], outputs["compile core-compiled contracts"]);
__connectPorts__(nodes["compile"]?.outputs["error"], outputs["error"]);
  return {
  /*
Receives a signal that triggers the compilation of the Uniswap V2 Core code.
*/
"start": (data, tag) => {
  nodes["compile settings"]?.inputs["read"]?.(data, tag);
nodes["output list core"]?.inputs["read"]?.(data, tag);
nodes["core-v2 sources clone"]?.inputs["read"]?.(data, tag);
}
};
},
undefined,
{"start": "6847d4a5-3a0a-429b-bf8f-410f4da7e1ab"},
{"compile core-compiled contracts": "2b981481-b683-4dfd-9738-febe673b08fa","error": "c56db654-2db7-4cb2-ac28-2213dae50128"},
path);
}
/*
Holds the Uniswap V2 Core source code in a structured way.
*/
__prototypes__["blockchain/ethereum/Uniswap/v2/Core source code"] = (params, path = []) => {
  const nodes = {
  "uniswap v2-core instrumented source": __prototypes__["data/Store"]({"read": params["read"],"data": {
  "v2-core": {
    "contracts": {
      "interfaces": {
        "IERC20.sol": "pragma solidity >=0.5.0;\r\n\r\ninterface IERC20 {\r\n    event Approval(address indexed owner, address indexed spender, uint value);\r\n    event Transfer(address indexed from, address indexed to, uint value);\r\n\r\n    function name() external view returns (string memory);\r\n    function symbol() external view returns (string memory);\r\n    function decimals() external view returns (uint8);\r\n    function totalSupply() external view returns (uint);\r\n    function balanceOf(address owner) external view returns (uint);\r\n    function allowance(address owner, address spender) external view returns (uint);\r\n\r\n    function approve(address spender, uint value) external returns (bool);\r\n    function transfer(address to, uint value) external returns (bool);\r\n    function transferFrom(address from, address to, uint value) external returns (bool);\r\n}\r\n",
        "IUniswapV2Callee.sol": "pragma solidity >=0.5.0;\r\n\r\ninterface IUniswapV2Callee {\r\n    function uniswapV2Call(address sender, uint amount0, uint amount1, bytes calldata data) external;\r\n}\r\n",
        "IUniswapV2ERC20.sol": "pragma solidity >=0.5.0;\r\n\r\ninterface IUniswapV2ERC20 {\r\n    event Approval(address indexed owner, address indexed spender, uint value);\r\n    event Transfer(address indexed from, address indexed to, uint value);\r\n\r\n    function name() external pure returns (string memory);\r\n    function symbol() external pure returns (string memory);\r\n    function decimals() external pure returns (uint8);\r\n    function totalSupply() external view returns (uint);\r\n    function balanceOf(address owner) external view returns (uint);\r\n    function allowance(address owner, address spender) external view returns (uint);\r\n\r\n    function approve(address spender, uint value) external returns (bool);\r\n    function transfer(address to, uint value) external returns (bool);\r\n    function transferFrom(address from, address to, uint value) external returns (bool);\r\n\r\n    function DOMAIN_SEPARATOR() external view returns (bytes32);\r\n    function PERMIT_TYPEHASH() external pure returns (bytes32);\r\n    function nonces(address owner) external view returns (uint);\r\n\r\n    function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external;\r\n}\r\n",
        "IUniswapV2Factory.sol": "pragma solidity >=0.5.0;\r\n\r\ninterface IUniswapV2Factory {\r\n    event PairCreated(address indexed token0, address indexed token1, address pair, uint);\r\n\r\n    function feeTo() external view returns (address);\r\n    function feeToSetter() external view returns (address);\r\n\r\n    function getPair(address tokenA, address tokenB) external view returns (address pair);\r\n    function allPairs(uint) external view returns (address pair);\r\n    function allPairsLength() external view returns (uint);\r\n\r\n    function createPair(address tokenA, address tokenB) external returns (address pair);\r\n\r\n    function setFeeTo(address) external;\r\n    function setFeeToSetter(address) external;\r\n}\r\n",
        "IUniswapV2Pair.sol": "pragma solidity >=0.5.0;\r\n\r\ninterface IUniswapV2Pair {\r\n    event Approval(address indexed owner, address indexed spender, uint value);\r\n    event Transfer(address indexed from, address indexed to, uint value);\r\n\r\n    function name() external pure returns (string memory);\r\n    function symbol() external pure returns (string memory);\r\n    function decimals() external pure returns (uint8);\r\n    function totalSupply() external view returns (uint);\r\n    function balanceOf(address owner) external view returns (uint);\r\n    function allowance(address owner, address spender) external view returns (uint);\r\n\r\n    function approve(address spender, uint value) external returns (bool);\r\n    function transfer(address to, uint value) external returns (bool);\r\n    function transferFrom(address from, address to, uint value) external returns (bool);\r\n\r\n    function DOMAIN_SEPARATOR() external view returns (bytes32);\r\n    function PERMIT_TYPEHASH() external pure returns (bytes32);\r\n    function nonces(address owner) external view returns (uint);\r\n\r\n    function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external;\r\n\r\n    event Mint(address indexed sender, uint amount0, uint amount1);\r\n    event Burn(address indexed sender, uint amount0, uint amount1, address indexed to);\r\n    event Swap(\r\n        address indexed sender,\r\n        uint amount0In,\r\n        uint amount1In,\r\n        uint amount0Out,\r\n        uint amount1Out,\r\n        address indexed to\r\n    );\r\n    event Sync(uint112 reserve0, uint112 reserve1);\r\n\r\n    function MINIMUM_LIQUIDITY() external pure returns (uint);\r\n    function factory() external view returns (address);\r\n    function token0() external view returns (address);\r\n    function token1() external view returns (address);\r\n    function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);\r\n    function price0CumulativeLast() external view returns (uint);\r\n    function price1CumulativeLast() external view returns (uint);\r\n    function kLast() external view returns (uint);\r\n\r\n    function mint(address to) external returns (uint liquidity);\r\n    function burn(address to) external returns (uint amount0, uint amount1);\r\n    function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external;\r\n    function skim(address to) external;\r\n    function sync() external;\r\n\r\n    function initialize(address, address) external;\r\n}\r\n"
      },
      "libraries": {
        "Math.sol": "pragma solidity =0.5.16;\r\n\r\n// a library for performing various math operations\r\n\r\nlibrary Math {\r\n    function min(uint x, uint y) internal pure returns (uint z) {\r\n        z = x < y ? x : y;\r\n    }\r\n\r\n    // babylonian method (https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method)\r\n    function sqrt(uint y) internal pure returns (uint z) {\r\n        if (y > 3) {\r\n            z = y;\r\n            uint x = y / 2 + 1;\r\n            while (x < z) {\r\n                z = x;\r\n                x = (y / x + x) / 2;\r\n            }\r\n        } else if (y != 0) {\r\n            z = 1;\r\n        }\r\n    }\r\n}\r\n",
        "SafeMath.sol": "pragma solidity =0.5.16;\r\n\r\n// a library for performing overflow-safe math, courtesy of DappHub (https://github.com/dapphub/ds-math)\r\n\r\nlibrary SafeMath {\r\n    function add(uint x, uint y) internal pure returns (uint z) {\r\n        require((z = x + y) >= x, 'ds-math-add-overflow');\r\n    }\r\n\r\n    function sub(uint x, uint y) internal pure returns (uint z) {\r\n        require((z = x - y) <= x, 'ds-math-sub-underflow');\r\n    }\r\n\r\n    function mul(uint x, uint y) internal pure returns (uint z) {\r\n        require(y == 0 || (z = x * y) / y == x, 'ds-math-mul-overflow');\r\n    }\r\n}\r\n",
        "UQ112x112.sol": "pragma solidity =0.5.16;\r\n\r\n// a library for handling binary fixed point numbers (https://en.wikipedia.org/wiki/Q_(number_format))\r\n\r\n// range: [0, 2**112 - 1]\r\n// resolution: 1 / 2**112\r\n\r\nlibrary UQ112x112 {\r\n    uint224 constant Q112 = 2**112;\r\n\r\n    // encode a uint112 as a UQ112x112\r\n    function encode(uint112 y) internal pure returns (uint224 z) {\r\n        z = uint224(y) * Q112; // never overflows\r\n    }\r\n\r\n    // divide a UQ112x112 by a uint112, returning a UQ112x112\r\n    function uqdiv(uint224 x, uint112 y) internal pure returns (uint224 z) {\r\n        z = x / uint224(y);\r\n    }\r\n}\r\n"
      },
      "test": {
        "ERC20.sol": "pragma solidity =0.5.16;\r\n\r\nimport '../UniswapV2ERC20.sol';\r\n\r\ncontract ERC20 is UniswapV2ERC20 {\r\n    constructor(uint _totalSupply) public {\r\n        _mint(msg.sender, _totalSupply);\r\n    }\r\n}\r\n"
      },
      "UniswapV2ERC20.sol": "pragma solidity =0.5.16;\r\n\r\nimport './interfaces/IUniswapV2ERC20.sol';\r\nimport './libraries/SafeMath.sol';\r\n\r\ncontract UniswapV2ERC20 is IUniswapV2ERC20 {\r\n    using SafeMath for uint;\r\n\r\n    string public constant name = 'Uniswap V2';\r\n    string public constant symbol = 'UNI-V2';\r\n    uint8 public constant decimals = 18;\r\n    uint  public totalSupply;\r\n    mapping(address => uint) public balanceOf;\r\n    mapping(address => mapping(address => uint)) public allowance;\r\n\r\n    bytes32 public DOMAIN_SEPARATOR;\r\n    // keccak256(\"Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)\");\r\n    bytes32 public constant PERMIT_TYPEHASH = 0x6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9;\r\n    mapping(address => uint) public nonces;\r\n\r\n    event Approval(address indexed owner, address indexed spender, uint value);\r\n    event Transfer(address indexed from, address indexed to, uint value);\r\n\r\n    constructor() public {\r\n        uint chainId;\r\n        assembly {\r\n            chainId := chainid\r\n        }\r\n        DOMAIN_SEPARATOR = keccak256(\r\n            abi.encode(\r\n                keccak256('EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)'),\r\n                keccak256(bytes(name)),\r\n                keccak256(bytes('1')),\r\n                chainId,\r\n                address(this)\r\n            )\r\n        );\r\n    }\r\n\r\n    function _mint(address to, uint value) internal {\r\n        totalSupply = totalSupply.add(value);\r\n        balanceOf[to] = balanceOf[to].add(value);\r\n        emit Transfer(address(0), to, value);\r\n    }\r\n\r\n    function _burn(address from, uint value) internal {\r\n        balanceOf[from] = balanceOf[from].sub(value);\r\n        totalSupply = totalSupply.sub(value);\r\n        emit Transfer(from, address(0), value);\r\n    }\r\n\r\n    function _approve(address owner, address spender, uint value) private {\r\n        allowance[owner][spender] = value;\r\n        emit Approval(owner, spender, value);\r\n    }\r\n\r\n    function _transfer(address from, address to, uint value) private {\r\n        balanceOf[from] = balanceOf[from].sub(value);\r\n        balanceOf[to] = balanceOf[to].add(value);\r\n        emit Transfer(from, to, value);\r\n    }\r\n\r\n    function approve(address spender, uint value) external returns (bool) {\r\n        _approve(msg.sender, spender, value);\r\n        return true;\r\n    }\r\n\r\n    function transfer(address to, uint value) external returns (bool) {\r\n        _transfer(msg.sender, to, value);\r\n        return true;\r\n    }\r\n\r\n    function transferFrom(address from, address to, uint value) external returns (bool) {\r\n        if (allowance[from][msg.sender] != uint(-1)) {\r\n            allowance[from][msg.sender] = allowance[from][msg.sender].sub(value);\r\n        }\r\n        _transfer(from, to, value);\r\n        return true;\r\n    }\r\n\r\n    function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external {\r\n        require(deadline >= block.timestamp, 'UniswapV2: EXPIRED');\r\n        bytes32 digest = keccak256(\r\n            abi.encodePacked(\r\n                '\\x19\\x01',\r\n                DOMAIN_SEPARATOR,\r\n                keccak256(abi.encode(PERMIT_TYPEHASH, owner, spender, value, nonces[owner]++, deadline))\r\n            )\r\n        );\r\n        address recoveredAddress = ecrecover(digest, v, r, s);\r\n        require(recoveredAddress != address(0) && recoveredAddress == owner, 'UniswapV2: INVALID_SIGNATURE');\r\n        _approve(owner, spender, value);\r\n    }\r\n}\r\n",
      "UniswapV2Factory.sol": "pragma solidity =0.5.16;\r\n\r\nimport './interfaces/IUniswapV2Factory.sol';\r\nimport './UniswapV2Pair.sol';\r\n\r\ncontract UniswapV2Factory is IUniswapV2Factory {\r\n\tbytes32 public constant INIT_CODE_PAIR_HASH = keccak256(abi.encodePacked(type(UniswapV2Pair).creationCode));\r\n    address public feeTo;\r\n    address public feeToSetter;\r\n\r\n    mapping(address => mapping(address => address)) public getPair;\r\n    address[] public allPairs;\r\n\r\n    event PairCreated(address indexed token0, address indexed token1, address pair, uint);\r\n\r\n    constructor(address _feeToSetter) public {\r\n        feeToSetter = _feeToSetter;\r\n    }\r\n\r\n    function allPairsLength() external view returns (uint) {\r\n        return allPairs.length;\r\n    }\r\n\r\n    function createPair(address tokenA, address tokenB) external returns (address pair) {\r\n        require(tokenA != tokenB, 'UniswapV2: IDENTICAL_ADDRESSES');\r\n        (address token0, address token1) = tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);\r\n        require(token0 != address(0), 'UniswapV2: ZERO_ADDRESS');\r\n        require(getPair[token0][token1] == address(0), 'UniswapV2: PAIR_EXISTS'); // single check is sufficient\r\n        bytes memory bytecode = type(UniswapV2Pair).creationCode;\r\n        bytes32 salt = keccak256(abi.encodePacked(token0, token1));\r\n        assembly {\r\n            pair := create2(0, add(bytecode, 32), mload(bytecode), salt)\r\n        }\r\n        IUniswapV2Pair(pair).initialize(token0, token1);\r\n        getPair[token0][token1] = pair;\r\n        getPair[token1][token0] = pair; // populate mapping in the reverse direction\r\n        allPairs.push(pair);\r\n        emit PairCreated(token0, token1, pair, allPairs.length);\r\n    }\r\n\r\n    function setFeeTo(address _feeTo) external {\r\n        require(msg.sender == feeToSetter, 'UniswapV2: FORBIDDEN');\r\n        feeTo = _feeTo;\r\n    }\r\n\r\n    function setFeeToSetter(address _feeToSetter) external {\r\n        require(msg.sender == feeToSetter, 'UniswapV2: FORBIDDEN');\r\n        feeToSetter = _feeToSetter;\r\n    }\r\n}\r\n",
      "UniswapV2Pair.sol": "pragma solidity =0.5.16;\r\n\r\nimport './interfaces/IUniswapV2Pair.sol';\r\nimport './UniswapV2ERC20.sol';\r\nimport './libraries/Math.sol';\r\nimport './libraries/UQ112x112.sol';\r\nimport './interfaces/IERC20.sol';\r\nimport './interfaces/IUniswapV2Factory.sol';\r\nimport './interfaces/IUniswapV2Callee.sol';\r\n\r\ncontract UniswapV2Pair is IUniswapV2Pair, UniswapV2ERC20 {\r\n    using SafeMath  for uint;\r\n    using UQ112x112 for uint224;\r\n\r\n    uint public constant MINIMUM_LIQUIDITY = 10**3;\r\n    bytes4 private constant SELECTOR = bytes4(keccak256(bytes('transfer(address,uint256)')));\r\n\r\n    address public factory;\r\n    address public token0;\r\n    address public token1;\r\n\r\n    uint112 private reserve0;           // uses single storage slot, accessible via getReserves\r\n    uint112 private reserve1;           // uses single storage slot, accessible via getReserves\r\n    uint32  private blockTimestampLast; // uses single storage slot, accessible via getReserves\r\n\r\n    uint public price0CumulativeLast;\r\n    uint public price1CumulativeLast;\r\n    uint public kLast; // reserve0 * reserve1, as of immediately after the most recent liquidity event\r\n\r\n    uint private unlocked = 1;\r\n    modifier lock() {\r\n        require(unlocked == 1, 'UniswapV2: LOCKED');\r\n        unlocked = 0;\r\n        _;\r\n        unlocked = 1;\r\n    }\r\n\r\n    function getReserves() public view returns (uint112 _reserve0, uint112 _reserve1, uint32 _blockTimestampLast) {\r\n        _reserve0 = reserve0;\r\n        _reserve1 = reserve1;\r\n        _blockTimestampLast = blockTimestampLast;\r\n    }\r\n\r\n    function _safeTransfer(address token, address to, uint value) private {\r\n        (bool success, bytes memory data) = token.call(abi.encodeWithSelector(SELECTOR, to, value));\r\n        require(success && (data.length == 0 || abi.decode(data, (bool))), 'UniswapV2: TRANSFER_FAILED');\r\n    }\r\n\r\n    event Mint(address indexed sender, uint amount0, uint amount1);\r\n    event Burn(address indexed sender, uint amount0, uint amount1, address indexed to);\r\n    event Swap(\r\n        address indexed sender,\r\n        uint amount0In,\r\n        uint amount1In,\r\n        uint amount0Out,\r\n        uint amount1Out,\r\n        address indexed to\r\n    );\r\n    event Sync(uint112 reserve0, uint112 reserve1);\r\n\r\n    constructor() public {\r\n        factory = msg.sender;\r\n    }\r\n\r\n    // called once by the factory at time of deployment\r\n    function initialize(address _token0, address _token1) external {\r\n        require(msg.sender == factory, 'UniswapV2: FORBIDDEN'); // sufficient check\r\n        token0 = _token0;\r\n        token1 = _token1;\r\n    }\r\n\r\n    // update reserves and, on the first call per block, price accumulators\r\n    function _update(uint balance0, uint balance1, uint112 _reserve0, uint112 _reserve1) private {\r\n        require(balance0 <= uint112(-1) && balance1 <= uint112(-1), 'UniswapV2: OVERFLOW');\r\n        uint32 blockTimestamp = uint32(block.timestamp % 2**32);\r\n        uint32 timeElapsed = blockTimestamp - blockTimestampLast; // overflow is desired\r\n        if (timeElapsed > 0 && _reserve0 != 0 && _reserve1 != 0) {\r\n            // * never overflows, and + overflow is desired\r\n            price0CumulativeLast += uint(UQ112x112.encode(_reserve1).uqdiv(_reserve0)) * timeElapsed;\r\n            price1CumulativeLast += uint(UQ112x112.encode(_reserve0).uqdiv(_reserve1)) * timeElapsed;\r\n        }\r\n        reserve0 = uint112(balance0);\r\n        reserve1 = uint112(balance1);\r\n        blockTimestampLast = blockTimestamp;\r\n        emit Sync(reserve0, reserve1);\r\n    }\r\n\r\n    // if fee is on, mint liquidity equivalent to 1/6th of the growth in sqrt(k)\r\n    function _mintFee(uint112 _reserve0, uint112 _reserve1) private returns (bool feeOn) {\r\n        address feeTo = IUniswapV2Factory(factory).feeTo();\r\n        feeOn = feeTo != address(0);\r\n        uint _kLast = kLast; // gas savings\r\n        if (feeOn) {\r\n            if (_kLast != 0) {\r\n                uint rootK = Math.sqrt(uint(_reserve0).mul(_reserve1));\r\n                uint rootKLast = Math.sqrt(_kLast);\r\n                if (rootK > rootKLast) {\r\n                    uint numerator = totalSupply.mul(rootK.sub(rootKLast));\r\n                    uint denominator = rootK.mul(5).add(rootKLast);\r\n                    uint liquidity = numerator / denominator;\r\n                    if (liquidity > 0) _mint(feeTo, liquidity);\r\n                }\r\n            }\r\n        } else if (_kLast != 0) {\r\n            kLast = 0;\r\n        }\r\n    }\r\n\r\n    // this low-level function should be called from a contract which performs important safety checks\r\n    function mint(address to) external lock returns (uint liquidity) {\r\n        (uint112 _reserve0, uint112 _reserve1,) = getReserves(); // gas savings\r\n        uint balance0 = IERC20(token0).balanceOf(address(this));\r\n        uint balance1 = IERC20(token1).balanceOf(address(this));\r\n        uint amount0 = balance0.sub(_reserve0);\r\n        uint amount1 = balance1.sub(_reserve1);\r\n\r\n        bool feeOn = _mintFee(_reserve0, _reserve1);\r\n        uint _totalSupply = totalSupply; // gas savings, must be defined here since totalSupply can update in _mintFee\r\n        if (_totalSupply == 0) {\r\n            liquidity = Math.sqrt(amount0.mul(amount1)).sub(MINIMUM_LIQUIDITY);\r\n           _mint(address(0), MINIMUM_LIQUIDITY); // permanently lock the first MINIMUM_LIQUIDITY tokens\r\n        } else {\r\n            liquidity = Math.min(amount0.mul(_totalSupply) / _reserve0, amount1.mul(_totalSupply) / _reserve1);\r\n        }\r\n        require(liquidity > 0, 'UniswapV2: INSUFFICIENT_LIQUIDITY_MINTED');\r\n        _mint(to, liquidity);\r\n\r\n        _update(balance0, balance1, _reserve0, _reserve1);\r\n        if (feeOn) kLast = uint(reserve0).mul(reserve1); // reserve0 and reserve1 are up-to-date\r\n        emit Mint(msg.sender, amount0, amount1);\r\n    }\r\n\r\n    // this low-level function should be called from a contract which performs important safety checks\r\n    function burn(address to) external lock returns (uint amount0, uint amount1) {\r\n        (uint112 _reserve0, uint112 _reserve1,) = getReserves(); // gas savings\r\n        address _token0 = token0;                                // gas savings\r\n        address _token1 = token1;                                // gas savings\r\n        uint balance0 = IERC20(_token0).balanceOf(address(this));\r\n        uint balance1 = IERC20(_token1).balanceOf(address(this));\r\n        uint liquidity = balanceOf[address(this)];\r\n\r\n        bool feeOn = _mintFee(_reserve0, _reserve1);\r\n        uint _totalSupply = totalSupply; // gas savings, must be defined here since totalSupply can update in _mintFee\r\n        amount0 = liquidity.mul(balance0) / _totalSupply; // using balances ensures pro-rata distribution\r\n        amount1 = liquidity.mul(balance1) / _totalSupply; // using balances ensures pro-rata distribution\r\n        require(amount0 > 0 && amount1 > 0, 'UniswapV2: INSUFFICIENT_LIQUIDITY_BURNED');\r\n        _burn(address(this), liquidity);\r\n        _safeTransfer(_token0, to, amount0);\r\n        _safeTransfer(_token1, to, amount1);\r\n        balance0 = IERC20(_token0).balanceOf(address(this));\r\n        balance1 = IERC20(_token1).balanceOf(address(this));\r\n\r\n        _update(balance0, balance1, _reserve0, _reserve1);\r\n        if (feeOn) kLast = uint(reserve0).mul(reserve1); // reserve0 and reserve1 are up-to-date\r\n        emit Burn(msg.sender, amount0, amount1, to);\r\n    }\r\n\r\n    // this low-level function should be called from a contract which performs important safety checks\r\n    function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external lock {\r\n        require(amount0Out > 0 || amount1Out > 0, 'UniswapV2: INSUFFICIENT_OUTPUT_AMOUNT');\r\n        (uint112 _reserve0, uint112 _reserve1,) = getReserves(); // gas savings\r\n        require(amount0Out < _reserve0 && amount1Out < _reserve1, 'UniswapV2: INSUFFICIENT_LIQUIDITY');\r\n\r\n        uint balance0;\r\n        uint balance1;\r\n        { // scope for _token{0,1}, avoids stack too deep errors\r\n        address _token0 = token0;\r\n        address _token1 = token1;\r\n        require(to != _token0 && to != _token1, 'UniswapV2: INVALID_TO');\r\n        if (amount0Out > 0) _safeTransfer(_token0, to, amount0Out); // optimistically transfer tokens\r\n        if (amount1Out > 0) _safeTransfer(_token1, to, amount1Out); // optimistically transfer tokens\r\n        if (data.length > 0) IUniswapV2Callee(to).uniswapV2Call(msg.sender, amount0Out, amount1Out, data);\r\n        balance0 = IERC20(_token0).balanceOf(address(this));\r\n        balance1 = IERC20(_token1).balanceOf(address(this));\r\n        }\r\n        uint amount0In = balance0 > _reserve0 - amount0Out ? balance0 - (_reserve0 - amount0Out) : 0;\r\n        uint amount1In = balance1 > _reserve1 - amount1Out ? balance1 - (_reserve1 - amount1Out) : 0;\r\n        require(amount0In > 0 || amount1In > 0, 'UniswapV2: INSUFFICIENT_INPUT_AMOUNT');\r\n        { // scope for reserve{0,1}Adjusted, avoids stack too deep errors\r\n        uint balance0Adjusted = balance0.mul(1000).sub(amount0In.mul(3));\r\n        uint balance1Adjusted = balance1.mul(1000).sub(amount1In.mul(3));\r\n        require(balance0Adjusted.mul(balance1Adjusted) >= uint(_reserve0).mul(_reserve1).mul(1000**2), 'UniswapV2: K');\r\n        }\r\n\r\n        _update(balance0, balance1, _reserve0, _reserve1);\r\n        emit Swap(msg.sender, amount0In, amount1In, amount0Out, amount1Out, to);\r\n    }\r\n\r\n    // force balances to match reserves\r\n    function skim(address to) external lock {\r\n        address _token0 = token0; // gas savings\r\n        address _token1 = token1; // gas savings\r\n        _safeTransfer(_token0, to, IERC20(_token0).balanceOf(address(this)).sub(reserve0));\r\n        _safeTransfer(_token1, to, IERC20(_token1).balanceOf(address(this)).sub(reserve1));\r\n    }\r\n\r\n    // force reserves to match balances\r\n    function sync() external lock {\r\n        _update(IERC20(token0).balanceOf(address(this)), IERC20(token1).balanceOf(address(this)), reserve0, reserve1);\r\n    }\r\n}\r\n"
    }
  }
}}, ["0830922f-ebb7-4894-b9e3-e5edb69ae3f0", ...path])
};

return __createNode__(["v2-core sources"], (outputs) => {
  __connectPorts__(nodes["uniswap v2-core instrumented source"]?.outputs["data"], outputs["v2-core sources"]);
  return {
  /*
Receives a signal that triggers the Unicode V2 Core source code being sent via `v2-core sources` output port.
*/
"read": (data, tag) => {
  nodes["uniswap v2-core instrumented source"]?.inputs["read"]?.(data, tag);
}
};
},
undefined,
{"read": "858f2cdf-e216-49be-9910-aa483d782f62"},
{"v2-core sources": "8db497a4-cf26-4b44-bb99-0a6266736222"},
path);
}
/*
Deployes UniswapV2Factory contract to the chain
*/
__prototypes__["blockchain/ethereum/Uniswap/v2/Factory deployer"] = (params, path = []) => {
  const nodes = {
  "deploy factory contract": __prototypes__["blockchain/ethereum/Contract deployer"]({"connect credentials": params["config"],"contract": params["factory contract"],"settings": {"gas": 3150623},"only estimate gas": false}, ["9d688e36-c761-45b7-b5a6-156c56048fa0", ...path]),
"item getter": __prototypes__["data/dictionary/Item getter"]({"dict": params["config"],"key": "accountAddress"}, ["b3f8212b-2d52-42de-b3bf-2e6f4612c407", ...path]),
"wrapper": __prototypes__["data/array/Wrapper"]({}, ["0cc6ed66-8a7c-428c-b9c2-98eee354bff6", ...path]),
"parameter with default": __prototypes__["flow/Parameter with default"]({"read": params["config"],"data": params["fee setter address"]}, ["657b8bbb-65eb-4111-9f13-dd8fdc14c678", ...path])
};
__connectPorts__(nodes["wrapper"]?.outputs["array"], nodes["deploy factory contract"]?.inputs["contract params"]);
__connectPorts__(nodes["item getter"]?.outputs["value"], nodes["parameter with default"]?.inputs["default"]);
__connectPorts__(nodes["parameter with default"]?.outputs["data"], nodes["wrapper"]?.inputs["data"]);
return __createNode__(["events","error","confirmation"], (outputs) => {
  __connectPorts__(nodes["deploy factory contract"]?.outputs["error"], outputs["error"]);
__connectPorts__(nodes["deploy factory contract"]?.outputs["confirmation"], outputs["confirmation"]);
__connectPorts__(nodes["deploy factory contract"]?.outputs["events"], outputs["events"]);
  return {
  /*
Optional. Account address of fee setter.

See: https://ethereum.org/en/developers/tutorials/uniswap-v2-annotated-code/#UniswapV2Factory
*/
"fee setter address": (data, tag) => {
  nodes["parameter with default"]?.inputs["data"]?.(data, tag);
},
"config": (data, tag) => {
  nodes["deploy factory contract"]?.inputs["connect credentials"]?.(data, tag);
nodes["item getter"]?.inputs["dict"]?.(data, tag);
nodes["parameter with default"]?.inputs["read"]?.(data, tag);
},
"factory contract": (data, tag) => {
  nodes["deploy factory contract"]?.inputs["contract"]?.(data, tag);
}
};
},
undefined,
{"fee setter address": "ae906061-5695-4e79-aa79-a30b6ab50ca3","config": "3d76105d-d387-4ebf-8751-5060aadc4c54","factory contract": "1be1c7f6-ec26-496e-98a6-10b5a8b9b3f9"},
{"events": "ff61a589-bab9-48de-997f-300f29073deb","error": "43026ea7-55a5-4af6-a937-272c8bfaba2a","confirmation": "7863188d-de92-41cc-b5c3-f5326b24ec02"},
path);
}
/*
Logs received data and tag to the output. Formats data as JSON.
*/
__prototypes__["debug/Logger"] = (params, path = []) => {
  const nodes = {
  "log": __prototypes__["debug/Logger (unformatted)"]({}, ["178673a4-37db-4ff2-bade-7b2673a85704", ...path]),
"serialize": __prototypes__["json/Serializer"]({"data": params["data"],"pretty": true}, ["bb5d26bd-66e5-460e-a815-b2fb0e043c7e", ...path])
};
__connectPorts__(nodes["serialize"]?.outputs["json"], nodes["log"]?.inputs["data"]);
__connectPorts__(nodes["serialize"]?.outputs["error"], nodes["log"]?.inputs["data"]);
return __createNode__([], (outputs) => {
  
  return {
  "data": (data, tag) => {
  nodes["serialize"]?.inputs["data"]?.(data, tag);
}
};
},
undefined,
{"data": "73758fba-7b0c-4ea6-8fec-0b56982d5451"},
{},
path);
}
__prototypes__["#workspace/Uniswap v2 clone/Group 4"] = (params, path = []) => {
  const nodes = {
  "liquidities adder": __prototypes__["blockchain/ethereum/Uniswap/v2/Liquidities adder"]({"pairs": params["pairs"],"credentials": params["config"],"router contract": params["router contract"]}, ["e0728891-a259-47aa-bdfb-3067e1d32416", ...path]),
"adder": __prototypes__["number/Adder"]({}, ["abca443d-4129-4259-bcfd-f9810d6b44b5", ...path]),
"calculate deadline": __prototypes__["#workspace/Uniswap v2 clone/Group 4/Group"]({"start": params["router contract"]}, ["5ba3799d-ae18-456c-b22c-281999d15068", ...path]),
"item getter": __prototypes__["data/dictionary/Item getter"]({"dict": params["config"],"key": "accountAddress"}, ["f0cf53b8-8cc7-46b0-863c-7e814ab04283", ...path])
};
__connectPorts__(nodes["adder"]?.outputs["sum"], nodes["liquidities adder"]?.inputs["deadline"]);
__connectPorts__(nodes["calculate deadline"]?.outputs["timestamp getter-timestamp"], nodes["adder"]?.inputs["a"]);
__connectPorts__(nodes["calculate deadline"]?.outputs["expiration-data"], nodes["adder"]?.inputs["b"]);
__connectPorts__(nodes["item getter"]?.outputs["value"], nodes["liquidities adder"]?.inputs["to address"]);
return __createNode__(["result","error"], (outputs) => {
  __connectPorts__(nodes["liquidities adder"]?.outputs["result"], outputs["result"]);
__connectPorts__(nodes["liquidities adder"]?.outputs["error"], outputs["error"]);
  return {
  "pairs": (data, tag) => {
  nodes["liquidities adder"]?.inputs["pairs"]?.(data, tag);
},
"config": (data, tag) => {
  nodes["liquidities adder"]?.inputs["credentials"]?.(data, tag);
nodes["item getter"]?.inputs["dict"]?.(data, tag);
},
"router contract": (data, tag) => {
  nodes["liquidities adder"]?.inputs["router contract"]?.(data, tag);
nodes["calculate deadline"]?.inputs["start"]?.(data, tag);
}
};
},
undefined,
{"pairs": "6f7ec5a1-7049-45d6-867c-14d8b522ffaf","config": "3a8d9830-3642-42ae-af03-055c099aeb0a","router contract": "cdbbece1-c5db-4481-83c0-b2101e03fe45"},
{"result": "320e50f1-a96f-4f21-b3d5-6ac93f7b31d7","error": "f49d6af9-9ab4-4546-8faa-c597546de3a7"},
path);
}
/*
Add liquidity to multiple pools.
*/
__prototypes__["blockchain/ethereum/Uniswap/v2/Liquidities adder"] = (params, path = []) => {
  const nodes = {
  "add liquidity": __prototypes__["blockchain/ethereum/Uniswap/v2/Liquidity adder"]({}, ["d9a30d41-2946-4cb3-a3b7-23cb197db9fe", ...path]),
"splitter": __prototypes__["flow/Splitter"]({"fields": [0,1]}, ["c7ad3b00-3c53-4fbe-8d3f-b2a50b16fb71", ...path]),
"repeater": __prototypes__["data/array/Repeater"]({}, ["1b19ef0f-612d-4130-91be-ad385babbc37", ...path]),
"forwarder": __prototypes__["flow/Forwarder"]({"data": params["pairs"]}, ["4e19d8fa-49f6-480f-aa06-e21ddce741db", ...path]),
"syncer": __prototypes__["flow/Syncer"]({"0": params["to address"],"1": params["deadline"],"2": params["router contract"],"3": params["credentials"],"fields": [0,1,2,3]}, ["ae2166c0-60cb-4583-b23c-7c334eb588bc", ...path]),
"splitter B": __prototypes__["flow/Splitter"]({"fields": [0,1,2,3]}, ["4dc742fa-11d3-41b7-b97b-c22c22af8a87", ...path]),
"step iterator": __prototypes__["data/array/Step iterator"]({"array": params["pairs"]}, ["f15b0853-85a0-49f1-ad88-0f063d6f39b2", ...path])
};
__connectPorts__(nodes["splitter"]?.outputs["0"], nodes["add liquidity"]?.inputs["tokenA"]);
__connectPorts__(nodes["splitter"]?.outputs["1"], nodes["add liquidity"]?.inputs["tokenB or ETH"]);
__connectPorts__(nodes["forwarder"]?.outputs["data"], nodes["repeater"]?.inputs["array"]);
__connectPorts__(nodes["syncer"]?.outputs["synced"], nodes["repeater"]?.inputs["data"]);
__connectPorts__(nodes["repeater"]?.outputs["data"], nodes["splitter B"]?.inputs["unsplit"]);
__connectPorts__(nodes["splitter B"]?.outputs["0"], nodes["add liquidity"]?.inputs["to addres"]);
__connectPorts__(nodes["splitter B"]?.outputs["1"], nodes["add liquidity"]?.inputs["deadline"]);
__connectPorts__(nodes["splitter B"]?.outputs["2"], nodes["add liquidity"]?.inputs["router contract"]);
__connectPorts__(nodes["splitter B"]?.outputs["3"], nodes["add liquidity"]?.inputs["credentials"]);
__connectPorts__(nodes["step iterator"]?.outputs["item"], nodes["splitter"]?.inputs["unsplit"]);
__connectPorts__(nodes["add liquidity"]?.outputs["result"], nodes["step iterator"]?.inputs["next"]);
return __createNode__(["result","error"], (outputs) => {
  __connectPorts__(nodes["add liquidity"]?.outputs["error"], outputs["error"]);
__connectPorts__(nodes["step iterator"]?.outputs["done"], outputs["result"]);
  return {
  /*
Receives a list of parameters for the liquidity pools.

Each list item consists of a pair of tokens to be added to the liquidity pool:
 - tokenA
 - tokenB or ETH

For tokenA the paramters are:
- address: the address of the token
- desiredAmount: the (maximal) amount we want to add to the liquidity pool in tokenA
- minimalAmount: the minimal amount we want to add to the liquidity pool in tokenA, if the current exchange ratio implies an amount smaller than that, the operation should fail

For tokenB or ETH the parameters are:
- address: the address of the token or "ETH"
- desiredAmount: the (maximal) amount we want to add to the liquidity pool in tokenB/ETH
- minimalAmount: the minimal amount we want to add to the liquidity pool in tokenB/ETH, if the current exchange ratio implies an amount smaller than that, the operation should fail
*/
"pairs": (data, tag) => {
  nodes["forwarder"]?.inputs["data"]?.(data, tag);
nodes["step iterator"]?.inputs["array"]?.(data, tag);
},
/*
Receives the address that will get the minted liquidity token.
*/
"to address": (data, tag) => {
  nodes["syncer"]?.inputs["0"]?.(data, tag);
},
/*
Receives the unix timestamp of the deadline until the operation should be completed or will be reverted.
*/
"deadline": (data, tag) => {
  nodes["syncer"]?.inputs["1"]?.(data, tag);
},
/*
Receives parameters of the Uniswap V2 Router contract to interact with
*/
"router contract": (data, tag) => {
  nodes["syncer"]?.inputs["2"]?.(data, tag);
},
/*
Receives credentials for the operation
*/
"credentials": (data, tag) => {
  nodes["syncer"]?.inputs["3"]?.(data, tag);
}
};
},
undefined,
{"pairs": "a710bb66-7d75-4a4b-8a7a-657cb4328897","to address": "3c09e73b-ae71-4668-95fc-8fb9041ab544","deadline": "b8628829-12f1-4e72-8d6f-c49372d6a081","router contract": "1a3a20cd-3619-4f71-80e3-991b67aa633c","credentials": "0cea3ff4-443d-449c-9db2-05fb3815264b"},
{"result": "b69fb11c-5508-4a80-837d-3976f69f9cd2","error": "0f7509cf-9bf3-4774-b97a-35ad0bc0904d"},
path);
}
/*
Add liquidity to the pool.
If pool doesn't exist it will be created.
TokenB can be ETH also.
*/
__prototypes__["blockchain/ethereum/Uniswap/v2/Liquidity adder"] = (params, path = []) => {
  const nodes = {
  "liquidity adder": __prototypes__["blockchain/ethereum/Uniswap/v2/Liquidity adder token"]({}, ["2e379074-d1a2-45d3-b8a6-8f0d1c900838", ...path]),
"liquidity adder eth": __prototypes__["blockchain/ethereum/Uniswap/v2/Liquidity adder ETH"]({}, ["353417a4-ceb9-46aa-9d38-1bfdcb794220", ...path]),
"contract parameters": __prototypes__["flow/Forwarder (quadruple)"]({"1": params["tokenA"],"2": params["tokenB or ETH"],"3": params["to addres"],"4": params["deadline"]}, ["2d481479-6d1b-42bc-83b1-d8543e9150e7", ...path]),
"operation parameters": __prototypes__["flow/Forwarder (double)"]({"1": params["router contract"],"2": params["credentials"]}, ["abfddba8-b87f-401c-a5ef-b1477ad429ec", ...path]),
"get \"address\"": __prototypes__["data/dictionary/Item getter"]({"key": "address"}, ["85bbd70b-bfe5-4d5a-8643-c7cb4055e9ad", ...path]),
"if \"ETH\"": __prototypes__["flow/Fork"]({}, ["439ba717-afcf-4844-aba4-830279e33b17", ...path]),
"is \"ETH\"?": __prototypes__["string/Equality tester"]({"b": "ETH"}, ["fb076c2f-8805-4fc1-96e1-3da223d1887b", ...path])
};
__connectPorts__(nodes["contract parameters"]?.outputs["2"], nodes["get \"address\""]?.inputs["dict"]);
__connectPorts__(nodes["contract parameters"]?.outputs["2"], nodes["if \"ETH\""]?.inputs["data"]);
__connectPorts__(nodes["contract parameters"]?.outputs["1"], nodes["liquidity adder eth"]?.inputs["tokenA"]);
__connectPorts__(nodes["contract parameters"]?.outputs["1"], nodes["liquidity adder"]?.inputs["tokenA"]);
__connectPorts__(nodes["contract parameters"]?.outputs["3"], nodes["liquidity adder eth"]?.inputs["to address"]);
__connectPorts__(nodes["contract parameters"]?.outputs["3"], nodes["liquidity adder"]?.inputs["to address"]);
__connectPorts__(nodes["contract parameters"]?.outputs["4"], nodes["liquidity adder eth"]?.inputs["deadline"]);
__connectPorts__(nodes["contract parameters"]?.outputs["4"], nodes["liquidity adder"]?.inputs["deadline"]);
__connectPorts__(nodes["get \"address\""]?.outputs["value"], nodes["is \"ETH\"?"]?.inputs["a"]);
__connectPorts__(nodes["if \"ETH\""]?.outputs["on true"], nodes["liquidity adder eth"]?.inputs["ETH"]);
__connectPorts__(nodes["if \"ETH\""]?.outputs["on false"], nodes["liquidity adder"]?.inputs["tokenB"]);
__connectPorts__(nodes["operation parameters"]?.outputs["1"], nodes["liquidity adder"]?.inputs["router contract"]);
__connectPorts__(nodes["operation parameters"]?.outputs["1"], nodes["liquidity adder eth"]?.inputs["router contract"]);
__connectPorts__(nodes["operation parameters"]?.outputs["2"], nodes["liquidity adder"]?.inputs["credentials"]);
__connectPorts__(nodes["operation parameters"]?.outputs["2"], nodes["liquidity adder eth"]?.inputs["credentials"]);
__connectPorts__(nodes["is \"ETH\"?"]?.outputs["equal"], nodes["if \"ETH\""]?.inputs["condition"]);
return __createNode__(["result","error"], (outputs) => {
  __connectPorts__(nodes["liquidity adder eth"]?.outputs["result"], outputs["result"]);
__connectPorts__(nodes["liquidity adder"]?.outputs["result"], outputs["result"]);
__connectPorts__(nodes["liquidity adder eth"]?.outputs["error"], outputs["error"]);
__connectPorts__(nodes["liquidity adder"]?.outputs["error"], outputs["error"]);
  return {
  /*
Receives parameters for tokenA.
- address: the address of the token
- desiredAmount: the (maximal) amount we want to add to the liquidity pool in tokenA
- minimalAmount: the minimal amount we want to add to the liquidity pool in tokenA, if the current exchange ratio implies an amount smaller than that, the operation should fail
*/
"tokenA": (data, tag) => {
  nodes["contract parameters"]?.inputs["1"]?.(data, tag);
},
/*
Receives parameters for tokenB/ETH.
- address: the address of the token or "ETH"
- desiredAmount: the (maximal) amount we want to add to the liquidity pool in tokenB/ETH
- minimalAmount: the minimal amount we want to add to the liquidity pool in tokenB/ETH, if the current exchange ratio implies an amount smaller than that, the operation should fail
*/
"tokenB or ETH": (data, tag) => {
  nodes["contract parameters"]?.inputs["2"]?.(data, tag);
},
/*
Receives the address that will get the minted liquidity token.
*/
"to addres": (data, tag) => {
  nodes["contract parameters"]?.inputs["3"]?.(data, tag);
},
/*
Receives the unix timestamp of the deadline until the operation should be completed or will be reverted.
*/
"deadline": (data, tag) => {
  nodes["contract parameters"]?.inputs["4"]?.(data, tag);
},
/*
Receives parameters of the Uniswap V2 Router contract to interact with
*/
"router contract": (data, tag) => {
  nodes["operation parameters"]?.inputs["1"]?.(data, tag);
},
/*
Receives credentials for the operation
*/
"credentials": (data, tag) => {
  nodes["operation parameters"]?.inputs["2"]?.(data, tag);
}
};
},
undefined,
{"tokenA": "ca036788-5f7a-4d08-a4cf-f4223b4ce604","tokenB or ETH": "78d8f5a9-17e7-45e2-b778-f46cda29a80a","to addres": "7de50776-c33c-49fd-ae41-bb85b3da0501","deadline": "76512fec-78df-43fd-a9fd-20e33817bb49","router contract": "a1a9f3b2-f3b9-4917-b77a-bf507b19f47f","credentials": "77827705-1577-47c3-904c-8dff54475e8d"},
{"result": "ca296aaa-e80e-4141-8a2c-2be8aad5dec2","error": "4fbce32e-7012-4bde-bdc5-052501a3efde"},
path);
}
/*
Add liquidity to a pool.
If the pool doesn't exists it will be created.
*/
__prototypes__["blockchain/ethereum/Uniswap/v2/Liquidity adder token"] = (params, path = []) => {
  const nodes = {
  "tokenA data": __prototypes__["flow/Splitter"]({"fields": ["address","desiredAmount", "minimalAmount"]}, ["bab278f9-92f3-4313-9363-6ad084394c0c", ...path]),
"tokenB data": __prototypes__["flow/Splitter"]({"fields": ["address","desiredAmount", "minimalAmount"]}, ["0b6ed1c2-ac5a-46dd-b36e-8b0c2f04ca5d", ...path]),
"approve tokenA": __prototypes__["blockchain/ethereum/contracts/ERC20/Approve"]({}, ["2505b99d-e535-49cf-8793-02ff8c957157", ...path]),
"approve tokenB": __prototypes__["blockchain/ethereum/contracts/ERC20/Approve"]({}, ["131b7957-e555-4d92-8f81-d86c2ebf2874", ...path]),
"add liquidity": __prototypes__["blockchain/ethereum/Uniswap/v2/Router/AddLiquidity"]({}, ["55ca1580-e573-4f63-bb8f-2306a0776468", ...path]),
"sync approvals": __prototypes__["flow/Syncer"]({"fields": [0,1]}, ["f96fee45-39d2-4f55-b5c5-f8dc6ecdbbed", ...path]),
"addLiquidity params": __prototypes__["flow/Forwarder (quadruple)"]({"1": params["tokenA"],"2": params["tokenB"],"3": params["to address"],"4": params["deadline"]}, ["c3a856a1-4bff-48dd-8683-4e5300f0a987", ...path]),
"operation params": __prototypes__["flow/Forwarder (double)"]({"1": params["router contract"],"2": params["credentials"]}, ["9598eafb-20d4-4a27-8513-aba3797511b1", ...path]),
"router address, credentials": __prototypes__["flow/Forwarder (double)"]({}, ["23a03b65-cf8a-483a-8f9b-692e1472b900", ...path]),
"router contract data": __prototypes__["flow/Splitter"]({"fields": ["address", "abi"]}, ["6a229973-3f50-4f6d-ab83-c2ec02f8ae5d", ...path]),
"wait for approvals": __prototypes__["flow/Depot"]({}, ["6f4a6090-083a-4df4-a8af-67978a7a5ff9", ...path]),
"wait for tokenA approval": __prototypes__["flow/Gate"]({}, ["608be892-0175-40f5-9f6a-3381250199d8", ...path]),
"errors": __prototypes__["flow/Forwarder"]({}, ["a4bc94d2-1fe9-48cb-8340-d5288766e521", ...path])
};
__connectPorts__(nodes["tokenA data"]?.outputs["address"], nodes["approve tokenA"]?.inputs["token address"]);
__connectPorts__(nodes["tokenA data"]?.outputs["desiredAmount"], nodes["approve tokenA"]?.inputs["amount"]);
__connectPorts__(nodes["tokenB data"]?.outputs["desiredAmount"], nodes["approve tokenB"]?.inputs["amount"]);
__connectPorts__(nodes["tokenB data"]?.outputs["address"], nodes["approve tokenB"]?.inputs["token address"]);
__connectPorts__(nodes["addLiquidity params"]?.outputs["1"], nodes["tokenA data"]?.inputs["unsplit"]);
__connectPorts__(nodes["addLiquidity params"]?.outputs["1"], nodes["add liquidity"]?.inputs["tokenA"]);
__connectPorts__(nodes["addLiquidity params"]?.outputs["2"], nodes["tokenB data"]?.inputs["unsplit"]);
__connectPorts__(nodes["addLiquidity params"]?.outputs["2"], nodes["add liquidity"]?.inputs["tokenB"]);
__connectPorts__(nodes["addLiquidity params"]?.outputs["3"], nodes["add liquidity"]?.inputs["liquidity token to"]);
__connectPorts__(nodes["addLiquidity params"]?.outputs["4"], nodes["add liquidity"]?.inputs["deadline"]);
__connectPorts__(nodes["operation params"]?.outputs["1"], nodes["add liquidity"]?.inputs["router contract"]);
__connectPorts__(nodes["operation params"]?.outputs["1"], nodes["router contract data"]?.inputs["unsplit"]);
__connectPorts__(nodes["operation params"]?.outputs["2"], nodes["router address, credentials"]?.inputs["2"]);
__connectPorts__(nodes["operation params"]?.outputs["2"], nodes["wait for approvals"]?.inputs["data"]);
__connectPorts__(nodes["router address, credentials"]?.outputs["1"], nodes["approve tokenA"]?.inputs["router address"]);
__connectPorts__(nodes["router address, credentials"]?.outputs["1"], nodes["wait for tokenA approval"]?.inputs["data"]);
__connectPorts__(nodes["router address, credentials"]?.outputs["2"], nodes["approve tokenA"]?.inputs["credentials"]);
__connectPorts__(nodes["router address, credentials"]?.outputs["2"], nodes["approve tokenB"]?.inputs["credentials"]);
__connectPorts__(nodes["router contract data"]?.outputs["address"], nodes["router address, credentials"]?.inputs["1"]);
__connectPorts__(nodes["approve tokenA"]?.outputs["result"], nodes["sync approvals"]?.inputs["0"]);
__connectPorts__(nodes["approve tokenA"]?.outputs["result"], nodes["wait for tokenA approval"]?.inputs["open"]);
__connectPorts__(nodes["approve tokenA"]?.outputs["error"], nodes["errors"]?.inputs["data"]);
__connectPorts__(nodes["approve tokenB"]?.outputs["result"], nodes["sync approvals"]?.inputs["1"]);
__connectPorts__(nodes["approve tokenB"]?.outputs["error"], nodes["errors"]?.inputs["data"]);
__connectPorts__(nodes["sync approvals"]?.outputs["synced"], nodes["wait for approvals"]?.inputs["trigger"]);
__connectPorts__(nodes["wait for approvals"]?.outputs["data"], nodes["add liquidity"]?.inputs["credentials"]);
__connectPorts__(nodes["wait for tokenA approval"]?.outputs["data"], nodes["approve tokenB"]?.inputs["router address"]);
return __createNode__(["result","error"], (outputs) => {
  __connectPorts__(nodes["add liquidity"]?.outputs["result"], outputs["result"]);
__connectPorts__(nodes["add liquidity"]?.outputs["error"], outputs["error"]);
__connectPorts__(nodes["errors"]?.outputs["data"], outputs["error"]);
  return {
  /*
Receives parameters for tokenA.
- address: the address of the token
- desiredAmount: the (maximal) amount we want to add to the liquidity pool in tokenA
- minimalAmount: the minimal amount we want to add to the liquidity pool in tokenA, if the current exchange ratio implies an amount smaller than that, the operation should fail
*/
"tokenA": (data, tag) => {
  nodes["addLiquidity params"]?.inputs["1"]?.(data, tag);
},
/*
Receives parameters for tokenB.
- address: the address of the token
- desiredAmount: the (maximal) amount we want to add to the liquidity pool in tokenB
- minimalAmount: the minimal amount we want to add to the liquidity pool in tokenB, if the current exchange ratio implies an amount smaller than that, the operation should fail
*/
"tokenB": (data, tag) => {
  nodes["addLiquidity params"]?.inputs["2"]?.(data, tag);
},
/*
Receives the address that will get the minted liquidity token.
*/
"to address": (data, tag) => {
  nodes["addLiquidity params"]?.inputs["3"]?.(data, tag);
},
/*
Receives the unix timestamp of the deadline until the operation should be completed or will be reverted.
*/
"deadline": (data, tag) => {
  nodes["addLiquidity params"]?.inputs["4"]?.(data, tag);
},
/*
Receives parameters of the Uniswap V2 Router contract to interact with
*/
"router contract": (data, tag) => {
  nodes["operation params"]?.inputs["1"]?.(data, tag);
},
/*
Receives credentials for the operation
*/
"credentials": (data, tag) => {
  nodes["operation params"]?.inputs["2"]?.(data, tag);
}
};
},
undefined,
{"tokenA": "4602e6ff-ae72-46bd-bddb-2065b4f4895a","tokenB": "e971b0f8-3982-4b6e-98d7-22f8409f3817","to address": "46368936-c937-4d59-9cf5-943b756ace58","deadline": "642a80c9-e59e-4e40-98e0-842ce385e544","router contract": "9ab46954-d296-43b4-a18a-377cc168128d","credentials": "8c3157b3-36b1-4b1f-a20d-202a622dc38c"},
{"result": "60a037e1-67e3-4d3b-9606-3398163f27af","error": "193c7b18-8f27-4b68-878f-2c2d0bc1b8c4"},
path);
}
/*
Calls the "approve" method on the ERC20 token contract
*/
__prototypes__["blockchain/ethereum/contracts/ERC20/Approve"] = (params, path = []) => {
  const nodes = {
  "ERC20": __prototypes__["blockchain/ethereum/contracts/ERC20"]({}, ["868ee981-e9cc-4677-a04b-cd8ab1b12053", ...path]),
"forwarder (quadruple)": __prototypes__["flow/Forwarder (quadruple)"]({"1": params["router address"],"2": params["amount"],"3": params["token address"],"4": params["credentials"]}, ["c5b4fef7-6cc6-4424-b37c-c1d9c1488fb3", ...path]),
"build parameters": __prototypes__["flow/Syncer"]({"fields": [0,1]}, ["85bc5fb8-b3ca-4a5f-a4fa-3cc4d3552792", ...path]),
"contract executor": __prototypes__["blockchain/ethereum/Contract executor"]({"method name": "approve","transaction parameters": {
  "gas": 2000000
}}, ["5be21e78-dfb5-4901-b015-91030d73ccb7", ...path]),
"unit parser": __prototypes__["blockchain/ethereum/Unit parser"]({}, ["105c12ac-463a-47f8-98be-669d614d3ca5", ...path])
};
__connectPorts__(nodes["forwarder (quadruple)"]?.outputs["1"], nodes["build parameters"]?.inputs["0"]);
__connectPorts__(nodes["forwarder (quadruple)"]?.outputs["4"], nodes["ERC20"]?.inputs["read"]);
__connectPorts__(nodes["forwarder (quadruple)"]?.outputs["4"], nodes["contract executor"]?.inputs["credentials"]);
__connectPorts__(nodes["forwarder (quadruple)"]?.outputs["3"], nodes["contract executor"]?.inputs["contract address"]);
__connectPorts__(nodes["forwarder (quadruple)"]?.outputs["2"], nodes["unit parser"]?.inputs["units"]);
__connectPorts__(nodes["build parameters"]?.outputs["synced"], nodes["contract executor"]?.inputs["parameters"]);
__connectPorts__(nodes["ERC20"]?.outputs["abi"], nodes["contract executor"]?.inputs["contract abi"]);
__connectPorts__(nodes["unit parser"]?.outputs["result"], nodes["build parameters"]?.inputs["1"]);
return __createNode__(["result","error"], (outputs) => {
  __connectPorts__(nodes["contract executor"]?.outputs["result"], outputs["result"]);
__connectPorts__(nodes["contract executor"]?.outputs["error"], outputs["error"]);
  return {
  /*
Receives the address of the router contract that is given the approval for the specified token.
*/
"router address": (data, tag) => {
  nodes["forwarder (quadruple)"]?.inputs["1"]?.(data, tag);
},
/*
Receives the amount of  tokens to be approved
*/
"amount": (data, tag) => {
  nodes["forwarder (quadruple)"]?.inputs["2"]?.(data, tag);
},
/*
Receives the address of  the token to be approved
*/
"token address": (data, tag) => {
  nodes["forwarder (quadruple)"]?.inputs["3"]?.(data, tag);
},
/*
Receives the credentials required to interact with the chain.
*/
"credentials": (data, tag) => {
  nodes["forwarder (quadruple)"]?.inputs["4"]?.(data, tag);
}
};
},
undefined,
{"router address": "8af36cde-8a26-4e21-938d-066a5e5742bd","amount": "86a67e4f-9f7d-4924-b1b8-9e9b17c5c8cf","token address": "3eb6ccfa-35e8-4704-947b-89c795ea6871","credentials": "82b16f00-66eb-49b7-8f6d-afa56a77f4c9"},
{"result": "74f19ab3-291b-479d-98b0-52ac9cd6affe","error": "91b4a65a-6da8-4469-a63e-bc64c18b0d78"},
path);
}
/*
Holds the ABI of the ERC20 token contract
*/
__prototypes__["blockchain/ethereum/contracts/ERC20"] = (params, path = []) => {
  const nodes = {
  "abi": __prototypes__["data/Store"]({"read": params["read"],"data": [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]}, ["1884d640-c3e3-4e07-b325-229996f11bec", ...path])
};

return __createNode__(["abi"], (outputs) => {
  __connectPorts__(nodes["abi"]?.outputs["data"], outputs["abi"]);
  return {
  "read": (data, tag) => {
  nodes["abi"]?.inputs["read"]?.(data, tag);
}
};
},
undefined,
{"read": "6760b665-131e-4ec5-b2f7-12bbfa1f60d9"},
{"abi": "a7efbc77-d51f-43df-9c45-273de73aafb7"},
path);
}
/*
Calls an altering method on a smart contract.
*/
__prototypes__["blockchain/ethereum/Contract executor"] = (params, path = []) => {
  const nodes = {
  "build contract parameters": __prototypes__["flow/Syncer"]({"contract address": params["contract address"],"abi": params["contract abi"],"method name": params["method name"],"parameters": params["parameters"],"alters": true,"fields": [
  "contract address",
  "abi",
  "method name", 
  "parameters", 
  "alters"
]}, ["a8b08540-468f-4bbe-b8dd-47df8ac7273b", ...path]),
"method call": __prototypes__["blockchain/ethereum/Contract caller/Internal"]({}, ["b9a448ac-f405-4f0e-8c59-1b721cc14472", ...path]),
"build data": __prototypes__["flow/Syncer"]({"transaction parameters": params["transaction parameters"],"web3 credentials": params["credentials"],"fields": ["contract parameters", "transaction parameters", "web3 credentials"]}, ["28d8e85d-b1ed-42e2-a385-78eeed02f55e", ...path])
};
__connectPorts__(nodes["build data"]?.outputs["synced"], nodes["method call"]?.inputs["data"]);
__connectPorts__(nodes["build contract parameters"]?.outputs["synced"], nodes["build data"]?.inputs["contract parameters"]);
return __createNode__(["result","error"], (outputs) => {
  __connectPorts__(nodes["method call"]?.outputs["result"], outputs["result"]);
__connectPorts__(nodes["method call"]?.outputs["error"], outputs["error"]);
  return {
  /*
Receives the address of the contract to interact with.
*/
"contract address": (data, tag) => {
  nodes["build contract parameters"]?.inputs["contract address"]?.(data, tag);
},
/*
Receives the ABI of the contract to interact with.
*/
"contract abi": (data, tag) => {
  nodes["build contract parameters"]?.inputs["abi"]?.(data, tag);
},
/*
Receives the method name to execute on the contract.
*/
"method name": (data, tag) => {
  nodes["build contract parameters"]?.inputs["method name"]?.(data, tag);
},
/*
Receives the parameters of the method call as array.
*/
"parameters": (data, tag) => {
  nodes["build contract parameters"]?.inputs["parameters"]?.(data, tag);
},
/*
Receives the parameters of the transaction.

Example: 
{
  "gas": 2000000,
  "value": "foobar"
}
*/
"transaction parameters": (data, tag) => {
  nodes["build data"]?.inputs["transaction parameters"]?.(data, tag);
},
/*
Receives the credentials required to interact with the chain.
*/
"credentials": (data, tag) => {
  nodes["build data"]?.inputs["web3 credentials"]?.(data, tag);
}
};
},
undefined,
{"contract address": "e62bb3b3-e749-4e85-b789-51e33a3fbe82","contract abi": "39a06197-ca9b-4ada-ab8e-6de9bd241529","method name": "1c54037b-03d2-447f-8e10-41c1f3ebfbfe","parameters": "9ff09a73-b892-48f2-b976-2cd7de67dcbd","transaction parameters": "a1d2a03b-c119-442d-b464-d3aeeab20f1e","credentials": "5e721c7e-2b06-494f-a65e-6b527531cddc"},
{"result": "87606a66-0567-440c-9686-f02bf52462e4","error": "21d246f0-67a7-4b2e-984a-94cf1f7d21e8"},
path);
}
__prototypes__["blockchain/ethereum/Contract caller/Internal"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["result","error"], (outputs) => {
  
  return {
  "data": (data, tag) => {
  try {
    const Web3 = require("web3");
    
    const {
      "contract parameters": contractParameters,
      "web3 credentials": web3Credentials,
      "transaction parameters": inputTransactionParameters = {}
    } = data ?? {};
    if (!(
      contractParameters
      && typeof contractParameters === "object"
      && web3Credentials
      && typeof web3Credentials === "object"
      && typeof inputTransactionParameters === "object"
    )) {
      throw new Error("Input data is invalid. Please check it complies with type!");
    }
    
    const defaultTransactionParameters = { gas: 2200 };
    const transactionParameters = {
      ...defaultTransactionParameters,
      ...inputTransactionParameters
    };
    
    const {
      "contract address": contractAddress,
      "method name": methodName,
      parameters,
      alters,
      abi
    } = contractParameters;
    if (!(
      contractAddress
      && methodName
      && parameters
      && Array.isArray(parameters)
      && typeof alters === "boolean"
    )) {
      throw new Error("Input data contains invalid value for `contract parameters`. Please check type!");
    }
    
    const {providerUrl, privateKey} = web3Credentials;
    if(!(
      providerUrl
      && privateKey
    )) {
      throw new Error("Input data contains invalid value for `web3 credentials`. Please check type!");
    }
    
    const provider = new Web3.providers.HttpProvider(providerUrl);
    const web3 = new Web3(provider);
    const signer = web3.eth.accounts.privateKeyToAccount(privateKey);
    web3.eth.accounts.wallet.add(signer);
    const contract = new web3.eth.Contract(abi, contractAddress, {from: signer.address});
    
    async function main() {
      let res;
    
      if (alters) {
        //  More sophisticated gas estimation algorythm
        // FIXME: gas should come from settings
        res = await contract.methods[methodName](...parameters).send(transactionParameters);
      } else {
        res = await contract.methods[methodName](...parameters).call();
      }
      outputs["result"](res, tag);
    }
    
    main().catch((e) => {
      outputs["error"]({error: e.toString()}, tag);
    });
  } catch(error) {
    __tracePortError__(path, "244fb79b-f74f-4ba9-ad9b-9d4bbfb66d96", error);
  }
}
};
},
(outputs) => {
  
},
{"data": "244fb79b-f74f-4ba9-ad9b-9d4bbfb66d96"},
{"result": "a8910f08-11f8-4764-817b-ea55ea851dd5","error": "00cbcc07-f756-4b6f-a21e-4e7ddcaa2b9b"},
path);
  };
})();
/*
Converts the decimal string value of units to a string assuming unit decimal places.

Eg:
1. `units` receives 1.5@0
2. `decimals` is set to 18
3. `results` sends out "1500000000000000000"
*/
__prototypes__["blockchain/ethereum/Unit parser"] = (params, path = []) => {
  const nodes = {
  "convert to BigNumber": __prototypes__["blockchain/ethereum/Unit parser/Internal"]({}, ["ff670edc-99bd-4d12-bf66-b86f0d5ccf3b", ...path]),
"syncer": __prototypes__["flow/Syncer"]({"units": params["units"],"fields": ["units", "decimals"]}, ["46a4d777-9d35-452d-95da-5d27eea22923", ...path]),
"parameter with default": __prototypes__["flow/Parameter with default"]({"read": params["units"],"data": params["decimals"],"default": 18}, ["0eee9868-aa74-4170-84e0-f4b73756f378", ...path])
};
__connectPorts__(nodes["syncer"]?.outputs["synced"], nodes["convert to BigNumber"]?.inputs["units & deximals"]);
__connectPorts__(nodes["parameter with default"]?.outputs["data"], nodes["syncer"]?.inputs["decimals"]);
return __createNode__(["result"], (outputs) => {
  __connectPorts__(nodes["convert to BigNumber"]?.outputs["result"], outputs["result"]);
  return {
  /*
Receives the number of units.
*/
"units": (data, tag) => {
  nodes["syncer"]?.inputs["units"]?.(data, tag);
nodes["parameter with default"]?.inputs["read"]?.(data, tag);
},
/*
Receives the number of decimals to represent the unit. 
Defaults to 18 (="ether").
*/
"decimals": (data, tag) => {
  nodes["parameter with default"]?.inputs["data"]?.(data, tag);
}
};
},
undefined,
{"units": "0d455460-c659-44c5-afd7-bdba5211c32d","decimals": "6ffb69e8-3e06-43ed-b449-83880fdcedcf"},
{"result": "aaa7049a-c2b9-4257-a583-eaf68de2c346"},
path);
}
/*
See blockchain/ethereum/Unit parser
*/
__prototypes__["blockchain/ethereum/Unit parser/Internal"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["result"], (outputs) => {
  
  return {
  "units & deximals": (data, tag) => {
  try {
    const {unitMap, toWei} = require("web3").utils;
    const {units, decimals = 18} = data;
    
    const toUnitName = Object.entries(unitMap)
      .find(([unitName, value]) =>{
        return value === `1${"0".repeat(decimals)}`
      })?.[0];
      
    if(!toUnitName) {
      throw new Error("Invalid value given for decimals");
    }
    
    const result = toWei(units.toString(), toUnitName);
    
    outputs["result"](result, tag);
  } catch(error) {
    __tracePortError__(path, "b3cea331-0e22-4273-be38-3a574b507611", error);
  }
}
};
},
(outputs) => {
  
},
{"units & deximals": "b3cea331-0e22-4273-be38-3a574b507611"},
{"result": "9efa481d-63ea-4735-b8df-06add0d6d1bc"},
path);
  };
})();
/*
Calls "addLiquidity" method on Uniswap V2 Router contract
*/
__prototypes__["blockchain/ethereum/Uniswap/v2/Router/AddLiquidity"] = (params, path = []) => {
  const nodes = {
  "tokenA min amount with default": __prototypes__["flow/Parameter with default"]({"default": 0}, ["6a46d9ee-484c-4644-a7e9-8e7ded5e2d22", ...path]),
"tokenaB min amount with default": __prototypes__["flow/Parameter with default"]({"default": 0}, ["66275e94-414c-4fba-883f-5fc59fa26be2", ...path]),
"tokenA info": __prototypes__["flow/Splitter"]({"fields": ["address","desiredAmount", "minimalAmount"]}, ["c835bdca-271b-4e71-86f8-ab72f5efd377", ...path]),
"tokenB info": __prototypes__["flow/Splitter"]({"fields": ["address","desiredAmount", "minimalAmount"]}, ["e3e81fb6-1f53-4199-896b-5ceedf297c97", ...path]),
"router contract data": __prototypes__["flow/Splitter"]({"fields": ["address", "abi"]}, ["4bffa1d2-efc3-4fe0-a9aa-693fda567d9e", ...path]),
/*
addLiquidity parameters as array:
  address tokenA,
  address tokenB,
  uint amountADesired,
  uint amountBDesired,
  uint amountAMin,
  uint amountBMin,
  address to,
  uint deadline
*/
"build parameters": __prototypes__["flow/Syncer"]({"fields": [0,1,2,3,4,5,6,7]}, ["9d66d7a8-2928-441d-8586-0d10834887aa", ...path]),
"contract call params": __prototypes__["flow/Forwarder (quadruple)"]({"1": params["tokenA"],"2": params["tokenB"],"3": params["liquidity token to"],"4": params["deadline"]}, ["38b4e4ae-3fc7-4dfa-99e5-ea74d2a379f1", ...path]),
"operation params": __prototypes__["flow/Forwarder (double)"]({"1": params["router contract"],"2": params["credentials"]}, ["29dbff4f-9603-4f57-b51c-65207e8c8b7c", ...path]),
"liquidity to & deadline": __prototypes__["flow/Forwarder (double)"]({}, ["56c1fe60-e438-44c5-b719-25ba23097ed0", ...path]),
"credentials": __prototypes__["flow/Forwarder"]({}, ["5053c784-80b1-47ed-acf8-3c128b464911", ...path]),
"contract executor": __prototypes__["blockchain/ethereum/Contract executor"]({"method name": "addLiquidity","transaction parameters": {
  "gas": 6500000
}}, ["45c6dc20-b4b7-44c1-b3cd-122da513973b", ...path]),
"to units tokenA amount": __prototypes__["blockchain/ethereum/Unit parser"]({}, ["a605a6e6-3188-48b6-b2ef-c8137eb2ee99", ...path]),
"to units tokenB amount": __prototypes__["blockchain/ethereum/Unit parser"]({}, ["217bb35c-f4d5-4cde-8012-eb0cc8f57832", ...path]),
"to unit tokenA min amount": __prototypes__["blockchain/ethereum/Unit parser"]({}, ["a01f5b1b-fa4d-47cb-9143-fb868e472b11", ...path]),
"to units tokenB min amount": __prototypes__["blockchain/ethereum/Unit parser"]({}, ["a2943213-f51f-4fad-a615-1753c8b0743f", ...path])
};
__connectPorts__(nodes["tokenB info"]?.outputs["minimalAmount"], nodes["tokenaB min amount with default"]?.inputs["data"]);
__connectPorts__(nodes["tokenB info"]?.outputs["address"], nodes["build parameters"]?.inputs["1"]);
__connectPorts__(nodes["tokenB info"]?.outputs["desiredAmount"], nodes["tokenaB min amount with default"]?.inputs["read"]);
__connectPorts__(nodes["tokenB info"]?.outputs["desiredAmount"], nodes["to units tokenB amount"]?.inputs["units"]);
__connectPorts__(nodes["tokenA info"]?.outputs["minimalAmount"], nodes["tokenA min amount with default"]?.inputs["data"]);
__connectPorts__(nodes["tokenA info"]?.outputs["address"], nodes["build parameters"]?.inputs["0"]);
__connectPorts__(nodes["tokenA info"]?.outputs["desiredAmount"], nodes["tokenA min amount with default"]?.inputs["read"]);
__connectPorts__(nodes["tokenA info"]?.outputs["desiredAmount"], nodes["to units tokenA amount"]?.inputs["units"]);
__connectPorts__(nodes["contract call params"]?.outputs["1"], nodes["tokenA info"]?.inputs["unsplit"]);
__connectPorts__(nodes["contract call params"]?.outputs["2"], nodes["tokenB info"]?.inputs["unsplit"]);
__connectPorts__(nodes["contract call params"]?.outputs["3"], nodes["liquidity to & deadline"]?.inputs["1"]);
__connectPorts__(nodes["contract call params"]?.outputs["4"], nodes["liquidity to & deadline"]?.inputs["2"]);
__connectPorts__(nodes["operation params"]?.outputs["1"], nodes["router contract data"]?.inputs["unsplit"]);
__connectPorts__(nodes["operation params"]?.outputs["2"], nodes["credentials"]?.inputs["data"]);
__connectPorts__(nodes["liquidity to & deadline"]?.outputs["1"], nodes["build parameters"]?.inputs["6"]);
__connectPorts__(nodes["liquidity to & deadline"]?.outputs["2"], nodes["build parameters"]?.inputs["7"]);
__connectPorts__(nodes["build parameters"]?.outputs["synced"], nodes["contract executor"]?.inputs["parameters"]);
__connectPorts__(nodes["router contract data"]?.outputs["address"], nodes["contract executor"]?.inputs["contract address"]);
__connectPorts__(nodes["router contract data"]?.outputs["abi"], nodes["contract executor"]?.inputs["contract abi"]);
__connectPorts__(nodes["credentials"]?.outputs["data"], nodes["contract executor"]?.inputs["credentials"]);
__connectPorts__(nodes["to units tokenA amount"]?.outputs["result"], nodes["build parameters"]?.inputs["2"]);
__connectPorts__(nodes["to units tokenB amount"]?.outputs["result"], nodes["build parameters"]?.inputs["3"]);
__connectPorts__(nodes["tokenA min amount with default"]?.outputs["data"], nodes["to unit tokenA min amount"]?.inputs["units"]);
__connectPorts__(nodes["to unit tokenA min amount"]?.outputs["result"], nodes["build parameters"]?.inputs["4"]);
__connectPorts__(nodes["tokenaB min amount with default"]?.outputs["data"], nodes["to units tokenB min amount"]?.inputs["units"]);
__connectPorts__(nodes["to units tokenB min amount"]?.outputs["result"], nodes["build parameters"]?.inputs["5"]);
return __createNode__(["result","error"], (outputs) => {
  __connectPorts__(nodes["contract executor"]?.outputs["result"], outputs["result"]);
__connectPorts__(nodes["contract executor"]?.outputs["error"], outputs["error"]);
  return {
  /*
Receives parameters for tokenA.
- address: the address of the token
- desiredAmount: the (maximal) amount we want to add to the liquidity pool in tokenA
- minimalAmount: the minimal amount we want to add to the liquidity pool in tokenA, if the current exchange ratio implies an amount smaller than that, the operation should fail
*/
"tokenA": (data, tag) => {
  nodes["contract call params"]?.inputs["1"]?.(data, tag);
},
/*
Receives parameters for tokenB.
- address: the address of the token
- desiredAmount: the (maximal) amount we want to add to the liquidity pool in tokenB
- minimalAmount: the minimal amount we want to add to the liquidity pool in tokenB, if the current exchange ratio implies an amount smaller than that, the operation should fail
*/
"tokenB": (data, tag) => {
  nodes["contract call params"]?.inputs["2"]?.(data, tag);
},
/*
Receives address to send liquidity tokens to
*/
"liquidity token to": (data, tag) => {
  nodes["contract call params"]?.inputs["3"]?.(data, tag);
},
/*
Receives deadline for the transaction (future unix timestamp)
*/
"deadline": (data, tag) => {
  nodes["contract call params"]?.inputs["4"]?.(data, tag);
},
/*
Receives parameters of the Uniswap V2 Router contract to interact with
*/
"router contract": (data, tag) => {
  nodes["operation params"]?.inputs["1"]?.(data, tag);
},
/*
Receives credentials for the operation
*/
"credentials": (data, tag) => {
  nodes["operation params"]?.inputs["2"]?.(data, tag);
}
};
},
undefined,
{"tokenA": "3988660b-8398-4a78-8889-e5cc8506394e","tokenB": "8d57999d-148b-4eff-9e4d-ca00f36e10ea","liquidity token to": "78fb26c0-e46e-490b-a5d7-ff880ac745da","deadline": "04df0153-0ab3-410d-9054-44b0965cfce2","router contract": "4e3e4f4a-2e69-4af0-9799-b0a12f0a9499","credentials": "48cc93ef-ab76-4081-8f58-3fbcc626599c"},
{"result": "44d775fe-b109-427a-8d30-2fb70ec3b250","error": "6dacdfe2-fc10-4f08-9919-2f198cda89f4"},
path);
}
/*
Add liquidity to a pool.
If the pool doesn't exists it will be created.
*/
__prototypes__["blockchain/ethereum/Uniswap/v2/Liquidity adder ETH"] = (params, path = []) => {
  const nodes = {
  "tokenA data": __prototypes__["flow/Splitter"]({"fields": ["address","desiredAmount", "minimalAmount"]}, ["bab278f9-92f3-4313-9363-6ad084394c0c", ...path]),
"approve tokenA": __prototypes__["blockchain/ethereum/contracts/ERC20/Approve"]({}, ["2505b99d-e535-49cf-8793-02ff8c957157", ...path]),
"add liquidity ETH": __prototypes__["blockchain/ethereum/Uniswap/v2/Router/AddLiquidityETH"]({}, ["55ca1580-e573-4f63-bb8f-2306a0776468", ...path]),
"addLiquidity params": __prototypes__["flow/Forwarder (quadruple)"]({"1": params["tokenA"],"2": params["ETH"],"3": params["to address"],"4": params["deadline"]}, ["c3a856a1-4bff-48dd-8683-4e5300f0a987", ...path]),
"operation params": __prototypes__["flow/Forwarder (double)"]({"1": params["router contract"],"2": params["credentials"]}, ["9598eafb-20d4-4a27-8513-aba3797511b1", ...path]),
"router address, credentials": __prototypes__["flow/Forwarder (double)"]({}, ["23a03b65-cf8a-483a-8f9b-692e1472b900", ...path]),
"router contract data": __prototypes__["flow/Splitter"]({"fields": ["address", "abi"]}, ["6a229973-3f50-4f6d-ab83-c2ec02f8ae5d", ...path]),
"wait for approvals": __prototypes__["flow/Depot"]({}, ["6f4a6090-083a-4df4-a8af-67978a7a5ff9", ...path])
};
__connectPorts__(nodes["tokenA data"]?.outputs["address"], nodes["approve tokenA"]?.inputs["token address"]);
__connectPorts__(nodes["tokenA data"]?.outputs["desiredAmount"], nodes["approve tokenA"]?.inputs["amount"]);
__connectPorts__(nodes["addLiquidity params"]?.outputs["1"], nodes["tokenA data"]?.inputs["unsplit"]);
__connectPorts__(nodes["addLiquidity params"]?.outputs["1"], nodes["add liquidity ETH"]?.inputs["tokenA"]);
__connectPorts__(nodes["addLiquidity params"]?.outputs["2"], nodes["add liquidity ETH"]?.inputs["ETH"]);
__connectPorts__(nodes["addLiquidity params"]?.outputs["3"], nodes["add liquidity ETH"]?.inputs["liquidity token to"]);
__connectPorts__(nodes["addLiquidity params"]?.outputs["4"], nodes["add liquidity ETH"]?.inputs["deadline"]);
__connectPorts__(nodes["operation params"]?.outputs["1"], nodes["add liquidity ETH"]?.inputs["router contract"]);
__connectPorts__(nodes["operation params"]?.outputs["1"], nodes["router contract data"]?.inputs["unsplit"]);
__connectPorts__(nodes["operation params"]?.outputs["2"], nodes["router address, credentials"]?.inputs["2"]);
__connectPorts__(nodes["operation params"]?.outputs["2"], nodes["wait for approvals"]?.inputs["data"]);
__connectPorts__(nodes["router address, credentials"]?.outputs["1"], nodes["approve tokenA"]?.inputs["router address"]);
__connectPorts__(nodes["router address, credentials"]?.outputs["2"], nodes["approve tokenA"]?.inputs["credentials"]);
__connectPorts__(nodes["router contract data"]?.outputs["address"], nodes["router address, credentials"]?.inputs["1"]);
__connectPorts__(nodes["wait for approvals"]?.outputs["data"], nodes["add liquidity ETH"]?.inputs["credentials"]);
__connectPorts__(nodes["approve tokenA"]?.outputs["result"], nodes["wait for approvals"]?.inputs["trigger"]);
return __createNode__(["result","error"], (outputs) => {
  __connectPorts__(nodes["add liquidity ETH"]?.outputs["result"], outputs["result"]);
__connectPorts__(nodes["add liquidity ETH"]?.outputs["error"], outputs["error"]);
__connectPorts__(nodes["approve tokenA"]?.outputs["error"], outputs["error"]);
  return {
  /*
Receives parameters for tokenA.
- address: the address of the token
- desiredAmount: the (maximal) amount we want to add to the liquidity pool in tokenA
- minimalAmount: the minimal amount we want to add to the liquidity pool in tokenA, if the current exchange ratio implies an amount smaller than that, the operation should fail
*/
"tokenA": (data, tag) => {
  nodes["addLiquidity params"]?.inputs["1"]?.(data, tag);
},
/*
Receives parameters for ETH.
- desiredAmount: the (maximal) amount we want to add to the liquidity pool in ETH
- minimalAmount: the minimal amount we want to add to the liquidity pool in tokenA, if the current exchange ratio implies an amount smaller than that, the operation should fail
*/
"ETH": (data, tag) => {
  nodes["addLiquidity params"]?.inputs["2"]?.(data, tag);
},
/*
Receives the address that will get the minted liquidity token.
*/
"to address": (data, tag) => {
  nodes["addLiquidity params"]?.inputs["3"]?.(data, tag);
},
/*
Receives the unix timestamp of the deadline until the operation should be completed or will be reverted.
*/
"deadline": (data, tag) => {
  nodes["addLiquidity params"]?.inputs["4"]?.(data, tag);
},
/*
Receives parameters of the Uniswap V2 Router contract to interact with
*/
"router contract": (data, tag) => {
  nodes["operation params"]?.inputs["1"]?.(data, tag);
},
/*
Receives credentials for the operation
*/
"credentials": (data, tag) => {
  nodes["operation params"]?.inputs["2"]?.(data, tag);
}
};
},
undefined,
{"tokenA": "4602e6ff-ae72-46bd-bddb-2065b4f4895a","ETH": "e971b0f8-3982-4b6e-98d7-22f8409f3817","to address": "46368936-c937-4d59-9cf5-943b756ace58","deadline": "642a80c9-e59e-4e40-98e0-842ce385e544","router contract": "9ab46954-d296-43b4-a18a-377cc168128d","credentials": "8c3157b3-36b1-4b1f-a20d-202a622dc38c"},
{"result": "60a037e1-67e3-4d3b-9606-3398163f27af","error": "193c7b18-8f27-4b68-878f-2c2d0bc1b8c4"},
path);
}
/*
Calls "addLiquidityETH" method on Uniswap V2 Router contract
*/
__prototypes__["blockchain/ethereum/Uniswap/v2/Router/AddLiquidityETH"] = (params, path = []) => {
  const nodes = {
  "tokenA min amount": __prototypes__["flow/Parameter with default"]({"default": 0}, ["6a46d9ee-484c-4644-a7e9-8e7ded5e2d22", ...path]),
"tokenA info": __prototypes__["flow/Splitter"]({"fields": ["address","desiredAmount", "minimalAmount"]}, ["c835bdca-271b-4e71-86f8-ab72f5efd377", ...path]),
"ETH info": __prototypes__["flow/Splitter"]({"fields": ["desiredAmount", "minimalAmount"]}, ["e3e81fb6-1f53-4199-896b-5ceedf297c97", ...path]),
"execute contract": __prototypes__["blockchain/ethereum/Contract executor"]({"method name": "addLiquidityETH"}, ["dffb3e51-6ffc-4a24-875e-79927f4e78e8", ...path]),
"router contract data": __prototypes__["flow/Splitter"]({"fields": ["address", "abi"]}, ["4bffa1d2-efc3-4fe0-a9aa-693fda567d9e", ...path]),
/*
addLiquidity parameters as array:
  address tokenA,
  uint amountADesired,
  uint amountAMin,
  uint amountETHMin,
  address to,
  uint deadline
*/
"build contract parameters": __prototypes__["flow/Syncer"]({"fields": [0,1,2,3,4,5]}, ["9d66d7a8-2928-441d-8586-0d10834887aa", ...path]),
"contract call params": __prototypes__["flow/Forwarder (quadruple)"]({"1": params["tokenA"],"2": params["ETH"],"3": params["liquidity token to"],"4": params["deadline"]}, ["38b4e4ae-3fc7-4dfa-99e5-ea74d2a379f1", ...path]),
"operation params": __prototypes__["flow/Forwarder (double)"]({"1": params["router contract"],"2": params["credentials"]}, ["29dbff4f-9603-4f57-b51c-65207e8c8b7c", ...path]),
"liquidity to & deadline": __prototypes__["flow/Forwarder (double)"]({}, ["56c1fe60-e438-44c5-b719-25ba23097ed0", ...path]),
"credentials": __prototypes__["flow/Forwarder"]({}, ["5053c784-80b1-47ed-acf8-3c128b464911", ...path]),
"build transaction parameters": __prototypes__["flow/Syncer"]({"fields": ["gas", "value"],"gas": 6500000}, ["dbe3ffd9-aaf6-4b13-a966-960749ec04e3", ...path]),
"ETH min amount": __prototypes__["flow/Parameter with default"]({"default": 0}, ["16e4c2b9-c2dc-4262-b6b5-1688865d2b93", ...path]),
"convert to units desiredAmountA": __prototypes__["blockchain/ethereum/Unit parser"]({}, ["ce278617-a354-4332-a2f9-e994a8542ec5", ...path]),
"convert  to units desiredAmountEth": __prototypes__["blockchain/ethereum/Unit parser"]({}, ["eac44e68-4316-4f25-8883-4e96d35fd14c", ...path]),
"convert  to units tokenA min amount": __prototypes__["blockchain/ethereum/Unit parser"]({}, ["ff10a3bb-e85d-44b5-b517-fce6ec7a7a98", ...path]),
"convert  to units eth min amount": __prototypes__["blockchain/ethereum/Unit parser"]({}, ["ac1a0c09-9aae-4f23-a038-60da20618b97", ...path])
};
__connectPorts__(nodes["router contract data"]?.outputs["address"], nodes["execute contract"]?.inputs["contract address"]);
__connectPorts__(nodes["router contract data"]?.outputs["abi"], nodes["execute contract"]?.inputs["contract abi"]);
__connectPorts__(nodes["tokenA info"]?.outputs["minimalAmount"], nodes["tokenA min amount"]?.inputs["data"]);
__connectPorts__(nodes["tokenA info"]?.outputs["desiredAmount"], nodes["tokenA min amount"]?.inputs["read"]);
__connectPorts__(nodes["tokenA info"]?.outputs["desiredAmount"], nodes["convert to units desiredAmountA"]?.inputs["units"]);
__connectPorts__(nodes["tokenA info"]?.outputs["address"], nodes["build contract parameters"]?.inputs["0"]);
__connectPorts__(nodes["build contract parameters"]?.outputs["synced"], nodes["execute contract"]?.inputs["parameters"]);
__connectPorts__(nodes["contract call params"]?.outputs["1"], nodes["tokenA info"]?.inputs["unsplit"]);
__connectPorts__(nodes["contract call params"]?.outputs["2"], nodes["ETH info"]?.inputs["unsplit"]);
__connectPorts__(nodes["contract call params"]?.outputs["3"], nodes["liquidity to & deadline"]?.inputs["1"]);
__connectPorts__(nodes["contract call params"]?.outputs["4"], nodes["liquidity to & deadline"]?.inputs["2"]);
__connectPorts__(nodes["operation params"]?.outputs["1"], nodes["router contract data"]?.inputs["unsplit"]);
__connectPorts__(nodes["operation params"]?.outputs["2"], nodes["credentials"]?.inputs["data"]);
__connectPorts__(nodes["credentials"]?.outputs["data"], nodes["execute contract"]?.inputs["credentials"]);
__connectPorts__(nodes["liquidity to & deadline"]?.outputs["1"], nodes["build contract parameters"]?.inputs["4"]);
__connectPorts__(nodes["liquidity to & deadline"]?.outputs["2"], nodes["build contract parameters"]?.inputs["5"]);
__connectPorts__(nodes["ETH info"]?.outputs["minimalAmount"], nodes["ETH min amount"]?.inputs["data"]);
__connectPorts__(nodes["ETH info"]?.outputs["desiredAmount"], nodes["ETH min amount"]?.inputs["read"]);
__connectPorts__(nodes["ETH info"]?.outputs["desiredAmount"], nodes["convert  to units desiredAmountEth"]?.inputs["units"]);
__connectPorts__(nodes["build transaction parameters"]?.outputs["synced"], nodes["execute contract"]?.inputs["transaction parameters"]);
__connectPorts__(nodes["convert to units desiredAmountA"]?.outputs["result"], nodes["build contract parameters"]?.inputs["1"]);
__connectPorts__(nodes["convert  to units desiredAmountEth"]?.outputs["result"], nodes["build transaction parameters"]?.inputs["value"]);
__connectPorts__(nodes["tokenA min amount"]?.outputs["data"], nodes["convert  to units tokenA min amount"]?.inputs["units"]);
__connectPorts__(nodes["convert  to units tokenA min amount"]?.outputs["result"], nodes["build contract parameters"]?.inputs["2"]);
__connectPorts__(nodes["ETH min amount"]?.outputs["data"], nodes["convert  to units eth min amount"]?.inputs["units"]);
__connectPorts__(nodes["convert  to units eth min amount"]?.outputs["result"], nodes["build contract parameters"]?.inputs["3"]);
return __createNode__(["result","error"], (outputs) => {
  __connectPorts__(nodes["execute contract"]?.outputs["result"], outputs["result"]);
__connectPorts__(nodes["execute contract"]?.outputs["error"], outputs["error"]);
  return {
  /*
Receives parameters for tokenA.
- address: the address of the token
- desiredAmount: the (maximal) amount we want to add to the liquidity pool in tokenA
- minimalAmount: the minimal amount we want to add to the liquidity pool in tokenA, if the current exchange ratio implies an amount smaller than that, the operation should fail
*/
"tokenA": (data, tag) => {
  nodes["contract call params"]?.inputs["1"]?.(data, tag);
},
/*
Receives parameters for ETH.
- desiredAmount: the (maximal) amount we want to add to the liquidity pool in ETH
- minimalAmount: the minimal amount we want to add to the liquidity pool in tokenA, if the current exchange ratio implies an amount smaller than that, the operation should fail
*/
"ETH": (data, tag) => {
  nodes["contract call params"]?.inputs["2"]?.(data, tag);
},
/*
Receives address to send liquidity tokens to
*/
"liquidity token to": (data, tag) => {
  nodes["contract call params"]?.inputs["3"]?.(data, tag);
},
/*
Receives deadline for the transaction (future unix timestamp)
*/
"deadline": (data, tag) => {
  nodes["contract call params"]?.inputs["4"]?.(data, tag);
},
/*
Receives parameters of the Uniswap V2 Router contract to interact with
*/
"router contract": (data, tag) => {
  nodes["operation params"]?.inputs["1"]?.(data, tag);
},
/*
Receives credentials for the operation
*/
"credentials": (data, tag) => {
  nodes["operation params"]?.inputs["2"]?.(data, tag);
}
};
},
undefined,
{"tokenA": "3988660b-8398-4a78-8889-e5cc8506394e","ETH": "8d57999d-148b-4eff-9e4d-ca00f36e10ea","liquidity token to": "78fb26c0-e46e-490b-a5d7-ff880ac745da","deadline": "04df0153-0ab3-410d-9054-44b0965cfce2","router contract": "4e3e4f4a-2e69-4af0-9799-b0a12f0a9499","credentials": "48cc93ef-ab76-4081-8f58-3fbcc626599c"},
{"result": "44d775fe-b109-427a-8d30-2fb70ec3b250","error": "6dacdfe2-fc10-4f08-9919-2f198cda89f4"},
path);
}
/*
Forwards input data to one of two outputs, depending on the condition.

Example:
1. false@0 received via `condition`
2. "A"@0 received via `data`
3. "A"@0 sent via `on false`

More:
https://github.com/Cranq-io/cranq-tutorials/blob/main/reference/1_application_flow/1_1_junctions/README.md#example---using-forks
*/
__prototypes__["flow/Fork"] = (params, path = []) => {
  const nodes = {
  "sync data & condition": __prototypes__["flow/Syncer"]({"data": params["data"],"condition": params["condition"],"fields": ["data","condition"]}, ["dac346f3-5551-4dd1-ac9b-5297b4d303fb", ...path]),
"fork": __prototypes__["flow/Fork (internal)"]({}, ["c530f214-0b46-41d4-ab2a-331e97584592", ...path])
};
__connectPorts__(nodes["sync data & condition"]?.outputs["synced"], nodes["fork"]?.inputs["data & condition"]);
return __createNode__(["on true","on false"], (outputs) => {
  __connectPorts__(nodes["fork"]?.outputs["true"], outputs["on true"]);
__connectPorts__(nodes["fork"]?.outputs["false"], outputs["on false"]);
  return {
  /*
Receives the data to be forwarded to either output.
*/
"data": (data, tag) => {
  nodes["sync data & condition"]?.inputs["data"]?.(data, tag);
},
/*
Receives the evaluation of some condition.
*/
"condition": (data, tag) => {
  nodes["sync data & condition"]?.inputs["condition"]?.(data, tag);
}
};
},
undefined,
{"data": "8dae1988-d752-4c9b-b8c5-f9222e776dec","condition": "8e1a5f69-ca43-484d-8099-ef265bedda62"},
{"on true": "26b011f0-6b5a-45a3-a4b6-a90d93ce7046","on false": "8c42e25b-e7f1-421a-90f5-cd88a4674cf0"},
path);
}
/*
See `flow/Fork`.
*/
__prototypes__["flow/Fork (internal)"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["true","false"], (outputs) => {
  
  return {
  "data & condition": (data, tag) => {
  try {
    if (data.condition)
      outputs.true(data.data, tag);
    else
      outputs.false(data.data, tag);
  } catch(error) {
    __tracePortError__(path, "71d40b23-b956-4355-813d-d2c70c81b7f5", error);
  }
}
};
},
(outputs) => {
  
},
{"data & condition": "71d40b23-b956-4355-813d-d2c70c81b7f5"},
{"true": "bbe6eb8b-a22e-4b23-9063-3cddbe4aafee","false": "978a565d-6b67-4198-90a7-c3214ab6ae6a"},
path);
  };
})();
/*
Checks if the string received on `a` is equal to string received via `b`.

Example:

1. "foo"@0 is received via `a`
2. "bar"@0 is received via `b`
3. false@0 is sent via `equal`
*/
__prototypes__["string/Equality tester"] = (params, path = []) => {
  const nodes = {
  "sync a & b": __prototypes__["flow/Syncer"]({"a": params["a"],"b": params["b"],"fields": ["a","b"]}, ["81f55657-a1f5-47b0-90af-64ef3cfd3612", ...path]),
"equal": __prototypes__["string/Equality tester/Internal"]({}, ["ebea7b0e-dc05-416c-bce2-66b2129b8c91", ...path])
};
__connectPorts__(nodes["sync a & b"]?.outputs["synced"], nodes["equal"]?.inputs["a & b"]);
return __createNode__(["equal"], (outputs) => {
  __connectPorts__(nodes["equal"]?.outputs["equal"], outputs["equal"]);
  return {
  /*
The first string
*/
"a": (data, tag) => {
  nodes["sync a & b"]?.inputs["a"]?.(data, tag);
},
/*
The second string
*/
"b": (data, tag) => {
  nodes["sync a & b"]?.inputs["b"]?.(data, tag);
}
};
},
undefined,
{"a": "a0934373-43a4-4cd5-83eb-860bc20d790a","b": "3a93b0f5-d7ce-4dfd-bc70-f46c768bf142"},
{"equal": "61410efe-0096-4bd0-8169-30b254646910"},
path);
}
__prototypes__["string/Equality tester/Internal"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["equal"], (outputs) => {
  
  return {
  "a & b": (data, tag) => {
  try {
    outputs.equal(data.a === data.b, tag);
  } catch(error) {
    __tracePortError__(path, "208799e1-a794-4a47-afc0-7fd53a57de00", error);
  }
}
};
},
(outputs) => {
  
},
{"a & b": "208799e1-a794-4a47-afc0-7fd53a57de00"},
{"equal": "d4fcc3f9-b12d-4024-8970-2ba54139f651"},
path);
  };
})();
/*
Repeats the input data for each item in the array.

Example:
1. [1,2,3]@0 receiced via `array`
2. "foo"@0 received via `data`
3. "foo"@0:0
    "foo"@0:1
    "foo"@0:2
sent via `data`
    
*/
__prototypes__["data/array/Repeater"] = (params, path = []) => {
  const nodes = {
  "count items": __prototypes__["data/array/Length getter"]({"array": params["array"]}, ["20fba366-3e52-4a3c-89a6-dcc8f28afc5a", ...path]),
"repeat data": __prototypes__["flow/Repeater"]({"data": params["data"]}, ["1b383f97-809a-4271-9071-3016d4fe986d", ...path])
};
__connectPorts__(nodes["count items"]?.outputs["length"], nodes["repeat data"]?.inputs["count"]);
return __createNode__(["data"], (outputs) => {
  __connectPorts__(nodes["repeat data"]?.outputs["data"], outputs["data"]);
  return {
  /*
Recieves array which specifies number of times to repeat data.

Example:
[1,2,3]
*/
"array": (data, tag) => {
  nodes["count items"]?.inputs["array"]?.(data, tag);
},
/*
Recieves data to be repeated.

Example:
"foo"
*/
"data": (data, tag) => {
  nodes["repeat data"]?.inputs["data"]?.(data, tag);
}
};
},
undefined,
{"array": "eacfcdd3-c907-40b3-86a5-15855a7b4caf","data": "c2471c2d-1ad7-4738-a3d8-87ebc566aa64"},
{"data": "987cc1f0-ddda-4f01-8358-d32676a0861e"},
path);
}
/*
Determines the length of the input array.

Example:
1. [1,2]@0 received via `array`
2. 2@0 sent via `length`
*/
__prototypes__["data/array/Length getter"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["length"], (outputs) => {
  
  return {
  /*
Recieves array to determine length of.

Example:
[1,2]
*/
"array": (data, tag) => {
  try {
    outputs.length(data.length, tag);
  } catch(error) {
    __tracePortError__(path, "3796de71-a230-4869-9963-2c1815242213", error);
  }
}
};
},
(outputs) => {
  
},
{"array": "3796de71-a230-4869-9963-2c1815242213"},
{"length": "90dc3844-70bc-4a25-a7f4-3d281c97e5fc"},
path);
  };
})();
/*
Repeats the input the specified amount of times.

The tag on the repeat signals will contain the index of the current iteration.

Note that the repeats will be sent synchronously.

Example:
1. "A"@0 received via `data`
2. 3@0 received via `count`
3. "A"@"0:0" sent via `data`
4. "A"@"0:1" sent via `data`
5. "A"@"0:2" sent via `data`
*/
__prototypes__["flow/Repeater"] = (params, path = []) => {
  const nodes = {
  "sync data & count": __prototypes__["flow/Syncer"]({"data": params["data"],"count": params["count"],"fields": ["data","count"]}, ["6b5f63b1-6430-4f52-94be-bb4c87d50929", ...path]),
"repeat": __prototypes__["flow/Repeater (internal)"]({}, ["dea17bc9-3677-4e41-a63a-47683a06c031", ...path])
};
__connectPorts__(nodes["sync data & count"]?.outputs["synced"], nodes["repeat"]?.inputs["data & count"]);
return __createNode__(["data"], (outputs) => {
  __connectPorts__(nodes["repeat"]?.outputs["data"], outputs["data"]);
  return {
  /*
Receives data to be repeated.
*/
"data": (data, tag) => {
  nodes["sync data & count"]?.inputs["data"]?.(data, tag);
},
/*
Receives the number of times the input is to be repeated.
*/
"count": (data, tag) => {
  nodes["sync data & count"]?.inputs["count"]?.(data, tag);
}
};
},
undefined,
{"data": "20b11cff-e0f4-415a-9a82-7d5f6d7e4a5f","count": "8e1d3a32-366a-4829-9cad-5559dac5fba1"},
{"data": "fda3e580-c396-4439-a59d-f7cf0fac24a8"},
path);
}
/*
See `flow/Repeater`.
*/
__prototypes__["flow/Repeater (internal)"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["data"], (outputs) => {
  
  return {
  "data & count": (data, tag) => {
  try {
    const {count, data:item} = data;
    for (let i=0; i<count; i++)
      outputs.data(item, `${tag}:${i}`);
  } catch(error) {
    __tracePortError__(path, "152c9d12-556b-4bd4-ba17-e39ac5d72490", error);
  }
}
};
},
(outputs) => {
  
},
{"data & count": "152c9d12-556b-4bd4-ba17-e39ac5d72490"},
{"data": "8bf5830c-baef-497f-a1d3-a9acfcf84618"},
path);
  };
})();
/*
Iterates over the items of an array, asynchronously.

Tags are controlled:

On receiving the array, the node sends out the first item (if any) using a nested tag. (":0" appended to the original tag.)

Subsequent items will be sent out on receiving signals on `next`, with incremented tags.
*/
__prototypes__["data/array/Step iterator"] = (params, path = []) => {
  const nodes = {
  "nest tag": __prototypes__["flow/Tag nester"]({"data": params["array"]}, ["494ff0d1-6927-4a1c-88ff-94b9e543b3dd", ...path]),
"iterate": __prototypes__["data/array/Step iterator (manual tags)"]({}, ["41e56f76-09a7-448a-b664-8abe89489332", ...path]),
"trim tag": __prototypes__["flow/Tag trimmer"]({}, ["6f28b266-027d-49ca-9b50-071c0294ad9d", ...path]),
"increment tag": __prototypes__["flow/Tag incrementer"]({"data": params["next"]}, ["58b349c6-e113-4592-b7f1-f9a857a46626", ...path])
};
__connectPorts__(nodes["nest tag"]?.outputs["data"], nodes["iterate"]?.inputs["array"]);
__connectPorts__(nodes["iterate"]?.outputs["done"], nodes["trim tag"]?.inputs["data"]);
__connectPorts__(nodes["increment tag"]?.outputs["data"], nodes["iterate"]?.inputs["next"]);
return __createNode__(["item","index","done","bounced"], (outputs) => {
  __connectPorts__(nodes["iterate"]?.outputs["item"], outputs["item"]);
__connectPorts__(nodes["trim tag"]?.outputs["data"], outputs["done"]);
__connectPorts__(nodes["increment tag"]?.outputs["bounced"], outputs["bounced"]);
__connectPorts__(nodes["iterate"]?.outputs["index"], outputs["index"]);
  return {
  /*
Sets up iteration and sends out the first item and index 0 with an iterable tag based on the original tag.

When the array has only one or zero elements, a signal with the same tag will also be sent through `done`.

Example:
[1,2,3]
*/
"array": (data, tag) => {
  nodes["nest tag"]?.inputs["data"]?.(data, tag);
},
/*
Triggers sending out the next item and index, or, when there are no more items, the done signal.

Tags on signals received through `next` are expected to be iterable, and identical to the tag sent out for the previous item. (This allows for simple loopbacks between `item` and `next`.)

Tags on signals sent out on `item` and `index` are incremented versions of what was received through `next`.

Example:
0
*/
"next": (data, tag) => {
  nodes["increment tag"]?.inputs["data"]?.(data, tag);
}
};
},
undefined,
{"array": "d079a46d-16a1-4019-b037-eb25ff63b344","next": "6724a763-9749-41bb-a3dc-2ec659c8b72b"},
{"item": "da78f0ed-be96-41f5-90e5-bf31ef6fd262","index": "0d15a9b9-a708-4b34-b199-51232e59f94b","done": "ed7be79a-f008-4d37-8d43-faf2607e6ef5","bounced": "5f5589df-af99-4cdf-82f7-2e4d99e6962c"},
path);
}
/*
Creates a new level of iteration on the received tag, by appending ":0" to it.

Opposite of `flow/Tag trimmer`.

Used for lining up signals with iterations. (See eg. `data/array/Iterator`.)

Example:
1. "A"@0 received via `data`
2. "A"@"0:0" is sent via `data` (output)

See also:
* `flow/Tag incrementer`
* `flow/Tag trimer`
*/
__prototypes__["flow/Tag nester"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["data"], (outputs) => {
  
  return {
  /*
Receives the signal to be nested.
*/
"data": (data, tag) => {
  try {
    outputs.data(data, `${tag}:0`);
  } catch(error) {
    __tracePortError__(path, "f5e0ae76-bfc3-4041-98b7-9fbc6688a148", error);
  }
}
};
},
(outputs) => {
  
},
{"data": "f5e0ae76-bfc3-4041-98b7-9fbc6688a148"},
{"data": "f61bcb62-2072-41d6-87da-79ccad20f7d2"},
path);
  };
})();
/*
Iterates over the items of an array asynchronously.

On receiving the array, the node sends out the first item (if any) using the same tag.

Subsequent items will be sent out on receiving signals on `next`, using the same tag.
*/
__prototypes__["data/array/Step iterator (manual tags)"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["item","index","done"], (outputs) => {
  
  return {
  /*
Sets up iteration and sends out the first item and index 0 with the tag associated with the received array.
When the array has only one or zero elements, a signal will also be sent through `done`. 

Example:
["A","B","C"]
*/
"array": (data, tag) => {
  try {
    const {length} = data;
    state.doneTag = tag;
    
    if (length > 1) {
      state.array = data;
      state.index = 1;
    }
    if (length > 0) {
      outputs.item(data[0], tag);
      outputs.index(0, tag);
    }
    if (length <= 1) {
      outputs.done(data, tag);
    }
  } catch(error) {
    __tracePortError__(path, "c1a54d85-36b5-4842-9688-fb2ab8d1cd41", error);
  }
},
/*
Triggers sending out the next item and index, or, when there are no more items, the done signal.

Signals sent out on `item` and `index` bear the same tag as the signal received through `next`.

Example:
0
*/
"next": (data, tag) => {
  try {
    const {array, index, doneTag} = state;
    if (array !== undefined) {
      const {length} = array;
      if (index < length) {
        state.index = index + 1;
        outputs.item(array[index], tag);
        outputs.index(index, tag);
      }
      if (state.index === length) {
        state.array = undefined;
        state.index = undefined;
        state.doneTag = undefined;
        outputs.done(array, doneTag);
      }
    }
  } catch(error) {
    __tracePortError__(path, "9f2d26e4-7f08-45c0-91bc-b2495b0c4a79", error);
  }
}
};
},
(outputs) => {
  
},
{"array": "c1a54d85-36b5-4842-9688-fb2ab8d1cd41","next": "9f2d26e4-7f08-45c0-91bc-b2495b0c4a79"},
{"item": "232f9f14-c24e-4f7f-b415-27ccbdfb9dbf","index": "8e36f0c9-932a-4e31-aa7a-e17ff0fee028","done": "e159c36b-a301-46ff-92db-64eaeab74d69"},
path);
  };
})();
/*
Trims the last iterable (colon-separated) section of the tag on the signal received via `data`.

Bounces when tag is not iterable.

Opposite of `flow/Tag nester`.

Used for lining up signals with iterations. (See eg. `data/array/Iterator`.)

Example:
1. "A"@"x:9" received via `data`
2. "A"@"x" is sent via `data` (output)
*/
__prototypes__["flow/Tag trimmer"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["data","bounced"], (outputs) => {
  
  return {
  /*
Receives signal with iterable tag.
*/
"data": (data, tag) => {
  try {
    const matches = /^(.*):\d+$/.exec(tag);
    if (matches !== null)
      outputs.data(data, matches[1]);
    else
      outputs.bounced(data, tag);
  } catch(error) {
    __tracePortError__(path, "ca54dccf-ed97-4731-8eb0-ef76fe19e844", error);
  }
}
};
},
(outputs) => {
  
},
{"data": "ca54dccf-ed97-4731-8eb0-ef76fe19e844"},
{"data": "c1927e5c-f5ca-42e1-aedd-78efd6748dfe","bounced": "490cac9b-c555-40d9-b5b2-06d7e75e84db"},
path);
  };
})();
/*
Increments the iterable (colon-separated) part of the received signal's tag.

Bounces when tag is not iterable.

Used for lining up signals with iterations. (See eg. `data/array/Iterator`.)

Example A (success):
1. "A"@"x:1" received via `data`
2. "A"@"x:2" is sent via `data` (output)

Example B (invalid input):
1. "A"@"x" received via `data`
2. "A"@"x" is sent via `bounced`

See also:
* `flow/Tag nester`
* `flow/Tag trimer`
*/
__prototypes__["flow/Tag incrementer"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["data","bounced"], (outputs) => {
  
  return {
  /*
Receives signal with iterable tag.

When the tag is not iterable, the signal will be bounced.
*/
"data": (data, tag) => {
  try {
    const matches = /^(.*)\:(\d+)$/.exec(tag);
    if (matches !== null)
      outputs.data(data, `${matches[1]}:${+matches[2] + 1}`);
    else
      outputs.bounced(data, tag);
  } catch(error) {
    __tracePortError__(path, "4b2b80cb-8d64-40a5-ae06-342257b858cc", error);
  }
}
};
},
(outputs) => {
  
},
{"data": "4b2b80cb-8d64-40a5-ae06-342257b858cc"},
{"data": "b9ad661b-2879-4b8f-9335-c223ba010a4b","bounced": "a5ea47e0-1e3f-4f32-afc4-3f0ebe9c3030"},
path);
  };
})();
/*
Performs an addition operation on the input values.

Example:

1. 19@0 is received via `a`
2. 2@0 is received via `b`
3. 21@0 is sent via `sum`
*/
__prototypes__["number/Adder"] = (params, path = []) => {
  const nodes = {
  "sync a & b": __prototypes__["flow/Syncer"]({"a": params["a"],"b": params["b"],"fields": ["a", "b"]}, ["8734d770-7efb-4328-b75b-c77caeec3221", ...path]),
"add": __prototypes__["number/Adder/Internal"]({}, ["76cad5f1-c028-4287-8bd7-bf7f2d141731", ...path])
};
__connectPorts__(nodes["sync a & b"]?.outputs["synced"], nodes["add"]?.inputs["a & b"]);
return __createNode__(["sum"], (outputs) => {
  __connectPorts__(nodes["add"]?.outputs["sum"], outputs["sum"]);
  return {
  /*
The first operand
*/
"a": (data, tag) => {
  nodes["sync a & b"]?.inputs["a"]?.(data, tag);
},
/*
Second operand
*/
"b": (data, tag) => {
  nodes["sync a & b"]?.inputs["b"]?.(data, tag);
}
};
},
undefined,
{"a": "f8db2394-8b73-41b1-8cee-570acf0ca976","b": "824b46d4-6dad-4859-939f-376702e84adb"},
{"sum": "3157073c-40d2-44fd-a94b-ea3adcce3440"},
path);
}
__prototypes__["number/Adder/Internal"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["sum"], (outputs) => {
  
  return {
  "a & b": (data, tag) => {
  try {
    outputs.sum(data.a + data.b, tag);
  } catch(error) {
    __tracePortError__(path, "0ad25c87-04a9-47ce-94c5-4b4af15d7e09", error);
  }
}
};
},
(outputs) => {
  
},
{"a & b": "0ad25c87-04a9-47ce-94c5-4b4af15d7e09"},
{"sum": "f3bdd887-63e3-4db0-8735-38ea85e2a74e"},
path);
  };
})();
__prototypes__["#workspace/Uniswap v2 clone/Group 4/Group"] = (params, path = []) => {
  const nodes = {
  "expiration": __prototypes__["data/Store"]({"read": params["start"],"data": 300}, ["f5c7f3cd-cd6d-40a3-b274-fa851f57dae2", ...path]),
"timestamp getter": __prototypes__["time/Timestamp getter"]({"get": params["start"]}, ["97fe37d7-4afd-4eb6-a786-c397c76c496c", ...path])
};

return __createNode__(["timestamp getter-timestamp","expiration-data"], (outputs) => {
  __connectPorts__(nodes["timestamp getter"]?.outputs["timestamp"], outputs["timestamp getter-timestamp"]);
__connectPorts__(nodes["expiration"]?.outputs["data"], outputs["expiration-data"]);
  return {
  "start": (data, tag) => {
  nodes["timestamp getter"]?.inputs["get"]?.(data, tag);
nodes["expiration"]?.inputs["read"]?.(data, tag);
}
};
},
undefined,
{"start": "ab9f3927-d793-46eb-9813-48684812bd65"},
{"timestamp getter-timestamp": "6b7f4fea-9e9c-4026-9bf9-1405591400ca","expiration-data": "943705ad-e7cc-4633-a8cf-008f165bd16e"},
path);
}
/*
Gets current timestamp
*/
__prototypes__["time/Timestamp getter"] = (() => {
  const shared = {};
  return (params, path) => {
    const state = {};
return __createNode__(["timestamp"], (outputs) => {
  
  return {
  "get": (data, tag) => {
  try {
    outputs.timestamp(+new Date(), tag);
  } catch(error) {
    __tracePortError__(path, "4181cd34-31ac-4d3b-8d19-3661105e6d1e", error);
  }
}
};
},
(outputs) => {
  
},
{"get": "4181cd34-31ac-4d3b-8d19-3661105e6d1e"},
{"timestamp": "b57a2f23-7db9-4007-9c94-c66251abede3"},
path);
  };
})();
__prototypes__["#workspace/DEX2"]({})
module.exports = __prototypes__;