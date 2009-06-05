# Copyright (c) 2007-2009 gocept gmbh & co. kg
# See also LICENSE.txt

from zope.testing import doctest
import os
import re
import unittest
import zeit.cms.testing
import zope.app.testing.functional
import zope.testing.renormalizing


WYSIWYGLayer = zope.app.testing.functional.ZCMLLayer(
    os.path.join(os.path.dirname(__file__), 'ftesting.zcml'),
    __name__, 'WYSIWYGLayer', allow_teardown=True)


def test_suite():
    suite = unittest.TestSuite()
    suite.addTest(zeit.cms.testing.FunctionalDocFileSuite(
        'html.txt',
        layer=WYSIWYGLayer))
    return suite