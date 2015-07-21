<?php
if( isset( $_SERVER['HTTP_X_REQUESTED_WITH'] ) && ( $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest' ) ){
	if($_SERVER['REQUEST_METHOD']=='GET' && isset($_GET['do']) && $_GET['do']=='server_status'){

		$url = 'https://api.eveonline.com/server/ServerStatus.xml.aspx';
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_URL, $url);
		$data = curl_exec($ch);
		curl_close($ch);
		/*
		*	Parse json
		*
		*/
		$response = simplexml_load_string(trim($data));
		header('Cache-Control: no-cache, must-revalidate');
		header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
		header('Content-type: application/json');
		echo json_encode(array(
			'time' => (string)$response->currentTime, 
			'status' => (string)$response->result->serverOpen, 
			'nbPlayer' => (string)$response->result->onlinePlayers
		));
		die();

	}
}
$systems = json_decode(file_get_contents(dirname(__FILE__).'/config.json'), true);
?>
<!DOCTYPE html>
<!--
_______________________________________________________________
|                                                             |
|                     .ed"""" """$$$$be.                      |
|                   -"           ^""**$$$e.                   | 
|                 ."                   '$$$c                  |
|                /                      "4$$b                 |
|               d  3                      $$$$                |
|               $  *                   .$$$$$$                |
|              .$  ^c           $$$$$e$$$$$$$$.               |
|              d$L  4.         4$$$$$$$$$$$$$$b               |
|              $$$$b ^ceeeee.  4$$ECL.F*$$$$$$$               |
|  e$""=.      $$$$P d$$$$F $ $$$$$$$$$- $$$$$$               |
| z$$b. ^c     3$$$F "$$$$b   $"$$$$$$$  $$$$*"      .=""$c   |
|4$$$$L        $$P"  "$$b   .$ $$$$$...e$$        .=  e$$$.   |
|^*$$$$$c  %..   *c    ..    $$ 3$$$$$$$$$$eF     zP  d$$$$$  |
|  "**$$$ec   "   %ce""    $$$  $$$$$$$$$$*    .r" =$$$$P""   |
|        "*$b.  "c  *$e.    *** d$$$$$"L$$    .d"  e$$***"    |
|          ^*$$c ^$c $$$      4J$$$$$% $$$ .e*".eeP"          |
|             "$$$$$$"'$=e....$*$$**$cz$$" "..d$*"            |
|               "*$$$  *=%4.$ L L$ P3$$$F $$$P"               |
|                  "$   "%*ebJLzb$e$$$$$b $P"                 |
|                    %..      4$$$$$$$$$$ "                   |
|                     $$$e   z$$$$$$$$$$%                     |
|                      "*$c  "$$$$$$$P"                       |
|                       ."""*$$$$$$$$bc                       |
|                    .-"    .$***$$$"""*e.                    |
|                 .-"    .e$"     "*$c  ^*b.                  |
|          .=*""""    .e$*"          "*bc  "*$e..             |
|        .$"        .z*"               ^*$e.   "*****e.       |
|        $$ee$c   .d"                     "*$.        3.      |
|        ^*$E")$..$"                         *   .ee==d%      |
|           $.d$$$*                           *  J$$$e*       |
|            """""                              "$$$"         |
|                                                             |
|__________________________Wanted Bang________________________|

