# Copyright (c) 2007-2009 gocept gmbh & co. kg
# See also LICENSE.txt

import zeit.cms.browser.form
import zeit.wysiwyg.interfaces
import zope.app.pagetemplate.viewpagetemplatefile
import zope.formlib.form


class EditForm(zeit.cms.browser.form.EditForm):

    template = zope.formlib.namedtemplate.NamedTemplate('sourceedit_form')
    additional_information = (
        zope.app.pagetemplate.viewpagetemplatefile.ViewPageTemplateFile(
            'header.pt'))

    form_fields = zope.formlib.form.Fields(
        zeit.wysiwyg.interfaces.IHTMLContent,
        render_context=True)


    @property
    def metadata(self):
        return zeit.cms.content.interfaces.ICommonMetadata(self.context)