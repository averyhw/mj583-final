function initMap() {
        var uluru = {lat: 35.7796, lng: -78.6382};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: uluru
        });
        // var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        // var icons = {
        //   parking: {
        //     icon: iconBase + 'building-icon.png'
        //   }
        // };
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
        });
        var cato = {lat:35.127344, lng:-80.880559};
        var vfc = {lat:36.122155, lng:-79.798901};
        var sah = {lat:35.176705, lng:-80.796985};
        var qrvo = {lat:36.075685, lng:-79.964890};
        var bdsi = {lat:35.834444, lng:-78.689644};
        var prmw = {lat:36.094960, lng:-80.246159};
        var jeld = {lat:35.137785, lng:-80.928683};
        var trk = {lat:35.361986, lng:-80.685832};
        var iqv = {lat:35.880791, lng:-78.840661};
        var mlm = {lat:35.820161, lng:-78.690129};

        var ufi = {lat:36.087341, lng:-79.922748};
        var odfl = {lat:35.908980, lng:-80.058731};
        var coke = {lat:35.158169, lng:-80.834924};
        var nue = {lat:35.158720, lng:-80.834881};
        var bcrx = {lat:35.875062, lng:-78.840670};
        var trxc = {lat:35.868457, lng:-78.860792};
        var hiw = {lat:35.818927, lng:-78.606925};
        var xrm = {lat:36.016138, lng:-78.516873};
        var fbnc = {lat:35.172442, lng:-79.395168};
        var iiin = {lat:36.528539, lng:-80.635570};

        var bbt = {lat:36.095677, lng: -80.245157};
        var comm = {lat:35.715184, lng:-81.317506};
        var see = {lat:35.198570, lng:-80.918613};
        var cw = {lat:35.059953, lng:-80.854990};
        var fenc = {lat:35.913860, lng:-78.879617};
        var gthx = {lat:35.907023, lng:-78.876869};
        var cree = {lat:35.899478, lng:-78.842384};
        var stay = {lat:35.058550, lng:-80.838730};
        var aoi = {lat:35.856392, lng:-78.812381};
        var pgem = {lat:35.813317, lng:-78.808732};

        var pinc = {lat:35.056750, lng:-80.842172};
        var slct = {lat:35.311649, lng:-78.617042};
        var duk = {lat:35.224284, lng:-80.848763};
        var spxc = {lat:35.060794, lng:-80.845823};
        var motown = {lat:42.364167, lng:-83.088444};
        var bw = {lat:35.055831, lng:-80.842737};
        var rht = {lat:35.775180, lng:-78.637626};
        var skt = {lat:36.088274, lng:-79.834708};
        var prah = {lat:35.835274, lng:-78.688336};
        var lob = {lat:34.201040, lng:-77.905450};

        var tcap = {lat:35.830959, lng:-78.666716};
        var culp = {lat:36.007651, lng:-79.988809};
        var vtvt = {lat:36.048545, lng:-79.953500};
        var itic = {lat:35.913689, lng:-79.056308};
        var bac = {lat:35.227753, lng:-80.842882};
        var npo = {lat:35.153307, lng:-80.838211};
        var low = {lat:35.541800, lng:-80.853851};
        var flow = {lat:35.060794, lng:-80.845823};
        var alb = {lat:35.154133, lng:-80.837865};
        var pebk = {lat:35.660537, lng: -81.229351};
        var lh = {lat:36.093172, lng: -79.437380};

        var label = "<a href='https://www.catofashions.com/' target='_blank'><p class='montserrat'>The Cato Corporation</p></a>";
        var popUp = new google.maps.InfoWindow({
          content: label
        });
        var marker = new google.maps.Marker({
          position: cato,
          map: map
          // icon: iconBase + 'parking'
        });
        marker.addListener('click', function(){
          popUp.open(map, marker);
        });

        var label2 = "<a href='https://www.vfc.com/' target='_blank'><p class='montserrat'>V.F. Corporation</p></a>";
        var popUp2 = new google.maps.InfoWindow({
          content: label2
        });
        var marker2 = new google.maps.Marker({
          position: vfc,
          map: map

        });
        marker2.addListener('click', function(){
          popUp2.open(map, marker2);
        });

        var label3 = "<a href='http://www.sonicautomotive.com' target='_blank'><p class='montserrat'>Sonic Automotive, Inc.</p></a>";
        var popUp3 = new google.maps.InfoWindow({
          content: label3
        });
        var marker3 = new google.maps.Marker({
          position: sah,
          map: map
        });
        marker3.addListener('click', function(){
          popUp3.open(map, marker3);
        });

        var label4 = "<a href='http://www.qorvo.com' target='_blank'><p class='montserrat'>Qorvo, Inc.</p></a>";
        var popUp4 = new google.maps.InfoWindow({
          content: label4
        });
        var marker4 = new google.maps.Marker({
          position: qrvo,
          map: map
        });
        marker4.addListener('click', function(){
          popUp4.open(map, marker4);
        });

        var label5 = "<a href='http://www.bdsi.com' target='_blank'><p class='montserrat'>BioDelivery Sciences International, Inc.</p></a>";
        var popUp5 = new google.maps.InfoWindow({
          content: label5
        });
        var marker5 = new google.maps.Marker({
          position: bdsi,
          map: map
        });
        marker5.addListener('click', function(){
          popUp5.open(map, marker5);
        });

        var label6 = "<a href='http://primowater.com' target='_blank'><p class='montserrat'>Primo Water Corporation</p></a>";
        var popUp6 = new google.maps.InfoWindow({
          content: label6
        });
        var marker6 = new google.maps.Marker({
          position: prmw,
          map: map
        });
        marker6.addListener('click', function(){
          popUp6.open(map, marker6);
        });

        var label7 = "<a href='http://www.jeld-wen.com' target='_blank'><p class='montserrat'>JELD-WEN Holding, Inc</p></a>";
        var popUp7 = new google.maps.InfoWindow({
          content: label7
        });
        var marker7 = new google.maps.Marker({
          position: jeld,
          map: map
        });
        marker7.addListener('click', function(){
          popUp7.open(map, marker7);
        });

        var label8 = "<a href='http://www.speedwaymotorsports.com' target='_blank'><p class='montserrat'>Speedway Motorsports, Inc.</p></a>";
        var popUp8 = new google.maps.InfoWindow({
          content: label8
        });
        var marker8 = new google.maps.Marker({
          position: trk,
          map: map
        });
        marker8.addListener('click', function(){
          popUp8.open(map, marker8);
        });

        var label9 = "<a href='http://www.iqvia.com' target='_blank'><p class='montserrat'>IQVIA Holdings Inc.</p></a>";
        var popUp9 = new google.maps.InfoWindow({
          content: label9
        });
        var marker9 = new google.maps.Marker({
          position: iqv,
          map: map
        });
        marker9.addListener('click', function(){
          popUp9.open(map, marker9);
        });

        var label10 = "<a href='http://www.martinmarietta.com' target='_blank'><p class='montserrat'>Martin Marietta Materials, Inc.</p></a>";
        var popUp10 = new google.maps.InfoWindow({
          content: label10
        });
        var marker10 = new google.maps.Marker({
          position: mlm,
          map: map
        });
        marker10.addListener('click', function(){
          popUp10.open(map, marker10);
        });

        var label11 = "<a href='http://www.unifi.com' target='_blank'><p class='montserrat'>Unifi, Inc.</p></a>";
        var popUp11 = new google.maps.InfoWindow({
          content: label11
        });
        var marker11 = new google.maps.Marker({
          position: ufi,
          map: map
        });
        marker11.addListener('click', function(){
          popUp11.open(map, marker11);
        });

        var label12 = "<a href='http://www.odfl.com' target='_blank'><p class='montserrat'>Old Dominion Freight Line, Inc.</p></a>";
        var popUp12 = new google.maps.InfoWindow({
          content: label12
        });
        var marker12 = new google.maps.Marker({
          position: odfl,
          map: map
        });
        marker12.addListener('click', function(){
          popUp12.open(map, marker12);
        });

        var label13 = "<a href='http://www.cokeconsolidated.com' target='_blank'><p class='montserrat'>Coca-Cola Bottling Co. Consolidated</p></a>";
        var popUp13 = new google.maps.InfoWindow({
          content: label13
        });
        var marker13 = new google.maps.Marker({
          position: coke,
          map: map
        });
        marker13.addListener('click', function(){
          popUp13.open(map, marker13);
        });

        var label14 = "<a href='http://www.nucor.com' target='_blank'><p class='montserrat'>Nucor Corporation</p></a>";
        var popUp14 = new google.maps.InfoWindow({
          content: label14
        });
        var marker14 = new google.maps.Marker({
          position: nue,
          map: map
        });
        marker14.addListener('click', function(){
          popUp14.open(map, marker14);
        });

        var label15 = "<a href='http://www.biocryst.com' target='_blank'><p class='montserrat'>BioCryst Pharmaceuticals, Inc.</p></a>";
        var popUp15 = new google.maps.InfoWindow({
          content: label15
        });
        var marker15 = new google.maps.Marker({
          position: bcrx,
          map: map
        });
        marker15.addListener('click', function(){
          popUp15.open(map, marker15);
        });

        var label16 = "<a href='http://www.transenterix.com' target='_blank'><p class='montserrat'>TransEnterix, Inc.</p></a>";
        var popUp16 = new google.maps.InfoWindow({
          content: label16
        });
        var marker16 = new google.maps.Marker({
          position: trxc,
          map: map
        });
        marker16.addListener('click', function(){
          popUp16.open(map, marker16);
        });

        var label17 = "<a href='http://www.highwoods.com' target='_blank'><p class='montserrat'>Highwoods Properties, Inc.</p></a>";
        var popUp17 = new google.maps.InfoWindow({
          content: label17
        });
        var marker17 = new google.maps.Marker({
          position: hiw,
          map: map
        });
        marker17.addListener('click', function(){
          popUp17.open(map, marker17);
        });

        var label18 = "<a href='http://www.xerium.com' target='_blank'><p class='montserrat'>Xerium Technologies, Inc.</p></a>";
        var popUp18 = new google.maps.InfoWindow({
          content: label18
        });
        var marker18 = new google.maps.Marker({
          position: xrm,
          map: map
        });
        marker18.addListener('click', function(){
          popUp18.open(map, marker18);
        });

        var label19 = "<a href='http://www.LocalFirstBank.com' target='_blank'><p class='montserrat'>First Bancorp</p></a>";
        var popUp19 = new google.maps.InfoWindow({
          content: label19
        });
        var marker19 = new google.maps.Marker({
          position: fbnc,
          map: map
        });
        marker19.addListener('click', function(){
          popUp19.open(map, marker19);
        });

        var label20 = "<a href='http://www.insteel.com' target='_blank'><p class='montserrat'>Insteel Industries, Inc.</p></a>";
        var popUp20 = new google.maps.InfoWindow({
          content: label20
        });
        var marker20 = new google.maps.Marker({
          position: iiin,
          map: map
        });
        marker20.addListener('click', function(){
          popUp20.open(map, marker20);
        });

        var label21 = "<a href='http://www.bbt.com' target='_blank'><p class='montserrat'>BB&T Corporation</p></a>";
        var popUp21 = new google.maps.InfoWindow({
          content: label21
        });
        var marker21 = new google.maps.Marker({
          position: bbt,
          map: map
        });
        marker21.addListener('click', function(){
          popUp21.open(map, marker21);
        });

        var label22 = "<a href='http://www.commscope.com' target='_blank'><p class='montserrat'>CommScope Holding Company, Inc.</p></a>";
        var popUp22 = new google.maps.InfoWindow({
          content: label22
        });
        var marker22 = new google.maps.Marker({
          position: comm,
          map: map
        });
        marker22.addListener('click', function(){
          popUp22.open(map, marker22);
        });

        var label23 = "<a href='http://www.sealedair.com' target='_blank'><p class='montserrat'>Sealed Air Corporation</p></a>";
        var popUp23 = new google.maps.InfoWindow({
          content: label23
        });
        var marker23 = new google.maps.Marker({
          position: see,
          map: map
        });
        marker23.addListener('click', function(){
          popUp23.open(map, marker23);
        });

        var label24 = "<a href='http://www.curtisswright.com' target='_blank'><p class='montserrat'>Curtiss-Wright Corporation</p></a>";
        var popUp24 = new google.maps.InfoWindow({
          content: label24
        });
        var marker24 = new google.maps.Marker({
          position: cw,
          map: map
        });
        marker24.addListener('click', function(){
          popUp24.open(map, marker24);
        });

        var label25 = "<a href='http://www.fennecpharma.com' target='_blank'><p class='montserrat'>Fennec Pharmaceuticals Inc.</p></a>";
        var popUp25 = new google.maps.InfoWindow({
          content: label25
        });
        var marker25 = new google.maps.Marker({
          position: fenc,
          map: map
        });
        marker25.addListener('click', function(){
          popUp25.open(map, marker25);
        });

        var label26 = "<a href='http://www.g1therapeutics.com' target='_blank'><p class='montserrat'>G1 Therapeutics, Inc.</p></a>";
        var popUp26 = new google.maps.InfoWindow({
          content: label26
        });
        var marker26 = new google.maps.Marker({
          position: gthx,
          map: map
        });
        marker26.addListener('click', function(){
          popUp26.open(map, marker26);
        });

        var label27 = "<a href='http://www.cree.com' target='_blank'><p class='montserrat'>Cree, Inc.</p></a>";
        var popUp27 = new google.maps.InfoWindow({
          content: label27
        });
        var marker27 = new google.maps.Marker({
          position: cree,
          map: map
        });
        marker27.addListener('click', function(){
          popUp27.open(map, marker27);
        });

        var label28 = "<a href='http://www.extendedstayamerica.com' target='_blank'><p class='montserrat'>Extended Stay America, Inc. Paired Shares</p></a>";
        var popUp28 = new google.maps.InfoWindow({
          content: label28
        });
        var marker28 = new google.maps.Marker({
          position: stay,
          map: map
        });
        marker28.addListener('click', function(){
          popUp28.open(map, marker28);
        });

        var label29 = "<a href='http://www.aointl.com' target='_blank'><p class='montserrat'>Alliance One International, Inc.</p></a>";
        var popUp29 = new google.maps.InfoWindow({
          content: label29
        });
        var marker29 = new google.maps.Marker({
          position: aoi,
          map: map
        });
        marker29.addListener('click', function(){
          popUp29.open(map, marker29);
        });

        var label30 = "<a href='http://www.plygem.com' target='_blank'><p class='montserrat'>Ply Gem Holdings, Inc</p></a>";
        var popUp30 = new google.maps.InfoWindow({
          content: label30
        });
        var marker30 = new google.maps.Marker({
          position: pgem,
          map: map
        });
        marker30.addListener('click', function(){
          popUp30.open(map, marker30);
        });

        var label31 = "<a href='http://www.premierinc.com' target='_blank'><p class='montserrat'>Premier, Inc.</p></a>";
        var popUp31 = new google.maps.InfoWindow({
          content: label31
        });
        var marker31 = new google.maps.Marker({
          position: pinc,
          map: map
        });
        marker31.addListener('click', function(){
          popUp31.open(map, marker31);
        });

        var label32= "<a href='http://www.selectbank.com' target='_blank'><p class='montserrat'>Select Bancorp, Inc.</p></a>";
        var popUp32 = new google.maps.InfoWindow({
          content: label32
        });
        var marker32 = new google.maps.Marker({
          position: slct,
          map: map
        });
        marker32.addListener('click', function(){
          popUp32.open(map, marker32);
        });

        var label33 = "<a href='http://www.duke-energy.com' target='_blank'><p class='montserrat'>Duke Energy Corporation</p></a>";
        var popUp33 = new google.maps.InfoWindow({
          content: label33
        });
        var marker33 = new google.maps.Marker({
          position: duk,
          map: map
        });
        marker33.addListener('click', function(){
          popUp33.open(map, marker33);
        });

        var label34 = "<a href='http://www.spx.com' target='_blank'><p class='montserrat'>SPX Corporation</p></a>";
        var popUp34 = new google.maps.InfoWindow({
          content: label34
        });
        var marker34 = new google.maps.Marker({
          position: spxc,
          map: map
        });
        marker34.addListener('click', function(){
          popUp34.open(map, marker34);
        });

        var label35 = "<a href='http://www.babcock.com' target='_blank'><p class='montserrat'>Babcock & Wilcox Enterprises, Inc.</p></a>";
        var popUp35 = new google.maps.InfoWindow({
          content: label35
        });
        var marker35 = new google.maps.Marker({
          position: bw,
          map: map
        });
        marker35.addListener('click', function(){
          popUp35.open(map, marker35);
        });

        var label36 = "<a href='http://www.redhat.com' target='_blank'><p class='montserrat'>Red Hat, Inc.</p></a>";
        var popUp36 = new google.maps.InfoWindow({
          content: label36
        });
        var marker36 = new google.maps.Marker({
          position: rht,
          map: map
        });
        marker36.addListener('click', function(){
          popUp36.open(map, marker36);
        });

        var label37 = "<a href='http://www.tangeroutlet.com' target='_blank'><p class='montserrat'>Tanger Factory Outlet Centers, Inc.</p></a>";
        var popUp37 = new google.maps.InfoWindow({
          content: label37
        });
        var marker37 = new google.maps.Marker({
          position: skt,
          map: map
        });
        marker37.addListener('click', function(){
          popUp37.open(map, marker37);
        });

        var label38 = "<a href='http://www.prahs.com' target='_blank'><p class='montserrat'>PRA Health Sciences, Inc.</p></a>";
        var popUp = new google.maps.InfoWindow({
          content: label38
        });
        var marker38 = new google.maps.Marker({
          position: prah,
          map: map
        });
        marker38.addListener('click', function(){
          popUp38.open(map, marker38);
        });

        var label39 = "<a href='http://www.liveoakbank.com' target='_blank'><p class='montserrat'>Live Oak Bancshares, Inc.</p></a>";
        var popUp39 = new google.maps.InfoWindow({
          content: label39
        });
        var marker39 = new google.maps.Marker({
          position: lob,
          map: map
        });
        marker39.addListener('click', function(){
          popUp39.open(map, marker39);
        });

        var label40 = "<a href='http://www.tcap.com' target='_blank'><p class='montserrat'>Triangle Capital Corporation</p></a>";
        var popUp40 = new google.maps.InfoWindow({
          content: label40
        });
        var marker40 = new google.maps.Marker({
          position: tcap,
          map: map
        });
        marker40.addListener('click', function(){
          popUp40.open(map, marker40);
        });

        var label41 = "<a href='http://www.vtvtherapeutics.com' target='_blank'><p class='montserrat'>vTv Therapeutics Inc.</p></a>";
        var popUp41 = new google.maps.InfoWindow({
          content: label41
        });
        var marker41 = new google.maps.Marker({
          position: vtvt,
          map: map
        });
        marker41.addListener('click', function(){
          popUp41.open(map, marker41);
        });

        var label42 = "<a href='http://www.invtitle.com' target='_blank'><p class='montserrat'>Investors Title Company</p></a>";
        var popUp42 = new google.maps.InfoWindow({
          content: label42
        });
        var marker42 = new google.maps.Marker({
          position: itic,
          map: map
        });
        marker42.addListener('click', function(){
          popUp42.open(map, marker42);
        });

        var label43 = "<a href='http://www.bankofamerica.com' target='_blank'><p class='montserrat'>Bank of America Corporation</p></a>";
        var popUp43 = new google.maps.InfoWindow({
          content: label43
        });
        var marker43 = new google.maps.Marker({
          position: bac,
          map: map
        });
        marker43.addListener('click', function(){
          popUp43.open(map, marker43);
        });

        var label44 = "<a href='http://www.enproindustries.com' target='_blank'><p class='montserrat'>EnPro Industries, Inc.</p></a>";
        var popUp44 = new google.maps.InfoWindow({
          content: label44
        });
        var marker44 = new google.maps.Marker({
          position: npo,
          map: map
        });
        marker44.addListener('click', function(){
          popUp44.open(map, marker44);
        });

        var label45 = "<a href='http://www.lowes.com' target='_blank'><p class='montserrat'>Lowe's Companies, Inc.</p></a>";
        var popUp45 = new google.maps.InfoWindow({
          content: label45
        });
        var marker45 = new google.maps.Marker({
          position: low,
          map: map
        });
        marker45.addListener('click', function(){
          popUp45.open(map, marker45);
        });

        var label46 = "<a href='http://www.spxflow.com' target='_blank'><p class='montserrat'>SPX FLOW, Inc.</p></a>";
        var popUp46 = new google.maps.InfoWindow({
          content: label46
        });
        var marker46 = new google.maps.Marker({
          position: flow,
          map: map
        });
        marker46.addListener('click', function(){
          popUp46.open(map, marker46);
        });

        var label47 = "<a href='http://www.albemarle.com' target='_blank'><p class='montserrat'>Albemarle Corporation</p></a>";
        var popUp47 = new google.maps.InfoWindow({
          content: label47
        });
        var marker47 = new google.maps.Marker({
          position: alb,
          map: map
        });
        marker47.addListener('click', function(){
          popUp47.open(map, marker47);
        });

        var label48 = "<a href='http://www.peoplesbanknc.com' target='_blank'><p class='montserrat'>Peoples Bancorp of North Carolina, Inc.</p></a>";
        var popUp48 = new google.maps.InfoWindow({
          content: label48
        });
        var marker48 = new google.maps.Marker({
          position: pebk,
          map: map
        });
        marker48.addListener('click', function(){
          popUp48.open(map, marker48);
        });

        var label49 = "<a href='http://www.labcorp.com' target='_blank'><p class='montserrat'>Laboratory Corporation of America Holdings</p></a>";
        var popUp49 = new google.maps.InfoWindow({
          content: label49
        });
        var marker49 = new google.maps.Marker({
          position: lh,
          map: map
        });
        marker49.addListener('click', function(){
          popUp49.open(map, marker49);
        });

        var label50 = "<a href='http://www.culp.com' target='_blank'><p class='montserrat'>Culp, Inc.</p></a>";
        var popUp50 = new google.maps.InfoWindow({
          content: label50
        });
        var marker50 = new google.maps.Marker({
          position: culp,
          map: map
        });
        marker50.addListener('click', function(){
          popUp50.open(map, marker50);
        });



      }
