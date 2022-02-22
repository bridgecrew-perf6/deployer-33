/// <reference types="react-scripts" />
type Page = {
	name: string;
	linkTo: string;
};

type Crumbs = {
  prevs: Page[]
  current: Page
}

type KV = {
  key: string;
  value: string;
}

type HttpGet = {
  path: string;
  port: number;
  scheme: string;
}

type Probe = {
  failureThreshold: number;
  initialDelaySeconds: number;
  periodSeconds: number;
  successThreshold: number;
  timeoutSeconds: number;
  httpGet: HttpGet;
}

type Port = {
  containerPort: number;
  name?: string;
  protocol?: string;
}

type Env = {
  name: string;
  value?: string;
  valueFrom?: {
    secretKeyRef: {
      name: string;
      key: string;
    }
  }
}

type ConfigMapRef = {
  name: string;
}

type Container = {
  name: string;
  image: string;
  imagePullPolicy?: string;
  args?: string[];
  resources?: {
    limits: {
      memory: number;
      cpu: number;
    },
    requests: {
      memory: number;
      cpu: number;
    }
  },
  ports: Port[];
  livenessProbe?: Probe;
  readinessProbe?: Probe;
  env?: Env[];
  envFrom?: ConfigMapRef[];
}
