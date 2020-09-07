var str_incomeGrowth = `
<div class="panel panel-default">
<div class="panel-heading">
<h3 class="panel-title"><i class="fa fa-chart-bar"></i>  Income</h3>
</div>
<div class="panel-body">

<table class="table">

<tbody>
<tr id="gg_income_this_month">

<td style="width:20%">This month</td>
<td style="width:40%">Commission</td>
<td id="commission-this-month" class="amt">R705,920.00													&nbsp;<span id="comms-diff-down" class="comms-diff" style="color: red;">↓</span>										</td>
</tr>

<tr id="gg_other_income_this_month">


<td></td>
<td style="width:40%">Other income</td>
<td id="other-income-this-month" class="amt">R1,700.00</td>
</tr>
<tr id="gg_income_last_month">

<td style="width:40%">Last month</td>
<td style="width:40%">Commission</td>
<td class="amt">
<div id="commission-last-month">R1,056,003.71</div>
</td>
</tr>

<tr id="gg_other_income_last_month">

<td></td>
<td style="width:20%">Other income</td>
<td id="other-income-last-month" class="amt">R302.77</td>
</tr>

</tbody></table>


</div>
</div>
`;

//------------------------------------------
var str_portfolioGrowth =`
<div class="panel panel-default">
<div class="panel-heading">
<h3 class="panel-title"><i class="fa fa-sign-in-alt "></i>   Incoming payments</h3>
</div>
<div class="panel-body">
<table class="table">
<tbody>







<tr id="bank-statement-container">
<td id="bank-statement-count">        <button class="btn btn-primary" type="button">
<span class="badge">20</span>
</button></td>
<td style="width:40%">Unreconciled direct deposits</td>
<td id="bank-statement-amount" class="amt">R582,546.32</td>
</tr>



<tr id="pending-direct-debit-container">
<td id="pending-direct-debit-count">
<button class="btn btn-primary" type="button">
<span class="badge">24</span>
</button>
</td>
<td style="width:40%">Pending direct deposits</td>
<td id="pending-direct-debit-amount" class="amt">R313,157.26</td>
</tr>



</tbody></table>
</div>
</div>

<div class="panel panel-default">
<div class="panel-heading">
<h3 class="panel-title"><i class="fa fa-sign-out-alt"></i>  Outgoing payments</h3>
</div>
<div class="panel-body">

<table class="table">

<tbody>


<tr id="approved-container">
<td id="approved-count">
<button class="btn btn-primary" type="button">
<span class="badge">23</span>
</button>
</td>
<td style="width:40%">Payments to approve</td>
<td id="approved-amount" class="amt">R257,922.93</td>
</tr>








<tr id="outstanding-ben-open-container">
<td id="outstanding-ben-count">
<button class="btn btn-primary" type="button">
<span class="badge">172</span>
</button>
</td>
<td style="width:40%">Beneficiaries with a balance</td>
<td id="outstanding-ben-amount" class="amt">R1,418,971.17</td>
</tr>



<tr id="scheduled-container">
<td id="scheduled-count">

<button class="btn btn-primary" type="button">
<span class="badge">6</span>
</button>

</td>
<td style="width:40%">Scheduled payments</td>
<td id="scheduled-amount" class="amt">R215,521.67</td>
</tr>


</tbody></table>



</div>
</div>




<div class="panel panel-default">
<div class="panel-heading">
<h3 class="panel-title"><i class="fa fa-user"></i>  Tenants</h3>
</div>
<div class="panel-body">

<table class="table">

<tbody>


<tr id="pending-rent-payments-container">
<td id="pending-rent-payments-count">
<button class="btn btn-primary" type="button">
<span class="badge">93</span>
</button>
</td>
<td style="width:40%">Tenants in arrears</td>
<td id="pending-rent-payments-amount" class="amt">R1,131,447.73</td>
</tr>



<tr id="tenants-active-container">
<td id="tenants-active-count">
<button class="btn btn-primary" type="button">
<span class="badge">388</span>
</button>
</td>
<td style="width:40%">Active tenants</td>
<td></td>
</tr>







</tbody></table>



</div>
</div>


<div class="panel panel-default">
<div class="panel-heading">
<h3 class="panel-title"><i class="fa fa-home"></i>  Properties</h3>
</div>
<div class="panel-body">


<table class="table">

<tbody>


<tr id="properties-disabled-container">
<td id="properties-disabled-count">
<button class="btn btn-primary" type="button">
<span class="badge">1</span>
</button>
</td>
<td style="width:40%">Disabled properties</td>
<td id="properties-disabled-amount" class="amt">R926.01</td>
</tr>



<tr id="properties-without-owner-container">
<td id="properties-without-owner-count">
<button class="btn btn-primary" type="button">
<span class="badge">24</span>
</button>
</td>
<td style="width:40%">Properties without owners</td>
<td></td>
</tr>



<tr id="properties-without-tenant-container">
<td id="properties-without-tenant-count">
<button class="btn btn-primary" type="button">
<span class="badge">580</span>
</button>
</td>
<td style="width:40%">Properties without tenants</td>
<td></td>
</tr>



<tr id="properties-unmapped-container">
<td id="properties-unmapped-count">
<button class="btn btn-primary" type="button">
<span class="badge">987</span>
</button>
</td>
<td style="width:40%">Properties not mapped</td>
<td></td>
</tr>


<tr id="properties-total-container">
<td id="properties-total-count">
<button class="btn btn-primary" type="button">
<span class="badge">987</span>
</button>

</td>
<td style="width:40%">Properties</td>
<td id="properties-total-amount" class="amt">R8,914,977.13</td>
</tr>

</tbody></table>

</div>
</div>


<div class="panel panel-default">
<div class="panel-heading">
<h3 class="panel-title"><i class="far fa-file"></i>  Contracts</h3>
</div>
<div class="panel-body">

<table class="table">

<tbody>


<tr id="contracts-expired-container">
<td id="contracts-expired-count">
<button class="btn btn-primary" type="button">
<span class="badge">275</span>
</button>
</td>
<td style="width:40%">Expired contracts</td>
<td></td>
</tr>



<tr id="contracts-expiring-first-period-container">
<td id="contracts-expiring-first-period-count">

<button class="btn btn-primary" type="button">
<span class="badge">27</span>
</button>
</td>
<td style="width:40%">Contracts expiring this month</td>
<td></td>
</tr>



<tr id="contracts-expiring-second-period-container">
<td id="contracts-expiring-second-period-count">
<button class="btn btn-primary" type="button">
<span class="badge">65</span>
</button>
</td>
<td colspan="2">Contracts expiring next 2 months</td>

</tr>


</tbody></table>


</div>
</div>


`;

