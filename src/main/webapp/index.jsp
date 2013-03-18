<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>PaaSMonitor</title>
		<link rel="stylesheet" type="text/css" href="http://192.168.4.191:8001/resources/css/ext-all.css"/>
		<link rel="stylesheet" type="text/css" href="resources/css/app.css"/>
		<link rel="stylesheet" type="text/css" href="resources/css/CheckHeader.css"/>
		<script type="text/javascript" src="http://192.168.4.191:8001/ext-all-debug.js"></script>
		<script type="text/javascript" src="app.js"></script>

		<!-- Sets the basepath for the library if not in same directory -->
		<script type="text/javascript">
			mxBasePath = 'mxgraph/src';
		</script>
		<script type="text/javascript" src="mxgraph/mxClient.js"><!-- required for FF3 and Opera --></script>
		<script type="text/javascript" src="app/graph/definition.js"><!-- required for FF3 and Opera --></script>
		<script type="text/javascript" src="app/graph/TreeNodeShape.js"><!-- required for FF3 and Opera --></script>
		<script type="text/javascript" src="lib/utilities.js"><!-- required for FF3 and Opera --></script>
		<script type="text/javascript" src="lib/CheckColumn.js"><!-- required for FF3 and Opera --></script>
	</head>
	<body>
		<div id="loading-mask" style=""></div>
		<div id="loading">
			<div class="loading-indicator">
				<img src="images/extanim32.gif" width="32" height="32"
				style="margin-right: 8px; float: left; vertical-align: top;" />PaaSMonitor
				- <a href="http://www.seforge.org">seforge.org</a>
				<br />
				<span
				id="loading-msg">Loading...Please wait...</span>
			</div>
		</div>

		<div id="north-header" class="x-hide-display"></div>
		<div id="south-footer" class="x-hide-display"></div>

		<div id="start-div" class="x-hide-display">
			<h3> PaaS Monitor </h3>
			<p>
				Welcome to PaaS Monitor!
			</p>
		</div>

		<!-- Creates a container for the splash screen -->
		<div id="splash">
			<center id="splash" style="padding-top: 230px;">
				<img src="images/loading.gif" />
			</center>
		</div>

		<!-- Creates a container for the sidebar -->
		<div id="modeldef_toolbar_container" ></div>

		<!-- Creates a container for the toolboox -->
		<div id="modeldef_sidebar_container" ></div>

		<!-- Creates a container for the graph -->
		<div id="modeldef_graph_container" ></div>

		<!-- Creates a container for the outline -->
		<div id="modeldef_outline_container" ></div>

		<!-- Creates a container for the sidebar -->
		<div id="modeldef_status_container" ></div>

		<div id="runtimemodel_toolbar_container" ></div>
		
		<div id="runtimemodel_graph_container" ></div>
		
		<div id="runtimemodel_outline_container" ></div>
		
		<div id="runtimemodel_status_container" ></div>		
	</body>
</html>