-->
<html lang="en">
<head>
	<title>Hub.isk</title>
	<meta name="description" content="Hub.isk"/>
	<meta charset="utf-8"/>
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"/>
	<link rel="stylesheet" href="css/app.css"/>
	<link rel="icon" type="image/png" href="favicon.png" />
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="xdr-min.js"></script>
	<script type="text/javascript">
		function initEve(){
			if(typeof(CCPEVE) == 'undefined'){
				$('body').attr('data-in-eve', false);
				console.log('Not in eveonline');
			}else{
				$('body').attr('data-in-eve', true);
				CCPEVE.requestTrust(redirectUri);
			}
		}
		<?php 
		$javascript_region = array();
		$javascript_station = array();
		$javascript_key = array();
		foreach($systems['systems'] as $system => $info){
			$javascript_region[] = $info['region'];
			$javascript_station[] = $info['id'];
			$javascript_key[] = "'".$system."'";
		}
		?>
		var siteURL = "<?php echo $systems['siteURL'];?>";
		var clientId = "<?php echo $systems['clientId'];?>";
		/*
		*	Region to fetch
		*/
		var wantedRegion = [<?php echo implode(', ', $javascript_region);?>];
		/*
		*	Station to fetch
		*/
		var wantedStation = [<?php echo implode(', ', $javascript_station);?>];
		/*
		*	Shortname
		*/
		var dirtyKey = [<?php echo implode(', ', $javascript_key);?>];
	</script>
	<script src="js/app.js?v=1"></script>
