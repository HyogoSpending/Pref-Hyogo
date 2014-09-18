/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; 	// 住民税基礎控除
Taxes.huyoKoujo = 330000; 	// 一人分の扶養控除
Taxes.taxRate = 0.04; 	// 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'pref_hyogo_2013_kessan';
OpenSpending.year = '2013';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {
/*  建物、山、魚、講義の4つのアイコンをオリジナルで作成  */
  /* hyogopref cofog */
  '2013010000': { icon: 'icons/legislative.svg', color: '#C75746', bcolor: '#D33673' }, 	// 1階層 議会費-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
  	  
  '2013010100': { icon: 'icons/legislative.svg', color: '#C75746', bcolor: '#D33673' }, 	// 2階層 議会費
  '2013010101': { icon: 'icons/legislative.svg', color: '#C75746', bcolor: '#D33673' }, 		//議会費
  '2013010102': { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#D33673' }, 			//議会事務局費


  '2013020000': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#935B3B' },		//1階層 総務費-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
  	  
  '2013020100': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#935B3B' }, 	//2階層 総務管理費
  '2013020101': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#935B3B' },			//一般管理費
  '2013020102': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#935B3B' },			//人事管理費
  '2013020103': { icon: 'icons/media.svg', color: '#C75746', bcolor: '#935B3B' },				//広報費
  '2013020104': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#935B3B' },		//広聴費
  '2013020105': { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#935B3B' },				//文書費
  '2013020106': { icon: 'icons/bankbook.svg', color: '#C75746', bcolor: '#935B3B' },			//財政管理費
  '2013020107': { icon: 'icons/pc.svg', color: '#C75746', bcolor: '#935B3B' },					//電子計算管理費
  '2013020108': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#935B3B' },			//会計管理費
  '2013020109': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#935B3B' },			//財産管理費
  '2013020110': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#935B3B' },		//渉外費
  '2013020111': { icon: 'icons/hyogo_building.svg', color: '#C75746', bcolor: '#935B3B' },		//東京事務所費	⇒オリジナルアイコン（建物：hyogo_building.svg）
  '2013020112': { icon: 'icons/japanese-money.svg', color: '#C75746', bcolor: '#935B3B' },	//恩給及び退職年金費
  '2013020113': { icon: 'icons/unknown.svg', color: '#C75746', bcolor: '#935B3B' },			//諸費
  '2013020114': { icon: 'icons/japanese-money.svg', color: '#C75746', bcolor: '#935B3B' },	//県税市町交付金
  '2013020115': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#935B3B' },			//利子割精算金
  '2013020116': { icon: 'icons/japanese-money.svg', color: '#C75746', bcolor: '#935B3B' },	//還付金及び返納金
  	  
  '2013020200': { icon: 'icons/planning.svg', color: '#C75746', bcolor: '#FA8072' }, 			//2階層 企画費
  '2013020201': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#FA8072' },			//企画総務費
  '2013020202': { icon: 'icons/planning.svg', color: '#C75746', bcolor: '#FA8072' },				//調査調整費
  '2013020203': { icon: 'icons/machi.svg', color: '#C75746', bcolor: '#FA8072' },				//地域の元気推進費
  '2013020204': { icon: 'icons/machi.svg', color: '#C75746', bcolor: '#FA8072' },				//地域自主戦略推進費
	
  '2013020300': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#FA8072' }, 			//2階層 徴税費
  '2013020301': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#FA8072' },			//税務総務費
  '2013020302': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#FA8072' },				//賦課徴収費
	
  '2013020400': { icon: 'icons/sangyou3.svg', color: '#C75746', bcolor: '#FA8072' }, 			//2階層 市町振興費
  '2013020401': { icon: 'icons/machi.svg', color: '#C75746', bcolor: '#FA8072' }, 				//市町連絡調整費
  '2013020402': { icon: 'icons/machi.svg', color: '#C75746', bcolor: '#FA8072' }, 				//自治振興費
  '2013020403': { icon: 'icons/sangyou3.svg', color: '#C75746', bcolor: '#FA8072' }, 			//地域振興費
	
  '2013020500': { icon: 'icons/election.svg', color: '#C75746', bcolor: '#FA8072' }, 		//2階層 選挙費
  '2013020501': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#FA8072' },		//選挙管理委員会費
  '2013020502': { icon: 'icons/media.svg', color: '#C75746', bcolor: '#FA8072' },				//選挙啓発費
  '2013020503': { icon: 'icons/election.svg', color: '#C75746', bcolor: '#FA8072' },				//兵庫県議会議員補欠選挙費
  '2013020504': { icon: 'icons/election.svg', color: '#C75746', bcolor: '#FA8072' },				//知事選挙費
  '2013020505': { icon: 'icons/election.svg', color: '#C75746', bcolor: '#FA8072' },				//参議院議員通常選挙費
  	  
  '2013020600': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#FA8072' }, 			//2階層 生活費
  '2013020601': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#FA8072' },			//生活総務費
  '2013020602': { icon: 'icons/microscope.svg', color: '#C75746', bcolor: '#FA8072' },			//生活科学化推進費
  '2013020603': { icon: 'icons/secondary-upper.svg', color: '#C75746', bcolor: '#FA8072' },	//青少年対策費
  '2013020604': { icon: 'icons/c_bunnka.svg', color: '#C75746', bcolor: '#FA8072' },			//文化振興費
  '2013020605': { icon: 'icons/car.svg', color: '#C75746', bcolor: '#FA8072' },					//交通安全対策費
  	  
  '2013020700': { icon: 'icons/fire_engine.svg', color: '#C75746', bcolor: '#FA8072' }, 		//2階層 防災費
  '2013020701': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#FA8072' },			//防災総務費
  '2013020702': { icon: 'icons/hyogo_lecture.svg', color: '#C75746', bcolor: '#FA8072' },		//消防指導費	⇒オリジナルアイコン（指導：hyogo_lecture）
  	  
  '2013020800': { icon: 'icons/ekonomija.svg', color: '#C75746', bcolor: '#FA8072' }, 		//2階層 統計調査費
  '2013020801': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#FA8072' }, 		//統計調査総務費
  '2013020802': { icon: 'icons/ekonomija.svg', color: '#C75746', bcolor: '#FA8072' },			//統計調査費
  	  
  '2013020900': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#FA8072' }, 			//2階層 人事委員会費
  '2013020901': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#FA8072' }, 				//人事委員会費
  	  
  '2013021000': { icon: 'icons/payroll.svg', color: '#C75746', bcolor: '#FA8072' }, 		//2階層 	監査委員費
  '2013021001': { icon: 'icons/payroll.svg', color: '#C75746', bcolor: '#FA8072' },			//監査委員費
  	  
  '2013021100': { icon: 'icons/hyogo_building.svg', color: '#C75746', bcolor: '#FA8072' }, 	//2階層	庁舎整備費	⇒オリジナルアイコン（建物：hyogo_building.svg）
  '2013021101': { icon: 'icons/hyogo_building.svg', color: '#C75746', bcolor: '#FA8072' },		//庁舎整備費	⇒オリジナルアイコン（建物：hyogo_building.svg）


   '2013030000': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#4E6D00' }, 	//1階層	民生費-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
   	   
  '2013030100': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#4E6D00' }, 		//2階層	社会福祉費
  '2013030101': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#4E6D00' },			//社会福祉総務費
  '2013030102': { icon: 'icons/c_kenkou_fukushi.svg', color: '#C75746', bcolor: '#4E6D00' },	//社会福祉対策費
  '2013030103': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#4E6D00' },		//障害者福祉費
  '2013030104': { icon: 'icons/old-age.svg', color: '#C75746', bcolor: '#4E6D00' },				//老人福祉費
  '2013030105': { icon: 'icons/defence.svg', color: '#C75746', bcolor: '#4E6D00' },				//遺家族等援護費
  '2013030106': { icon: 'icons/pio_mio.svg', color: '#C75746', bcolor: '#4E6D00' },				//国民健康保険連絡調整費
  '2013030107': { icon: 'icons/hyogo_building.svg', color: '#C75746', bcolor: '#4E6D00' },		//社会福祉施設費	⇒オリジナルアイコン（建物：hyogo_building.svg）
  '2013030108': { icon: 'icons/hyogo_building.svg', color: '#C75746', bcolor: '#4E6D00' },		//老人福祉施設費	⇒オリジナルアイコン（建物：hyogo_building.svg）

  '2013030200': { icon: 'icons/child.svg', color: '#C75746', bcolor: '#4E6D00' }, 			//2階層	児童福祉費
  '2013030201': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#4E6D00' },			//児童福祉総務費
  '2013030202': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#4E6D00' },				//児童福祉対策費
  '2013030203': { icon: 'icons/child.svg', color: '#C75746', bcolor: '#4E6D00' },					//児童措置費
  '2013030204': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#4E6D00' },			//母子福祉費
  '2013030205': { icon: 'icons/hyogo_building.svg', color: '#C75746', bcolor: '#4E6D00' },		//児童福祉施設費	⇒オリジナルアイコン（建物：hyogo_building.svg）
  	  
  '2013030300': { icon: 'icons/unemployment.svg', color: '#C75746', bcolor: '#4E6D00' }, //2階層 生活保護費
  '2013030301': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#4E6D00' },			//生活保護総務費
  '2013030302': { icon: 'icons/unemployment.svg', color: '#C75746', bcolor: '#4E6D00' },		//扶助費
 	  
  '2013030400': { icon: 'icons/restoration.svg', color: '#C75746', bcolor: '#4E6D00' }, 					//2階層 災害救助費
  '2013030401': { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#4E6D00' }, 					//救助費
  '2013030402': { icon: 'icons/aid-developing-countries.svg', color: '#C75746', bcolor: '#4E6D00' },		//災害援護費
  	  
  	  
  '2013040000': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#4E6D00' }, 	//1階層	衛生費-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

  '2013040100': { icon: 'icons/garbage.svg', color: '#C75746', bcolor: '#4E6D00' }, 				//2階層 公衆衛生費
  '2013040101': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#4E6D00' },				//公衆衛生総務費
  '2013040102': { icon: 'icons/c_kenkou_fukushi.svg', color: '#C75746', bcolor: '#4E6D00' },		//予防費
  '2013040103': { icon: 'icons/c_kosodate_shien.svg', color: '#C75746', bcolor: '#4E6D00' },		//精神保健費
  '2013040104': { icon: 'icons/needle.svg', color: '#C75746', bcolor: '#4E6D00' },					//感染症予防費
  '2013040105': { icon: 'icons/hyogo_lecture.svg', color: '#C75746', bcolor: '#4E6D00' },			//母子保健指導費	⇒オリジナルアイコン（指導：hyogo_lecture）
  '2013040106': { icon: 'icons/c_kenkou.svg', color: '#C75746', bcolor: '#4E6D00' },				//健康増進費
  '2013040107': { icon: 'icons/microscope.svg', color: '#C75746', bcolor: '#4E6D00' },				//健康科学研究センター費
  	  
  '2013040200': { icon: 'icons/disposal_center.svg', color: '#C75746', bcolor: '#4E6D00' }, 	//2階層 環境衛生費
  '2013040201': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#4E6D00' },				//環境衛生総務費
  '2013040202': { icon: 'icons/hyogo_lecture.svg', color: '#C75746', bcolor: '#4E6D00' },			//食品衛生指導費	⇒オリジナルアイコン（指導：hyogo_lecture）
  '2013040203': { icon: 'icons/hyogo_lecture.svg', color: '#C75746', bcolor: '#4E6D00' },			//環境衛生指導費	⇒オリジナルアイコン（指導：hyogo_lecture）
  '2013040204': { icon: 'icons/c_sankaku_ikusei.svg', color: '#C75746', bcolor: '#4E6D00' },		//環境保全対策費
  '2013040205': { icon: 'icons/c_syoukougyou.svg', color: '#C75746', bcolor: '#4E6D00' },			//環境整備費

  '2013040300': { icon: 'icons/hospital.svg', color: '#C75746', bcolor: '#4E6D00' }, 			//2階層 保健所費
  '2013040301': { icon: 'icons/hospital.svg', color: '#C75746', bcolor: '#4E6D00' },					//保健所費
  	  
  '2013040400': { icon: 'icons/medical-supplies.svg', color: '#C75746', bcolor: '#4E6D00' }, 	//2階層 医薬費
  '2013040401': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#4E6D00' },				//医薬総務費
  '2013040402': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#4E6D00' },					//医務費
  '2013040403': { icon: 'icons/hyogo_lecture.svg', color: '#C75746', bcolor: '#4E6D00' },			//保健師等指導管理費	⇒オリジナルアイコン（指導：hyogo_lecture）
  '2013040404': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#4E6D00' },					//薬務費


  '2013050000': { icon: 'icons/labour.svg', color: '#C75746', bcolor: '#D33673' }, 	//1階層	労働費-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
  	  
  '2013050100': { icon: 'icons/coal.svg', color: '#C75746', bcolor: '#D33673' }, 				//2階層 労政費
  '2013050101': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#D33673' },			//労政総務費
  '2013050102': { icon: 'icons/c_kenkou.svg', color: '#C75746', bcolor: '#D33673' },			//労働福祉費
  '2013050103': { icon: 'icons/human-resources.svg', color: '#C75746', bcolor: '#D33673' },	//雇用開発推進費
  '2013050104': { icon: 'icons/coal.svg', color: '#C75746', bcolor: '#D33673' },					//雇用機会創出費
  	  
  '2013050200': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#D33673' }, 	// 2階層 職業訓練費
  '2013050201': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#D33673' },			//職業訓練総務費
  '2013050202': { icon: 'icons/hyogo_lecture.svg', color: '#C75746', bcolor: '#D33673' },		//職業訓練実施費	⇒オリジナルアイコン（指導：hyogo_lecture）
  '2013050203': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#D33673' },		//職業能力開発推進費
	  
  '2013050300': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#D33673' }, 	// 2階層 労働委員会費
  '2013050301': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#D33673' },		//労働委員会費
  	  
  	  
  '2013060000': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#935B3B' },	//1階層	農林水産費-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
  	     	   
  '2013060100': { icon: 'icons/c_nougyou.svg', color: '#C75746', bcolor: '#935B3B' }, 		//2階層	農業費
  '2013060101': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#935B3B' },			//農業総務費
  '2013060102': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#935B3B' },				//農業改良普及費
  '2013060103': { icon: 'icons/c_nougyou.svg', color: '#C75746', bcolor: '#935B3B' },			//農業振興費
  '2013060104': { icon: 'icons/c_nougyou.svg', color: '#C75746', bcolor: '#935B3B' },			//農作物対策費
  '2013060105': { icon: 'icons/microscope.svg', color: '#C75746', bcolor: '#935B3B' },			//植物防疫費
  '2013060106': { icon: 'icons/hyogo_lecture.svg', color: '#C75746', bcolor: '#935B3B' },		//農業協同組合等指導費	⇒オリジナルアイコン（指導：hyogo_lecture）
  '2013060107': { icon: 'icons/hyogo_lecture.svg', color: '#C75746', bcolor: '#935B3B' },		//農業共済団体指導費	⇒オリジナルアイコン（指導：hyogo_lecture）
  '2013060108': { icon: 'icons/microscope.svg', color: '#C75746', bcolor: '#935B3B' },			//農林水産技術総合センター費
  	  
  '2013060200': { icon: 'icons/pig.svg', color: '#C75746', bcolor: '#935B3B' }, 			//2階層 畜産業費
  '2013060201': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#935B3B' }, 		//畜産総務費
  '2013060202': { icon: 'icons/pig.svg', color: '#C75746', bcolor: '#935B3B' }, 					//畜産振興費
  '2013060203': { icon: 'icons/needl_22.svg', color: '#C75746', bcolor: '#935B3B' }, 				//家畜保健衛生費
  	  
  '2013060300': { icon: 'icons/rezoning.svg', color: '#C75746', bcolor: '#935B3B' },		//2階層 農地費
  '2013060301': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#935B3B' },			//農地総務費
  '2013060302': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#935B3B' },				//土地改良費
  '2013060303': { icon: 'icons/restoration.svg', color: '#C75746', bcolor: '#935B3B' },			//農地防災事業費
  '2013060304': { icon: 'icons/courts.svg', color: '#C75746', bcolor: '#935B3B' },				//農地調整費

  '2013060400': { icon: 'icons/tree.svg', color: '#C75746', bcolor: '#935B3B' }, 			//2階層 林業費
  '2013060401': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#935B3B' },			//林業総務費
  '2013060402': { icon: 'icons/tree.svg', color: '#C75746', bcolor: '#935B3B' },					//林業振興費
  '2013060403': { icon: 'icons/forest.svg', color: '#C75746', bcolor: '#935B3B' },				//森林害虫防除費
  '2013060404': { icon: 'icons/forest.svg', color: '#C75746', bcolor: '#935B3B' },				//造林費
  '2013060405': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#935B3B' },				//林道費
  '2013060406': { icon: 'icons/hyogo_mountain.svg', color: '#C75746', bcolor: '#935B3B' },	//治山費	⇒オリジナルアイコン（山：hyogo_mountain）
  '2013060407': { icon: 'icons/microscope.svg', color: '#C75746', bcolor: '#935B3B' },			//農林水産技術総合センター費
  	  
  '2013060500': { icon: 'icons/hyogo_fish.svg', color: '#C75746', bcolor: '#935B3B' }, 		//2階層	水産業費	⇒オリジナルアイコン（魚：hyogo_fish）
  '2013060501': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#935B3B' },			//水産業総務費
  '2013060502': { icon: 'icons/hyogo_fish.svg', color: '#C75746', bcolor: '#935B3B' },			//水産業振興費	⇒オリジナルアイコン（魚：hyogo_fish）
  '2013060503': { icon: 'icons/hyogo_lecture.svg', color: '#C75746', bcolor: '#935B3B' },		//水産業協同組合指導費	⇒オリジナルアイコン（指導：hyogo_lecture）
  '2013060504': { icon: 'icons/courts.svg', color: '#C75746', bcolor: '#935B3B' },				//漁業調整費
  '2013060505': { icon: 'icons/police2.svg', color: '#C75746', bcolor: '#935B3B' },				//漁業取締費
  '2013060506': { icon: 'icons/microscope.svg', color: '#C75746', bcolor: '#935B3B' },			//農林水産技術総合センター費
  '2013060507': { icon: 'icons/harbor.svg', color: '#C75746', bcolor: '#935B3B' },				//漁港管理費
  '2013060508': { icon: 'icons/manufactoring-construction.svg', color: '#C75746', bcolor: '#935B3B' },			//漁港建設費
  	  
  	  
  '2013070000': { icon: 'icons/sangyou3.svg', color: '#C75746', bcolor: '#FA8072' }, 	//1階層	商工費-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
  	  
  '2013070100': { icon: 'icons/transfers.svg', color: '#C75746', bcolor: '#FA8072' }, 		//2階層 商業費
  '2013070101': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#FA8072' }, 		//商業総務費
  '2013070102': { icon: 'icons/transfers.svg', color: '#C75746', bcolor: '#FA8072' }, 			//商業振興費
  '2013070103': { icon: 'icons/worldmap.svg', color: '#C75746', bcolor: '#FA8072' }, 			//貿易振興費
  	  
  '2013070200': { icon: 'icons/c_syoukougyou.svg', color: '#C75746', bcolor: '#FA8072' },	//2階層 工鉱業費
  '2013070201': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#FA8072' },			//工鉱業総務費
  '2013070202': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#FA8072' },		//中小企業振興費
  '2013070203': { icon: 'icons/c_syoukougyou.svg', color: '#C75746', bcolor: '#FA8072' },		//工鉱業振興対策費
  '2013070204': { icon: 'icons/c_shyoubou.svg', color: '#C75746', bcolor: '#FA8072' },			//産業保安対策費
  '2013070205': { icon: 'icons/courts.svg', color: '#C75746', bcolor: '#FA8072' },				//計量検定費
  '2013070206': { icon: 'icons/microscope.svg', color: '#C75746', bcolor: '#FA8072' },					//工業技術センター費
  	  
  '2013070300': { icon: 'icons/economy-tourism.svg', color: '#C75746', bcolor: '#FA8072' }, 			// 2階層 観光費
  '2013070301': { icon: 'icons/economy-tourism.svg', color: '#C75746', bcolor: '#FA8072' },				//観光費
  	  
  	  
  '2013080000': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#D33673' }, 	//1階層	土木費-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
  	  
  '2013080100': { icon: 'icons/admin-housing.svg', color: '#C75746', bcolor: '#D33673' }, 	//2階層 土木管理費
  '2013080101': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#D33673' }, 	//土木総務費
  '2013080102': { icon: 'icons/hyogo_building.svg', color: '#C75746', bcolor: '#D33673' },	//土木事務所費	⇒オリジナルアイコン（建物：hyogo_building.svg）
  	  
  '2013080200': { icon: 'icons/bridge.svg', color: '#C75746', bcolor: '#D33673' }, 		//2階層 道路橋りょう費
  '2013080201': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#D33673' }, 	//道路橋りょう管理費
  '2013080202': { icon: 'icons/bridge.svg', color: '#C75746', bcolor: '#D33673' }, 			//道路橋りょう新設改良費
  			
  '2013080300': { icon: 'icons/river.svg', color: '#C75746', bcolor: '#D33673' },		//2階層 河川海岸費
  '2013080301': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#D33673' },		//河川管理費
  '2013080302': { icon: 'icons/river.svg', color: '#C75746', bcolor: '#D33673' },				//河川改良費
  '2013080303': { icon: 'icons/harbor.svg', color: '#C75746', bcolor: '#D33673' },			//海岸保全費
  '2013080304': { icon: 'icons/river.svg', color: '#C75746', bcolor: '#D33673' },				//水防費
  	  
  '2013080400': { icon: 'icons/hyogo_mountain.svg', color: '#C75746', bcolor: '#D33673' }, //2階層 砂防費	⇒オリジナルアイコン（山：hyogo_mountain）
  '2013080401': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#D33673' },			//砂防管理費
  '2013080402': { icon: 'icons/hyogo_mountain.svg', color: '#C75746', bcolor: '#D33673' },	//砂防費	⇒オリジナルアイコン（山：hyogo_mountain）
  	    	  
  '2013080500': { icon: 'icons/airplane.svg', color: '#C75746', bcolor: '#D33673' }, 		//2階層 港湾空港費
  '2013080501': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#D33673' }, 	//港湾管理費
  '2013080502': { icon: 'icons/harbor.svg', color: '#C75746', bcolor: '#D33673' }, 			//港湾建設費
  '2013080503': { icon: 'icons/airplane.svg', color: '#C75746', bcolor: '#D33673' }, 			//空港整備費
  	  
  '2013080600': { icon: 'icons/planning.svg', color: '#C75746', bcolor: '#D33673' },	//2階層 都市計画費
  '2013080601': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#D33673' },		//都市計画総務費
  '2013080602': { icon: 'icons/rezoning.svg', color: '#C75746', bcolor: '#D33673' },		//都市整備費
  '2013080603': { icon: 'icons/community.svg', color: '#C75746', bcolor: '#D33673' },		//公園費
  '2013080604': { icon: 'icons/planning.svg', color: '#C75746', bcolor: '#D33673' },			//都市計画費
  '2013080605': { icon: 'icons/hyogo_building.svg', color: '#C75746', bcolor: '#D33673' },	//土地対策費	⇒オリジナルアイコン（建物：hyogo_building.svg）
  	  
  '2013080700': { icon: 'icons/manufactoring-construction.svg', color: '#C75746', bcolor: '#D33673' }, 		//2階層 建築管理費
  '2013080701': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#D33673' }, 	//建築総務費
  '2013080702': { icon: 'icons/hyogo_lecture.svg', color: '#C75746', bcolor: '#D33673' }, 	//建築指導監督費	⇒オリジナルアイコン（指導：hyogo_lecture）
  '2013080703': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#D33673' }, 	//建築設計監理費
  	  
  '2013080800': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#D33673' }, 		//2階層 住宅費
  '2013080801': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#D33673' },		//住宅総務費
  '2013080802': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#D33673' },			//住宅対策費
  	  
  	  
  '2013090000': { icon: 'icons/police2.svg', color: '#C75746', bcolor: '#D33673' }, 	//1階層	警察費-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
  	  
  '2013090100': { icon: 'icons/policija.svg', color: '#C75746', bcolor: '#D33673' }, 			//2階層 警察管理費
  '2013090101': { icon: 'icons/policija.svg', color: '#C75746', bcolor: '#D33673' },				//公安委員会費
  '2013090102': { icon: 'icons/hyogo_building.svg', color: '#C75746', bcolor: '#D33673' },		//警察本部費	⇒オリジナルアイコン（建物：hyogo_building.svg）
  '2013090103': { icon: 'icons/foreign-military-aid.svg', color: '#C75746', bcolor: '#D33673' },//装備費
  '2013090104': { icon: 'icons/hyogo_building.svg', color: '#C75746', bcolor: '#D33673' },		//警察施設費	⇒オリジナルアイコン（建物：hyogo_building.svg）
  '2013090105': { icon: 'icons/car.svg', color: '#C75746', bcolor: '#D33673' },					//運転免許費
  '2013090106': { icon: 'icons/japanese-money.svg', color: '#C75746', bcolor: '#D33673' },	//恩給及び退職年金費

  '2013090200': { icon: 'icons/police2.svg', color: '#C75746', bcolor: '#D33673' }, 			//2階層	警察活動費
  '2013090201': { icon: 'icons/police2.svg', color: '#C75746', bcolor: '#D33673' },				//一般警察活動費
  '2013090202': { icon: 'icons/policija.svg', color: '#C75746', bcolor: '#D33673' },				//刑事警察費
  '2013090203': { icon: 'icons/car.svg', color: '#C75746', bcolor: '#D33673' },					//交通指導取締費


  '2013100000': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#D33673' }, 	//1階層	教育費-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
  	  
  '2013100100': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#D33673' }, 	//2階層 教育総務費
  '2013100101': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#D33673' },		//教育委員会費
  '2013100102': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#D33673' },		//教育委員会事務局費
  '2013100103': { icon: 'icons/primary.svg', color: '#C75746', bcolor: '#D33673' },				//教職員人事費
  '2013100104': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#D33673' },			//教育連絡調整費
  '2013100105': { icon: 'icons/hyogo_lecture.svg', color: '#C75746', bcolor: '#D33673' },		//教育研修所費	⇒オリジナルアイコン（指導：hyogo_lecture）
  '2013100106': { icon: 'icons/japanese-money.svg', color: '#C75746', bcolor: '#D33673' },	//恩給及び退職年金費
  	  
  '2013100200': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#FA8072' }, 		//2階層 小学校費
  '2013100201': { icon: 'icons/primary.svg', color: '#C75746', bcolor: '#FA8072' }, 				//小学校教職員費
  '2013100202': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#FA8072' }, 			//小学校教育振興費
  	  
  '2013100300': { icon: 'icons/secondary-lower.svg', color: '#C75746', bcolor: '#FA8072' }, 		//2階層 中学校費
  '2013100301': { icon: 'icons/primary.svg', color: '#C75746', bcolor: '#FA8072' },						//中学校教職員費
  '2013100302': { icon: 'icons/secondary-lower.svg', color: '#C75746', bcolor: '#FA8072' },			//中学校教育振興費
  	  
  '2013100400': { icon: 'icons/secondary-upper.svg', color: '#C75746', bcolor: '#935B3B' }, 		//2階層 高等学校費
  '2013100401': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#935B3B' },					//高等学校総務費
  '2013100402': { icon: 'icons/hyogo_building.svg', color: '#C75746', bcolor: '#935B3B' },				//全日制高等学校管理費	⇒オリジナルアイコン（建物：hyogo_building.svg）
  '2013100403': { icon: 'icons/hyogo_building.svg', color: '#C75746', bcolor: '#935B3B' },				//定時制高等学校管理費	⇒オリジナルアイコン（建物：hyogo_building.svg）
  '2013100404': { icon: 'icons/payroll.svg', color: '#C75746', bcolor: '#935B3B' },						//高等学校教育振興費
  '2013100405': { icon: 'icons/manufactoring-construction.svg', color: '#C75746', bcolor: '#935B3B' },	//高等学校建設費
  '2013100406': { icon: 'icons/human-resources.svg', color: '#C75746', bcolor: '#935B3B' },			//通信教育費
  	  
  '2013100500': { icon: 'icons/wheelchair.svg', color: '#C75746', bcolor: '#FA8072' }, 		//2階層 特別支援学校費
  '2013100501': { icon: 'icons/wheelchair.svg', color: '#C75746', bcolor: '#FA8072' },			//特別支援学校費
	
  '2013100600': { icon: 'icons/post-secondary.svg', color: '#C75746', bcolor: '#FA8072' }, //2階層 大学費
  '2013100601': { icon: 'icons/post-secondary.svg', color: '#C75746', bcolor: '#FA8072' },	//大学費
  '2013100602': { icon: 'icons/post-secondary.svg', color: '#C75746', bcolor: '#FA8072' },	//大学諸費
	
  '2013100700': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#FA8072' }, 			//2階層 私立学校費
  '2013100701': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#FA8072' }, 				//私学振興費
	
  '2013100800': { icon: 'icons/c_bunnka.svg', color: '#C75746', bcolor: '#FA8072' }, 		//2階層 社会教育費
  '2013100801': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#935B3B' },			//社会教育総務費
  '2013100802': { icon: 'icons/c_bunnka.svg', color: '#C75746', bcolor: '#935B3B' },			//文化財保護費
  '2013100803': { icon: 'icons/hyogo_building.svg', color: '#C75746', bcolor: '#935B3B' },	//社会教育施設費	⇒オリジナルアイコン（建物：hyogo_building.svg）
  	  
  '2013100900': { icon: 'icons/sports.svg', color: '#C75746', bcolor: '#FA8072' }, 			//2階層 保健体育費
  '2013100901': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#935B3B' },			//保健体育総務費
  '2013100902': { icon: 'icons/sports.svg', color: '#C75746', bcolor: '#935B3B' },				//体育振興費
  	  
  	  
  '2013110000': { icon: 'icons/aid-developing-countries.svg', color: '#C75746', bcolor: '#D33673' },	//1階層	災害復旧費-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
 
  '2013110100': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#D33673' },				//2階層 農林水産施設災害復旧費
  '2013110101': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#D33673' },				//公共農林水産施設災害復旧費
  	  
  '2013110200': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#D33673' },		//2階層 土木施設災害復旧費
  '2013110201': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#D33673' },		//公共土木施設等災害復旧費

  '2013110300': { icon: 'icons/manufactoring-construction.svg', color: '#C75746', bcolor: '#D33673' },	//2階層 県有施設等災害復旧費	⇒オリジナルアイコン（建物：hyogo_building.svg）
  '2013110301': { icon: 'icons/manufactoring-construction.svg', color: '#C75746', bcolor: '#D33673' },	//県有施設等災害復旧費	⇒オリジナルアイコン（建物：hyogo_building.svg）


  '2013120000': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#D33673' },		//1階層	公債費-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
  	  
  '2013120100': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#D33673' }, 		// 2階層 公債費
  '2013120101': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#D33673' },


  '2013130000': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#D33673' },		//1階層	予備費-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
  	  
  '2013130100': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#D33673' },		//2階層	予備費
  '2013130101': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#D33673' }		//予備費
};
