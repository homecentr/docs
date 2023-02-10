export const SITE = {
	title: 'Homecentr',
	description: 'Your website description.',
	defaultLanguage: 'en-us',
} as const;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type SidebarSection = {
	header: string
	children: SidebarSectionLink[]
	hasIcons?: boolean
}

export type SidebarSectionLink = {
	text: string
	link: string
	icon?: string
}

export type Sidebar = SidebarSection[]

export const SIDEBAR: Sidebar =
	[{
		header: "Selfhosted",
		children: ([
			{ text: 'Argo CD', link: 'selfhosted/argo-cd', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/argocd.png' },
			{ text: 'Proxmox VE', link: 'selfhosted/proxmox-ve', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/proxmox.png' },
			{ text: 'Kubernetes', link: 'selfhosted/kubernetes', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/kubernetes-dashboard.png' },
			{ text: 'K8s Dashboard', link: 'selfhosted/kubernetes-dashboard', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/kubernetes-dashboard.png' },
			{ text: 'Unifi Controller', link: 'selfhosted/unifi-controller', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/unifi.png' },
			{ text: 'Home Assistant', link: 'selfhosted/home-assistant', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/home-assistant.png' },
			{ text: 'CoreDNS', link: 'selfhosted/coredns', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/coredns.png' },
			{ text: 'Frigate', link: 'selfhosted/frigate', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/frigate.png' },
			{ text: 'rClone', link: 'selfhosted/rclone', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/rclone.png' },
			{ text: 'Loki', link: 'selfhosted/loki', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/loki.png' },
			{ text: 'Grafana', link: 'selfhosted/grafana', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/grafana.png' },
			{ text: 'Prometheus', link: 'selfhosted/prometheus', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/prometheus.png' },
			{ text: 'Nextcloud', link: 'selfhosted/nextcloud', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/nextcloud.png' },
			{ text: 'qBittorrent', link: 'selfhosted/qbittorrent', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/qbittorrent.png' },
			{ text: 'Snipe IT', link: 'selfhosted/snipeit', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/snipe-it.png' },
			{ text: 'Netboot.xyz', link: 'selfhosted/netboot', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/netbootxyz.png' },
			{ text: 'Pyload', link: 'selfhosted/pyload', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/pyload.png' },
			{ text: 'Homepage', link: 'selfhosted/homepage', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/homepage.png' },
			{ text: 'Plex', link: 'pley/selfhosted', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/plex.png' },
			{ text: 'Cloudflare Tunnel', link: 'selfhosted/cloudflare-tunnel', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/cloudflare-zero-trust.png' },
			{ text: 'Wazuh', link: 'selfhosted/wazuh', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/wazuh.png' },
			{ text: 'Elastic Search', link: 'selfhosted/elastic-search', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/elasticsearch.png' },
			{ text: 'Firefly', link: 'selfhosted/firefly', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/firefly.png' },
			{ text: 'Photoview', link: 'selfhosted/photoview', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/photoview.png' },
			{ text: 'CyberChef', link: 'selfhosted/cyberchef', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/cyberchef.png' },
			{ text: 'Gluster', link: 'selfhosted/gluster', icon: '/icons/gluster.png' },
			{ text: 'Pomerium', link: 'selfhosted/pomerium', icon: '/icons/pomerium.png' },
			{ text: 'Gitpod', link: 'selfhosted/gitpod', icon: '/icons/gitpod.png' },
			{ text: 'DHCP', link: 'selfhosted/dhcp', icon: '/icons/dhcp.png' },
			{ text: 'Cert Manager', link: 'selfhosted/cert-manager', icon: '/icons/cert-manager.png' },
			{ text: 'Mosquitto', link: 'selfhosted/mosquitto', icon: '/icons/mosquitto.png' },
			{ text: 'OpenSMTPD', link: 'selfhosted/opensmtpd', icon: '/icons/opensmtpd.png' },
			{ text: 'Network UPS Tools', link: 'selfhosted/nut', icon: '/icons/nut.png' },
			// node problem detector + remediation app
		]).sort((a, b) => a.text.localeCompare(b.text))
	},
	{
		header: "Cloud",
		children: ([
			{ text: 'Azure Active Directory', link: 'cloud/azure-active-directory', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/azure.png' },
			{ text: 'Cloudflare', link: 'cloud/cloudflare', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/cloudflare.png' },
			{ text: 'PagerDuty', link: 'cloud/pagerduty', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/pagerduty.png' },
			{ text: 'SendGrid', link: 'cloud/sendgrid', icon: '/icons/sendgrid.png' },
			{ text: 'Backblaze B2', link: 'cloud/backblaze-b2', icon: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/backblaze.png' },
		]).sort((a, b) => a.text.localeCompare(b.text))
	},
	{
		header: "Hardware",
		children: [
			{ text: 'Yubikey 5 NFC', link: 'hardware/yubikey', icon: '/icons/yubico.png' },
			{ text: 'Dell Poweredge R530', link: 'hardware/dell-poweredge-r530', icon: '/icons/dell.png' },
			{ text: 'Dell Poweredge R510', link: 'hardware/dell-poweredge-r510', icon: '/icons/dell.png' },
			{ text: 'HP EliteDesk 800 G1', link: 'hardware/hp-elitedesktop-800-g1', icon: '/icons/hp.png' },
			{ text: 'Ubiquiti USG-PRO4', link: 'hardware/ubiquiti-usg-pro4', icon: '/icons/ubiquiti.png' },
			{ text: 'Ubiquiti US-24', link: 'hardware/ubiquiti-us-24', icon: '/icons/ubiquiti.png' },
			{ text: 'Ubiquiti US-8-150W', link: 'hardware/ubiquiti-us-8-150w', icon: '/icons/ubiquiti.png' },
			{ text: 'TP-Link ...', link: 'hardware/tp-link-...', icon: '/icons/tplink.png' },
			{ text: 'Eaton 5E 1100/1500i USB', link: 'hardware/eaton-5e-usb-ups', icon: '/icons/eaton.png' },
		]
	}];
