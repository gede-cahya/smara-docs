import DocPage from "../../components/DocPage";

export default function SSH() {
  return (
    <DocPage
      title="SSH Remote"
      description="Execute commands, manage files, and run agents on remote machines via SSH/SFTP."
    >
      <h2 className="text-lg font-semibold text-smara-text mt-6 mb-2">Overview</h2>
      <p className="text-sm text-smara-muted mb-4">
        Smara CLI includes built-in SSH remote control tools that allow agents to manage VPS, servers, and remote development environments directly from the terminal.
      </p>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Configuration</h2>
      <p className="text-sm text-smara-muted mb-3">
        Add SSH hosts to your <code className="bg-smara-card px-1.5 py-0.5 rounded text-xs">smara.yaml</code>:
      </p>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`ssh:
  hosts:
    - name: prod-server
      host: 203.0.113.10
      user: deploy
      port: 22
      key_path: ~/.ssh/id_rsa
    - name: dev-vm
      host: 192.168.1.50
      user: ubuntu
      port: 2222
      password: env:DEV_VM_PASSWORD`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Remote Execution</h2>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`smara ssh exec prod-server -- "docker ps"
smara ssh exec dev-vm -- "systemctl status nginx"
smara ssh shell prod-server      # Interactive shell`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">File Transfer</h2>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`smara ssh upload prod-server ./local.tar.gz /opt/app/
smara ssh download prod-server /var/log/nginx.log ./logs/
smara ssh sync dev-vm ./src/ /home/ubuntu/project/ --delete`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Agent Tools</h2>
      <p className="text-sm text-smara-muted mb-3">
        When in Rush or Plan mode, Smara agents can use these built-in tools automatically:
      </p>
      <ul className="list-disc list-inside text-sm text-smara-muted space-y-1 mb-4">
        <li><code className="bg-smara-card px-1.5 py-0.5 rounded text-xs">ssh_exec</code> — Execute arbitrary commands on remote hosts</li>
        <li><code className="bg-smara-card px-1.5 py-0.5 rounded text-xs">ssh_view_file</code> — Read remote files into agent context</li>
        <li><code className="bg-smara-card px-1.5 py-0.5 rounded text-xs">ssh_list_dir</code> — Browse remote directory structures</li>
        <li><code className="bg-smara-card px-1.5 py-0.5 rounded text-xs">ssh_upload_file</code> — Transfer files to remote</li>
        <li><code className="bg-smara-card px-1.5 py-0.5 rounded text-xs">ssh_download_file</code> — Retrieve files from remote</li>
      </ul>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Security</h2>
      <p className="text-sm text-smara-muted mb-4">
        All SSH connections use your local SSH agent or configured keys. Passwords can be stored via environment variables. Every remote action is logged in the audit trail with host, command, and timestamp.
      </p>
    </DocPage>
  );
}