</head>
<body onload="initEve()">
	<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container-fluid">
			<div class="row">
				<div class="col-xs-6 col-sm-6 col-md-4">
					<div class="navbar-header">
						<a class="navbar-brand" href="#"><img src="img/logo.png" alt="iska.re"/></a>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-4 pull-right">
					<ul class="nav navbar-nav navbar-right">
						<li><a id="login" class="login" href="#"><img src="img/eve_login.png"/></a></li>
					</ul>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-4 pull-left">
					<div id="searchBar" class="hidden">
						<form class="navbar-form" role="form">
							<div class="row">
								<div class="col-sm-12 col-md-12">
									<div class="form-group">
										<input type="text" id="itemName" disabled placeholder="Type object name.." class="form-control typeahead"/>
										<input type="hidden" id="hiddenId" class="form-control"/>
									</div>
								</div>
							</div>
						</form>
						<div class="searchLoader pull-left"><img src="img/loader.gif"/></div>
					</div>
				</div>
			</div>
		</div>
	</nav>
	
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12" id="error">
				<div class="alert alert-info" role="alert" id="login-window">
					<p>You must be connected in order to fetch eveonline&copy; live market data. No informations about your account can be stored.</p>
				</div>
			</div>
			<!-- items info -->
			<div class="col-md-12 hidden" id="item-window">
				<div class="bg_container"></div>
				<div class="show_container">
					<div class="item-info-header"><p><span class="pull-left" id="currentItemName"></span><span class="pull-right item-info-close">&times;</span></p></div>
					<div class="item-info-container">
						<div class="row">
							<div class="col-md-1">
								<div class="item-img-contener">
									<img id="currentItemImg"/>
								</div>
							</div>
							<div class="col-md-11">
								<div class="item-desc-contener">
									<div class="item-info-benef">
										<div class="item-info-left">
											<span class="lower_price_system setDestination">Loading...</span>
											<span class="lower_price">0.00</span>
										</div>
										<div class="item-info-center">
											<span class="pourcent_gain">0%</span>
										</div>
										<div class="item-info-right">
											<span class="higher_price_system setDestination">Loading...</span>
											<span class="higher_price">0.00</span>
										</div>
									</div>
									<div class="item-info-benef even">
										<div class="item-info-left">
											<span class="lower_price_system setDestination">Loading...</span>
											<span class="lower_price">0.00</span>
										</div>
										<div class="item-info-center">
											<span class="sell_pourcent_gain">0%</span>
										</div>
										<div class="item-info-right">
											<span class="upper_price_system setDestination">Loading...</span>
											<span class="upper_price">0.00</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /items info -->
			<!-- systems infos -->
			<div class="col-md-12 main hidden" id="market-window">
				<div class="bg_container"></div>
				<div class="show_container">
					<div role="tabpanel">
					
						<ul class="nav nav-tabs mainTabs" role="tablist">
							<?php 
							foreach($systems as $system => $info){
							?>
							<li role="presentation"<?php if($system == 'jita'){echo ' class="active"';}?>><a href="#<?php echo $system;?>" title="<?php echo $info['shortname'];?>" aria-controls="<?php echo $system;?>" role="tab" data-toggle="tab"><?php echo $info['shortname'];?></a></li>
							<?php
							}
							?>
							<!---
							<li role="presentation"><a class="custom-marketplace" href="#custom" aria-controls="custom" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-plus"></i></a></li>
							-->
							<li class="pull-right" role="presentation"><a href="#all_in_one" aria-controls="all_in_one" role="tab" data-toggle="tab">OnePage <sup>beta</sup></a></li>
						</ul>
						<div class="tab-content mainContentTabs">
					
							<?php 
							foreach($systems as $system => $info){
							?>
							<!-- <?php echo $system;?> -->
							<div role="tabpanel" class="tab-pane fade<?php if($system == 'jita'){echo 'in active';};?>" id="<?php echo $system;?>">
								<!-- tabs left -->
								<div class="tabbable">
									<div class="row">
										<div class="col-md-2 tabs-left">
										
											<ul class="nav nav-tabs sideTabs">
												<li role="presentation" class="active"><a href="#<?php echo $info['key'];?>_sell" title="Sell orders" aria-controls="<?php echo $info['key'];?>_sell" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-euro"></i> Sell orders</a></li>
												<li role="presentation"><a href="#<?php echo $info['key'];?>_buy" title="Buy orders" aria-controls="<?php echo $info['key'];?>_buy" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-barcode"></i> Buy orders</a></li>
												<li role="presentation"><a href="#<?php echo $info['key'];?>_history" title="History" aria-controls="<?php echo $info['key'];?>_history" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-stats"></i> History</a></li>
												<li role="presentation"><a href="#<?php echo $info['key'];?>_volatility" title="Volatility" aria-controls="<?php echo $info['key'];?>_volatility" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-indent-right"></i> Volatility</a></li>
											</ul>
										
										</div>
										<div class="col-md-10 contentTabs">
											<h2 data-id="<?php echo $info['id'];?>" class="<?php echo $info['key'];?>_system_name setDestination"><?php echo $info['name'];?></h2>
											<input type="hidden" value="<?php echo $info['region'];?>" id="<?php echo $info['key'];?>_region"/>
											<input type="hidden" value="<?php echo $info['system'];?>" id="<?php echo $info['key'];?>_system"/>
											<div class="tab-content">
												<!-- items sell order -->
												<div role="tabpanel" class="tab-pane fade in active" id="<?php echo $info['key'];?>_sell">
													<table id="<?php echo $info['key'];?>_sell_table" class="table sortme sortPrice table-striped">
														<thead>
															<tr>
																<th>Price</th>
																<th>Quantity</th>
																<th>Expires in</th>
															</tr>
														</thead>
														<tbody class="<?php echo $info['key'];?>_sell_show">
														</tbody>
													</table>
													<div class="container-loader">
													</div>
												</div>
												<!-- /items sell order -->
												<!-- items buy order -->
												<div role="tabpanel" class="tab-pane fade" id="<?php echo $info['key'];?>_buy">
													<table id="<?php echo $info['key'];?>_buy_table" class="table sortme sortPrice table-striped">
														<thead>
															<tr>
																<th>Price</th>
																<th>Volume</th>
																<th>Min Volume</th>
																<th>Expiration</th>
															</tr>
														</thead>
														<tbody class="<?php echo $info['key'];?>_buy_show">
														</tbody>
													</table>
													<div class="container-loader">
													</div>
												</div>
												<!-- /items buy order -->
												<!-- items history -->
												<div role="tabpanel" class="tab-pane fade" id="<?php echo $info['key'];?>_history">
													<table id="<?php echo $info['key'];?>_history_table" class="table sortme sortPrice table-history table-striped">
														<thead>
															<tr>
																<th>Date</th>
																<th>Orders</th>
																<th>Quantity</th>
																<th>Low</th>
																<th>High</th>
																<th>Avg</th>
															</tr>
														</thead>
														<tbody class="<?php echo $info['key'];?>_history_show">
														</tbody>
													</table>
													<div class="container-loader">
													</div>
												</div>
												<!-- /items history -->
												<!-- items volatility -->
												<div role="tabpanel" class="tab-pane fade" id="<?php echo $info['key'];?>_volatility">
													<div role="tabpanel">
														<ul class="nav nav-tabs volatilityTabs">
															<li role="presentation" class="active"><a href="#<?php echo $info['key'];?>_volatility_10days" title="Volatility on 10 days" aria-controls="<?php echo $info['key'];?>_volatility_10days" role="tab" data-toggle="tab">10 Days</a></li>
															<li role="presentation"><a href="#<?php echo $info['key'];?>_volatility_1month" title="Volatility on 1 month" aria-controls="<?php echo $info['key'];?>_volatility_1month" role="tab" data-toggle="tab">1 Month</a></li>
															<li role="presentation"><a href="#<?php echo $info['key'];?>_volatility_3months" title="Volatility on 3 months" aria-controls="<?php echo $info['key'];?>_volatility_3months" role="tab" data-toggle="tab">3 Months</a></li>
															<li role="presentation"><a href="#<?php echo $info['key'];?>_volatility_1year" title="Volatility on 1 year" aria-controls="<?php echo $info['key'];?>_volatility_1year" role="tab" data-toggle="tab">1 Year</a></li>
														</ul>
													</div>
													<div class="tab-content volatilityContentTabs">
														<div role="tabpanel" class="tab-pane fade in active" id="<?php echo $info['key'];?>_volatility_10days">
															<div class="volatility_container">
																<div class="row">
																	<div class="col-md-4 volatility_graph">
																		<div class="volatility-bar"></div><div class="volatility-bar-median" rel="tooltip" data-toggle="tooltip" data-placement="bottom" title=""></div>
																		<span class="volatility-high volatility-indicator"></span>
																		
																		<span class="volatility-min volatility-indicator"></span>
																	</div>
																	<div class="col-md-8 volatility_data">
																		<h4>Average orders : <span class="volatility-orders"></span></h4>
																		<h4>Average volume : <span class="volatility-volume"></span></h4>
																	</div>
																</div>
															</div>
															<div class="container-loader">
															</div>
														</div>
														<div role="tabpanel" class="tab-pane fade" id="<?php echo $info['key'];?>_volatility_1month">
															<div class="volatility_container">
																<div class="row">
																	<div class="col-md-4 volatility_graph">
																		<div class="volatility-bar"></div><div class="volatility-bar-median" rel="tooltip" data-toggle="tooltip" data-placement="bottom" title=""></div>
																		<span class="volatility-high volatility-indicator"></span>
																		
																		<span class="volatility-min volatility-indicator"></span>
																	</div>
																	<div class="col-md-8 volatility_data">
																		<h4>Average orders : <span class="volatility-orders"></span></h4>
																		<h4>Average volume : <span class="volatility-volume"></span></h4>
																	</div>
																</div>
															</div>
															<div class="container-loader">
															</div>
														</div>
														<div role="tabpanel" class="tab-pane fade" id="<?php echo $info['key'];?>_volatility_3months">
															<div class="volatility_container">
																<div class="row">
																	<div class="col-md-4 volatility_graph">
																		<div class="volatility-bar"></div><div class="volatility-bar-median" rel="tooltip" data-toggle="tooltip" data-placement="bottom" title=""></div>
																		<span class="volatility-high volatility-indicator"></span>
																		
																		<span class="volatility-min volatility-indicator"></span>
																	</div>
																	<div class="col-md-8 volatility_data">
																		<h4>Average orders : <span class="volatility-orders"></span></h4>
																		<h4>Average volume : <span class="volatility-volume"></span></h4>
																	</div>
																</div>
															</div>
															<div class="container-loader">
															</div>
														</div>
														<div role="tabpanel" class="tab-pane fade" id="<?php echo $info['key'];?>_volatility_1year">
															<div class="volatility_container">
																<div class="row">
																	<div class="col-md-4 volatility_graph">
																		<div class="volatility-bar"></div><div class="volatility-bar-median" rel="tooltip" data-toggle="tooltip" data-placement="bottom" title=""></div>
																		<span class="volatility-high volatility-indicator"></span>
																		
																		<span class="volatility-min volatility-indicator"></span>
																	</div>
																	<div class="col-md-8 volatility_data">
																		<h4>Average orders : <span class="volatility-orders"></span></h4>
																		<h4>Average volume : <span class="volatility-volume"></span></h4>
																	</div>
																</div>
															</div>
															<div class="container-loader">
															</div>
														</div>
													</div>
												</div>
												<!-- /items volatility -->
											</div>
										</div>
									</div>
								</div>
								<!-- /tabs -->
							</div>
							<!-- /<?php echo $system;?> -->
							<?php
							}
							?>
							<!-- One page -->
							<div role="tabpanel" class="tab-pane fade" id="all_in_one">
								<!-- tabs left -->
								<div class="tabbable">
									<div class="row">
										<div class="col-md-2 tabs-left">
										
											<ul class="nav nav-tabs sideTabs">
												<li role="presentation" class="active"><a href="#all_sell" title="Sell orders" aria-controls="all_sell" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-euro"></i> Sell orders</a></li>
												<li role="presentation"><a href="#all_buy" title="Buy orders" aria-controls="all_buy" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-barcode"></i> Buy orders</a></li>
												<li role="presentation"><a href="#all_volatility" title="Volatility" aria-controls="all_volatility" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-indent-right"></i> Volatility</a></li>
											</ul>
										</div>
										<div class="col-md-10 contentTabs">
											<h2>OnePage <sup>beta</sup></h2>
											<div class="tab-content">
												<!-- items sell order -->
												<div role="tabpanel" class="tab-pane fade in active" id="all_sell">
													<table id="all_sell_table" class="table sortme sortPrice table-striped">
														<thead>
															<tr>
																<th>Station</th>
																<th>Price</th>
																<th>Quantity</th>
																<th>Expires in</th>
															</tr>
														</thead>
														<tbody class="all_sell_show">
														</tbody>
													</table>
													<div class="container-loader">
													</div>
												</div>
												<!-- /items sell order -->
												<!-- items buy order -->
												<div role="tabpanel" class="tab-pane fade" id="all_buy">
													<table id="all_buy_table" class="table sortme sortPrice table-striped">
														<thead>
															<tr>
																<th>Station</th>
																<th>Price</th>
																<th>Volume</th>
																<th>Min Volume</th>
																<th>Expiration</th>
															</tr>
														</thead>
														<tbody class="all_buy_show">
														</tbody>
													</table>
													<div class="container-loader">
													</div>
												</div>
												<!-- /items buy order -->
												<!-- items volatility -->
												<div role="tabpanel" class="tab-pane fade" id="all_volatility">
													<div role="tabpanel">
														<ul class="nav nav-tabs volatilityTabs">
															<li role="presentation" class="active"><a href="#all_volatility_10days" title="Volatility on 10 days" aria-controls="all_volatility_10days" role="tab" data-toggle="tab">10 Days</a></li>
															<li role="presentation"><a href="#all_volatility_1month" title="Volatility on 1 month" aria-controls="all_volatility_1month" role="tab" data-toggle="tab">1 Month</a></li>
															<li role="presentation"><a href="#all_volatility_3months" title="Volatility on 3 months" aria-controls="all_volatility_3months" role="tab" data-toggle="tab">3 Months</a></li>
															<li role="presentation"><a href="#all_volatility_1year" title="Volatility on 1 year" aria-controls="all_volatility_1year" role="tab" data-toggle="tab">1 Year</a></li>
														</ul>
													</div>
													<div class="tab-content volatilityContentTabs">
														<div role="tabpanel" class="tab-pane fade in active" id="all_volatility_10days">
															<div class="volatility_container">
																<div class="row">
																	<div class="col-md-4 volatility_graph">
																		<div class="volatility-bar"></div><div class="volatility-bar-median" rel="tooltip" data-toggle="tooltip" data-placement="bottom" title=""></div>
																		<span class="volatility-high volatility-indicator"></span>
																		
																		<span class="volatility-min volatility-indicator"></span>
																	</div>
																	<div class="col-md-8 volatility_data">
																		<h4>Average orders : <span class="volatility-orders"></span></h4>
																		<h4>Average volume : <span class="volatility-volume"></span></h4>
																	</div>
																</div>
															</div>
															<div class="container-loader">
															</div>
														</div>
														<div role="tabpanel" class="tab-pane fade" id="all_volatility_1month">
															<div class="volatility_container">
																<div class="row">
																	<div class="col-md-4 volatility_graph">
																		<div class="volatility-bar"></div><div class="volatility-bar-median" rel="tooltip" data-toggle="tooltip" data-placement="bottom" title=""></div>
																		<span class="volatility-high volatility-indicator"></span>
																		
																		<span class="volatility-min volatility-indicator"></span>
																	</div>
																	<div class="col-md-8 volatility_data">
																		<h4>Average orders : <span class="volatility-orders"></span></h4>
																		<h4>Average volume : <span class="volatility-volume"></span></h4>
																	</div>
																</div>
															</div>
															<div class="container-loader">
															</div>
														</div>
														<div role="tabpanel" class="tab-pane fade" id="all_volatility_3months">
															<div class="volatility_container">
																<div class="row">
																	<div class="col-md-4 volatility_graph">
																		<div class="volatility-bar"></div><div class="volatility-bar-median" rel="tooltip" data-toggle="tooltip" data-placement="bottom" title=""></div>
																		<span class="volatility-high volatility-indicator"></span>
																		
																		<span class="volatility-min volatility-indicator"></span>
																	</div>
																	<div class="col-md-8 volatility_data">
																		<h4>Average orders : <span class="volatility-orders"></span></h4>
																		<h4>Average volume : <span class="volatility-volume"></span></h4>
																	</div>
																</div>
															</div>
															<div class="container-loader">
															</div>
														</div>
														<div role="tabpanel" class="tab-pane fade" id="all_volatility_1year">
															<div class="volatility_container">
																<div class="row">
																	<div class="col-md-4 volatility_graph">
																		<div class="volatility-bar"></div><div class="volatility-bar-median" rel="tooltip" data-toggle="tooltip" data-placement="bottom" title=""></div>
																		<span class="volatility-high volatility-indicator"></span>
																		
																		<span class="volatility-min volatility-indicator"></span>
																	</div>
																	<div class="col-md-8 volatility_data">
																		<h4>Average orders : <span class="volatility-orders"></span></h4>
																		<h4>Average volume : <span class="volatility-volume"></span></h4>
																	</div>
																</div>
															</div>
															<div class="container-loader">
															</div>
														</div>
													</div>
												</div>
												<!-- /items volatility -->
											</div>
										</div>
									</div>
								</div>
								<!-- /tabs -->
							</div>
							<!-- /one page -->
						
							
						</div>
					</div>
				</div>
			</div>
			<!-- /systems infos -->
		</div>
	</div>
	
	<div id="wrap-bg">
		<div class="wrap-fadein" style="background:url(img/1.jpg)"></div>
		<div class="wrap-fadeout"></div>
		<div class="wrap-list">
			<img class="bgfade" src="img/1.jpg"/>
			<img class="bgfade" src="img/2.jpg"/>
			<img class="bgfade" src="img/3.jpg"/>
			<img class="bgfade" src="img/4.jpg"/>
		</div>
	</div>
	
	<footer>
		<div class="container-fluid">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-8">
					Hub.isk&copy; <?php echo date('Y');?> | Data from <a href="https://public-crest.eveonline.com/">eveonline CREST API | Hub.isk source can be found on <a href="https://github.com/netcap-agency/eveOnlineCrestLiveMarket">github</a></a>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-4">
					<span class="pull-right"><a href="http:/netcap.fr/">netcap</a></span>
				</div>
			</div>
		</div>
	</footer>

</body>
</html>
