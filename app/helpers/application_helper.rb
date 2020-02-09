# frozen_string_literal: true

module ApplicationHelper
  def entrypoint_name(controller)
    action_name = controller.action_name.to_sym
    entrypoint_basename = case action_name
                          when :create then :new
                          when :update then :edit
                          else
                            action_name
                          end
    "#{controller.controller_name}/#{entrypoint_basename}"
  end

  def javascript_packs_with_chunks_tag(*names, **options)
    javascript_include_tag(
      *sources_from_manifest_entrypoints(names, extname: 'js'),
      **options
    )
  end

  def stylesheet_packs_with_chunks_tag(*names, **options)
    stylesheet_link_tag(
      *sources_from_manifest_entrypoints(names, extname: 'css'),
      **options
    )
  end

  private

  def sources_from_manifest_entrypoints(names, extname:)
    names
      .flat_map { |name| simpacker_context.manifest.lookup('entrypoints', name, extname) }
      .compact
      .uniq
  end
end
