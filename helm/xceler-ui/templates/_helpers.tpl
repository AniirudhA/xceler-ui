{{- define "xceler-ui.name" -}}
xceler-ui
{{- end }}

{{- define "xceler-ui.labels" -}}
app: {{ include "xceler-ui.name" . }}
{{- end }}
