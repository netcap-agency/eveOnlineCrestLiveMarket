<?php
/*
*	Hubisk class
*
*	
*
*
*/
class hubisk {

	/*
	*	App id generated on https://developers.eveonline.com/
	*/
	public $clientId;
	
	/*
	*	Url of current website, where app will callback after login
	*/
	public $siteURL;

	/*
	*	List of systems to fetch
	*/
	public $systems;
	
	/*
	*	List of systems key
	*/
	public $systemKey = array();
	
	/*
	*	List of region to fetch
	*/
	public $regions = array();
	
	/*
	*	List of stations to fetch
	*/
	public $stations = array();
	
	
	/*
	*	Basic construct, will associate values
	*/
	public function __construct(){
	
		$data = json_decode(file_get_contents(dirname(__FILE__).'/config.json'), true);
		
		$this->siteURL = $data['siteURL'];
		$this->clientId = $data['clientId'];
		$this->systems = $data['systems'];
		
		foreach($this->systems as $system => $info){
			$this->regions[] = $info['region'];
			$this->stations[] = $info['id'];
			$this->systemKey[] = "'".$system."'";
		}
		
		$this->regions = implode(', ', $this->regions);
		$this->stations = implode(', ', $this->stations);
		$this->systemKey = implode(', ', $this->systemKey);
		unset($data);
	
	}
	
	
	/*
	*	Check eve online server status
	*	CREST Api need server to be online, downtime will return empty results
	*
	*	
	*
	*/
	public function eveStatus(){
	
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

		}else{
			die('In Space no one can hear you scream');
		}
	
	}
	
	/*
	*	Basic debug Tool
	*/
	public function debug($data){
	
		if(is_array($data)) {
			print "<pre>-----------------------\n";
			print_r($data);
			print "-----------------------</pre>";
		}elseif(is_object($data)){
			print "<pre>==========================\n";
			var_dump($data);
			print "===========================</pre>";
		}else{
			print "=========&gt; ";
			var_dump($data);
			print " &lt;=========";
		}
		
	}

}
?>