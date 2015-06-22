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
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Iska.re</title>
	<meta charset="utf-8"/>
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"/>
	<link rel="stylesheet" href="css/app.css"/>
	<link rel="icon" type="image/png" href="favicon.png" />
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="xdr-min.js"></script>
	<script src="js/app.js?v=1"></script>
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
	</script>
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
							<li role="presentation" class="active"><a href="#jita" title="Jita" aria-controls="jita" role="tab" data-toggle="tab">Jita</a></li>
							<li role="presentation"><a href="#amarr" title="Amarr" aria-controls="amarr" role="tab" data-toggle="tab">Amarr</a></li>
							<li role="presentation"><a href="#rens" aria-controls="rens" role="tab" data-toggle="tab">Rens</a></li>
							<li role="presentation"><a href="#dodixie" aria-controls="dodixie" role="tab" data-toggle="tab">Dodixie</a></li>
							<li role="presentation"><a href="#hek" aria-controls="hek" role="tab" data-toggle="tab">Hek</a></li>
							<!---
							<li role="presentation"><a class="custom-marketplace" href="#custom" aria-controls="custom" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-plus"></i></a></li>
							<li class="pull-right" role="presentation"><a href="#all_in_one" aria-controls="all_in_one" role="tab" data-toggle="tab">OnePage <sup>beta</sup></a></li>
							-->
						</ul>
						<div class="tab-content mainContentTabs">
					
							<!-- jita -->
							<div role="tabpanel" class="tab-pane fade in active" id="jita">
								<!-- tabs left -->
								<div class="tabbable">
									<div class="row">
										<div class="col-md-2 tabs-left">
										
											<ul class="nav nav-tabs sideTabs">
												<li role="presentation" class="active"><a href="#a_sell" title="Sell orders" aria-controls="a_sell" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-euro"></i> Sell orders</a></li>
												<li role="presentation"><a href="#a_buy" title="Buy orders" aria-controls="a_buy" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-barcode"></i> Buy orders</a></li>
												<li role="presentation"><a href="#a_history" title="History" aria-controls="a_history" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-stats"></i> History</a></li>
											</ul>
										
										</div>
										<div class="col-md-10 contentTabs">
											<h2 data-id="60003760" class="a_system_name setDestination">Jita IV - Moon 4 - Caldari Navy Assembly Plant</h2>
											<input type="hidden" value="10000002" id="a_region"/>
											<input type="hidden" value="30000142" id="a_system"/>
											<div class="tab-content">
												<!-- items sell order -->
												<div role="tabpanel" class="tab-pane fade in active" id="a_sell">
													<table id="a_sell_table" class="table sortme sortPrice table-striped">
														<thead>
															<tr>
																<th>Price</th>
																<th>Quantity</th>
																<th>Expires in</th>
															</tr>
														</thead>
														<tbody class="a_sell_show">
														</tbody>
													</table>
													<div class="container-loader">
													</div>
												</div>
												<!-- /items sell order -->
												<!-- items buy order -->
												<div role="tabpanel" class="tab-pane fade" id="a_buy">
													<table id="a_buy_table" class="table sortme sortPrice table-striped">
														<thead>
															<tr>
																<th>Price</th>
																<th>Volume</th>
																<th>Min Volume</th>
																<th>Expiration</th>
															</tr>
														</thead>
														<tbody class="a_buy_show">
														</tbody>
													</table>
													<div class="container-loader">
													</div>
												</div>
												<!-- /items buy order -->
												<!-- items history -->
												<div role="tabpanel" class="tab-pane fade" id="a_history">
													<table id="a_history_table" class="table sortme sortPrice table-history table-striped">
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
														<tbody class="a_history_show">
														</tbody>
													</table>
													<div class="container-loader">
													</div>
												</div>
												<!-- /items history -->
											</div>
										</div>
									</div>
								</div>
								<!-- /tabs -->
							</div>
							<!-- /jita -->
							
							
							<!-- amarr -->
							<div role="tabpanel" class="tab-pane fade" id="amarr">
								<!-- tabs left -->
								<div class="tabbable">
									<div class="row">
										<div class="col-md-2 tabs-left">
											<ul class="nav nav-tabs sideTabs">
												<li role="presentation" class="active"><a href="#b_sell" title="Sell orders" aria-controls="b_sell" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-euro"></i> Sell orders</a></li>
												<li role="presentation"><a href="#b_buy" title="Buy orders" aria-controls="b_buy" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-barcode"></i> Buy orders</a></li>
												<li role="presentation"><a href="#b_history" title="History" aria-controls="b_history" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-stats"></i> History</a></li>
											</ul>
										</div>
										<div class="col-md-10 contentTabs">
											<h2 data-id="60008494" class="b_system_name setDestination">Amarr VIII (Oris) - Emperor Family Academy</h2>
											<input type="hidden" value="10000043" id="b_region"/>
											<input type="hidden" value="30002187" id="b_system"/>
											<div class="tab-content">
												<!-- items sell order -->
												<div role="tabpanel" class="tab-pane fade in active" id="b_sell">
													<table id="b_sell_table" class="table sortme sortPrice table-striped">
														<thead>
															<tr>
																<th>Price</th>
																<th>Quantity</th>
																<th>Expires in</th>
															</tr>
														</thead>
														<tbody class="b_sell_show">
														</tbody>
													</table>
													<div class="container-loader">
													</div>
												</div>
												<!-- /items sell order -->
												<!-- items buy order -->
												<div role="tabpanel" class="tab-pane fade" id="b_buy">
													<table id="b_buy_table" class="table sortme sortPrice table-striped">
														<thead>
															<tr>
																<th>Price</th>
																<th>Volume</th>
																<th>Min Volume</th>
																<th>Expiration</th>
															</tr>
														</thead>
														<tbody class="b_buy_show">
														</tbody>
													</table>
													<div class="container-loader">
													</div>
												</div>
												<!-- /items buy order -->
												<!-- items history -->
												<div role="tabpanel" class="tab-pane fade" id="b_history">
													<table id="b_history_table" class="table sortme sortPrice table-history table-striped">
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
														<tbody class="b_history_show">
														</tbody>
													</table>
													<div class="container-loader">
													</div>
												</div>
												<!-- /items history -->
											</div>
										</div>
									</div>
								</div>
								<!-- /tabs -->
							</div>
							<!-- /amarr -->
							
							
							<!-- rens -->
							<div role="tabpanel" class="tab-pane fade" id="rens">
								<!-- tabs left -->
								<div class="tabbable">
									<div class="row">
										<div class="col-md-2 tabs-left">
											<ul class="nav nav-tabs sideTabs">
												<li role="presentation" class="active"><a href="#c_sell" title="Sell orders" aria-controls="c_sell" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-euro"></i> Sell orders</a></li>
												<li role="presentation"><a href="#c_buy" title="Buy orders" aria-controls="c_buy" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-barcode"></i> Buy orders</a></li>
												<li role="presentation"><a href="#c_history" title="History" aria-controls="c_history" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-stats"></i> History</a></li>
											</ul>
										</div>
										<div class="col-md-10 contentTabs">
											<h2 data-id="60004588" class="c_system_name setDestination">Rens VI - Moon 8 - Brutor Tribe Treasury</h2>
											<input type="hidden" value="10000030" id="c_region"/>
											<input type="hidden" value="30002510" id="c_system"/>
											<div class="tab-content">
												<!-- items sell order -->
												<div role="tabpanel" class="tab-pane fade in active" id="c_sell">
													<table id="c_sell_table" class="table sortme sortPrice table-striped">
														<thead>
															<tr>
																<th>Price</th>
																<th>Quantity</th>
																<th>Expires in</th>
															</tr>
														</thead>
														<tbody class="c_sell_show">
														</tbody>
													</table>
													<div class="container-loader">
													</div>
												</div>
												<!-- /items sell order -->
												<!-- items buy order -->
												<div role="tabpanel" class="tab-pane fade" id="c_buy">
													<table id="c_buy_table" class="table sortme sortPrice table-striped">
														<thead>
															<tr>
																<th>Price</th>
																<th>Volume</th>
																<th>Min Volume</th>
																<th>Expiration</th>
															</tr>
														</thead>
														<tbody class="c_buy_show">
														</tbody>
													</table>
													<div class="container-loader">
													</div>
												</div>
												<!-- /items buy order -->
												<!-- items history -->
												<div role="tabpanel" class="tab-pane fade" id="c_history">
													<table id="c_history_table" class="table sortme sortPrice table-history table-striped">
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
														<tbody class="c_history_show">
														</tbody>
													</table>
													<div class="container-loader">
													</div>
												</div>
												<!-- /items history -->
											</div>
										</div>
									</div>
								</div>
								<!-- /tabs -->
							</div>
							<!-- /rens -->
							
							
							<!-- dodixie -->
							<div role="tabpanel" class="tab-pane fade" id="dodixie">
								<!-- tabs left -->
								<div class="tabbable">
									<div class="row">
										<div class="col-md-2 tabs-left">
											<ul class="nav nav-tabs sideTabs">
												<li role="presentation" class="active"><a href="#d_sell" title="Sell orders" aria-controls="d_sell" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-euro"></i> Sell orders</a></li>
												<li role="presentation"><a href="#d_buy" title="Buy orders" aria-controls="d_buy" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-barcode"></i> Buy orders</a></li>
												<li role="presentation"><a href="#d_history" title="History" aria-controls="d_history" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-stats"></i> History</a></li>
											</ul>
										</div>
										<div class="col-md-10 contentTabs">
											<h2 data-id="60011866" class="d_system_name setDestination">Dodixie IX - Moon 20 - Federation Navy Assembly Plant</h2>
											<input type="hidden" value="10000032" id="d_region"/>
											<input type="hidden" value="30002659" id="d_system"/>
											<div class="tab-content">
												<!-- items sell order -->
												<div role="tabpanel" class="tab-pane fade in active" id="d_sell">
													<table id="d_sell_table" class="table sortme sortPrice table-striped">
														<thead>
															<tr>
																<th>Price</th>
																<th>Quantity</th>
																<th>Expires in</th>
															</tr>
														</thead>
														<tbody class="d_sell_show">
														</tbody>
													</table>
													<div class="container-loader">
													</div>
												</div>
												<!-- /items sell order -->
												<!-- items buy order -->
												<div role="tabpanel" class="tab-pane fade" id="d_buy">
													<table id="d_buy_table" class="table sortme sortPrice table-striped">
														<thead>
															<tr>
																<th>Price</th>
																<th>Volume</th>
																<th>Min Volume</th>
																<th>Expiration</th>
															</tr>
														</thead>
														<tbody class="d_buy_show">
														</tbody>
													</table>
													<div class="container-loader">
													</div>
												</div>
												<!-- /items buy order -->
												<!-- items history -->
												<div role="tabpanel" class="tab-pane fade" id="d_history">
													<table id="d_history_table" class="table sortme sortPrice table-history table-striped">
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
														<tbody class="d_history_show">
														</tbody>
													</table>
													<div class="container-loader">
													</div>
												</div>
												<!-- /items history -->
											</div>
										</div>
									</div>
								</div>
								<!-- /tabs -->
							</div>
							<!-- /dodixie -->
							
							
							<!-- hek -->
							<div role="tabpanel" class="tab-pane fade" id="hek">
								<!-- tabs left -->
								<div class="tabbable">
									<div class="row">
										<div class="col-md-2 tabs-left">
											<ul class="nav nav-tabs sideTabs">
												<li role="presentation" class="active"><a href="#e_sell" title="Sell orders" aria-controls="e_sell" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-euro"></i> Sell orders</a></li>
												<li role="presentation"><a href="#e_buy" title="Buy orders" aria-controls="e_buy" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-barcode"></i> Buy orders</a></li>
												<li role="presentation"><a href="#e_history" title="History" aria-controls="e_history" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-stats"></i> History</a></li>
											</ul>
										</div>
										<div class="col-md-10 contentTabs">
											<h2 data-id="60005686" class="e_system_name setDestination">Hek VIII - Moon 12 - Boundless Creation Factory</h2>
											<input type="hidden" value="10000042" id="e_region"/>
											<input type="hidden" value="30002053" id="e_system"/>
											<div class="tab-content">
												<!-- items sell order -->
												<div role="tabpanel" class="tab-pane fade in active" id="e_sell">
													<table id="e_sell_table" class="table sortme sortPrice table-striped">
														<thead>
															<tr>
																<th>Price</th>
																<th>Quantity</th>
																<th>Expires in</th>
															</tr>
														</thead>
														<tbody class="e_sell_show">
														</tbody>
													</table>
													<div class="container-loader">
													</div>
												</div>
												<!-- /items sell order -->
												<!-- items buy order -->
												<div role="tabpanel" class="tab-pane fade" id="e_buy">
													<table id="e_buy_table" class="table sortme sortPrice table-striped">
														<thead>
															<tr>
																<th>Price</th>
																<th>Volume</th>
																<th>Min Volume</th>
																<th>Expiration</th>
															</tr>
														</thead>
														<tbody class="e_buy_show">
														</tbody>
													</table>
													<div class="container-loader">
													</div>
												</div>
												<!-- /items buy order -->
												<!-- items history -->
												<div role="tabpanel" class="tab-pane fade" id="e_history">
													<table id="e_history_table" class="table sortme sortPrice table-history table-striped">
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
														<tbody class="e_history_show">
														</tbody>
													</table>
													<div class="container-loader">
													</div>
												</div>
												<!-- /items history -->
											</div>
										</div>
									</div>
								</div>
								<!-- /tabs -->
							</div>
							<!-- /hek -->
							
							
							<!-- custom -->
							<div role="tabpanel" class="tab-pane fade" id="custom">
								<!-- tabs left -->
								<div class="tabbable tabs-left">
									<div class="row">
										<div class="col-md-2 tabs-left">
											<ul class="nav nav-tabs sideTabs">
												<li role="presentation" class="active"><a href="#f_sell" title="Sell orders" aria-controls="f_sell" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-euro"></i> Sell orders</a></li>
												<li role="presentation"><a href="#f_buy" title="Buy orders" aria-controls="f_buy" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-barcode"></i> Buy orders</a></li>
												<li role="presentation"><a href="#f_history" title="History" aria-controls="f_history" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-stats"></i> History</a></li>
											</ul>
										</div>
										<div class="col-md-10 contentTabs">
											<h2  class="invert-me"><span class="f_system_name">Choisissez un système</span> <a href="#" class="pull-left toggle btn-xs btn-default toggle-system-f"><i class="glyphicon glyphicon-pencil"></i></a></h2>
											<div class="hide-me">
												<div class="input-group load-system-name">
													<span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span>
													<input type="text" placeholder="Tapez ici le nom du système" data-system="f" class="getStationName form-control typeahead"/>
													<span class="input-group-btn">
														<a href="#" class="btn cancel-toggle btn-default"><i class="glyphicon glyphicon-remove"></i></a>
													</span>
												</div>
											</div>
											<input type="hidden" value="" id="f_region"/>
											<input type="hidden" value="" id="f_system"/>
											<div class="tab-content">
												<!-- items sell order -->
												<div role="tabpanel" class="tab-pane fade in active" id="f_sell">
													<table id="f_sell_table" class="table sortme sortPrice table-striped">
														<thead>
															<tr>
																<th>Price</th>
																<th>Quantity</th>
																<th>Expires in</th>
															</tr>
														</thead>
														<tbody class="f_sell_show">
														</tbody>
													</table>
													<div class="container-loader">
													</div>
												</div>
												<!-- /items sell order -->
												<!-- items buy order -->
												<div role="tabpanel" class="tab-pane fade" id="f_buy">
													<table id="f_buy_table" class="table sortme sortPrice table-striped">
														<thead>
															<tr>
																<th>Price</th>
																<th>Volume</th>
																<th>Min Volume</th>
																<th>Expiration</th>
															</tr>
														</thead>
														<tbody class="f_buy_show">
														</tbody>
													</table>
													<div class="container-loader">
													</div>
												</div>
												<!-- /items buy order -->
												<!-- items history -->
												<div role="tabpanel" class="tab-pane fade" id="f_history">
													<table id="f_history_table" class="table sortme sortPrice table-history table-striped">
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
														<tbody class="f_history_show">
														</tbody>
													</table>
													<div class="container-loader">
													</div>
												</div>
												<!-- /items history -->
											</div>
										</div>
									</div>
								</div>
								<!-- /tabs -->
							</div>
							<!-- /custom -->
							
							
							<!-- One page -->
							<div role="tabpanel" class="tab-pane fade" id="all_in_one">
								<h2>One page to rule them all <sup>beta</sup></h2>
								<!-- tabs left -->
								<div class="tabbable tabs-left">
									<ul class="nav nav-tabs">
										<li role="presentation" class="active"><a href="#all_sell" title="Sell orders" aria-controls="all_sell" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-euro"></i></a></li>
										<li role="presentation"><a href="#all_buy" title="Buy orders" aria-controls="all_buy" role="tab" data-toggle="tab"><i class="glyphicon glyphicon-barcode"></i></a></li>
									</ul>
									<div class="tab-content">
										<!-- items sell order -->
										<div role="tabpanel" class="tab-pane fade in active" id="all_sell">
											<table id="all_sell_table" class="table sortme sortPrice table-striped">
												<thead>
													<tr>
														<th>Price</th>
														<th>Quantity</th>
														<th>Expires in</th>
													</tr>
												</thead>
												<tbody class="all_sell_show">
												</tbody>
											</table>
										</div>
										<!-- /items sell order -->
										<!-- items buy order -->
										<div role="tabpanel" class="tab-pane fade" id="all_buy">
											<table id="all_buy_table" class="table sortme sortPrice table-striped">
												<thead>
													<tr>
														<th>Price</th>
														<th>Volume</th>
														<th>Min Volume</th>
														<th>Expiration</th>
													</tr>
												</thead>
												<tbody class="all_buy_show">
												</tbody>
											</table>
										</div>
										<!-- /items buy order -->
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

</body>
</html>