//------------------------------------------
var str2 = `
<div class="panel panel-default">
<div class="panel-heading">
<h3 class="panel-title"><i class="fas fa-percent"></i>  Target Percentage</h3>
</div>
<div class="panel-body">

<center>   <div class="can" id ="can">     <canvas id="openedCanvas" height="130" width="130"></canvas>    </div>  </center>

</div>
</div>
`;
//------------------------------------------
var htmlStr = `
<div class="panel panel-default">
<div class="panel-heading">
<h3 class="panel-title"><i class="fas fa-dollar-sign"></i>  Income and Commision</h3>
</div>
<div class="panel-body">

<div class="chart-area" style=" position: relative;  margin: auto;   ">   <center>     <canvas id="myChart" width="500px" height="400px" style="display: block; background-color:#1D1F21"></canvas>    </ceter></div>

</div>
</div>
`;
//------------------------------------------
var htmstr_bulma = `


<ol class="breadcrumb">
<li><p href="#">Home</p></li>
<li><p href="#">Library</p></li>
<li class="active">Data</li>
</ol>




<p href="#">Inbox <span class="badge">42</span></p>

<button class="btn btn-primary" type="button">
Messages <span class="badge">4</span>
</button>
<br>

<br>
<div class="progress">
<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
60%
</div>
</div>




<div class="panel panel-default">
<div class="panel-heading">
<h3 class="panel-title">Panel title</h3>
</div>
<div class="panel-body">
Panel content

<div class="card mb-4 shadow-sm">
<div class="card-header">
<h4 class="my-0 font-weight-normal">Free</h4>
</div>
<div class="card-body">
<h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
<ul class="list-unstyled mt-3 mb-4">
<li>10 users included</li>
<li>2 GB of storage</li>
<li>Email support</li>
<li>Help center access</li>
</ul>
<button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
</div>
</div>




</div>
</div>

<ul class="nav nav-tabs">
<li role="presentation" class="active"><p href="#">Home</p></li>
<li role="presentation"><p href="#">Profile</p></li>
<li role="presentation"><p href="#">Messages</p></li>
</ul>

<div class="page-header">
<h1>Example page header <small>Subtext for header</small></h1>
</div>
<p>this ia doaid as daidj aoisdj aisdoj aidoj aid ad onloadedmetadata</p>

<br><br><hr>
<center>
<div class="btn-group" role="group" aria-label="...">
<button type="button" class="btn btn-primary">Left</button>
<button type="button" class="btn btn-primary">Middle</button>
<button type="button" class="btn btn-primary">Right</button>
</div>
</center>
<div class="column">

<div class="col-sm-6 col-md-4">
<div class="thumbnail">
<img src="./img/sun.jpg" alt="...">
<div class="caption">
<h3>Thumbnail label</h3>
<p>This is an elquit place on the northern cliffs of Tongaat</p>
<p><p href="#" class="btn btn-primary" role="button">Button</p> </p>
</div>
</div>
</div>


<div class="col-sm-6 col-md-4">
<div class="thumbnail">
<img src="./img/sun.jpg" alt="...">
<div class="caption">
<h3>Thumbnail label</h3>
<p>This is an elquit place on the northern cliffs of Tongaat</p>
<p><p href="#" class="btn btn-primary" role="button">Button</p> </p>
</div>
</div>
</div>

</div>
`;
//------------------------------------------
var res_trainingMan = `
<div class="panel panel-default">
<div class="panel-heading">
<h3 class="panel-title"><i class="fas fa-dollar-sign"></i>  Training Manuals</h3>
</div>
<div class="panel-body">

<table >

						<tbody>

                                <tr>
                                    <td style="width:10px"><i class="fa fa-download"></i></td>
                                    <td style="width:90%">Dashboard</td>
                                    <td><span class="badge">PDF</span></td>
                                </tr>

                                <tr>
                                    <td><i class="fa fa-download"></i></td>
                                    <td style="width:40%"><p target="_blank" href="/docs/2_payprop_manual_properties.pdf">Properties</p></td>
                                    <td><span class="badge">PDF</span></td>
                                </tr>

                                <tr>
                                    <td><i class="fa fa-download"></i></td>
                                    <td style="width:40%"><p target="_blank" href="/docs/3_payprop_manual_beneficiaries.pdf">Beneficiaries</p></td>
                                    <td><span class="badge">PDF</span></td>
                                </tr>

                                <tr>
                                    <td><i class="fa fa-download"></i></td>
                                    <td style="width:40%"><p target="_blank" href="../docs/4_payprop_manual_tenants.pdf">Tenants</p></td>
                                    <td><span class="badge">PDF</span></td>
                                </tr>

                                <tr>
                                    <td><i class="fa fa-download"></i></td>
                                    <td style="width:40%">Reports</td>
                                    <td><span class="badge">PDF</span></td>
                                </tr>

                                <tr>
                                    <td><i class="fa fa-download"></i></td>
                                    <td style="width:40%">Settings</td>
                                    <td><span class="badge">PDF</span></td>
                                </tr>

                                <tr>
                                    <td style="width:10px"><i class="fa fa-download"></i></td>
                                    <td style="width:40%">Property account</td>
                                    <td><span class="badge">PDF</span></td>
                                </tr>

                                    <tr>
                                        <td style="width:10px"><i class="fa fa-download"></i></td>
                                        <td style="width:40%">Letter of demand</td>
                                        <td><span class="badge">PDF</span></td>
                                    </tr>

                                <tr>
                                    <td style="width:10px"><i class="fa fa-download"></i></td>
                                    <td style="width:40%">Tenant Assessment Report and credit check training manual</td>
                                    <td><span class="badge">PDF</span></td>
                                </tr>

                                <tr>
                                    <td style="width:10px"><i class="fa fa-download"></i></td>
                                    <td style="width:40%">Submitting tenant payment data to Compuscan</td>
                                    <td><span class="badge">PDF</span></td>
                                </tr>




                                    <tr>
                                      <td><i class="fa fa-download"></i></td>
                                      <td style="width:40%">How to activate the Owner App</td>
                                      <td><span class="badge">PDF</span></td>
                                    </tr>



                                    <tr>
                                      <td><i class="fa fa-download"></i></td>
                                      <td style="width:40%">Owner App FAQ</td>
                                      <td><span class="badge">PDF</span></td>
                                    </tr>



                                    <tr>
                                      <td><i class="fa fa-download"></i></td>
                                      <td style="width:40%">Owner App user manual</td>
                                      <td><span class="badge">PDF</span></td>
                                    </tr>


							<tr>
								<td><i class="fa fa-download"></i></td>
								<td tyle="width:40%">

									  Owner statement reader guide

								</td>
								<td><span class="badge">PDF</span></td>
							</tr>
						</tbody>
					</table>


<div><div>`;
//------------------------------------------
var res_Lease = `
<div class="panel panel-default">
<div class="panel-heading">
<h3 class="panel-title"><i class="fas fa-dollar-sign"></i>  Lease and Mandate Templates</h3>
</div>
<div class="panel-body">

<table >

						<tbody>

                                <tr>
                                    <td style="width:10px"><i class="fa fa-download"></i></td>
                                    <td style="width:90%">


CPA Managing Mandate

                                    </td>
                                    <td><span class="badge">PDF</span></td>
                                </tr>

                                <tr>
                                    <td style="width:10px"><i class="fa fa-download"></i></td>
                                    <td style="width:90%">

                                    CPA Procurement Mandate

                                    </td>
                                    <td><span class="badge">PDF</span></td>
                                </tr>
                                <tr>
                                    <td style="width:10px"><i class="fa fa-download"></i></td>
                                    <td style="width:90%">

                                    Residential Lease Agreement

                                    </td>
                                    <td><span class="badge">PDF</span></td>
                                </tr>
                                <tr>
                                    <td style="width:10px"><i class="fa fa-download"></i></td>
                                    <td style="width:90%">

                                    Tenant Application Form

                                    </td>
                                    <td><span class="badge">PDF</span></td>
                                </tr>


						</tbody>
					</table>


<div><div>`;
//------------------------------------------
var res_other = `
<div class="panel panel-default">
<div class="panel-heading">
<h3 class="panel-title"><i class="fas fa-dollar-sign"></i>  Other Resources</h3>
</div>
<div class="panel-body">

<table >

						<tbody>

                                <tr>
                                    <td style="width:10px"><i class="fa fa-download"></i></td>
                                    <td style="width:90%">


EAAB self-assessment guidance

                                    </td>
                                    <td><span class="badge">PDF</span></td>
                                </tr>

                                <tr>
                                    <td style="width:10px"><i class="fa fa-download"></i></td>
                                    <td style="width:90%">

                                    Five-point security check

                                    </td>
                                    <td><span class="badge">PDF</span></td>
                                </tr>
                                <tr>
                                    <td style="width:10px"><i class="fa fa-download"></i></td>
                                    <td style="width:90%">

                                    EULA (End User Licence Agreement)

                                    </td>
                                    <td><span class="badge">PDF</span></td>
                                </tr>
                                <tr>
                                    <td style="width:10px"><i class="fa fa-download"></i></td>
                                    <td style="width:90%">

                                    Property account overview for landlords

                                    </td>
                                    <td><span class="badge">PDF</span></td>
                                </tr>


                                <tr>
                                    <td style="width:10px"><i class="fa fa-download"></i></td>
                                    <td style="width:90%">

                                    Debit order authorization form (rent)

                                    </td>
                                    <td><span class="badge">PDF</span></td>
                                </tr>

                                <tr>
                                    <td style="width:10px"><i class="fa fa-download"></i></td>
                                    <td style="width:90%">

                                    Debit Order Authorization Form (levies)

                                    </td>
                                    <td><span class="badge">PDF</span></td>
                                </tr>
                                <tr>
                                    <td style="width:10px"><i class="fa fa-download"></i></td>
                                    <td style="width:90%">

                                    Credit check authorisation form

                                    </td>
                                    <td><span class="badge">PDF</span></td>
                                </tr>


                                <tr>
                                    <td style="width:10px"><i class="fa fa-download"></i></td>
                                    <td style="width:90%">

                                    Western Cape Rental Housing Tribunal

                                    </td>
                                    <td><span class="badge">PDF</span></td>
                                </tr>

                                <tr>
                                    <td style="width:10px"><i class="fa fa-download"></i></td>
                                    <td style="width:90%">

                                    Gauteng Housing Rental Tribunal

                                    </td>
                                    <td><span class="badge">PDF</span></td>
                                </tr>

                                <tr>
                                    <td style="width:10px"><i class="fa fa-download"></i></td>
                                    <td style="width:90%">

                                    Rental Housing Act

                                    </td>
                                    <td><span class="badge">PDF</span></td>
                                </tr>

                                <tr>
                                    <td style="width:10px"><i class="fa fa-download"></i></td>
                                    <td style="width:90%">

                                    Bank Branch Codes

                                    </td>
                                    <td><span class="badge">PDF</span></td>
                                </tr>



						</tbody>
					</table>


<div><div>`;
//------------------------------------------
var PaymentsToApprove =`
<label class="checkbox pull-right"><input type="checkbox" value="approve" id="approve_all_payments_input"> Approve all</label>
<table class="table table-condensed">
<thead>
<!-- gg_approve_payments -->
<!-- gg_auth-approve_payments -->

<!-- /gg_auth-approve_payments -->
<!-- /gg_approve_payments -->
<tr class="heading">
<th class="span3">Property</th>
<th style="white-space:nowrap">Recon Date</th>
<th>Type</th>
<th colspan="2">Tenant / Beneficiary</th>
<th class="amount">Amount</th>
<th style="white-space:nowrap" rel="tooltip" title="Transaction fee" class="amount">TR Fee</th>
<th style="white-space:nowrap" rel="tooltip" title="Service fee" class="amount">S. Fee</th>
<th style="text-align:center">Status</th>
<th>&nbsp;</th>
<!--<th style="text-align:center;">&nbsp;</th>-->
<!-- gg_approve_payments -->
<th style="width:10%">Action</th>
<!-- /gg_approve_payments -->
</tr>
</thead>
<!-- gg_in -->
<tbody><tr class="in">
<td class="dark_top"><p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;project_id=54733&amp;fact_format=html&amp;fact_report=all_payments&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date="> <i class="fa fa-sort muted" rel="tooltip" title="Filter results on this property"></i></p> <p rel="tooltip" title="Go to property overview page" href="/c/property/54733">M-C103 - 303 CANAL QUAYS</p></td>
<td class="dark_top">2019-04-04</td>
<td class="dark_top" style="white-space:nowrap">Transfer</td>
<td class="dark_top"><p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;user_id=210989&amp;fact_format=html&amp;fact_report=all_payments&amp;project_id=54733&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date="><i title="Filter results on this tenant and property" rel="tooltip" class="fa fa-sort muted"></i></p> <!-- gg_tenant_url --><p rel="tooltip" title="Go to the overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=210989"><!-- /gg_tenant_url -->BAREND NICOLAAS JANSEN<!-- gg_tenant_url --></p><!-- /gg_tenant_url --> <small><!-- gg_deposit_reference --><span class="muted">- ZC2308</span><!-- /gg_deposit_reference --></small></td>
<td class="dark_top" style="white-space:nowrap"><!-- gg_tenant_statement_icon --><p href="javascript:preview_tenant_statement(54733,210989)"><i rel="tooltip" title="View statement" class="far fa-file"></i></p><!-- /gg_tenant_statement_icon --></td>
<td class="dark_top amt">603.63</td>
<td class="dark_top amt">3.00</td>
<td class="dark_top amt">3.04</td>
<td class="gigatitle1 dark_top" style="text-align:center">
<!-- gg_paid_incoming_icon -->
<i class="fa fa-check" rel="tooltip" title="Paid"></i>
<!-- /gg_paid_incoming_icon -->
</td>
<td class="amt dark_top" style="width:10%"><!-- gg_auth-reports_confirmations --><!-- gg_payment_detail_in_icon --><p href="javascript:preview_payment_in('32311282',28341338)"><i class="fa fa-info-circle muted" rel="tooltip" title="View payment confirmation"></i></p><!-- /gg_payment_detail_in_icon --><!-- /gg_auth-reports_confirmations --></td>
<!-- gg_approve_payments -->
<td class="dark_top" style="width:10%"><label class="radio"><input type="radio" value="ignore" name="approve_payment_28341338" class="skip_approval" checked="checked"> Skip</label>
<!-- gg_ch_approve_28341338 -->
<!-- gg_auth-approve_payments -->
<label class="radio"><input type="radio" value="approve" name="approve_payment_28341338" class="approve_payment"> Approve</label>
<!-- /gg_auth-approve_payments -->
<!-- /gg_ch_approve_28341338 -->
<!-- gg_ch_reject_28341338 -->
<!-- gg_auth-reject_payments -->
<label class="radio"><input type="radio" value="reject" name="approve_payment_28341338"> Reject</label>
<!-- /gg_auth-reject_payments -->
<!-- /gg_ch_reject_28341338 -->
</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_in -->
<!-- gg_out -->
<tr class="out">
<td>&nbsp;</td>
<td>2019-04-04</td>
<td style="white-space:nowrap">- Owner</td>
<td>
<p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;ben_id=65622&amp;fact_format=html&amp;fact_report=all_payments&amp;ben_type=B&amp;project_id=54733&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date=">
<i class="fa fa-sort muted" rel="tooltip" title="Filter on this beneficiary and property"></i>
</p>
<!-- gg_ben_url -->
<p rel="tooltip" title="Go to the overview page" href="/c/beneficiary/65622">
<!-- /gg_ben_url -->
TREVOR AND LAETITIA PULEY
<!-- gg_ben_url -->
</p>
<!-- /gg_ben_url -->
<!-- gg_ben_description -->
<small><span class="muted"> - ELECTRICITY (05/02/19 - 04/03/19)</span></small>
<!-- /gg_ben_description -->
</td>
<td>&nbsp;</td>
<td style="white-space:nowrap" class="amt">603.63
</td>
<td class="amt">3.75</td>
<td class="amt">0.00</td>
<td class="" style="text-align:center">
<!-- gg_approval_icon -->
<i class="fa fa-lock" rel="tooltip" title="Approval required"></i>
<!-- /gg_approval_icon -->
</td>
<td class="amt">
<!-- gg_auth-reports_confirmations -->
&nbsp;
<!-- /gg_auth-reports_confirmations -->
</td>
<!-- gg_approve_payments -->
<td style="text-align:right; vertical-align:top; white-space:nowrap;">&nbsp;</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_out -->
<!-- gg_in -->
<tr class="in">
<td class="dark_top"><p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;project_id=224787&amp;fact_format=html&amp;fact_report=all_payments&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date="> <i class="fa fa-sort muted" rel="tooltip" title="Filter results on this property"></i></p> <p rel="tooltip" title="Go to property overview page" href="/c/property/224787">M-J050 - 9 JAGERSFONTEIN LANE</p></td>
<td class="dark_top">2019-04-04</td>
<td class="dark_top" style="white-space:nowrap">Transfer</td>
<td class="dark_top"><p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;user_id=782425&amp;fact_format=html&amp;fact_report=all_payments&amp;project_id=224787&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date="><i title="Filter results on this tenant and property" rel="tooltip" class="fa fa-sort muted"></i></p> <!-- gg_tenant_url --><p rel="tooltip" title="Go to the overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=782425"><!-- /gg_tenant_url -->JACOBUS DE BRUYN &amp; PIETER HAASBROEK &amp; PETRUS BRINK<!-- gg_tenant_url --></p><!-- /gg_tenant_url --> <small><!-- gg_deposit_reference --><span class="muted">- ZC4533</span><!-- /gg_deposit_reference --></small></td>
<td class="dark_top" style="white-space:nowrap"><!-- gg_tenant_statement_icon --><p href="javascript:preview_tenant_statement(224787,782425)"><i rel="tooltip" title="View statement" class="far fa-file"></i></p><!-- /gg_tenant_statement_icon --></td>
<td class="dark_top amt">8,666.66</td>
<td class="dark_top amt">3.00</td>
<td class="dark_top amt">43.71</td>
<td class="gigatitle1 dark_top" style="text-align:center">
<!-- gg_paid_incoming_icon -->
<i class="fa fa-check" rel="tooltip" title="Paid"></i>
<!-- /gg_paid_incoming_icon -->
</td>
<td class="amt dark_top"><!-- gg_auth-reports_confirmations --><!-- gg_payment_detail_in_icon --><p href="javascript:preview_payment_in('32310505',28340996)"><i class="fa fa-info-circle muted" rel="tooltip" title="View payment confirmation"></i></p><!-- /gg_payment_detail_in_icon --><!-- /gg_auth-reports_confirmations --></td>
<!-- gg_approve_payments -->
<td class="dark_top"><label class="radio"><input type="radio" value="ignore" name="approve_payment_28340996" class="skip_approval" checked="checked"> Skip</label>
<!-- gg_ch_approve_28340996 -->
<!-- gg_auth-approve_payments -->
<label class="radio"><input type="radio" value="approve" name="approve_payment_28340996" class="approve_payment"> Approve</label>
<!-- /gg_auth-approve_payments -->
<!-- /gg_ch_approve_28340996 -->
<!-- gg_ch_reject_28340996 -->
<!-- gg_auth-reject_payments -->
<label class="radio"><input type="radio" value="reject" name="approve_payment_28340996"> Reject</label>
<!-- /gg_auth-reject_payments -->
<!-- /gg_ch_reject_28340996 -->
</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_in -->
<!-- gg_out -->
<tr class="out">
<td>&nbsp;</td>
<td>2019-04-04</td>
<td style="white-space:nowrap">- Commission</td>
<td>
<p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;ben_id=440&amp;fact_format=html&amp;fact_report=all_payments&amp;ben_type=C&amp;project_id=224787&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date=">
<i class="fa fa-sort muted" rel="tooltip" title="Filter on this beneficiary and property"></i>
</p>
Anchorprops 205 (Pty) Ltd
<!-- gg_ben_description -->
<small><span class="muted"> - COMMISSION</span></small>
<!-- /gg_ben_description -->
</td>
<td>&nbsp;</td>
<td style="white-space:nowrap" class="amt">1,495.00
</td>
<td class="amt"></td>
<td class="amt"></td>
<td class="" style="text-align:center">
<!-- gg_approval_icon -->
<i class="fa fa-lock" rel="tooltip" title="Approval required"></i>
<!-- /gg_approval_icon -->
</td>
<td class="amt">
<!-- gg_auth-reports_confirmations -->
&nbsp;
<!-- /gg_auth-reports_confirmations -->
</td>
<!-- gg_approve_payments -->
<td style="text-align:right; vertical-align:top; white-space:nowrap;">&nbsp;</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_out -->
<!-- gg_out -->
<tr class="out">
<td>&nbsp;</td>
<td>2019-04-04</td>
<td style="white-space:nowrap">- Contractor</td>
<td>
<p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;ben_id=581598&amp;fact_format=html&amp;fact_report=all_payments&amp;ben_type=B&amp;project_id=224787&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date=">
<i class="fa fa-sort muted" rel="tooltip" title="Filter on this beneficiary and property"></i>
</p>
<!-- gg_ben_url -->
<p rel="tooltip" title="Go to the overview page" href="/c/beneficiary/581598">
<!-- /gg_ben_url -->
D AFRICA
<!-- gg_ben_url -->
</p>
<!-- /gg_ben_url -->
<!-- gg_ben_description -->
<small><span class="muted"> - ELECTRICAL INSPECTION, BALANCE 3 PHASE SUPPLY</span></small>
<!-- /gg_ben_description -->
</td>
<td>&nbsp;</td>
<td style="white-space:nowrap" class="amt">880.00
</td>
<td class="amt">3.75</td>
<td class="amt">0.00</td>
<td class="" style="text-align:center">
<!-- gg_approval_icon -->
<i class="fa fa-lock" rel="tooltip" title="Approval required"></i>
<!-- /gg_approval_icon -->
</td>
<td class="amt">
<!-- gg_auth-reports_confirmations -->
&nbsp;
<!-- /gg_auth-reports_confirmations -->
</td>
<!-- gg_approve_payments -->
<td style="text-align:right; vertical-align:top; white-space:nowrap;">&nbsp;</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_out -->
<!-- gg_out -->
<tr class="out">
<td>&nbsp;</td>
<td>2019-04-04</td>
<td style="white-space:nowrap">- Owner</td>
<td>
<p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;ben_id=357509&amp;fact_format=html&amp;fact_report=all_payments&amp;ben_type=B&amp;project_id=224787&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date=">
<i class="fa fa-sort muted" rel="tooltip" title="Filter on this beneficiary and property"></i>
</p>
<!-- gg_ben_url -->
<p rel="tooltip" title="Go to the overview page" href="/c/beneficiary/357509">
<!-- /gg_ben_url -->
JANE DUTTON
<!-- gg_ben_url -->
</p>
<!-- /gg_ben_url -->
<!-- gg_ben_description -->
<small><span class="muted"> - OWNER</span></small>
<!-- /gg_ben_description -->
</td>
<td>&nbsp;</td>
<td style="white-space:nowrap" class="amt">6,291.66
</td>
<td class="amt">3.75</td>
<td class="amt">0.00</td>
<td class="" style="text-align:center">
<!-- gg_approval_icon -->
<i class="fa fa-lock" rel="tooltip" title="Approval required"></i>
<!-- /gg_approval_icon -->
</td>
<td class="amt">
<!-- gg_auth-reports_confirmations -->
&nbsp;
<!-- /gg_auth-reports_confirmations -->
</td>
<!-- gg_approve_payments -->
<td style="text-align:right; vertical-align:top; white-space:nowrap;">&nbsp;</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_out -->
<!-- gg_in -->
<tr class="in">
<td class="dark_top"><p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;project_id=55120&amp;fact_format=html&amp;fact_report=all_payments&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date="> <i class="fa fa-sort muted" rel="tooltip" title="Filter results on this property"></i></p> <p rel="tooltip" title="Go to property overview page" href="/c/property/55120">M-P088 - 605 PALMHOF</p></td>
<td class="dark_top">2019-04-04</td>
<td class="dark_top" style="white-space:nowrap">Transfer</td>
<td class="dark_top"><p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;user_id=95294&amp;fact_format=html&amp;fact_report=all_payments&amp;project_id=55120&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date="><i title="Filter results on this tenant and property" rel="tooltip" class="fa fa-sort muted"></i></p> <!-- gg_tenant_url --><p rel="tooltip" title="Go to the overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=95294"><!-- /gg_tenant_url -->EVELYN BAIDEN-AMISSAH<!-- gg_tenant_url --></p><!-- /gg_tenant_url --> <small><!-- gg_deposit_reference --><span class="muted">- ZC1684</span><!-- /gg_deposit_reference --></small></td>
<td class="dark_top" style="white-space:nowrap"><!-- gg_tenant_statement_icon --><p href="javascript:preview_tenant_statement(55120,95294)"><i rel="tooltip" title="View statement" class="far fa-file"></i></p><!-- /gg_tenant_statement_icon --></td>
<td class="dark_top amt">2,000.00</td>
<td class="dark_top amt">3.00</td>
<td class="dark_top amt">10.09</td>
<td class="gigatitle1 dark_top" style="text-align:center">
<!-- gg_paid_incoming_icon -->
<i class="fa fa-check" rel="tooltip" title="Paid"></i>
<!-- /gg_paid_incoming_icon -->
</td>
<td class="amt dark_top"><!-- gg_auth-reports_confirmations --><!-- gg_payment_detail_in_icon --><p href="javascript:preview_payment_in('32311275',28341335)"><i class="fa fa-info-circle muted" rel="tooltip" title="View payment confirmation"></i></p><!-- /gg_payment_detail_in_icon --><!-- /gg_auth-reports_confirmations --></td>
<!-- gg_approve_payments -->
<td class="dark_top"><label class="radio"><input type="radio" value="ignore" name="approve_payment_28341335" class="skip_approval" checked="checked"> Skip</label>
<!-- gg_ch_approve_28341335 -->
<!-- gg_auth-approve_payments -->
<label class="radio"><input type="radio" value="approve" name="approve_payment_28341335" class="approve_payment"> Approve</label>
<!-- /gg_auth-approve_payments -->
<!-- /gg_ch_approve_28341335 -->
<!-- gg_ch_reject_28341335 -->
<!-- gg_auth-reject_payments -->
<label class="radio"><input type="radio" value="reject" name="approve_payment_28341335"> Reject</label>
<!-- /gg_auth-reject_payments -->
<!-- /gg_ch_reject_28341335 -->
</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_in -->
<!-- gg_out -->
<tr class="out">
<td>&nbsp;</td>
<td>2019-04-04</td>
<td style="white-space:nowrap">- Commission</td>
<td>
<p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;ben_id=440&amp;fact_format=html&amp;fact_report=all_payments&amp;ben_type=C&amp;project_id=55120&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date=">
<i class="fa fa-sort muted" rel="tooltip" title="Filter on this beneficiary and property"></i>
</p>
Anchorprops 205 (Pty) Ltd
<!-- gg_ben_description -->
<small><span class="muted"> - COMMISSION</span></small>
<!-- /gg_ben_description -->
</td>
<td>&nbsp;</td>
<td style="white-space:nowrap" class="amt">287.60
</td>
<td class="amt"></td>
<td class="amt"></td>
<td class="" style="text-align:center">
<!-- gg_approval_icon -->
<i class="fa fa-lock" rel="tooltip" title="Approval required"></i>
<!-- /gg_approval_icon -->
</td>
<td class="amt">
<!-- gg_auth-reports_confirmations -->
&nbsp;
<!-- /gg_auth-reports_confirmations -->
</td>
<!-- gg_approve_payments -->
<td style="text-align:right; vertical-align:top; white-space:nowrap;">&nbsp;</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_out -->
<!-- gg_out -->
<tr class="out">
<td>&nbsp;</td>
<td>2019-04-04</td>
<td style="white-space:nowrap">- Owner</td>
<td>
<p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;ben_id=66114&amp;fact_format=html&amp;fact_report=all_payments&amp;ben_type=B&amp;project_id=55120&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date=">
<i class="fa fa-sort muted" rel="tooltip" title="Filter on this beneficiary and property"></i>
</p>
<!-- gg_ben_url -->
<p rel="tooltip" title="Go to the overview page" href="/c/beneficiary/66114">
<!-- /gg_ben_url -->
AJAY KALAN
<!-- gg_ben_url -->
</p>
<!-- /gg_ben_url -->
<!-- gg_ben_description -->
<small><span class="muted"> - RENT</span></small>
<!-- /gg_ben_description -->
</td>
<td>&nbsp;</td>
<td style="white-space:nowrap" class="amt">1,712.40
</td>
<td class="amt">3.75</td>
<td class="amt">0.00</td>
<td class="" style="text-align:center">
<!-- gg_approval_icon -->
<i class="fa fa-lock" rel="tooltip" title="Approval required"></i>
<!-- /gg_approval_icon -->
</td>
<td class="amt">
<!-- gg_auth-reports_confirmations -->
&nbsp;
<!-- /gg_auth-reports_confirmations -->
</td>
<!-- gg_approve_payments -->
<td style="text-align:right; vertical-align:top; white-space:nowrap;">&nbsp;</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_out -->
<!-- gg_in -->
<tr class="in">
<td class="dark_top"><p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;project_id=55120&amp;fact_format=html&amp;fact_report=all_payments&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date="> <i class="fa fa-sort muted" rel="tooltip" title="Filter results on this property"></i></p> <p rel="tooltip" title="Go to property overview page" href="/c/property/55120">M-P088 - 605 PALMHOF</p></td>
<td class="dark_top">2019-04-04</td>
<td class="dark_top" style="white-space:nowrap">Transfer</td>
<td class="dark_top"><p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;user_id=95294&amp;fact_format=html&amp;fact_report=all_payments&amp;project_id=55120&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date="><i title="Filter results on this tenant and property" rel="tooltip" class="fa fa-sort muted"></i></p> <!-- gg_tenant_url --><p rel="tooltip" title="Go to the overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=95294"><!-- /gg_tenant_url -->EVELYN BAIDEN-AMISSAH<!-- gg_tenant_url --></p><!-- /gg_tenant_url --> <small><!-- gg_deposit_reference --><span class="muted">- ZC1684</span><!-- /gg_deposit_reference --></small></td>
<td class="dark_top" style="white-space:nowrap"><!-- gg_tenant_statement_icon --><p href="javascript:preview_tenant_statement(55120,95294)"><i rel="tooltip" title="View statement" class="far fa-file"></i></p><!-- /gg_tenant_statement_icon --></td>
<td class="dark_top amt">9,000.00</td>
<td class="dark_top amt">3.00</td>
<td class="dark_top amt">45.40</td>
<td class="gigatitle1 dark_top" style="text-align:center">
<!-- gg_paid_incoming_icon -->
<i class="fa fa-check" rel="tooltip" title="Paid"></i>
<!-- /gg_paid_incoming_icon -->
</td>
<td class="amt dark_top"><!-- gg_auth-reports_confirmations --><!-- gg_payment_detail_in_icon --><p href="javascript:preview_payment_in('32311279',28341337)"><i class="fa fa-info-circle muted" rel="tooltip" title="View payment confirmation"></i></p><!-- /gg_payment_detail_in_icon --><!-- /gg_auth-reports_confirmations --></td>
<!-- gg_approve_payments -->
<td class="dark_top"><label class="radio"><input type="radio" value="ignore" name="approve_payment_28341337" class="skip_approval" checked="checked"> Skip</label>
<!-- gg_ch_approve_28341337 -->
<!-- gg_auth-approve_payments -->
<label class="radio"><input type="radio" value="approve" name="approve_payment_28341337" class="approve_payment"> Approve</label>
<!-- /gg_auth-approve_payments -->
<!-- /gg_ch_approve_28341337 -->
<!-- gg_ch_reject_28341337 -->
<!-- gg_auth-reject_payments -->
<label class="radio"><input type="radio" value="reject" name="approve_payment_28341337"> Reject</label>
<!-- /gg_auth-reject_payments -->
<!-- /gg_ch_reject_28341337 -->
</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_in -->
<!-- gg_out -->
<tr class="out">
<td>&nbsp;</td>
<td>2019-04-04</td>
<td style="white-space:nowrap">- Commission</td>
<td>
<p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;ben_id=440&amp;fact_format=html&amp;fact_report=all_payments&amp;ben_type=C&amp;project_id=55120&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date=">
<i class="fa fa-sort muted" rel="tooltip" title="Filter on this beneficiary and property"></i>
</p>
Anchorprops 205 (Pty) Ltd
<!-- gg_ben_description -->
<small><span class="muted"> - COMMISSION</span></small>
<!-- /gg_ben_description -->
</td>
<td>&nbsp;</td>
<td style="white-space:nowrap" class="amt">1,294.20
</td>
<td class="amt"></td>
<td class="amt"></td>
<td class="" style="text-align:center">
<!-- gg_approval_icon -->
<i class="fa fa-lock" rel="tooltip" title="Approval required"></i>
<!-- /gg_approval_icon -->
</td>
<td class="amt">
<!-- gg_auth-reports_confirmations -->
&nbsp;
<!-- /gg_auth-reports_confirmations -->
</td>
<!-- gg_approve_payments -->
<td style="text-align:right; vertical-align:top; white-space:nowrap;">&nbsp;</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_out -->
<!-- gg_out -->
<tr class="out">
<td>&nbsp;</td>
<td>2019-04-04</td>
<td style="white-space:nowrap">- Owner</td>
<td>
<p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;ben_id=66114&amp;fact_format=html&amp;fact_report=all_payments&amp;ben_type=B&amp;project_id=55120&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date=">
<i class="fa fa-sort muted" rel="tooltip" title="Filter on this beneficiary and property"></i>
</p>
<!-- gg_ben_url -->
<p rel="tooltip" title="Go to the overview page" href="/c/beneficiary/66114">
<!-- /gg_ben_url -->
AJAY KALAN
<!-- gg_ben_url -->
</p>
<!-- /gg_ben_url -->
<!-- gg_ben_description -->
<small><span class="muted"> - RENT</span></small>
<!-- /gg_ben_description -->
</td>
<td>&nbsp;</td>
<td style="white-space:nowrap" class="amt">7,705.80
</td>
<td class="amt">3.75</td>
<td class="amt">0.00</td>
<td class="" style="text-align:center">
<!-- gg_approval_icon -->
<i class="fa fa-lock" rel="tooltip" title="Approval required"></i>
<!-- /gg_approval_icon -->
</td>
<td class="amt">
<!-- gg_auth-reports_confirmations -->
&nbsp;
<!-- /gg_auth-reports_confirmations -->
</td>
<!-- gg_approve_payments -->
<td style="text-align:right; vertical-align:top; white-space:nowrap;">&nbsp;</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_out -->
<!-- gg_in -->
<tr class="in">
<td class="dark_top"><p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;project_id=139210&amp;fact_format=html&amp;fact_report=all_payments&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date="> <i class="fa fa-sort muted" rel="tooltip" title="Filter results on this property"></i></p> <p rel="tooltip" title="Go to property overview page" href="/c/property/139210">M-P137 - 204 PORTMAN PLACE </p></td>
<td class="dark_top">2019-04-04</td>
<td class="dark_top" style="white-space:nowrap">Transfer</td>
<td class="dark_top"><p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;user_id=553615&amp;fact_format=html&amp;fact_report=all_payments&amp;project_id=139210&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date="><i title="Filter results on this tenant and property" rel="tooltip" class="fa fa-sort muted"></i></p> <!-- gg_tenant_url --><p rel="tooltip" title="Go to the overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=553615"><!-- /gg_tenant_url -->PETER LOCKHART<!-- gg_tenant_url --></p><!-- /gg_tenant_url --> <small><!-- gg_deposit_reference --><span class="muted">- ZC3747</span><!-- /gg_deposit_reference --></small></td>
<td class="dark_top" style="white-space:nowrap"><!-- gg_tenant_statement_icon --><p href="javascript:preview_tenant_statement(139210,553615)"><i rel="tooltip" title="View statement" class="far fa-file"></i></p><!-- /gg_tenant_statement_icon --></td>
<td class="dark_top amt">25,000.00</td>
<td class="dark_top amt">3.00</td>
<td class="dark_top amt">126.10</td>
<td class="gigatitle1 dark_top" style="text-align:center">
<!-- gg_paid_incoming_icon -->
<i class="fa fa-check" rel="tooltip" title="Paid"></i>
<!-- /gg_paid_incoming_icon -->
</td>
<td class="amt dark_top"><!-- gg_auth-reports_confirmations --><!-- gg_payment_detail_in_icon --><p href="javascript:preview_payment_in('32311277',28341336)"><i class="fa fa-info-circle muted" rel="tooltip" title="View payment confirmation"></i></p><!-- /gg_payment_detail_in_icon --><!-- /gg_auth-reports_confirmations --></td>
<!-- gg_approve_payments -->
<td class="dark_top"><label class="radio"><input type="radio" value="ignore" name="approve_payment_28341336" class="skip_approval" checked="checked"> Skip</label>
<!-- gg_ch_approve_28341336 -->
<!-- gg_auth-approve_payments -->
<label class="radio"><input type="radio" value="approve" name="approve_payment_28341336" class="approve_payment"> Approve</label>
<!-- /gg_auth-approve_payments -->
<!-- /gg_ch_approve_28341336 -->
<!-- gg_ch_reject_28341336 -->
<!-- gg_auth-reject_payments -->
<label class="radio"><input type="radio" value="reject" name="approve_payment_28341336"> Reject</label>
<!-- /gg_auth-reject_payments -->
<!-- /gg_ch_reject_28341336 -->
</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_in -->
<!-- gg_out -->
<tr class="out">
<td>&nbsp;</td>
<td>2019-04-04</td>
<td style="white-space:nowrap">- Commission</td>
<td>
<p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;ben_id=440&amp;fact_format=html&amp;fact_report=all_payments&amp;ben_type=C&amp;project_id=139210&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date=">
<i class="fa fa-sort muted" rel="tooltip" title="Filter on this beneficiary and property"></i>
</p>
Anchorprops 205 (Pty) Ltd
<!-- gg_ben_description -->
<small><span class="muted"> - COMMISSION</span></small>
<!-- /gg_ben_description -->
</td>
<td>&nbsp;</td>
<td style="white-space:nowrap" class="amt">3,737.50
</td>
<td class="amt"></td>
<td class="amt"></td>
<td class="" style="text-align:center">
<!-- gg_approval_icon -->
<i class="fa fa-lock" rel="tooltip" title="Approval required"></i>
<!-- /gg_approval_icon -->
</td>
<td class="amt">
<!-- gg_auth-reports_confirmations -->
&nbsp;
<!-- /gg_auth-reports_confirmations -->
</td>
<!-- gg_approve_payments -->
<td style="text-align:right; vertical-align:top; white-space:nowrap;">&nbsp;</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_out -->
<!-- gg_out -->
<tr class="out">
<td>&nbsp;</td>
<td>2019-04-04</td>
<td style="white-space:nowrap">- Owner</td>
<td>
<p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;ben_id=202860&amp;fact_format=html&amp;fact_report=all_payments&amp;ben_type=B&amp;project_id=139210&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date=">
<i class="fa fa-sort muted" rel="tooltip" title="Filter on this beneficiary and property"></i>
</p>
<!-- gg_ben_url -->
<p rel="tooltip" title="Go to the overview page" href="/c/beneficiary/202860">
<!-- /gg_ben_url -->
MICHAEL BERMAN
<!-- gg_ben_url -->
</p>
<!-- /gg_ben_url -->
<!-- gg_ben_description -->
<small><span class="muted"> - MONTHLY RENT</span></small>
<!-- /gg_ben_description -->
</td>
<td>&nbsp;</td>
<td style="white-space:nowrap" class="amt">21,262.50
</td>
<td class="amt">3.75</td>
<td class="amt">0.00</td>
<td class="" style="text-align:center">
<!-- gg_approval_icon -->
<i class="fa fa-lock" rel="tooltip" title="Approval required"></i>
<!-- /gg_approval_icon -->
</td>
<td class="amt">
<!-- gg_auth-reports_confirmations -->
&nbsp;
<!-- /gg_auth-reports_confirmations -->
</td>
<!-- gg_approve_payments -->
<td style="text-align:right; vertical-align:top; white-space:nowrap;">&nbsp;</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_out -->
<!-- gg_in -->
<tr class="in">
<td class="dark_top"><p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;project_id=337693&amp;fact_format=html&amp;fact_report=all_payments&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date="> <i class="fa fa-sort muted" rel="tooltip" title="Filter results on this property"></i></p> <p rel="tooltip" title="Go to property overview page" href="/c/property/337693">M-P185 - 104 PARKHOF</p></td>
<td class="dark_top">2019-04-04</td>
<td class="dark_top" style="white-space:nowrap">Transfer</td>
<td class="dark_top"><p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;user_id=761733&amp;fact_format=html&amp;fact_report=all_payments&amp;project_id=337693&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date="><i title="Filter results on this tenant and property" rel="tooltip" class="fa fa-sort muted"></i></p> <!-- gg_tenant_url --><p rel="tooltip" title="Go to the overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=761733"><!-- /gg_tenant_url -->STEPHANIE SPOWART<!-- gg_tenant_url --></p><!-- /gg_tenant_url --> <small><!-- gg_deposit_reference --><span class="muted">- ZC4445</span><!-- /gg_deposit_reference --></small></td>
<td class="dark_top" style="white-space:nowrap"><!-- gg_tenant_statement_icon --><p href="javascript:preview_tenant_statement(337693,761733)"><i rel="tooltip" title="View statement" class="far fa-file"></i></p><!-- /gg_tenant_statement_icon --></td>
<td class="dark_top amt">348.83</td>
<td class="dark_top amt">3.00</td>
<td class="dark_top amt">1.76</td>
<td class="gigatitle1 dark_top" style="text-align:center">
<!-- gg_paid_incoming_icon -->
<i class="fa fa-check" rel="tooltip" title="Paid"></i>
<!-- /gg_paid_incoming_icon -->
</td>
<td class="amt dark_top"><!-- gg_auth-reports_confirmations --><!-- gg_payment_detail_in_icon --><p href="javascript:preview_payment_in('32311294',28341341)"><i class="fa fa-info-circle muted" rel="tooltip" title="View payment confirmation"></i></p><!-- /gg_payment_detail_in_icon --><!-- /gg_auth-reports_confirmations --></td>
<!-- gg_approve_payments -->
<td class="dark_top"><label class="radio"><input type="radio" value="ignore" name="approve_payment_28341341" class="skip_approval" checked="checked"> Skip</label>
<!-- gg_ch_approve_28341341 -->
<!-- gg_auth-approve_payments -->
<label class="radio"><input type="radio" value="approve" name="approve_payment_28341341" class="approve_payment"> Approve</label>
<!-- /gg_auth-approve_payments -->
<!-- /gg_ch_approve_28341341 -->
<!-- gg_ch_reject_28341341 -->
<!-- gg_auth-reject_payments -->
<label class="radio"><input type="radio" value="reject" name="approve_payment_28341341"> Reject</label>
<!-- /gg_auth-reject_payments -->
<!-- /gg_ch_reject_28341341 -->
</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_in -->
<!-- gg_out -->
<tr class="out">
<td>&nbsp;</td>
<td>2019-04-04</td>
<td style="white-space:nowrap">- Owner</td>
<td>
<p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;ben_id=567815&amp;fact_format=html&amp;fact_report=all_payments&amp;ben_type=B&amp;project_id=337693&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date=">
<i class="fa fa-sort muted" rel="tooltip" title="Filter on this beneficiary and property"></i>
</p>
<!-- gg_ben_url -->
<p rel="tooltip" title="Go to the overview page" href="/c/beneficiary/567815">
<!-- /gg_ben_url -->
PETRONELLA MARIA DE VRIES
<!-- gg_ben_url -->
</p>
<!-- /gg_ben_url -->
<!-- gg_ben_description -->
<small><span class="muted"> - ELECTRICITY (11/02/19 - 11/03/19)</span></small>
<!-- /gg_ben_description -->
</td>
<td>&nbsp;</td>
<td style="white-space:nowrap" class="amt">348.83
</td>
<td class="amt">3.75</td>
<td class="amt">0.00</td>
<td class="" style="text-align:center">
<!-- gg_approval_icon -->
<i class="fa fa-lock" rel="tooltip" title="Approval required"></i>
<!-- /gg_approval_icon -->
</td>
<td class="amt">
<!-- gg_auth-reports_confirmations -->
&nbsp;
<!-- /gg_auth-reports_confirmations -->
</td>
<!-- gg_approve_payments -->
<td style="text-align:right; vertical-align:top; white-space:nowrap;">&nbsp;</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_out -->
<!-- gg_in -->
<tr class="in">
<td class="dark_top"><p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;project_id=124109&amp;fact_format=html&amp;fact_report=all_payments&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date="> <i class="fa fa-sort muted" rel="tooltip" title="Filter results on this property"></i></p> <p rel="tooltip" title="Go to property overview page" href="/c/property/124109">M-W086 - 615 WEMBLEY SQUARE</p></td>
<td class="dark_top">2019-04-04</td>
<td class="dark_top" style="white-space:nowrap">Transfer</td>
<td class="dark_top"><p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;user_id=623170&amp;fact_format=html&amp;fact_report=all_payments&amp;project_id=124109&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date="><i title="Filter results on this tenant and property" rel="tooltip" class="fa fa-sort muted"></i></p> <!-- gg_tenant_url --><p rel="tooltip" title="Go to the overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=623170"><!-- /gg_tenant_url -->FREDERICK FRANCOIS MULLER<!-- gg_tenant_url --></p><!-- /gg_tenant_url --> <small><!-- gg_deposit_reference --><span class="muted">- ZC3971</span><!-- /gg_deposit_reference --></small></td>
<td class="dark_top" style="white-space:nowrap"><!-- gg_tenant_statement_icon --><p href="javascript:preview_tenant_statement(124109,623170)"><i rel="tooltip" title="View statement" class="far fa-file"></i></p><!-- /gg_tenant_statement_icon --></td>
<td class="dark_top amt">10,617.00</td>
<td class="dark_top amt">3.00</td>
<td class="dark_top amt">53.55</td>
<td class="gigatitle1 dark_top" style="text-align:center">
<!-- gg_paid_incoming_icon -->
<i class="fa fa-check" rel="tooltip" title="Paid"></i>
<!-- /gg_paid_incoming_icon -->
</td>
<td class="amt dark_top"><!-- gg_auth-reports_confirmations --><!-- gg_payment_detail_in_icon --><p href="javascript:preview_payment_in('32311297',28341342)"><i class="fa fa-info-circle muted" rel="tooltip" title="View payment confirmation"></i></p><!-- /gg_payment_detail_in_icon --><!-- /gg_auth-reports_confirmations --></td>
<!-- gg_approve_payments -->
<td class="dark_top"><label class="radio"><input type="radio" value="ignore" name="approve_payment_28341342" class="skip_approval" checked="checked"> Skip</label>
<!-- gg_ch_approve_28341342 -->
<!-- gg_auth-approve_payments -->
<label class="radio"><input type="radio" value="approve" name="approve_payment_28341342" class="approve_payment"> Approve</label>
<!-- /gg_auth-approve_payments -->
<!-- /gg_ch_approve_28341342 -->
<!-- gg_ch_reject_28341342 -->
<!-- gg_auth-reject_payments -->
<label class="radio"><input type="radio" value="reject" name="approve_payment_28341342"> Reject</label>
<!-- /gg_auth-reject_payments -->
<!-- /gg_ch_reject_28341342 -->
</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_in -->
<!-- gg_out -->
<tr class="out">
<td>&nbsp;</td>
<td>2019-04-04</td>
<td style="white-space:nowrap">- Commission</td>
<td>
<p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;ben_id=440&amp;fact_format=html&amp;fact_report=all_payments&amp;ben_type=C&amp;project_id=124109&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date=">
<i class="fa fa-sort muted" rel="tooltip" title="Filter on this beneficiary and property"></i>
</p>
Anchorprops 205 (Pty) Ltd
<!-- gg_ben_description -->
<small><span class="muted"> - COMMISSION</span></small>
<!-- /gg_ben_description -->
</td>
<td>&nbsp;</td>
<td style="white-space:nowrap" class="amt">1,474.00
</td>
<td class="amt"></td>
<td class="amt"></td>
<td class="" style="text-align:center">
<!-- gg_approval_icon -->
<i class="fa fa-lock" rel="tooltip" title="Approval required"></i>
<!-- /gg_approval_icon -->
</td>
<td class="amt">
<!-- gg_auth-reports_confirmations -->
&nbsp;
<!-- /gg_auth-reports_confirmations -->
</td>
<!-- gg_approve_payments -->
<td style="text-align:right; vertical-align:top; white-space:nowrap;">&nbsp;</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_out -->
<!-- gg_out -->
<tr class="out">
<td>&nbsp;</td>
<td>2019-04-04</td>
<td style="white-space:nowrap">- Levy</td>
<td>
<p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;ben_id=107261&amp;fact_format=html&amp;fact_report=all_payments&amp;ben_type=B&amp;project_id=124109&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date=">
<i class="fa fa-sort muted" rel="tooltip" title="Filter on this beneficiary and property"></i>
</p>
<!-- gg_ben_url -->
<p rel="tooltip" title="Go to the overview page" href="/c/beneficiary/107261">
<!-- /gg_ben_url -->
FAIRCAPE
<!-- gg_ben_url -->
</p>
<!-- /gg_ben_url -->
<!-- gg_ben_description -->
<small><span class="muted"> - LEVY (APRIL)</span></small>
<!-- /gg_ben_description -->
</td>
<td>&nbsp;</td>
<td style="white-space:nowrap" class="amt">1,623.27
</td>
<td class="amt">3.75</td>
<td class="amt">0.00</td>
<td class="" style="text-align:center">
<!-- gg_approval_icon -->
<i class="fa fa-lock" rel="tooltip" title="Approval required"></i>
<!-- /gg_approval_icon -->
</td>
<td class="amt">
<!-- gg_auth-reports_confirmations -->
&nbsp;
<!-- /gg_auth-reports_confirmations -->
</td>
<!-- gg_approve_payments -->
<td style="text-align:right; vertical-align:top; white-space:nowrap;">&nbsp;</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_out -->
<!-- gg_out -->
<tr class="out">
<td>&nbsp;</td>
<td>2019-04-04</td>
<td style="white-space:nowrap">- Body Corporate</td>
<td>
<p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;ben_id=107261&amp;fact_format=html&amp;fact_report=all_payments&amp;ben_type=B&amp;project_id=124109&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date=">
<i class="fa fa-sort muted" rel="tooltip" title="Filter on this beneficiary and property"></i>
</p>
<!-- gg_ben_url -->
<p rel="tooltip" title="Go to the overview page" href="/c/beneficiary/107261">
<!-- /gg_ben_url -->
FAIRCAPE
<!-- gg_ben_url -->
</p>
<!-- /gg_ben_url -->
<!-- gg_ben_description -->
<small><span class="muted"> - ELECTRICITY (02/02/19 - 01/03/19)</span></small>
<!-- /gg_ben_description -->
</td>
<td>&nbsp;</td>
<td style="white-space:nowrap" class="amt">366.67
</td>
<td class="amt">3.75</td>
<td class="amt">0.00</td>
<td class="" style="text-align:center">
<!-- gg_approval_icon -->
<i class="fa fa-lock" rel="tooltip" title="Approval required"></i>
<!-- /gg_approval_icon -->
</td>
<td class="amt">
<!-- gg_auth-reports_confirmations -->
&nbsp;
<!-- /gg_auth-reports_confirmations -->
</td>
<!-- gg_approve_payments -->
<td style="text-align:right; vertical-align:top; white-space:nowrap;">&nbsp;</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_out -->
<!-- gg_out -->
<tr class="out">
<td>&nbsp;</td>
<td>2019-04-04</td>
<td style="white-space:nowrap">- Owner</td>
<td>
<p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;ben_id=123130&amp;fact_format=html&amp;fact_report=all_payments&amp;ben_type=B&amp;project_id=124109&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date=">
<i class="fa fa-sort muted" rel="tooltip" title="Filter on this beneficiary and property"></i>
</p>
<!-- gg_ben_url -->
<p rel="tooltip" title="Go to the overview page" href="/c/beneficiary/123130">
<!-- /gg_ben_url -->
OLIVIER YVES YVONNE FLORENT VANREUSEL
<!-- gg_ben_url -->
</p>
<!-- /gg_ben_url -->
<!-- gg_ben_description -->
<small><span class="muted"> - OWNER</span></small>
<!-- /gg_ben_description -->
</td>
<td>&nbsp;</td>
<td style="white-space:nowrap" class="amt">7,153.06
</td>
<td class="amt">3.75</td>
<td class="amt">0.00</td>
<td class="" style="text-align:center">
<!-- gg_approval_icon -->
<i class="fa fa-lock" rel="tooltip" title="Approval required"></i>
<!-- /gg_approval_icon -->
</td>
<td class="amt">
<!-- gg_auth-reports_confirmations -->
&nbsp;
<!-- /gg_auth-reports_confirmations -->
</td>
<!-- gg_approve_payments -->
<td style="text-align:right; vertical-align:top; white-space:nowrap;">&nbsp;</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_out -->
<!-- gg_in -->
<tr class="in">
<td class="dark_top"><p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;project_id=267308&amp;fact_format=html&amp;fact_report=all_payments&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date="> <i class="fa fa-sort muted" rel="tooltip" title="Filter results on this property"></i></p> <p rel="tooltip" title="Go to property overview page" href="/c/property/267308">SSS - 201 LA MONTAGNE</p></td>
<td class="dark_top">2019-04-04</td>
<td class="dark_top" style="white-space:nowrap">Transfer</td>
<td class="dark_top"><p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;user_id=779098&amp;fact_format=html&amp;fact_report=all_payments&amp;project_id=267308&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date="><i title="Filter results on this tenant and property" rel="tooltip" class="fa fa-sort muted"></i></p> <!-- gg_tenant_url --><p rel="tooltip" title="Go to the overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=779098"><!-- /gg_tenant_url -->MOONLIGHTING EIGHT PRODUCTIONS (PTY) LTD<!-- gg_tenant_url --></p><!-- /gg_tenant_url --> <small><!-- gg_deposit_reference --><span class="muted">- ZC4517</span><!-- /gg_deposit_reference --></small></td>
<td class="dark_top" style="white-space:nowrap"><!-- gg_tenant_statement_icon --><p href="javascript:preview_tenant_statement(267308,779098)"><i rel="tooltip" title="View statement" class="far fa-file"></i></p><!-- /gg_tenant_statement_icon --></td>
<td class="dark_top amt">40,000.00</td>
<td class="dark_top amt">3.00</td>
<td class="dark_top amt">201.76</td>
<td class="gigatitle1 dark_top" style="text-align:center">
<!-- gg_paid_incoming_icon -->
<i class="fa fa-check" rel="tooltip" title="Paid"></i>
<!-- /gg_paid_incoming_icon -->
</td>
<td class="amt dark_top"><!-- gg_auth-reports_confirmations --><!-- gg_payment_detail_in_icon --><p href="javascript:preview_payment_in('32310490',28340986)"><i class="fa fa-info-circle muted" rel="tooltip" title="View payment confirmation"></i></p><!-- /gg_payment_detail_in_icon --><!-- /gg_auth-reports_confirmations --></td>
<!-- gg_approve_payments -->
<td class="dark_top"><label class="radio"><input type="radio" value="ignore" name="approve_payment_28340986" class="skip_approval" checked="checked"> Skip</label>
<!-- gg_ch_approve_28340986 -->
<!-- gg_auth-approve_payments -->
<label class="radio"><input type="radio" value="approve" name="approve_payment_28340986" class="approve_payment"> Approve</label>
<!-- /gg_auth-approve_payments -->
<!-- /gg_ch_approve_28340986 -->
<!-- gg_ch_reject_28340986 -->
<!-- gg_auth-reject_payments -->
<label class="radio"><input type="radio" value="reject" name="approve_payment_28340986"> Reject</label>
<!-- /gg_auth-reject_payments -->
<!-- /gg_ch_reject_28340986 -->
</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_in -->
<!-- gg_out -->
<tr class="out">
<td>&nbsp;</td>
<td>2019-04-04</td>
<td style="white-space:nowrap">- Commission</td>
<td>
<p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;ben_id=440&amp;fact_format=html&amp;fact_report=all_payments&amp;ben_type=C&amp;project_id=267308&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date=">
<i class="fa fa-sort muted" rel="tooltip" title="Filter on this beneficiary and property"></i>
</p>
Anchorprops 205 (Pty) Ltd
<!-- gg_ben_description -->
<small><span class="muted"> - COMMISSION (19/01/19 - 19/05/19)</span></small>
<!-- /gg_ben_description -->
</td>
<td>&nbsp;</td>
<td style="white-space:nowrap" class="amt">8,000.00
</td>
<td class="amt"></td>
<td class="amt"></td>
<td class="" style="text-align:center">
<!-- gg_approval_icon -->
<i class="fa fa-lock" rel="tooltip" title="Approval required"></i>
<!-- /gg_approval_icon -->
</td>
<td class="amt">
<!-- gg_auth-reports_confirmations -->
&nbsp;
<!-- /gg_auth-reports_confirmations -->
</td>
<!-- gg_approve_payments -->
<td style="text-align:right; vertical-align:top; white-space:nowrap;">&nbsp;</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_out -->
<!-- gg_out -->
<tr class="out">
<td>&nbsp;</td>
<td>2019-04-04</td>
<td style="white-space:nowrap">- Owner</td>
<td>
<p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;ben_id=437860&amp;fact_format=html&amp;fact_report=all_payments&amp;ben_type=B&amp;project_id=267308&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date=">
<i class="fa fa-sort muted" rel="tooltip" title="Filter on this beneficiary and property"></i>
</p>
<!-- gg_ben_url -->
<p rel="tooltip" title="Go to the overview page" href="/c/beneficiary/437860">
<!-- /gg_ben_url -->
MALCOLM GRUPEL
<!-- gg_ben_url -->
</p>
<!-- /gg_ben_url -->
<!-- gg_ben_description -->
<small><span class="muted"> - MONTHLY RENT</span></small>
<!-- /gg_ben_description -->
</td>
<td>&nbsp;</td>
<td style="white-space:nowrap" class="amt">32,000.00
</td>
<td class="amt">3.75</td>
<td class="amt">0.00</td>
<td class="" style="text-align:center">
<!-- gg_approval_icon -->
<i class="fa fa-lock" rel="tooltip" title="Approval required"></i>
<!-- /gg_approval_icon -->
</td>
<td class="amt">
<!-- gg_auth-reports_confirmations -->
&nbsp;
<!-- /gg_auth-reports_confirmations -->
</td>
<!-- gg_approve_payments -->
<td style="text-align:right; vertical-align:top; white-space:nowrap;">&nbsp;</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_out -->
<!-- gg_in -->
<tr class="in">
<td class="dark_top"><p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;project_id=230340&amp;fact_format=html&amp;fact_report=all_payments&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date="> <i class="fa fa-sort muted" rel="tooltip" title="Filter results on this property"></i></p> <p rel="tooltip" title="Go to property overview page" href="/c/property/230340">U-A190 -  26 ATHOLL ROAD</p></td>
<td class="dark_top">2019-04-04</td>
<td class="dark_top" style="white-space:nowrap">Transfer</td>
<td class="dark_top"><p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;user_id=452500&amp;fact_format=html&amp;fact_report=all_payments&amp;project_id=230340&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date="><i title="Filter results on this tenant and property" rel="tooltip" class="fa fa-sort muted"></i></p> <!-- gg_tenant_url --><p rel="tooltip" title="Go to the overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=452500"><!-- /gg_tenant_url -->MICHAEL YOUNG<!-- gg_tenant_url --></p><!-- /gg_tenant_url --> <small><!-- gg_deposit_reference --><span class="muted">- ZC3431</span><!-- /gg_deposit_reference --></small></td>
<td class="dark_top" style="white-space:nowrap"><!-- gg_tenant_statement_icon --><p href="javascript:preview_tenant_statement(230340,452500)"><i rel="tooltip" title="View statement" class="far fa-file"></i></p><!-- /gg_tenant_statement_icon --></td>
<td class="dark_top amt">12,845.84</td>
<td class="dark_top amt">3.00</td>
<td class="dark_top amt">64.79</td>
<td class="gigatitle1 dark_top" style="text-align:center">
<!-- gg_paid_incoming_icon -->
<i class="fa fa-check" rel="tooltip" title="Paid"></i>
<!-- /gg_paid_incoming_icon -->
</td>
<td class="amt dark_top"><!-- gg_auth-reports_confirmations --><!-- gg_payment_detail_in_icon --><p href="javascript:preview_payment_in('32311304',28341344)"><i class="fa fa-info-circle muted" rel="tooltip" title="View payment confirmation"></i></p><!-- /gg_payment_detail_in_icon --><!-- /gg_auth-reports_confirmations --></td>
<!-- gg_approve_payments -->
<td class="dark_top"><label class="radio"><input type="radio" value="ignore" name="approve_payment_28341344" class="skip_approval" checked="checked"> Skip</label>
<!-- gg_ch_approve_28341344 -->
<!-- gg_auth-approve_payments -->
<label class="radio"><input type="radio" value="approve" name="approve_payment_28341344" class="approve_payment"> Approve</label>
<!-- /gg_auth-approve_payments -->
<!-- /gg_ch_approve_28341344 -->
<!-- gg_ch_reject_28341344 -->
<!-- gg_auth-reject_payments -->
<label class="radio"><input type="radio" value="reject" name="approve_payment_28341344"> Reject</label>
<!-- /gg_auth-reject_payments -->
<!-- /gg_ch_reject_28341344 -->
</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_in -->
<!-- gg_out -->
<tr class="out">
<td>&nbsp;</td>
<td>2019-04-04</td>
<td style="white-space:nowrap">- Municipality</td>
<td>
<p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;ben_id=3&amp;fact_format=html&amp;fact_report=all_payments&amp;ben_type=G&amp;project_id=230340&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date=">
<i class="fa fa-sort muted" rel="tooltip" title="Filter on this beneficiary and property"></i>
</p>
City of Cape Town
<!-- gg_ben_description -->
<small><span class="muted"> - RATES  (03/01/19 - 01/02/19=R6644.40) (02/02/19  01/03/19= R6201.44)</span></small>
<!-- /gg_ben_description -->
</td>
<td>&nbsp;</td>
<td style="white-space:nowrap" class="amt">12,845.84
</td>
<td class="amt">3.75</td>
<td class="amt">0.00</td>
<td class="" style="text-align:center">
<!-- gg_approval_icon -->
<i class="fa fa-lock" rel="tooltip" title="Approval required"></i>
<!-- /gg_approval_icon -->
</td>
<td class="amt">
<!-- gg_auth-reports_confirmations -->
&nbsp;
<!-- /gg_auth-reports_confirmations -->
</td>
<!-- gg_approve_payments -->
<td style="text-align:right; vertical-align:top; white-space:nowrap;">&nbsp;</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_out -->
<!-- gg_in -->
<tr class="in">
<td class="dark_top"><p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;project_id=355962&amp;fact_format=html&amp;fact_report=all_payments&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date="> <i class="fa fa-sort muted" rel="tooltip" title="Filter results on this property"></i></p> <p rel="tooltip" title="Go to property overview page" href="/c/property/355962">U-H178 - 13 HILLENDALE</p></td>
<td class="dark_top">2019-04-04</td>
<td class="dark_top" style="white-space:nowrap">Transfer</td>
<td class="dark_top"><p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;user_id=816664&amp;fact_format=html&amp;fact_report=all_payments&amp;project_id=355962&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date="><i title="Filter results on this tenant and property" rel="tooltip" class="fa fa-sort muted"></i></p> <!-- gg_tenant_url --><p rel="tooltip" title="Go to the overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=816664"><!-- /gg_tenant_url -->THE HERSCHEL TRUST - 1<!-- gg_tenant_url --></p><!-- /gg_tenant_url --> <small><!-- gg_deposit_reference --><span class="muted">- ZC4661</span><!-- /gg_deposit_reference --></small></td>
<td class="dark_top" style="white-space:nowrap"><!-- gg_tenant_statement_icon --><p href="javascript:preview_tenant_statement(355962,816664)"><i rel="tooltip" title="View statement" class="far fa-file"></i></p><!-- /gg_tenant_statement_icon --></td>
<td class="dark_top amt">899.57</td>
<td class="dark_top amt">3.00</td>
<td class="dark_top amt">4.54</td>
<td class="gigatitle1 dark_top" style="text-align:center">
<!-- gg_paid_incoming_icon -->
<i class="fa fa-check" rel="tooltip" title="Paid"></i>
<!-- /gg_paid_incoming_icon -->
</td>
<td class="amt dark_top"><!-- gg_auth-reports_confirmations --><!-- gg_payment_detail_in_icon --><p href="javascript:preview_payment_in('32305727',28338330)"><i class="fa fa-info-circle muted" rel="tooltip" title="View payment confirmation"></i></p><!-- /gg_payment_detail_in_icon --><!-- /gg_auth-reports_confirmations --></td>
<!-- gg_approve_payments -->
<td class="dark_top"><label class="radio"><input type="radio" value="ignore" name="approve_payment_28338330" class="skip_approval" checked="checked"> Skip</label>
<!-- gg_ch_approve_28338330 -->
<!-- gg_auth-approve_payments -->
<label class="radio"><input type="radio" value="approve" name="approve_payment_28338330" class="approve_payment"> Approve</label>
<!-- /gg_auth-approve_payments -->
<!-- /gg_ch_approve_28338330 -->
<!-- gg_ch_reject_28338330 -->
<!-- gg_auth-reject_payments -->
<label class="radio"><input type="radio" value="reject" name="approve_payment_28338330"> Reject</label>
<!-- /gg_auth-reject_payments -->
<!-- /gg_ch_reject_28338330 -->
</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_in -->
<!-- gg_out -->
<tr class="out">
<td>&nbsp;</td>
<td>2019-04-04</td>
<td style="white-space:nowrap">- Contractor</td>
<td>
<p href="gigac.cgi?cmd=c_generate_report&amp;fact=1&amp;ben_id=492031&amp;fact_format=html&amp;fact_report=all_payments&amp;ben_type=B&amp;project_id=355962&amp;dates=custom&amp;start_date=2019-03-30&amp;end_date=2019-04-05&amp;what_date=">
<i class="fa fa-sort muted" rel="tooltip" title="Filter on this beneficiary and property"></i>
</p>
<!-- gg_ben_url -->
<p rel="tooltip" title="Go to the overview page" href="/c/beneficiary/492031">
<!-- /gg_ben_url -->
BM DIRKSE CLEANING SERVICES
<!-- gg_ben_url -->
</p>
<!-- /gg_ben_url -->
<!-- gg_ben_description -->
<small><span class="muted"> - INV - DEEP CLEAN OF APARMENT</span></small>
<!-- /gg_ben_description -->
</td>
<td>&nbsp;</td>
<td style="white-space:nowrap" class="amt">899.57
<!-- gg_part_of -->
<br>
<small><span style="color:#ee3124;">Total: 900.00</span></small>
<!-- /gg_part_of -->
</td>
<td class="amt">3.75</td>
<td class="amt">0.00</td>
<td class="" style="text-align:center">
<!-- gg_approval_icon -->
<i class="fa fa-lock" rel="tooltip" title="Approval required"></i>
<!-- /gg_approval_icon -->
</td>
<td class="amt">
<!-- gg_auth-reports_confirmations -->
&nbsp;
<!-- /gg_auth-reports_confirmations -->
</td>
<!-- gg_approve_payments -->
<td style="text-align:right; vertical-align:top; white-space:nowrap;">&nbsp;</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_out -->
<!-- gg_totals -->
<tr class="in">
<td colspan="4"><strong>Total in</strong></td><td>&nbsp;</td>
<td class="amount">109,981.53</td>
<td class="amount">78.75</td>
<td class="amount">554.74</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<!-- gg_approve_payments -->
<td>&nbsp;</td>
<!-- /gg_approve_payments -->
</tr>
<tr>
<td colspan="4"><strong>Total out</strong></td>
<td>&nbsp;</td>
<td class="amount">109,981.53</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<!-- gg_approve_payments -->
<td>&nbsp;</td>
<!-- /gg_approve_payments -->
</tr>
<tr class="totals">
<td colspan="4">Total commission</td>
<td>&nbsp;</td>
<td class="amt">16,288.30</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<!-- gg_approve_payments -->
<td>&nbsp;</td>
<!-- /gg_approve_payments -->
</tr>
<!-- /gg_totals -->
</tbody></table>


`;
//------------------------------------------
var inv_cred_deb =`
<table class="table table-condensed">
<thead>
<tr class="heading">
<th class="span3">Property</th>
<th class="span1">Date</th>
<th class="span1">Type</th>
<th class="span1"></th>
<th class="span4">Tenant / Description</th>
<th class="span1 amount">Amount</th>
<th class="span1 amount" style='width:100px'>Ref no</th>
</tr>
</thead>
<!-- gg_item_property -->
<!--<tr class="big">
<th colspan="6">
<p title="View the overview page for $property_name" href="/c/property/$project_id">
$property_name
</p>
</th>
</tr>-->
<!-- /gg_item_property -->
<tbody><tr>
<td>
<!-- gg_remove_prop_name -->
<p rel="tooltip" title="View the property overview page" href="/c/property/255906"> M-S287 - 23 STRATHMORE ROAD</p>
<!-- /gg_remove_prop_name -->
</td>
<td style="white-space:nowrap">2019-03-01</td>
<td nowrap=""><span style="color:$color;">Invoice</span></td>
<td nowrap="">Rent</td>
<td><p rel="tooltip" title="View the tenant overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=557701">FERNANDO ACAFRAO</p><small><span class="muted"> - MONTHLY RENT</span></small></td>
<td class="amt">35,000.00</td>
<td class="amt"><p class="btn btn-mini" title="Download PDF" rel="tooltip" href="/c/print/invoice?cid=27682689">27682689</p></td>
</tr>
<tr>
<td>
<!-- gg_remove_prop_name -->
<p rel="tooltip" title="View the property overview page" href="/c/property/54761">M-A088 - 19 ALBANY COURT</p>
<!-- /gg_remove_prop_name -->
</td>
<td style="white-space:nowrap">2019-03-01</td>
<td nowrap=""><span style="color:$color;">Invoice</span></td>
<td nowrap="">Rent</td>
<td><p rel="tooltip" title="View the tenant overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=756000">ZENOBIA MARCIA SAAIJMAN &amp; JEAN-PIERRE BOTHA</p><small><span class="muted"> - MONTHLY RENTAL </span></small></td>
<td class="amt">9,500.00</td>
<td class="amt"><p class="btn btn-mini" title="Download PDF" rel="tooltip" href="/c/print/invoice?cid=27682770">27682770</p></td>
</tr>
<tr>
<td>
</td>
<td style="white-space:nowrap">2019-04-01</td>
<td nowrap=""><span style="color:$color;">Invoice</span></td>
<td nowrap="">Rent</td>
<td><p rel="tooltip" title="View the tenant overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=756000">ZENOBIA MARCIA SAAIJMAN &amp; JEAN-PIERRE BOTHA</p><small><span class="muted"> - MONTHLY RENTAL </span></small></td>
<td class="amt">9,500.00</td>
<td class="amt"><p class="btn btn-mini" title="Download PDF" rel="tooltip" href="/c/print/invoice?cid=28123931">28123931</p></td>
</tr>
<tr>
<td>
<!-- gg_remove_prop_name -->
<p rel="tooltip" title="View the property overview page" href="/c/property/230180">M-A157 - A4 ALMA COURT</p>
<!-- /gg_remove_prop_name -->
</td>
<td style="white-space:nowrap">2019-03-01</td>
<td nowrap=""><span style="color:$color;">Invoice</span></td>
<td nowrap="">Rent</td>
<td><p rel="tooltip" title="View the tenant overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=709133">MONIQUE SMORENBURG</p><small><span class="muted"> - MONTHLY RENTAL </span></small></td>
<td class="amt">12,000.00</td>
<td class="amt"><p class="btn btn-mini" title="Download PDF" rel="tooltip" href="/c/print/invoice?cid=27682822">27682822</p></td>
</tr>
<tr>
<td>
</td>
<td style="white-space:nowrap">2019-04-01</td>
<td nowrap=""><span style="color:$color;">Invoice</span></td>
<td nowrap="">Rent</td>
<td><p rel="tooltip" title="View the tenant overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=709133">MONIQUE SMORENBURG</p><small><span class="muted"> - MONTHLY RENTAL </span></small></td>
<td class="amt">12,000.00</td>
<td class="amt"><p class="btn btn-mini" title="Download PDF" rel="tooltip" href="/c/print/invoice?cid=28123988">28123988</p></td>
</tr>
<tr>
<td>
<!-- gg_remove_prop_name -->
<p rel="tooltip" title="View the property overview page" href="/c/property/171082">M-A175 - 406 ALBEMARLE</p>
<!-- /gg_remove_prop_name -->
</td>
<td style="white-space:nowrap">2019-03-01</td>
<td nowrap=""><span style="color:$color;">Invoice</span></td>
<td nowrap="">Rent</td>
<td><p rel="tooltip" title="View the tenant overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=670250">JAN BAREND BOTHA</p><small><span class="muted"> - MONTHLY RENTAL </span></small></td>
<td class="amt">16,500.00</td>
<td class="amt"><p class="btn btn-mini" title="Download PDF" rel="tooltip" href="/c/print/invoice?cid=27682810">27682810</p></td>
</tr>
<tr>
<td>
</td>
<td style="white-space:nowrap">2019-04-01</td>
<td nowrap=""><span style="color:$color;">Invoice</span></td>
<td nowrap="">Rent</td>
<td><p rel="tooltip" title="View the tenant overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=670250">JAN BAREND BOTHA</p><small><span class="muted"> - MONTHLY RENTAL </span></small></td>
<td class="amt">16,500.00</td>
<td class="amt"><p class="btn btn-mini" title="Download PDF" rel="tooltip" href="/c/print/invoice?cid=28123973">28123973</p></td>
</tr>
<tr>
<td>
<!-- gg_remove_prop_name -->
<p rel="tooltip" title="View the property overview page" href="/c/property/334326">M-A213 - 64 AMBASSADOR</p>
<!-- /gg_remove_prop_name -->
</td>
<td style="white-space:nowrap">2019-03-01</td>
<td nowrap=""><span style="color:$color;">Invoice</span></td>
<td nowrap="">Rent</td>
<td><p rel="tooltip" title="View the tenant overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=752299">JEAN-ERIC LEBLANC</p><small><span class="muted"> - MONTHLY RENTAL </span></small></td>
<td class="amt">13,500.00</td>
<td class="amt"><p class="btn btn-mini" title="Download PDF" rel="tooltip" href="/c/print/invoice?cid=27682719">27682719</p></td>
</tr>
<tr>
<td>
</td>
<td style="white-space:nowrap">2019-03-22</td>
<td nowrap=""><span style="color:$color;">Invoice</span></td>
<td nowrap="">Water &amp; Electricity</td>
<td><p rel="tooltip" title="View the tenant overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=752299">JEAN-ERIC LEBLANC</p><small><span class="muted"> - ELECTRICITY (14/02/19 - 13/03/19)</span></small></td>
<td class="amt">828.29</td>
<td class="amt"><p class="btn btn-mini" title="Download PDF" rel="tooltip" href="/c/print/invoice?cid=28029921">28029921</p></td>
</tr>
<tr>
<td>
</td>
<td style="white-space:nowrap">2019-04-01</td>
<td nowrap=""><span style="color:$color;">Invoice</span></td>
<td nowrap="">Rent</td>
<td><p rel="tooltip" title="View the tenant overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=752299">JEAN-ERIC LEBLANC</p><small><span class="muted"> - MONTHLY RENTAL </span></small></td>
<td class="amt">13,500.00</td>
<td class="amt"><p class="btn btn-mini" title="Download PDF" rel="tooltip" href="/c/print/invoice?cid=28123882">28123882</p></td>
</tr>
<tr>
<td>
<!-- gg_remove_prop_name -->
<p rel="tooltip" title="View the property overview page" href="/c/property/333633">M-A214 - 204 AMALFI</p>
<!-- /gg_remove_prop_name -->
</td>
<td style="white-space:nowrap">2019-03-01</td>
<td nowrap=""><span style="color:$color;">Invoice</span></td>
<td nowrap="">Rent</td>
<td><p rel="tooltip" title="View the tenant overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=749953">GEORGIA TSAPOGAS</p><small><span class="muted"> - MONTHLY RENTAL </span></small></td>
<td class="amt">20,000.00</td>
<td class="amt"><p class="btn btn-mini" title="Download PDF" rel="tooltip" href="/c/print/invoice?cid=27682720">27682720</p></td>
</tr>
<tr>
<td>
</td>
<td style="white-space:nowrap">2019-04-01</td>
<td nowrap=""><span style="color:$color;">Invoice</span></td>
<td nowrap="">Rent</td>
<td><p rel="tooltip" title="View the tenant overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=749953">GEORGIA TSAPOGAS</p><small><span class="muted"> - MONTHLY RENTAL </span></small></td>
<td class="amt">20,000.00</td>
<td class="amt"><p class="btn btn-mini" title="Download PDF" rel="tooltip" href="/c/print/invoice?cid=28123883">28123883</p></td>
</tr>
<tr>
<td>
<!-- gg_remove_prop_name -->
<p rel="tooltip" title="View the property overview page" href="/c/property/352148">M-A220 - 304 ALEXANDER HILL</p>
<!-- /gg_remove_prop_name -->
</td>
<td style="white-space:nowrap">2019-03-01</td>
<td nowrap=""><span style="color:$color;">Invoice</span></td>
<td nowrap="">Rent</td>
<td><p rel="tooltip" title="View the tenant overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=806822">RINETTE SAMANTHA BURGER &amp; GERT JOHANNES GOOSEN</p><small><span class="muted"> - RENT - MARCH 2019</span></small></td>
<td class="amt">13,000.00</td>
<td class="amt"><p class="btn btn-mini" title="Download PDF" rel="tooltip" href="/c/print/invoice?cid=27750544">27750544</p></td>
</tr>
<tr>
<td>
</td>
<td style="white-space:nowrap">2019-03-18</td>
<td nowrap=""><span style="color:$color;">Invoice</span></td>
<td nowrap="">Water &amp; Electricity</td>
<td><p rel="tooltip" title="View the tenant overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=806822">RINETTE SAMANTHA BURGER &amp; GERT JOHANNES GOOSEN</p><small><span class="muted"> - ELECTRICITY (19/01/19 - 19/02/19)</span></small></td>
<td class="amt">327.91</td>
<td class="amt"><p class="btn btn-mini" title="Download PDF" rel="tooltip" href="/c/print/invoice?cid=28000350">28000350</p></td>
</tr>
<tr>
<td>
</td>
<td style="white-space:nowrap">2019-04-01</td>
<td nowrap=""><span style="color:$color;">Invoice</span></td>
<td nowrap="">Rent</td>
<td><p rel="tooltip" title="View the tenant overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=806822">RINETTE SAMANTHA BURGER &amp; GERT JOHANNES GOOSEN</p><small><span class="muted"> - MONTHLY RENTAL </span></small></td>
<td class="amt">13,000.00</td>
<td class="amt"><p class="btn btn-mini" title="Download PDF" rel="tooltip" href="/c/print/invoice?cid=28123992">28123992</p></td>
</tr>
<tr>
<td>
<!-- gg_remove_prop_name -->
<p rel="tooltip" title="View the property overview page" href="/c/property/59789">M-B076 - 61 BELLEVUE STREET</p>
<!-- /gg_remove_prop_name -->
</td>
<td style="white-space:nowrap">2019-03-04</td>
<td nowrap=""><span style="color:$color;">Debit note</span></td>
<td nowrap="">Other</td>
<td><p rel="tooltip" title="View the tenant overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=675178">ROMAIN BUISSON</p><small><span class="muted"> - ROUNDING OFF</span></small></td>
<td class="amt">0.04</td>
<td class="amt"><p class="btn btn-mini" title="Download PDF" rel="tooltip" href="/c/print/invoice?cid=27891875">27891875</p></td>
</tr>
<tr>
<td>
<!-- gg_remove_prop_name -->
<p rel="tooltip" title="View the property overview page" href="/c/property/70683">M-B147 - 15 BLACKROCK</p>
<!-- /gg_remove_prop_name -->
</td>
<td style="white-space:nowrap">2019-03-01</td>
<td nowrap=""><span style="color:$color;">Invoice</span></td>
<td nowrap="">Rent</td>
<td><p rel="tooltip" title="View the tenant overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=599320">ANNA-MARIE SMIT</p><small><span class="muted"> - MONTHLY RENTAL </span></small></td>
<td class="amt">17,700.00</td>
<td class="amt"><p class="btn btn-mini" title="Download PDF" rel="tooltip" href="/c/print/invoice?cid=27682721">27682721</p></td>
</tr>
<tr>
<td>
</td>
<td style="white-space:nowrap">2019-03-15</td>
<td nowrap=""><span style="color:$color;">Credit note</span></td>
<td nowrap="">Other</td>
<td><p rel="tooltip" title="View the tenant overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=599320">ANNA-MARIE SMIT</p><small><span class="muted"> - INV113098 - UNBLOCKED THE KITCHEN SINK USING HAND PLUNGER &amp; 5L DEGREASER &amp; 1L DRAIN ACID TO FLUSH THE LINE.</span></small></td>
<td class="amt">-1,150.00</td>
<td class="amt"><p class="btn btn-mini" title="Download PDF" rel="tooltip" href="/c/print/invoice?cid=27985881">27985881</p></td>
</tr>
<tr>
<td>
</td>
<td style="white-space:nowrap">2019-03-25</td>
<td nowrap=""><span style="color:$color;">Invoice</span></td>
<td nowrap="">Water &amp; Electricity</td>
<td><p rel="tooltip" title="View the tenant overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=599320">ANNA-MARIE SMIT</p><small><span class="muted"> - ELECTRICITY (12/02/19 - 12/03/19)</span></small></td>
<td class="amt">836.96</td>
<td class="amt"><p class="btn btn-mini" title="Download PDF" rel="tooltip" href="/c/print/invoice?cid=28080042">28080042</p></td>
</tr>
<tr>
<td>
</td>
<td style="white-space:nowrap">2019-04-01</td>
<td nowrap=""><span style="color:$color;">Invoice</span></td>
<td nowrap="">Rent</td>
<td><p rel="tooltip" title="View the tenant overview page" href="gigac.cgi?cmd=c_tenant_view&amp;id=599320">ANNA-MARIE SMIT</p><small><span class="muted"> - MONTHLY RENTAL </span></small></td>
<td class="amt">17,700.00</td>
<td class="amt"><p class="btn btn-mini" title="Download PDF" rel="tooltip" href="/c/print/invoice?cid=28123884">28123884</p></td>
</tr>
</tbody></table>

`;
//------------------------------------------
var audi =`
<div class="row" style="z-index: 79920;">
<div class="span12" style="z-index: 79910;">

<form class="form-inline" method="get" action="gigac.cgi">


<select name="admin_id"><option value="">All users</option>
<option value="9856">Alessandro Pettenuzzo (46)</option>
<option value="1566">Ana Wolmarans (2)</option>
<option value="1571">ANGIE KELLY (4)</option>
<option value="1576">AYESHA PARKER (9)</option>
<option value="2497">BARAK TOMLIN (24)</option>
<option value="1570">BARBRA-ANN BRINER (3)</option>
<option value="10299">Barbra-Ann Briner (49)</option>
<option value="3559">BRYAN GINSBURG (33)</option>
<option value="1581">CAMPS BAY  RENTALS (14)</option>
<option value="13392">Catherine  Martin  (57)</option>
<option value="10250">Chantelle George (48)</option>
<option value="1578">CHARLES  BLOEM (11)</option>
<option value="6248">Charmaine Louw (43)</option>
<option value="3037">CHIPO CWANZURA (27)</option>
<option value="2152">Christine Ireland (21)</option>
<option value="3718">CRAIG WATCHURST (34)</option>
<option value="3065">DESIRE DE KLERK (29)</option>
<option value="0">Dinis Martins (main user)</option>
<option value="13150">Elana  Gild (54)</option>
<option value="2043">ELSA NAGEL (19)</option>
<option value="6107">Helen Dalton (42)</option>
<option value="5625">Henriette Galloway (38)</option>
<option value="13669">Janine  Adkins (59)</option>
<option value="2151">Jason Cohen (20)</option>
<option value="7485">Jessica Cramb (44)</option>
<option value="4067">JP RICKETTS (35)</option>
<option value="1577">JULES ARNOTT (10)</option>
<option value="6054">Karyn Farrell (41)</option>
<option value="1582">KASIA WATCHURST (15)</option>
<option value="5265">Kevin Mc Bain (37)</option>
<option value="3558">LIOR WITZ (32)</option>
<option value="10218">Madeleine Marks (47)</option>
<option value="1598">Melanie Botha (16)</option>
<option value="1579">MICHELLE LIEBENBERG (12)</option>
<option value="13153">Natalie Muller (55)</option>
<option value="2591">PASCALE PAPAS (26)</option>
<option value="13154">Ray Van Der Merwe (56)</option>
<option value="1532">Rouxle Marais (1)</option>
<option value="1574">RUPERT VON TUTSCHEK (7)</option>
<option value="5805">Samantha  Murphy (39)</option>
<option value="1573">SAMANTHA MURPHY (6)</option>
<option value="11306">Sharon Kayster (51)</option>
<option value="3052">SHARON MURPHY (28)</option>
<option value="5914">Tamar Cheerin (40)</option>
<option value="1607">Taryn Fredericks (17)</option>
<option value="7979">Tina Arendse (45)</option>
<option value="5160">Urszula  Holtzer (36)</option>
</select>

</form>
<table class="table table-condensed">
<thead>
<tr>
<th>Item</th>
<th style="text-align:center">Count</th>
<th>Action</th>
</tr>
</thead>
<tbody><tr>
<td class="span3"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=beneficiary&amp;id=&amp;admin_id=">Beneficiaries</p></td>
<td style="text-align:center" class="span1"><span class="badge">2</span></td>
<td class="span8"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=beneficiary&amp;action=create&amp;admin_id=&amp;id=">Create (1)</p>, <p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=beneficiary&amp;action=update&amp;admin_id=&amp;id=">Update (1)</p></td>
</tr>
<tr>
<td class="span3"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=tenant&amp;id=&amp;admin_id=">Tenants</p></td>
<td style="text-align:center" class="span1"><span class="badge">1</span></td>
<td class="span8"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=tenant&amp;action=create&amp;admin_id=&amp;id=">Create (1)</p></td>
</tr>
<tr>
<td class="span3"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=future_invoice&amp;id=&amp;admin_id=">Ad hoc (future dated) invoices</p></td>
<td style="text-align:center" class="span1"><span class="badge">6</span></td>
<td class="span8"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=future_invoice&amp;action=create&amp;admin_id=&amp;id=">Create (5)</p>, <p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=future_invoice&amp;action=delete&amp;admin_id=&amp;id=">Delete (1)</p></td>
</tr>
<tr>
<td class="span3"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=credit_note&amp;id=&amp;admin_id=">Credit notes</p></td>
<td style="text-align:center" class="span1"><span class="badge">2</span></td>
<td class="span8"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=credit_note&amp;action=create&amp;admin_id=&amp;id=">Create (2)</p></td>
</tr>
<tr>
<td class="span3"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=damage_deposit&amp;id=&amp;admin_id=">Damage deposit payout requests</p></td>
<td style="text-align:center" class="span1"><span class="badge">1</span></td>
<td class="span8"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=damage_deposit&amp;action=create&amp;admin_id=&amp;id=">Create (1)</p></td>
</tr>
<tr>
<td class="span3"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=debit_note&amp;id=&amp;admin_id=">Debit notes</p></td>
<td style="text-align:center" class="span1"><span class="badge">1</span></td>
<td class="span8"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=debit_note&amp;action=create&amp;admin_id=&amp;id=">Create (1)</p></td>
</tr>
<tr>
<td class="span3"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=reconcile&amp;id=&amp;admin_id=">Direct deposit reconciliations</p></td>
<td style="text-align:center" class="span1"><span class="badge">35</span></td>
<td class="span8"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=reconcile&amp;action=create&amp;admin_id=&amp;id=">Create (31)</p>, <p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=reconcile&amp;action=delete&amp;admin_id=&amp;id=">Delete (4)</p></td>
</tr>
<tr>
<td class="span3"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=file&amp;id=&amp;admin_id=">File management</p></td>
<td style="text-align:center" class="span1"><span class="badge">1</span></td>
<td class="span8"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=file&amp;action=create&amp;admin_id=&amp;id=">Create (1)</p></td>
</tr>
<tr>
<td class="span3"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=invoice&amp;id=&amp;admin_id=">Invoices</p></td>
<td style="text-align:center" class="span1"><span class="badge">5</span></td>
<td class="span8"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=invoice&amp;action=create&amp;admin_id=&amp;id=">Create (1)</p>, <p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=invoice&amp;action=delete&amp;admin_id=&amp;id=">Delete (2)</p>, <p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=invoice&amp;action=update&amp;admin_id=&amp;id=">Update (2)</p></td>
</tr>
<tr>
<td class="span3"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=note&amp;id=&amp;admin_id=">Notes</p></td>
<td style="text-align:center" class="span1"><span class="badge">1</span></td>
<td class="span8"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=note&amp;action=update&amp;admin_id=&amp;id=">Update (1)</p></td>
</tr>
<tr>
<td class="span3"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=payment_approval&amp;id=&amp;admin_id=">Payment approvals/rejections</p></td>
<td style="text-align:center" class="span1"><span class="badge">22</span></td>
<td class="span8"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=payment_approval&amp;action=approve&amp;admin_id=&amp;id=">Approve (20)</p>, <p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=payment_approval&amp;action=ApproveDeposit&amp;admin_id=&amp;id=">Approve deposit (1)</p>, <p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=payment_approval&amp;action=reject&amp;admin_id=&amp;id=">Reject (1)</p></td>
</tr>
<tr>
<td class="span3"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=payment&amp;id=&amp;admin_id=">Payments</p></td>
<td style="text-align:center" class="span1"><span class="badge">44</span></td>
<td class="span8"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=payment&amp;action=create&amp;admin_id=&amp;id=">Create (11)</p>, <p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=payment&amp;action=delete&amp;admin_id=&amp;id=">Delete (2)</p>, <p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=payment&amp;action=update&amp;admin_id=&amp;id=">Update (31)</p></td>
</tr>
<tr>
<td class="span3"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=reminder&amp;id=&amp;admin_id=">Reminders</p></td>
<td style="text-align:center" class="span1"><span class="badge">17</span></td>
<td class="span8"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=reminder&amp;action=complete&amp;admin_id=&amp;id=">Complete (5)</p>, <p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=reminder&amp;action=create&amp;admin_id=&amp;id=">Create (9)</p>, <p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=reminder&amp;action=update&amp;admin_id=&amp;id=">Update (3)</p></td>
</tr>
<tr>
<td class="span3"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=users&amp;id=&amp;admin_id=">Users &amp; permissions</p></td>
<td style="text-align:center" class="span1"><span class="badge">58</span></td>
<td class="span8"><p href="gigac.cgi?cmd=c_auditlog&amp;from_date=2019-04-04&amp;to_date=2019-04-04&amp;item_id=users&amp;action=login&amp;admin_id=&amp;id=">Login (58)</p></td>
</tr>
</tbody></table>
</div>
</div>`;
//------------------------------------------
//------------------------------------------
//------------------------------------------
//------------------------------------------
//------------------------------------------
//------------------------------------------
//



exports.str_portfolioGrowth = str_portfolioGrowth;
exports.str_incomeGrowth = str_incomeGrowth;
exports.str2 = str2;
exports.htmlStr = htmlStr;
exports.htmstr_bulma=htmstr_bulma;

exports.res_trainingMan=res_trainingMan;
exports.res_Lease=res_Lease;
exports.res_other=res_other;

exports.PaymentsToApprove =PaymentsToApprove;
exports.inv_cred_deb=inv_cred_deb;
exports.audi=audi;
