<?php
# MetInfo Enterprise Content Management System 
# Copyright (C) MetInfo Co.,Ltd (http://www.metinfo.cn). All rights reserved. 

defined('IN_MET') or exit('No permission');

load::sys_class('admin');
load::sys_func('array');

class key_login extends web {//һ����¼����

	function __construct(){
		parent::__construct();
	}
	
	public function dologin(){
		global $_M;
		$_M['form']['metmd5'] = ''//�Զ���¼���𴮣��ɷ���������
		if(1){//��curlģ��Զ�̷��ʷ�����http://account.metinfo.cn/keylogin/md5check
			//$_M['form']['loginpass']�������������ڵ�½���û���̨���˺�����MD5����md5(md5(admin123456))
			//��֤�˺ţ�������е�½
		}
	}
	
	public function dotestlogin(){
		global $_M;
		$_M['form']['metmd5'] = ''//�Զ���¼���𴮣��ɷ���������
		if(1){//��curlģ��Զ�̷��ʷ�����http://account.metinfo.cn/keylogin/md5check
			//$_M['form']['loginpass']�������������ڵ�½���û���̨���˺�����MD5����md5(md5(admin123456))
			//��֤�˺����롣��ȷ���ذ󶨳ɹ�,�ɹ����1��ʧ�����0
		}
	}
	
}


# This program is an open source system, commercial use, please consciously to purchase commercial license.
# Copyright (C) MetInfo Co., Ltd. (http://www.metinfo.cn). All rights reserved.
?>